import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ClipboardCheck, ArrowRight, BookOpen } from "lucide-react";
import EnrollmentForm from "./EnrollmentForm";
import FAQSection from "./FAQSection";

function AdmissionProcess() {
  const steps = [
    {
      id: 1,
      title: "Do Enquiry",
      description:
        "Reach out to Team Excellent for course details, fee structure, and guidance from our counselors.",
      color: "text-[#9333ea]", // purple-600
    },
    {
      id: 2,
      title: "Test at Institute",
      description:
        "An entrance test will be conducted at our institute to evaluate the student’s aptitude.",
      color: "text-[#dc2626]", // red-600
    },
    {
      id: 3,
      title: "Scholarship",
      description:
        "Based on performance in the entrance test, eligible students can avail scholarship benefits.",
      color: "text-[#eab308]", // yellow-500
    },
    {
      id: 4,
      title: "Document Submission",
      description:
        "Submit the required documents such as ID proof, mark sheets, and photographs for verification.",
      color: "text-[#2563eb]", // blue-600
    },
    {
      id: 5,
      title: "Take Admission",
      description:
        "Complete the admission process with scholarship (if eligible) and join Team Excellent.",
      color: "text-[#16a34a]", // green-600
    },
  ];

  const faqs = [
    {
      question: "How can I take admission to Team Excellent?",
      answer: "You can apply for admission by filling out the online enquiry form on our website, registering for the T-MAT scholarship exam, or visiting our Patna campus near NMCH College directly."
    },
    {
      question: "What is the admission process?",
      answer: "The process is simple: 1. Submit an enquiry, 2. Receive academic counseling, 3. Attempt the T-MAT test for scholarships, 4. Submit documents, and 5. Complete enrollment."
    },
    {
      question: "Which documents are required for admission?",
      answer: "You will need to submit class mark sheets (of the previous qualifying exam), recent passport-size photographs, and a valid government ID proof (such as Aadhaar Card)."
    },
    {
      question: "What courses are available for admission?",
      answer: "Admissions are open for our 1-year and 2-year classroom courses for IIT-JEE, NEET, Repeater/Dropper batches, and junior Pre-Foundation programs (Class 6-10)."
    },
    {
      question: "Is there an admission test?",
      answer: "Yes, we conduct the T-MAT (Team Excellent Mentorship & Scholarship Aptitude Test) which helps evaluate student level and awards up to 100% fee scholarships."
    },
    {
      question: "Can I visit the Team Excellent center before admission?",
      answer: "Yes, parents and students are welcome to visit our center to evaluate our classroom setups, library, and meet the faculty members."
    },
    {
      question: "What are the course fees?",
      answer: "Course fees vary depending on the class level and batch structure. We offer competitive fee models and generous scholarship waivers based on the T-MAT exam."
    },
    {
      question: "Are installment/payment options available?",
      answer: "Yes, to support parents, we offer flexible installment payment options for coaching fees. Detailed schedule details can be obtained from our accounts office."
    },
    {
      question: "When do new batches start?",
      answer: "New batches usually begin in the months of April, May, June, and July. Contact our help desk for specific batch start dates and orientation schedules."
    },
    {
      question: "How can I contact the admission team?",
      answer: "You can contact our admissions counselors at +91 9942000371 or +91 9942000372, or email us at teamexcellentpatna@gmail.com."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCourse, setModalCourse] = useState("");

  const handleOpenModal = (course = "") => {
    setModalCourse(course);
    setIsModalOpen(true);
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full animate-fade-in">
      {/* Subpage Hero Section */}
      <section className="relative w-full bg-[#fafafc] pt-[140px] pb-[80px] flex items-center justify-center overflow-hidden text-center border-b border-slate-100">
        {/* Ambient Grid & Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e0ff_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
        <div className="absolute -top-30 left-1/4 -z-10 h-[250px] w-[250px] rounded-full bg-purple-200/40 blur-[80px]" />
        <div className="absolute top-20 right-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-rose-100/30 blur-[90px]" />

        <div className="relative max-w-4xl mx-auto px-6 w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50/80 px-4 py-1.5 text-[10px] sm:text-xs font-semibold text-[#5B2D7C] shadow-sm backdrop-blur-sm mb-6">
            <ClipboardCheck className="w-4 h-4 text-[#5B2D7C]" />
            <span className="tracking-wide">Admissions Open 2027</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1e1b4b] leading-tight mb-6">
            Admission <br />
            <span className="bg-gradient-to-r from-[#5B2D7C] via-[#8424bd] to-[#b72e2f] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(91,45,124,0.08)]">
              Procedure & Guidelines
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-medium mb-8">
            Follow our simple step-by-step admission process to secure your seat at Team Excellent Career Institute and accelerate your journey to success.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <button
              onClick={() => handleOpenModal("")}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#5B2D7C] to-[#8424bd] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              Apply Online Now
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleOpenModal("")}
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-6 py-3 text-xs sm:text-sm font-bold text-slate-700 hover:border-[#5B2D7C]/60 hover:bg-[#5B2D7C]/5 hover:-translate-y-0.5 transition-all duration-200"
            >
              Request Call Back
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="w-full bg-white py-16 px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#522871]">
            Step-by-Step Process
          </h2>
          <div className="w-24 h-1 bg-[#9333ea] mx-auto mt-2 rounded"></div>
          <p className="text-[#4b5563] mt-3 text-sm sm:text-base">
            Follow these simple steps to join{" "}
            <span className="text-[#b72e2f] font-semibold">Team Excellent</span>
          </p>
        </div>

      {/* Step by Step Grid */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="flex items-start gap-6 p-6 bg-[#f9fafb] rounded-2xl shadow hover:shadow-md transition"
          >
            <h2 className={`text-5xl font-extrabold ${step.color} shrink-0`}>
              {index + 1}
            </h2>
            <div>
              <h3 className="text-xl font-semibold text-[#1f2937]">
                {step.title}
              </h3>
              <p className="text-[#4b5563] mt-1 text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Scholarship Slab Matrix (T-MAT Test) */}
      <div className="max-w-4xl mx-auto mt-20 bg-white border border-purple-100 rounded-3xl p-8 shadow-lg">
        <div className="text-center mb-8">
          <span className="bg-purple-100 text-[#5B2D7C] text-xs font-bold uppercase px-4 py-1.5 rounded-full">
            T-MAT Scholarship Slabs
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#522871] mt-3">
            Earn Up to 100% Scholarship on Course Fees
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            Scholarship awards based on performance in our entrance and mentorship test
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-purple-50/70 border border-purple-100 p-5 rounded-2xl text-center">
            <div className="text-3xl font-black text-[#522871] mb-1">100%</div>
            <div className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Full Waiver</div>
            <p className="text-xs text-gray-600">Top 10 Rankers in T-MAT Entrance Exam</p>
          </div>

          <div className="bg-purple-50/70 border border-purple-100 p-5 rounded-2xl text-center">
            <div className="text-3xl font-black text-[#b72e2f] mb-1">75%</div>
            <div className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Scholarship</div>
            <p className="text-xs text-gray-600">Score Above 90% Marks in T-MAT</p>
          </div>

          <div className="bg-purple-50/70 border border-purple-100 p-5 rounded-2xl text-center">
            <div className="text-3xl font-black text-blue-600 mb-1">50%</div>
            <div className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Scholarship</div>
            <p className="text-xs text-gray-600">Score 75% to 89% Marks in T-MAT</p>
          </div>

          <div className="bg-purple-50/70 border border-purple-100 p-5 rounded-2xl text-center">
            <div className="text-3xl font-black text-emerald-600 mb-1">25%</div>
            <div className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Scholarship</div>
            <p className="text-xs text-gray-600">Score 60% to 74% Marks in T-MAT</p>
          </div>
        </div>
      </div>

      {/* Required Documents Section */}
      <div className="max-w-4xl mx-auto mt-12 bg-slate-50 border border-slate-200/80 rounded-3xl p-8">
        <h3 className="text-xl sm:text-2xl font-bold text-[#1e1b4b] mb-4 flex items-center gap-2">
          <ClipboardCheck className="w-6 h-6 text-[#5B2D7C]" /> Checklist of Required Documents
        </h3>
        <ul className="grid sm:grid-cols-2 gap-3 text-sm text-gray-700 font-medium">
          <li className="flex items-center gap-2">✅ 4 Recent Passport-size Photographs</li>
          <li className="flex items-center gap-2">✅ Mark sheet copy of previous qualifying exam</li>
          <li className="flex items-center gap-2">✅ Aadhaar Card or Valid Student ID Proof</li>
          <li className="flex items-center gap-2">✅ T-MAT Admit Card & Score Card</li>
          <li className="flex items-center gap-2">✅ Duly filled Admission Form</li>
          <li className="flex items-center gap-2">✅ Parent/Guardian Contact & ID Details</li>
        </ul>
      </div>

      {/* Contextual Link Box */}
      <div className="max-w-4xl mx-auto mt-16 text-center bg-purple-50 p-8 rounded-2xl shadow-sm border border-purple-100">
        <h3 className="text-xl sm:text-2xl font-bold text-[#522871] mb-3 flex items-center justify-center gap-2">
          <BookOpen className="w-6 h-6 text-purple-600" /> Explore Courses & Student Services
        </h3>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          Need help picking the right batch? Explore details of our{" "}
          <Link to="/iit-jee-coaching-in-patna" className="font-bold text-[#5B2D7C] hover:underline">
            IIT-JEE Coaching
          </Link>,{" "}
          <Link to="/neet-coaching-in-patna" className="font-bold text-[#5B2D7C] hover:underline">
            NEET UG Medical Prep
          </Link>, and{" "}
          <Link to="/class-6-to-10" className="font-bold text-[#5B2D7C] hover:underline">
            Classes 6-10 Foundation
          </Link>. You can also check our past{" "}
          <Link to="/result" className="font-bold text-[#b72e2f] hover:underline">
            Exam Results & Toppers
          </Link>, evaluate your rank with our{" "}
          <Link to="/rank-predictor" className="font-bold text-[#5B2D7C] hover:underline">
            JEE & NEET Rank Predictor
          </Link>, visit the{" "}
          <Link to="/student-portal" className="font-bold text-[#5B2D7C] hover:underline">
            Student Portal
          </Link>, learn more{" "}
          <Link to="/about" className="font-bold text-[#5B2D7C] hover:underline">
            About Team Excellent
          </Link>, or reach out on our{" "}
          <Link to="/contact" className="font-bold text-[#b72e2f] hover:underline">
            Contact Us Page
          </Link>.
        </p>
      </div>

      <FAQSection faqs={faqs} />
    </section>

    <EnrollmentForm
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      initialCourse={modalCourse}
    />
  </div>
  );
}

export default AdmissionProcess;
