import { useState } from "react";
import { ArrowRight, User, Phone, Calendar, Award, FileText, CheckCircle, GraduationCap, Building, ShieldCheck, Download, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { marksAPI } from "../lib/api";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import toast from "react-hot-toast";
const logo = "/logo-1_transparent.jpg.jpeg";

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    const day = String(d.getUTCDate()).padStart(2, "0");
    const month = String(d.getUTCMonth() + 1).padStart(2, "0");
    const year = d.getUTCFullYear();
    return `${day}-${month}-${year}`;
  } catch (e) {
    return dateStr;
  }
};

const parseDDMMYYYY = (str) => {
  if (!str) return null;
  const cleanStr = str.replace(/\//g, "-").trim();
  const parts = cleanStr.split("-");
  if (parts.length === 3) {
    let day = parts[0].trim();
    let month = parts[1].trim();
    let year = parts[2].trim();
    if (day.length === 1) day = "0" + day;
    if (month.length === 1) month = "0" + month;
    if (day.length === 2 && month.length === 2 && year.length === 4) {
      return `${year}-${month}-${day}`;
    }
  }
  return null;
};

const StudentMarks = ({ isPageHeader = false }) => {
  const [formData, setFormData] = useState({
    studentName: "",
    contactNumber: "",
    dateofBirth: "",
  });
  const [marks, setMarks] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const normalizedDate = parseDDMMYYYY(formData.dateofBirth);
      if (!normalizedDate) {
        toast.error("Please enter Date of Birth in DD-MM-YYYY format!");
        return;
      }
      const res = await marksAPI.getOne({
        studentName: formData.studentName.trim(),
        contactNumber: formData.contactNumber.trim(),
        dateofBirth: normalizedDate
      });
      setMarks(res.data);
      toast.success("Marks loaded successfully!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Marks not found ❌");
      setMarks(null);
    } finally {
      setLoading(false);
    }
  };

  const getPercentage = (obtained, total) =>
    ((obtained / total) * 100).toFixed(2);

  const getGrade = (percentage) => {
    if (percentage >= 90) return "A+";
    if (percentage >= 75) return "A";
    if (percentage >= 60) return "B";
    if (percentage >= 45) return "C";
    if (percentage >= 33) return "D";
    return "F";
  };

  const getGradeColor = (grade) => {
    switch (grade) {
      case "A+": return "bg-emerald-100 text-emerald-800 border-emerald-200";
      case "A": return "bg-teal-100 text-teal-800 border-teal-200";
      case "B": return "bg-blue-100 text-blue-800 border-blue-200";
      case "C": return "bg-amber-100 text-amber-800 border-amber-200";
      case "D": return "bg-orange-100 text-orange-800 border-orange-200";
      default: return "bg-rose-100 text-rose-800 border-rose-200";
    }
  };

  const getImageDataURL = (url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        resolve({
          dataURL: canvas.toDataURL("image/png"),
          width: img.width,
          height: img.height
        });
      };
      img.onerror = (e) => reject(e);
      img.src = url;
    });
  };

  const exportToPDF = async () => {
    if (!marks) {
      toast.error("Marksheet data not found!");
      return;
    }

    const pdfToast = toast.loading("Generating PDF...");

    try {
      const doc = new jsPDF("p", "mm", "a4");
      
      // Page setup
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();

      // Top decorative band
      doc.setFillColor(91, 45, 124); // Primary Purple
      doc.rect(0, 0, pageWidth, 5, "F");

      // Bottom decorative band
      doc.setFillColor(91, 45, 124); // Primary Purple
      doc.rect(0, pageHeight - 5, pageWidth, 5, "F");
      
      // Draw Page Borders
      doc.setDrawColor(226, 232, 240); // Slate 200
      doc.setLineWidth(0.5);
      doc.rect(10, 12, pageWidth - 20, pageHeight - 24); // Outer border
      
      doc.setDrawColor(243, 232, 255); // Purple 100
      doc.setLineWidth(0.25);
      doc.rect(11.5, 13.5, pageWidth - 23, pageHeight - 27); // Inner border

      // 1. Centered Logo Header
      let logoLoaded = false;
      let logoResult = null;
      
      try {
        logoResult = await getImageDataURL(logo);
        logoLoaded = true;
      } catch (err) {
        console.warn("Could not load logo as base64, using fallback typography:", err);
      }

      const logoYSpace = 22; // Height from 15 to 37
      let logoHeight = 18;
      let logoWidth = 42; // Professional balanced logo size on the left

      if (logoLoaded && logoResult) {
        logoHeight = (logoResult.height / logoResult.width) * logoWidth;
        if (logoHeight > logoYSpace) {
          logoHeight = logoYSpace;
          logoWidth = (logoResult.width / logoResult.height) * logoHeight;
        }
        const logoX = 15; // Aligned with the left page margin
        const logoY = 15 + (logoYSpace - logoHeight) / 2;
        doc.addImage(logoResult.dataURL, "PNG", logoX, logoY, logoWidth, logoHeight);
      } else {
        // Fallback Vector Logo on the left
        const logoX = 25;
        const logoY = 26;
        doc.setFillColor(243, 232, 255);
        doc.circle(logoX, logoY, 11, "F");
        
        doc.setFillColor(91, 45, 124);
        doc.circle(logoX, logoY, 9, "F");
        
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.setTextColor(255, 255, 255);
        doc.text("TE", logoX, logoY + 3, { align: "center" });
      }

      // Right-side details (Right-aligned corporate layout)
      const rightMarginX = pageWidth - 15;
      
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9.5);
      doc.setTextColor(30, 41, 59); // Slate 800 for the organization name
      doc.text("TEAM EXCELLENT CAREER INSTITUTE", rightMarginX, 19, { align: "right" });
      
      doc.setFont("helvetica", "normal");
      doc.setFontSize(7.5);
      doc.setTextColor(100, 116, 139); // Slate 500
      doc.text("Address: New Kunj Colony, Saketpuri, Patna, Bihar, 800016, India", rightMarginX, 24, { align: "right" });
      doc.text("Admission Desk: +91 9942000371 | +91 9942000372", rightMarginX, 29, { align: "right" });
      doc.text("Email: teamexcellentpatna@gmail.com | Web: www.teamexcellentcareerinstitute.in", rightMarginX, 34, { align: "right" });

      // Horizontal Divider
      doc.setDrawColor(91, 45, 124); // Deep Purple
      doc.setLineWidth(0.6);
      doc.line(15, 39, pageWidth - 15, 39);

      // Document Title
      doc.setFont("helvetica", "bold");
      doc.setFontSize(13.5);
      doc.setTextColor(30, 41, 59); // Slate 800
      doc.text("STUDENT TEST REPORT CARD", pageWidth / 2, 49, { align: "center" });
      
      // Decorative horizontal divider below title
      doc.setDrawColor(226, 232, 240);
      doc.setLineWidth(0.5);
      doc.line(40, 54, pageWidth - 40, 54);

      // 2. Student Info List (Clean borderless format with top & bottom separator lines)
      doc.setDrawColor(226, 232, 240); // Slate 200
      doc.setLineWidth(0.5);
      doc.line(15, 59, pageWidth - 15, 59); // Top border line
      doc.line(15, 91, pageWidth - 15, 91); // Bottom border line

      // Grid Label/Value writing helper
      const writeInfo = (label, value, labelX, valueX, y) => {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(9);
        doc.setTextColor(100, 116, 139); // Slate 500
        doc.text(label, labelX, y);
        
        doc.setFont("helvetica", "bold");
        doc.setFontSize(9.5);
        doc.setTextColor(30, 41, 59); // Slate 800
        doc.text(value, valueX, y);
      };

      const dobString = formatDate(marks.dateofBirth);
      
      // Column 1 - Fixed grid alignment
      writeInfo("Name:", marks.studentName, 20, 46, 66);
      writeInfo("Father's Name:", marks.fatherName, 20, 46, 75);
      writeInfo("Contact No:", marks.contactNumber, 20, 46, 84);
      
      // Column 2 - Fixed grid alignment
      writeInfo("Class:", marks.className, 110, 136, 66);
      
      let schoolNameStr = marks.schoolName || "N/A";
      if (schoolNameStr.length > 25) {
        schoolNameStr = schoolNameStr.substring(0, 23) + "...";
      }
      writeInfo("School:", schoolNameStr, 110, 136, 75);
      writeInfo("Date of Birth:", dobString, 110, 136, 84);

      // 3. Marks Breakdown Table with jspdf-autotable
      const subjects = [
        { name: "Physics", marks: marks.physics, max: 10 },
        { name: "Chemistry", marks: marks.chemistry, max: 10 },
        { name: "Mathematics", marks: marks.maths, max: 10 },
        { name: "Biology", marks: marks.biology, max: 10 },
        { name: "Aptitude / MAT", marks: marks.aptitude, max: 10 },
      ];

      const tableData = subjects.map((sub, i) => {
        const pct = getPercentage(sub.marks, sub.max);
        const grade = getGrade(pct);
        return [i + 1, sub.name, sub.marks, sub.max, grade];
      });

      const totalPct = getPercentage(marks.total, 50);
      const overallGrade = getGrade(totalPct);

      autoTable(doc, {
        startY: 97,
        margin: { left: 15, right: 15 },
        head: [["S.No", "Subject / Area", "Marks Obtained", "Maximum Marks", "Grade"]],
        body: tableData,
        foot: [["", "GRAND TOTAL", marks.total, "50", overallGrade]],
        theme: "plain",
        headStyles: {
          fillColor: [91, 45, 124], // Deep Purple
          textColor: [255, 255, 255],
          fontStyle: "bold",
          fontSize: 8.5,
          halign: "center",
          valign: "middle",
          cellPadding: 3,
        },
        footStyles: {
          fillColor: [243, 232, 255], // Purple 100
          textColor: [91, 45, 124], // Deep Purple
          fontStyle: "bold",
          fontSize: 9,
          halign: "center",
          valign: "middle",
          cellPadding: 3.5,
        },
        bodyStyles: {
          fontSize: 8.5,
          textColor: [51, 65, 85], // Slate 700
          cellPadding: 2.8,
          halign: "center",
          valign: "middle",
          lineColor: [241, 245, 249], // Slate 100
          lineWidth: 0.5,
        },
        alternateRowStyles: {
          fillColor: [250, 248, 252], // Very soft purple tint
        },
      });

      const finalY = doc.lastAutoTable.finalY;

      // 4. Congratulations Status Box
      const boxY = finalY + 10;
      const boxHeight = 24;
      
      // Emerald Success Box
      doc.setFillColor(240, 253, 250); // Emerald 50
      doc.setDrawColor(220, 252, 231); // Emerald 100
      doc.setLineWidth(0.4);
      doc.roundedRect(15, boxY, pageWidth - 30, boxHeight, 3, 3, "FD");
      
      // Green Accent sidebar
      doc.setFillColor(16, 185, 129); // Emerald 500
      doc.rect(15, boxY, 2.5, boxHeight, "F");
      
      // Badge Circle
      doc.setFillColor(16, 185, 129);
      doc.circle(23, boxY + boxHeight / 2, 5, "F");
      
      // Vector Checkmark inside badge
      doc.setDrawColor(255, 255, 255);
      doc.setLineWidth(0.6);
      doc.line(21, boxY + 12, 22.5, boxY + 14.5);
      doc.line(22.5, boxY + 14.5, 25.2, boxY + 10);
      
      // Content
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10.5);
      doc.setTextColor(6, 95, 70); // Emerald 800
      doc.text("CONGRATULATIONS!", 32, boxY + 7);
      
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.5);
      doc.setTextColor(4, 120, 87); // Emerald 700
      const congratsText = `Congratulations ${marks.studentName}! Please visit the center with this report card to proceed with your admission and counseling.`;
      const textLines = doc.splitTextToSize(congratsText, pageWidth - 52);
      doc.text(textLines, 32, boxY + 13);

      // 5. Contact Footer (Fixed position anchored to bottom)
      const footerStartY = 248;
      
      // Divider
      doc.setDrawColor(226, 232, 240); // Slate 200
      doc.setLineWidth(0.5);
      doc.line(15, footerStartY, pageWidth - 15, footerStartY);
      
      // Verified Tag
      doc.setFont("helvetica", "bold");
      doc.setFontSize(7.5);
      doc.setTextColor(148, 163, 184); // Slate 400
      doc.text("SYSTEM-GENERATED VERIFIED DIGITAL REPORT CARD", pageWidth / 2, footerStartY + 5, { align: "center" });
      
      // Footer info box (fill only, no border)
      doc.setFillColor(248, 250, 252); // Slate 50
      doc.roundedRect(15, footerStartY + 8, pageWidth - 30, 18, 2, 2, "F");
      
      // Footer details
      doc.setFont("helvetica", "normal");
      doc.setFontSize(7.5);
      doc.setTextColor(100, 116, 139); // Slate 500
      
      // Left Column
      doc.text("Admission Desk: +91 9942000371 | +91 9942000372", 22, footerStartY + 14);
      doc.text("Email: teamexcellentpatna@gmail.com", 22, footerStartY + 20);
      
      // Right Column
      doc.text("Website: www.teamexcellentcareerinstitute.in", 115, footerStartY + 14);

      // Save PDF
      doc.save(`${marks.studentName}_Class-${marks.className}_Marksheet.pdf`);
      toast.success("PDF downloaded!", { id: pdfToast });

    } catch (err) {
      console.error("PDF Export Error:", err);
      toast.error("Failed to export PDF ❌", { id: pdfToast });
    }
  };

  return (
    <div
      style={{ backgroundColor: "#F8FAFC" }}
      className={`w-full flex flex-col items-center pb-16 ${isPageHeader ? 'pt-24 md:pt-28' : ''}`}
    >
      {/* Header Banner */}
      <div className="w-full text-center py-20 px-4 bg-gradient-to-br from-[#3F1D5B] via-[#5B2D7C] to-[#8424bd] shadow-lg relative overflow-hidden">
        {/* Abstract shapes & glowing effects */}
        <div className="absolute top-[-20%] left-[-10%] w-72 h-72 bg-purple-500/10 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-[-30%] right-[-10%] w-96 h-96 bg-indigo-500/15 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-purple-200 border border-white/10 mb-4 backdrop-blur-md">
            <Award className="w-3.5 h-3.5" />
            Official Portal
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight drop-shadow-sm">
            Scholarship Examination <span className="text-purple-200 font-light hidden md:inline">|</span> <span className="block md:inline mt-1 text-purple-100">Check Your Results</span>
          </h1>
          <p className="text-purple-100/90 text-sm sm:text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            Enter your correct details below to retrieve and securely view your performance marksheet and scholarship eligibility status.
          </p>
        </div>
      </div>

      {/* Main Form Section */}
      <div className="w-full max-w-4xl px-4 -mt-10 relative z-20">
        <motion.form
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 md:p-8 w-full"
        >
          <div className="flex flex-col items-center mb-6">
            <img src={logo} alt="Team Excellent Career Institute" className="h-16 md:h-20 w-auto mb-3" />
            <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Input Student Name */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Student Name</label>
              <div className="relative rounded-xl shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <User className="h-4 w-4" />
                </div>
                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-slate-50 text-slate-900 placeholder-slate-400 text-sm transition-all hover:bg-slate-100/50"
                />
              </div>
            </div>

            {/* Input Contact Number */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Contact Number</label>
              <div className="relative rounded-xl shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Phone className="h-4 w-4" />
                </div>
                <input
                  type="text"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="e.g. 9942000371"
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-slate-50 text-slate-900 placeholder-slate-400 text-sm transition-all hover:bg-slate-100/50"
                />
              </div>
            </div>

            {/* Input Date of Birth */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Date of Birth</label>
              <div className="relative rounded-xl shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Calendar className="h-4 w-4" />
                </div>
                <input
                  type="text"
                  name="dateofBirth"
                  value={formData.dateofBirth}
                  onChange={handleChange}
                  placeholder="e.g. 22-06-2009"
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-slate-50 text-slate-900 placeholder-slate-400 text-sm transition-all hover:bg-slate-100/50"
                />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#5B2D7C] to-[#8424bd] hover:from-[#4A2466] hover:to-[#6E1C9F] text-white py-3.5 rounded-xl font-bold text-base transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Fetching Result...
                </>
              ) : (
                <>
                  View Results <ArrowRight className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </div>
        </motion.form>
      </div>

      {/* Marksheet Report Display */}
      <AnimatePresence>
        {marks && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="w-full max-w-4xl px-4 mt-12 flex flex-col items-center"
          >
            <div
              id="marksheet"
              className="bg-white shadow-2xl border border-slate-100 rounded-3xl w-full p-6 md:p-10 relative overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#5B2D7C]/5 rounded-bl-[100px] pointer-events-none"></div>
              
              {/* Official Header */}
              <div className="flex flex-col items-center text-center pb-8 border-b border-slate-100 mb-8">
                <img src={logo} alt="Team Excellent" className="h-16 md:h-20 mb-3" />
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#5B2D7C] bg-purple-50 px-3 py-1 rounded-full mb-2">
                  Academic Evaluation Division
                </span>
                <h2 className="text-xl md:text-2xl font-black text-slate-800">
                  Scholarship Test Report Card
                </h2>
              </div>

              {/* Student Personal Info Grid */}
              <div className="bg-slate-50/75 rounded-2xl p-4 md:p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8 text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-purple-600 shrink-0" />
                  <p><strong>Name:</strong> {marks.studentName}</p>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-purple-600 shrink-0" />
                  <p><strong>Class:</strong> {marks.className}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-purple-600 shrink-0" />
                  <p className="truncate"><strong>School:</strong> {marks.schoolName}</p>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-purple-600 shrink-0" />
                  <p><strong>Father:</strong> {marks.fatherName}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-purple-600 shrink-0" />
                  <p><strong>DOB:</strong> {formatDate(marks.dateofBirth)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-purple-600 shrink-0" />
                  <p><strong>Contact:</strong> {marks.contactNumber}</p>
                </div>
              </div>

              {/* Subject Breakdown Card Grid for Mobile & Elegant Table for Desktop */}
              <div className="mb-8">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-purple-600" />
                  Subject Wise Analysis
                </h3>
                
                {/* Desktop View Table */}
                <div className="hidden sm:block overflow-hidden border border-slate-100 rounded-2xl">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 text-slate-500 uppercase text-xs font-bold border-b border-slate-100">
                      <tr>
                        <th className="px-6 py-4">Subject</th>
                        <th className="px-6 py-4 text-center">Marks Obtained</th>
                        <th className="px-6 py-4 text-center">Total Marks</th>
                        <th className="px-6 py-4">Performance Score</th>
                        <th className="px-6 py-4 text-center">Grade</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {[
                        { name: "Physics", obtained: marks.physics },
                        { name: "Chemistry", obtained: marks.chemistry },
                        { name: "Maths", obtained: marks.maths },
                        { name: "Biology", obtained: marks.biology },
                        { name: "Aptitude", obtained: marks.aptitude },
                      ].filter(s => s.obtained !== undefined && s.obtained !== null).map((subj, i) => {
                        const pct = getPercentage(subj.obtained, 10);
                        const grade = getGrade(pct);
                        return (
                          <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                            <td className="px-6 py-4 font-semibold text-slate-800">{subj.name}</td>
                            <td className="px-6 py-4 text-center font-bold text-purple-600">{subj.obtained}</td>
                            <td className="px-6 py-4 text-center text-slate-400">10</td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <span className="w-10 text-xs text-slate-500">{pct}%</span>
                                <div className="w-24 bg-slate-100 rounded-full h-2 overflow-hidden shrink-0">
                                  <div
                                    className="bg-gradient-to-r from-purple-500 to-indigo-600 h-full rounded-full"
                                    style={{ width: `${pct}%` }}
                                  ></div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-center">
                              <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${getGradeColor(grade)}`}>
                                {grade}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                      {/* Total Row */}
                      <tr className="bg-slate-50/50 font-bold border-t-2 border-slate-200">
                        <td className="px-6 py-4 text-slate-950">Grand Total</td>
                        <td className="px-6 py-4 text-center text-purple-700 text-base">{marks.total}</td>
                        <td className="px-6 py-4 text-center text-slate-500">50</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <span className="w-10 text-xs text-slate-900">{getPercentage(marks.total, 50)}%</span>
                            <div className="w-24 bg-slate-200 rounded-full h-2 overflow-hidden shrink-0">
                              <div
                                  className="bg-gradient-to-r from-purple-600 to-indigo-700 h-full rounded-full"
                                  style={{ width: `${getPercentage(marks.total, 50)}%` }}
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${getGradeColor(getGrade(getPercentage(marks.total, 50)))}`}>
                            {getGrade(getPercentage(marks.total, 50))}
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Mobile View Subject Cards */}
                <div className="sm:hidden space-y-4">
                  {[
                    { name: "Physics", obtained: marks.physics },
                    { name: "Chemistry", obtained: marks.chemistry },
                    { name: "Maths", obtained: marks.maths },
                    { name: "Biology", obtained: marks.biology },
                    { name: "Aptitude", obtained: marks.aptitude },
                  ].filter(s => s.obtained !== undefined && s.obtained !== null).map((subj, i) => {
                    const pct = getPercentage(subj.obtained, 10);
                    const grade = getGrade(pct);
                    return (
                      <div key={i} className="bg-slate-50/50 border border-slate-100 rounded-2xl p-4 flex flex-col gap-3">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-slate-800 text-base">{subj.name}</span>
                          <span className={`px-2 py-0.5 rounded-full text-xs font-bold border ${getGradeColor(grade)}`}>
                            {grade}
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-slate-500">Marks: <strong className="text-purple-600">{subj.obtained}</strong> / 10</span>
                          <span className="text-slate-500">Score: <strong>{pct}%</strong></span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-purple-500 to-indigo-600 h-full rounded-full"
                            style={{ width: `${pct}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                  {/* Mobile Total Card */}
                  <div className="bg-purple-50/50 border border-purple-100 rounded-2xl p-4 flex flex-col gap-3 font-bold text-slate-900">
                    <div className="flex justify-between items-center">
                      <span className="text-base text-[#5B2D7C]">Grand Total</span>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-bold border ${getGradeColor(getGrade(getPercentage(marks.total, 50)))}`}>
                        {getGrade(getPercentage(marks.total, 50))}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span>Marks: <strong className="text-purple-700 text-base">{marks.total}</strong> / 50</span>
                      <span>Overall: <strong>{getPercentage(marks.total, 50)}%</strong></span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-purple-600 to-indigo-700 h-full rounded-full"
                        style={{ width: `${getPercentage(marks.total, 50)}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 🎉 Congratulations Box */}
              <div className="mb-6">
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left relative overflow-hidden shadow-inner">
                  {/* Glowing background star */}
                  <div className="absolute right-[-10px] bottom-[-10px] text-emerald-500/5 rotate-12 scale-150 pointer-events-none">
                    <Star size={120} fill="currentColor" />
                  </div>
                  <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-emerald-500/20">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-emerald-800 text-base mb-1">
                      🎉 Congratulations!
                    </h4>
                    <p className="text-sm text-emerald-700 leading-relaxed">
                      Congratulations <strong>{marks.studentName}</strong>! Please visit the center with this report card to proceed with your admission and counseling.
                    </p>
                  </div>
                </div>
              </div>

              {/* Verification & Official Details Footer */}
              <div className="mt-8 pt-6 border-t border-slate-100 text-center text-xs text-slate-500 leading-relaxed flex flex-col items-center gap-2">
                <p className="flex items-center gap-1 font-semibold text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-purple-600" />
                  System-Generated Verified Digital Report Card
                </p>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 w-full text-slate-500 text-xs py-4 px-2 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex flex-col gap-1 md:text-left">
                    <p>📞 Admission Desk: +91 9942000371 | +91 9942000372</p>
                    <p>📧 Email: teamexcellentpatna@gmail.com</p>
                  </div>
                  <div className="flex flex-col gap-1 md:text-right">
                    <p>🌐 Website: www.teamexcellentcareerinstitute.in</p>
                    <p>📍 Patna Center near NMCH College, Saketpuri</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 📄 Elegant Download Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={exportToPDF}
              className="mt-6 flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3.5 rounded-xl font-bold transition shadow-lg hover:shadow-emerald-600/20"
            >
              <Download className="w-5 h-5" />
              Download Report Card (PDF)
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StudentMarks;
