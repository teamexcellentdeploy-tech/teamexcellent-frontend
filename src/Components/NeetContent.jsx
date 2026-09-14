import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  HeartPulse, 
  BookOpen, 
  Award, 
  Layers, 
  ArrowRight, 
  GraduationCap, 
  Laptop, 
  HelpCircle, 
  Trophy, 
  TrendingUp, 
  ClipboardCheck, 
  Clock, 
  Users, 
  CheckCircle2, 
  XCircle, 
  Stethoscope, 
  Target, 
  ShieldCheck, 
  Sparkles, 
  Building2, 
  PhoneCall,
  Calendar,
  FileCheck
} from "lucide-react";
import EnrollmentForm from "./EnrollmentForm";
import FAQSection from "./FAQSection";
import TMatSection from "./TMatSection";

function NeetContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCourse, setModalCourse] = useState("");

  const handleOpenModal = (course = "") => {
    setModalCourse(course);
    setIsModalOpen(true);
  };

  const keyHighlights = [
    {
      title: "Doctor & Specialist Faculty",
      desc: "Learn from seasoned medical education specialists and doctor mentors with 15+ years of NEET coaching experience."
    },
    {
      title: "100% NCERT-Driven Syllabus",
      desc: "Line-by-line NCERT deconstruction for Biology, Inorganic Chemistry, and Organic mechanisms to score 340+ in Biology."
    },
    {
      title: "Small Batch Mentorship (35-45)",
      desc: "Limited batch strength ensures individualized attention, daily teacher interaction, and tailored progress tracking."
    },
    {
      title: "Daily 1-on-1 Doubt Desk",
      desc: "Dedicated daily doubt counters to eliminate physics equation roadblocks and chemistry conceptual hurdles on the same day."
    },
    {
      title: "Real OMR Mock Test Series",
      desc: "Weekly pen-and-paper OMR tests simulating real NTA NEET exam hall conditions with detailed micro-level error analysis."
    },
    {
      title: "Up to 100% T-MAT Scholarship",
      desc: "Merit-based fee concessions through the Team Excellent Talent Search Exam for deserving medical aspirants across Bihar."
    }
  ];

  const comparisonData = [
    {
      feature: "Batch Size & Attention",
      teamExcellent: "Small batches (35-45 students) for personalized 1-on-1 attention",
      otherInstitutes: "Crowded batches (150-250+ students) with zero personal interaction"
    },
    {
      feature: "Faculty Expertise & Stability",
      teamExcellent: "Senior Doctor mentors & permanent subject heads throughout the year",
      otherInstitutes: "Frequent faculty turnover and junior guest faculty rotation"
    },
    {
      feature: "Doubt Solving Mechanism",
      teamExcellent: "In-person daily doubt desks with senior faculty after every lecture",
      otherInstitutes: "Restricted doubt hours or slow generic mobile app-based replies"
    },
    {
      feature: "Physics for Medical Aspirants",
      teamExcellent: "Specialized numerical shortcuts & step-by-step graphical problem solving",
      otherInstitutes: "Overly complex, engineering-focused teaching ignoring bio student needs"
    },
    {
      feature: "Test Series & Analytics",
      teamExcellent: "Real Pen-Paper OMR test series with micro mistake analysis & negative-mark reduction",
      otherInstitutes: "Irregular test keys without individual weakness diagnosis"
    },
    {
      feature: "Scholarship & Fee Transparency",
      teamExcellent: "Up to 100% fee waiver via T-MAT Exam with transparent, affordable fees",
      otherInstitutes: "High commercial fees with hidden charges and limited concessions"
    }
  ];

  const pillars = [
    {
      title: "Biology 360° NCERT Precision",
      icon: <Stethoscope className="w-6 h-6 text-[#5B2D7C]" />,
      bg: "bg-purple-50",
      border: "border-purple-200",
      desc: "Biology accounts for 360 marks (50% of the NEET exam). We teach every NCERT paragraph, diagram, footnote, and summary table with memory mnemonics, statement-type question drills, and assertion-reason tests."
    },
    {
      title: "Medical Physics Demystified",
      icon: <Target className="w-6 h-6 text-[#b72e2f]" />,
      bg: "bg-red-50",
      border: "border-red-200",
      desc: "We understand physics is the rank-deciding subject for medical students. Our educators break down complex mechanics, electrodynamics, and modern physics into easy formulas and calculus-free shortcut methods."
    },
    {
      title: "Chemistry Concept & Mechanism Mastery",
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      bg: "bg-blue-50",
      border: "border-blue-200",
      desc: "Covering Physical Chemistry numericals, Organic Chemistry reaction mechanisms and named reactions, and Inorganic Chemistry NCERT trends with daily practice problem sheets (DPPs)."
    },
    {
      title: "Real OMR Exam Simulation",
      icon: <ClipboardCheck className="w-6 h-6 text-emerald-600" />,
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      desc: "Weekly timed exams on standardized physical OMR sheets to train students in time allocation (3 hours 20 mins), question selection speed, and bubbling accuracy to eliminate negative marking."
    }
  ];

  const batches = [
    {
      badge: "2-Year Program",
      badgeColor: "bg-purple-100 text-[#5B2D7C]",
      title: "NEET Class 11 (2-Year Foundation)",
      target: "For Students moving to Class 11",
      desc: "Lays a rock-solid foundation for NEET UG alongside CBSE/BSEB school curriculum. Covers complete Class 11 & Class 12 NEET syllabus with thorough NCERT mastery.",
      points: [
        "Comprehensive Class 11 NCERT line-by-line coverage",
        "Step-by-step foundation in Physics & Physical Chemistry",
        "Weekly unit tests & cumulative quarterly exams",
        "Direct link to Class 12 advance batches"
      ],
      link: "/neet-coaching-in-patna",
      linkText: "View Class 11 Details"
    },
    {
      badge: "1-Year Program",
      badgeColor: "bg-red-100 text-[#b72e2f]",
      title: "NEET Class 12 (Target Program)",
      target: "For Students moving to Class 12",
      desc: "Designed to balance 12th Board examinations while simultaneously preparing for NEET UG. Includes rigorous revision of Class 11 topics and complete Class 12 syllabus drill.",
      points: [
        "100% Board exam syllabus mapping & answer writing",
        "High-density revision modules for Class 11 chapters",
        "Bi-weekly full-length NEET mock tests on OMR sheets",
        "Intensive doubt clearance desks"
      ],
      link: "/neet-class-12-in-patna",
      linkText: "View Class 12 Details"
    },
    {
      badge: "Rank Booster",
      badgeColor: "bg-blue-100 text-blue-700",
      title: "NEET Dropper / Repeater Batch",
      target: "For 12th Passout / Dropper Aspirants",
      desc: "A fast-track, high-intensity program focusing purely on NCERT mastery, 50,000+ question bank practice, error correction, and maximizing test scores to 650+.",
      points: [
        "Complete 11th & 12th syllabus revision in 8-9 months",
        "50+ full-syllabus simulated OMR mock tests",
        "Special focus on physics numericals & organic mechanisms",
        "1-on-1 performance tracking with doctor mentors"
      ],
      link: "/neet-dropper-coaching-in-patna",
      linkText: "View Dropper Details"
    }
  ];

  const medicalColleges = [
    "AIIMS Patna",
    "PMCH Patna",
    "NMCH Patna",
    "IGIMS Patna",
    "DMCH Darbhanga",
    "SKMCH Muzaffarpur",
    "ANMMCH Gaya",
    "JLNMC Bhagalpur",
    "VMMC & Safdarjung (New Delhi)",
    "BHU (IMS Varanasi)"
  ];

  const faqs = [
    {
      question: "Which is the best NEET coaching in Patna?",
      answer: "Team Excellent Career Institute is widely recognized as one of the best NEET coaching institutes in Patna, offering doctor-mentored biology preparation, top-tier physics & chemistry faculty, small batch sizes, and a proven track record of MBBS selections in AIIMS, PMCH, NMCH, and IGIMS."
    },
    {
      question: "Why choose Team Excellent for NEET UG preparation in Patna?",
      answer: "Team Excellent stands out with its 100% NCERT-aligned curriculum, 1-on-1 daily doubt desks, high-yield Daily Practice Problems (DPPs), real OMR-based simulated test series, small batches (35-45 students), and up to 100% scholarship via the T-MAT exam."
    },
    {
      question: "What batches are available for NEET coaching at Team Excellent Patna?",
      answer: "We provide three specialized batches: (1) 2-Year Foundation Course for Class 11 students, (2) 1-Year Target Course for Class 12 students, and (3) Dropper/Repeater Batch for Class 12 passout aspirants."
    },
    {
      question: "What is the fee structure for NEET coaching at Team Excellent?",
      answer: "Our fee structure is affordable and transparent. Deserving students can avail up to 100% fee waivers on tuition through the Team Excellent Talent Search & Scholarship Test (T-MAT)."
    },
    {
      question: "Does Team Excellent provide NEET study material and test series?",
      answer: "Yes, all students receive comprehensive printed theory modules, question banks, assertion-reason sheets, previous years' questions (PYQs), and full-length OMR mock tests with detailed performance reports."
    },
    {
      question: "How does Team Excellent help medical aspirants with Physics and Chemistry?",
      answer: "Medical students often struggle with physics numericals and organic mechanisms. We offer specialized numerical shortcut sessions, conceptual foundation lectures, and step-by-step problem-solving desks to build high confidence."
    },
    {
      question: "Where is Team Excellent NEET coaching located in Patna?",
      answer: "Our campus is conveniently located at Saketpuri, Near NMCH College, Bajar Samiti, Patna, Bihar (800016), easily reachable from Kankarbagh, Boring Road, Rajendra Nagar, and Bazar Samiti."
    },
    {
      question: "How can I apply for admission or book a free demo class?",
      answer: "You can apply online through our website enrollment form, call our admission helpdesk at +91-9942000371 / +91-9942000372, or visit our Saketpuri center for a direct counseling session and free demo classes."
    },
    {
      question: "What is the qualification of faculty members teaching NEET at Team Excellent?",
      answer: "Our faculty comprises seasoned medical entrance experts, ex-doctors, and experienced educators with over 10-15 years of dedicated experience mentoring top NEET rankers across India."
    },
    {
      question: "Are hostel and transport facilities available for outstation students?",
      answer: "Yes, we provide trusted assistance for hygienic, verified boys and girls hostels and PG accommodations located close to our Saketpuri campus, along with easy access to city transport."
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[85vh] bg-[#fafafc] pt-[120px] pb-[40px] flex items-center justify-center overflow-x-hidden text-center animate-fade-in border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e0ff_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
        <div className="absolute -top-32 left-1/4 -z-10 h-[280px] w-[280px] rounded-full bg-purple-200/40 blur-[80px]" />
        <div className="absolute top-20 right-1/4 -z-10 h-[320px] w-[320px] rounded-full bg-rose-100/30 blur-[90px]" />

        <div className="relative max-w-4xl mx-auto px-6 w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50/90 px-4 py-1.5 text-[11px] sm:text-xs font-bold text-[#5B2D7C] shadow-sm backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-[#5B2D7C]" />
            <span className="tracking-wide">#1 Medical Entrance Coaching in Patna | Up to 100% Scholarship via T-MAT</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1e1b4b] leading-tight mb-6">
            Best NEET Coaching <br />
            <span className="bg-gradient-to-r from-[#5B2D7C] via-[#8424bd] to-[#b72e2f] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(91,45,124,0.08)]">
              in Patna
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-medium">
            Turn your dream of wearing the white coat into reality. <strong>Team Excellent Career Institute</strong> delivers Patna's most disciplined, NCERT-focused NEET UG coaching with Doctor mentors, 1-on-1 daily doubt clearing, small batches, and simulated OMR mock tests.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto mt-8">
            <button
              onClick={() => handleOpenModal("NEET Coaching")}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#5B2D7C] to-[#8424bd] px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              Apply for NEET Coaching
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleOpenModal("Free Demo Class")}
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-700 hover:border-[#5B2D7C]/60 hover:bg-[#5B2D7C]/5 hover:-translate-y-0.5 transition-all duration-200"
            >
              Book Free Demo Class
            </button>
          </div>

          {/* Key Metrics / Proof Points */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12 pt-8 border-t border-slate-200/70">
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-slate-100 hover:border-purple-200 transition-all">
              <span className="text-xl sm:text-2xl font-black text-[#5B2D7C]">85%+</span>
              <span className="text-[11px] sm:text-xs text-slate-500 font-bold mt-1">NEET Selection Ratio</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-slate-100 hover:border-purple-200 transition-all">
              <span className="text-xl sm:text-2xl font-black text-[#b72e2f]">500+</span>
              <span className="text-[11px] sm:text-xs text-slate-500 font-bold mt-1">PMCH / AIIMS Selections</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-slate-100 hover:border-purple-200 transition-all">
              <span className="text-xl sm:text-2xl font-black text-[#5B2D7C]">1:25</span>
              <span className="text-[11px] sm:text-xs text-slate-500 font-bold mt-1">Batch Mentor Ratio</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-slate-100 hover:border-purple-200 transition-all">
              <span className="text-xl sm:text-2xl font-black text-emerald-600">100%</span>
              <span className="text-[11px] sm:text-xs text-slate-500 font-bold mt-1">NCERT Coverage</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="w-full bg-slate-50/50 py-16 px-4 sm:px-6">

        {/* Core Highlights Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#5B2D7C] text-xs sm:text-sm font-bold tracking-wider uppercase bg-purple-50 px-4 py-1.5 rounded-full border border-purple-100">
              Why We Are Ranked #1
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1e1b4b] mt-4 mb-4">
              What Makes Team Excellent the Best NEET Institute in Patna?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
              We combine academic rigor, individual student tracking, and doctor-curated pedagogy to deliver consistent medical entrance toppers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyHighlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:border-purple-200 transition-all duration-300"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-purple-50 text-[#5B2D7C] mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Matrix: Team Excellent vs Other Institutes */}
        <div className="max-w-6xl mx-auto mt-24">
          <div className="text-center mb-12">
            <span className="text-[#b72e2f] text-xs sm:text-sm font-bold tracking-wider uppercase bg-red-50 px-4 py-1.5 rounded-full border border-red-100">
              Institute Comparison
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1e1b4b] mt-4 mb-4">
              Team Excellent vs. Other Commercial Institutes in Patna
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
              See why hundreds of medical aspirants choose Team Excellent over crowded, commercial coaching chains in Patna.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-[#5B2D7C] to-[#8424bd] text-white">
                    <th className="p-4 sm:p-5 text-xs sm:text-sm font-bold uppercase tracking-wider">Comparison Parameter</th>
                    <th className="p-4 sm:p-5 text-xs sm:text-sm font-bold uppercase tracking-wider bg-white/10">Team Excellent Patna</th>
                    <th className="p-4 sm:p-5 text-xs sm:text-sm font-bold uppercase tracking-wider opacity-85">Other Commercial Coachings</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                  {comparisonData.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                      <td className="p-4 sm:p-5 font-bold text-slate-800 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#5B2D7C]"></span>
                        {row.feature}
                      </td>
                      <td className="p-4 sm:p-5 text-emerald-800 font-semibold bg-emerald-50/30">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{row.teamExcellent}</span>
                        </div>
                      </td>
                      <td className="p-4 sm:p-5 text-slate-500">
                        <div className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                          <span>{row.otherInstitutes}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 4-Pillar Academic Strategy */}
        <div className="max-w-6xl mx-auto mt-24">
          <div className="text-center mb-14">
            <span className="text-[#5B2D7C] text-xs sm:text-sm font-bold tracking-wider uppercase bg-purple-50 px-4 py-1.5 rounded-full border border-purple-100">
              Academic Framework
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1e1b4b] mt-4 mb-4">
              Our 4-Pillar Medical Entrance Preparation Strategy
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto">
              Cracking NEET UG requires more than memorization. Our four-pillar strategy covers deep conceptual understanding, speed, accuracy, and test psychology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="bg-white p-7 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-2xl ${pillar.bg} border ${pillar.border} flex items-center justify-center shrink-0`}>
                      {pillar.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800">{pillar.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Target Batches Section */}
        <div className="max-w-6xl mx-auto mt-24">
          <div className="text-center mb-12">
            <span className="text-[#b72e2f] text-xs sm:text-sm font-bold tracking-wider uppercase bg-red-50 px-4 py-1.5 rounded-full border border-red-100">
              Target Batches
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1e1b4b] mt-4 mb-4">
              NEET Preparation Batches for Every Academic Level
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
              Select the batch aligned with your current academic standard to get structured syllabus coverage, test series, and revision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {batches.map((batch, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-100 shadow-md hover:shadow-xl hover:border-purple-200 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div className="p-8">
                  <span className={`${batch.badgeColor} text-xs font-extrabold uppercase px-3.5 py-1 rounded-full`}>
                    {batch.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mt-4 mb-1">
                    {batch.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#5B2D7C] mb-3">{batch.target}</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {batch.desc}
                  </p>
                  <ul className="space-y-2.5 text-slate-700 text-xs sm:text-sm font-medium">
                    {batch.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 sm:px-8 pb-8 pt-4 border-t border-slate-50 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => handleOpenModal(batch.title)}
                    className="w-full sm:w-1/2 bg-[#5B2D7C] hover:bg-[#8424bd] text-white font-bold py-3 rounded-xl text-xs sm:text-sm transition duration-300 shadow-sm flex items-center justify-center"
                  >
                    Enroll Now
                  </button>
                  <Link
                    to={batch.link}
                    className="w-full sm:w-1/2 bg-purple-50 hover:bg-purple-100 text-[#5B2D7C] border border-purple-200 font-bold py-3 rounded-xl text-xs sm:text-sm text-center transition duration-300 flex items-center justify-center"
                  >
                    {batch.linkText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* T-MAT Scholarship Banner */}
        <TMatSection theme="red" />

        {/* Proven Medical College Selections Banner */}
        <div className="max-w-6xl mx-auto mt-24 bg-gradient-to-r from-[#1e1b4b] via-[#311042] to-[#5B2D7C] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-4xl">
            <span className="text-amber-400 text-xs sm:text-sm font-extrabold uppercase tracking-wider">
              Proven Track Record
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold mt-2 mb-4">
              Our Students Secure Admissions in Top Government Medical Colleges
            </h2>
            <p className="text-purple-100 text-sm sm:text-base leading-relaxed mb-8">
              Every year, Team Excellent students clear NEET UG with outstanding scores to secure government MBBS and BDS seats in Bihar and across India.
            </p>

            <div className="flex flex-wrap gap-2.5">
              {medicalColleges.map((college, i) => (
                <span
                  key={i}
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl backdrop-blur-sm transition-all"
                >
                  🎓 {college}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Patna Center Location & Facilities */}
        <div className="max-w-6xl mx-auto mt-24 bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-[#5B2D7C] text-xs sm:text-sm font-bold tracking-wider uppercase bg-purple-50 px-4 py-1.5 rounded-full border border-purple-100">
                Patna Center Facilities
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1e1b4b] mt-4 mb-4">
                State-of-the-Art Medical Learning Infrastructure
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Our campus in Saketpuri (Near NMCH College, Bajar Samiti) provides the ideal focused environment for intense medical entrance preparation:
              </p>
              <ul className="space-y-3 text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Fully Air-Conditioned Smart Digital Classrooms</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Quiet Reading Library & Self-Study Hall for NEET Aspirants</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Biometric Attendance & Instant SMS Parent Updates</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Safe, Verified Boys & Girls Hostel Accommodation Assistance Nearby</span>
                </li>
              </ul>
            </div>
            <div className="bg-purple-50/70 p-6 sm:p-8 rounded-2xl border border-purple-100 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-lg font-bold text-[#5B2D7C] mb-2 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#5B2D7C]" /> Visit Our Patna Campus
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-4">
                  Near NMCH College, Bajar Samiti, New Kunj Colony, Saketpuri, Patna, Bihar - 800016
                </p>
                <div className="space-y-2 text-xs sm:text-sm text-slate-700 font-semibold">
                  <p>📞 Phone: +91-9942000371, +91-9942000372</p>
                  <p>✉️ Email: teamexcellentpatna@gmail.com</p>
                  <p>🕒 Open: Monday – Sunday, 8:00 AM – 7:00 PM</p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-purple-200/60 flex gap-3">
                <a
                  href="https://www.google.com/maps?cid=16308605353139354202"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#5B2D7C] hover:bg-[#8424bd] text-white text-center font-bold py-3 rounded-xl text-xs sm:text-sm transition duration-200 shadow-sm"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Commitment & Internal Cluster Linking Banner */}
        <div className="max-w-4xl mx-auto mt-20 text-center bg-purple-50 p-8 sm:p-10 rounded-2xl shadow-inner border border-purple-100">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#522871] mb-6 flex items-center justify-center gap-2">
            <Award className="w-7 h-7 text-purple-600" /> Complete Medical Guidance at Team Excellent
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Team Excellent is committed to delivering the best NEET coaching in Patna through our NCERT-focused curriculum, 1-on-1 daily mentorship, and comprehensive test series. Explore our specialized programs:{" "}
            <Link to="/neet-coaching-in-patna" className="text-[#5B2D7C] font-bold hover:underline">
              NEET Complete Hub
            </Link>
            ,{" "}
            <Link to="/neet-class-12-in-patna" className="text-[#5B2D7C] font-bold hover:underline">
              NEET Class 12 Boards Batch
            </Link>
            , and{" "}
            <Link to="/neet-dropper-coaching-in-patna" className="text-[#5B2D7C] font-bold hover:underline">
              NEET Droppers Batch
            </Link>
            . Check our student achievements in{" "}
            <Link to="/result/neet" className="text-[#b72e2f] font-bold hover:underline">
              NEET Results
            </Link>
            , evaluate your estimated score with the{" "}
            <Link to="/rank-predictor" className="text-[#5B2D7C] font-bold hover:underline">
              Rank Predictor
            </Link>
            , or discover fee concessions on our{" "}
            <Link to="/scholarship" className="text-[#b72e2f] font-bold hover:underline">
              T-MAT Scholarship Page
            </Link>
            . For engineering aspirants, explore our{" "}
            <Link to="/iit-jee-coaching-in-patna" className="text-[#5B2D7C] font-bold hover:underline">
              IIT-JEE Coaching in Patna
            </Link>
            . Ready to join?{" "}
            <Link to="/contact" className="text-[#b72e2f] font-bold hover:underline">
              Contact our admissions desk
            </Link>{" "}
            today.
          </p>
        </div>

        {/* FAQ Section */}
        <FAQSection faqs={faqs} />
      </section>

      {/* Enrollment Modal */}
      <EnrollmentForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialCourse={modalCourse}
      />
    </div>
  );
}

export default NeetContent;
