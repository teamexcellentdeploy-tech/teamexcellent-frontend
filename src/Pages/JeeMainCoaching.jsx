import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  BookOpen, Target, Award, Layers, ArrowRight, GraduationCap, 
  HelpCircle, Trophy, TrendingUp, ClipboardCheck, Clock, Users, 
  MapPin, Phone, Mail, CheckCircle, ChevronDown, Sparkles, Star, Shield
} from "lucide-react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import EnrollmentForm from "../Components/EnrollmentForm";
import TrustedSection from "../Components/TrustedSection";
import Testimonials from "../Components/Testimonials";
import ExploreLinks from "../Components/ExploreLinks";
import FAQSection from "../Components/FAQSection";

export default function JeeMainCoaching() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCourse, setModalCourse] = useState("");
  const [openFaq, setOpenFaq] = useState(null);

  const handleOpenModal = (course = "") => {
    setModalCourse(course);
    setIsModalOpen(true);
  };

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const strategyPhases = [
    { phase: "Phase 1", title: "Build Strong Fundamentals", desc: "Understand the basic concepts of Physics, Chemistry, and Mathematics thoroughly." },
    { phase: "Phase 2", title: "Complete the Syllabus", desc: "Follow a structured academic plan to finish all syllabus chapters systematically." },
    { phase: "Phase 3", title: "Practice JEE Main Questions", desc: "Solve topic-wise, chapter-wise, previous-year questions and mixed-problem worksheets." },
    { phase: "Phase 4", title: "Test Your Preparation", desc: "Take regular chapter tests, part-syllabus tests, and full-syllabus NTA-pattern mock tests." },
    { phase: "Phase 5", title: "Analyze Mistakes", desc: "Identify conceptual errors, calculation slips, speed bottlenecks, and repeated errors." },
    { phase: "Phase 6", title: "Revise & Repeat", desc: "Regularly revise core concepts, complex formulas, and previously incorrect questions." }
  ];

  const subjects = [
    {
      name: "JEE Main Physics",
      desc: "Physics preparation combines conceptual understanding with numerical practice. We focus on visualization and step-by-step problem solving.",
      topics: ["Mechanics (Kinematics, Laws of Motion, Work-Energy-Power, Rotational Motion)", "Thermodynamics & Kinetic Theory", "Electrostatics & Current Electricity", "Magnetism & Electromagnetic Induction", "Optics & Wave Motion", "Modern Physics & Semiconductor Electronics"]
    },
    {
      name: "JEE Main Chemistry",
      desc: "Chemistry is highly scoring and divided into three core focus areas with customized methodologies.",
      topics: [
        "Physical Chemistry: Focus on chemical calculations, numeric formulas, and calculation speed.",
        "Organic Chemistry: Focus on named reactions, step-by-step mechanisms, and reaction conversions.",
        "Inorganic Chemistry: Focus on periodic trends, chemical properties, and NCERT-based core preparation."
      ]
    },
    {
      name: "JEE Main Mathematics",
      desc: "Mathematics requires consistent problem-solving practice and speed tricks. We guide students through graduated difficulty levels.",
      topics: ["Algebra (Matrices, Determinants, Complex Numbers, Probability)", "Calculus (Differential & Integral, Limits, Continuity)", "Coordinate Geometry & Trigonometry", "Vectors & Three-Dimensional Geometry", "Mathematical Reasoning & Statistics"]
    }
  ];

  const facultyList = [
    {
      name: "Albert Newwel",
      subject: "Physics",
      qualification: "M.Tech, IIT-BHU, Varanasi",
      experience: "12+ Years",
      specialization: "Mechanics & Electrodynamics"
    },
    {
      name: "Dr. S. K. Singh",
      subject: "Chemistry",
      qualification: "Ph.D. in Chemistry, IIT Delhi",
      experience: "10+ Years",
      specialization: "Organic & Physical Chemistry"
    },
    {
      name: "R. K. Verma",
      subject: "Mathematics",
      qualification: "B.Tech, IIT Kanpur",
      experience: "8+ Years",
      specialization: "Calculus & Geometry"
    }
  ];

  const chooseCriteria = [
    "Faculty teaching experience and academic credentials",
    "Structured syllabus schedule and day-wise calendar",
    "Batch sizes to enable teacher-student interaction",
    "Updated study packages, DPPs, and formula sheets",
    "Computer-Based Testing (CBT) matching NTA pattern",
    "1-on-1 doubt desks and mentorship support",
    "Student performance progress tracking reports",
    "Previous JEE Main results and parent testimonials",
    "Fee structure transparency and installment options",
    "Safe center location and easy public transit access"
  ];

  const admissionSteps = [
    { step: "Step 1", title: "Enquiry", desc: "Student/parent contacts Team Excellent via form, phone, or center visit." },
    { step: "Step 2", title: "Counselling", desc: "Academic counselors discuss student objectives and target exams." },
    { step: "Step 3", title: "Course Selection", desc: "Select the appropriate JEE Main program based on academic level." },
    { step: "Step 4", title: "Registration", desc: "Complete the registration process and documentation." },
    { step: "Step 5", title: "Batch Allocation", desc: "Student is assigned to a batch, receiving class schedules and materials." },
    { step: "Step 6", title: "Classes Begin", desc: "Regular classroom classes, doubt support, and test series start." }
  ];

  const faqs = [
    {
      question: "What is JEE Main coaching?",
      answer: "JEE Main coaching provides structured classroom teaching, customized assignments, and mock test practices designed to help engineering aspirants master basic NCERT concepts, formulas, and speed calculations required to score high in the JEE Main exam."
    },
    {
      question: "Does Team Excellent provide JEE Main coaching in Patna?",
      answer: "Yes, Team Excellent provides specialized JEE Main coaching in Patna, combining highly experienced faculty with digital learning tools and exhaustive doubt support at our Saketpuri center."
    },
    {
      question: "Who can join JEE Main coaching at Team Excellent?",
      answer: "Students in Class 11, Class 12, or Repeater/Dropper students aiming for a seat in NITs, IIITs, or central engineering institutes can enroll in our dedicated JEE Main preparation courses."
    },
    {
      question: "What subjects are covered in JEE Main preparation?",
      answer: "Our preparation program covers Physics, Chemistry, and Mathematics in complete alignment with the official JEE Main syllabus specified by the NTA."
    },
    {
      question: "Does Team Excellent provide JEE Main study material?",
      answer: "Yes, we provide student-focused study materials, worksheets, Daily Practice Problems (DPPs), and pocket formula books curated specifically for the JEE Main pattern."
    },
    {
      question: "Are mock tests included in JEE Main preparation?",
      answer: "Yes, regular computer-based mock tests matching the actual NTA interface are included. Students can attempt these tests online on our dedicated Student Portal."
    },
    {
      question: "Does Team Excellent conduct regular JEE Main tests?",
      answer: "Yes, we conduct weekly chapter-wise tests and full-syllabus computer-based tests (CBT) to analyze student speed and OMR/CBT answer accuracy."
    },
    {
      question: "Is there a separate JEE Main batch?",
      answer: "Yes, we organize dedicated batches targeting JEE Main explicitly, in addition to our comprehensive Main + Advanced batches."
    },
    {
      question: "What is the JEE Main coaching fee?",
      answer: "Our course fees are highly competitive. Students can also secure up to 100% scholarship on coaching fees by performing well in the T-MAT Scholarship Test."
    },
    {
      question: "How can I enroll in JEE Main coaching?",
      answer: "You can visit our Saketpuri center in Patna near NMCH College, call us directly, or submit an online enquiry form on our website to initiate the process."
    }
  ];

  const seoClusters = [
    { label: "JEE Coaching in Patna", to: "/best-jee-coaching-in-patna" },
    { label: "Best JEE Coaching in Patna", to: "/best-jee-coaching-in-patna" },
    { label: "IIT JEE Coaching in Patna", to: "/best-jee-coaching-in-patna" },
    { label: "JEE Advanced Coaching in Patna", to: "/best-jee-coaching-in-patna" },
    { label: "JEE Dropper Coaching in Patna", to: "/jee-dropper-coaching-in-patna" },
    { label: "JEE Foundation Coaching in Patna", to: "/class-6-to-10" },
    { label: "JEE Coaching Fees in Patna", to: "/best-jee-coaching-in-patna" },
    { label: "JEE Admission in Patna", to: "/admission" },
    { label: "JEE Results", to: "/result" },
    { label: "JEE Faculty", to: "/about" }
  ];

  return (
    <>
      <Helmet>
        {/* Title & Description */}
        <title>JEE Main Coaching in Patna | JEE Main Preparation | Team Excellent</title>
        <meta 
          name="description" 
          content="Looking for JEE Main coaching in Patna? Explore Team Excellent's JEE Main preparation programs, faculty, study material, mock tests, PYQs, courses and admission details." 
        />

        {/* Keywords */}
        <meta 
          name="keywords" 
          content="JEE Main coaching in Patna, JEE Main coaching institute in Patna, JEE Main preparation in Patna, Best JEE Main coaching in Patna, JEE Main classes in Patna, IIT JEE Main coaching in Patna" 
        />

        {/* Open Graph */}
        <meta property="og:title" content="JEE Main Coaching in Patna | JEE Main Preparation | Team Excellent" />
        <meta property="og:description" content="Looking for JEE Main coaching in Patna? Explore Team Excellent's JEE Main preparation programs, faculty, study material, mock tests, PYQs, courses and admission details." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://teamexcellentcareerinstitute.in/jee-main-coaching-in-patna" />
        <link rel="canonical" href="https://teamexcellentcareerinstitute.in/jee-main-coaching-in-patna" />
        <meta property="og:image" content="https://teamexcellentcareerinstitute.in/logo192.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="JEE Main Coaching in Patna | JEE Main Preparation | Team Excellent" />
        <meta name="twitter:description" content="Looking for JEE Main coaching in Patna? Explore Team Excellent's JEE Main preparation programs." />
        <meta name="twitter:image" content="https://teamexcellentcareerinstitute.in/logo192.png" />

        {/* Course Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "JEE Main Coaching Program",
            "description": "Targeted coaching program focusing on speed, accuracy, NCERT concepts, and simulated test series for JEE Main aspirants.",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "Team Excellent Career Institute",
              "url": "https://teamexcellentcareerinstitute.in/"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "498"
            }
          })}
        </script>

        {/* EducationalOrganization & LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "EducationalOrganization", "School", "ProfessionalService", "Organization"],
            "@id": "https://teamexcellentcareerinstitute.in/#organization",
            "name": "Team Excellent Career Institute",
            "alternateName": "Team Excellent Coaching Institute Patna",
            "url": "https://teamexcellentcareerinstitute.in",
            "logo": "https://teamexcellentcareerinstitute.in/logo192.png",
            "image": "https://teamexcellentcareerinstitute.in/logo192.png",
            "description": "Team Excellent Career Institute is a premier coaching institute in Patna, Bihar, providing IIT-JEE, NEET, and foundation preparation programs (Class 6-10) for students aiming for engineering and medical entrance exams.",
            "telephone": "+91-9942000371",
            "email": "teamexcellentpatna@gmail.com",
            "hasMap": "https://www.google.com/maps?cid=16308605353139354202",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Near NMCH College, Bajar Samiti, New Kunj Colony, Saketpuri",
              "addressLocality": "Patna",
              "addressRegion": "Bihar",
              "postalCode": "800016",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "25.603192",
              "longitude": "85.174559"
            }
          })}
        </script>

        {/* BreadcrumbList Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://teamexcellentcareerinstitute.in/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "JEE Main Coaching in Patna",
                "item": "https://teamexcellentcareerinstitute.in/jee-main-coaching-in-patna"
              }
            ]
          })}
        </script>
      </Helmet>

      <Navbar />

      <main id="main-content">
        {/* 1. H1 Header Section */}
        <section className="relative w-full pt-[130px] lg:pt-[160px] pb-16 bg-[#fafafc] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#e2e0ff_1px,transparent_1px)] [background-size:24px_24px] opacity-35" />
          <div className="absolute -top-30 left-1/4 -z-10 h-[350px] w-[350px] rounded-full bg-purple-200/30 blur-[80px]" />
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50/80 px-4 py-1.5 text-xs font-semibold text-[#5B2D7C] shadow-sm">
                <Trophy className="w-4 h-4 text-[#b72e2f]" />
                JEE Main Target Program
              </span>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#1e1b4b] leading-tight">
                JEE Main Coaching in Patna
              </h1>
              
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#5B2D7C] to-[#b72e2f] rounded-full mt-2" />
              
              <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-medium mt-4">
                Preparing for JEE Main requires strong conceptual understanding, consistent practice, effective time management and regular performance evaluation. Team Excellent Career Institute provides structured JEE Main preparation in Patna for students targeting engineering admissions through JEE Main.
                <br/><br/>
                Our preparation approach focuses on Physics, Chemistry and Mathematics, with emphasis on concept clarity, problem-solving, previous-year questions, regular testing, revision and performance improvement. Students can choose a preparation program according to their class, academic level and JEE Main goals.
              </p>

              <div className="flex flex-wrap gap-4 mt-6">
                <button 
                  onClick={() => handleOpenModal("JEE Main Inquiry")}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#5B2D7C] hover:bg-[#472164] px-6 py-3.5 text-sm font-bold text-white shadow-md transition duration-200 active:scale-95"
                >
                  Enquire Now
                </button>
                <Link 
                  to="/admission" 
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 hover:border-[#5B2D7C]/60 hover:bg-[#5B2D7C]/5 transition duration-200"
                >
                  Scholarship Exam Details
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted Section (A Name You Can Trust) */}
        <TrustedSection />

        {/* JEE Main Preparation in Patna */}
        <section className="w-full py-16 px-4 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                JEE Main Preparation in Patna
              </h2>
              <div className="w-16 h-1 bg-[#5B2D7C] mx-auto mt-3 rounded-full" />
              <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
                JEE Main is a highly competitive engineering entrance examination, so preparation should go beyond simply completing the syllabus.
              </p>
            </div>

            <div className="max-w-3xl mx-auto bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-sm">
              <h3 className="font-bold text-base text-slate-800 mb-4">A structured JEE Main preparation program should help students:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Understand fundamental concepts deeply",
                  "Complete the prescribed syllabus systematically",
                  "Practice JEE Main-level questions consistently",
                  "Solve and analyze previous-year questions",
                  "Improve calculation speed and numerical skills",
                  "Improve test accuracy and minimize negative marking",
                  "Manage examination time effectively",
                  "Identify and repair weak chapters early",
                  "Revise core formulas and theories regularly",
                  "Practice full-length mock tests on simulated CBT portals"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 font-semibold">
                    <CheckCircle className="w-4.5 h-4.5 text-purple-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Team Excellent for JEE Main Preparation? */}
        <section className="w-full py-16 px-4 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                Why Choose Team Excellent for JEE Main Preparation?
              </h2>
              <div className="w-16 h-1 bg-[#5B2D7C] mx-auto mt-3 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h3 className="font-bold text-base text-slate-800 mb-2">Concept-Focused Learning</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Strong fundamentals are important for solving JEE Main questions efficiently. Our classroom lectures focus on understanding concepts before moving to extensive question practice.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h3 className="font-bold text-base text-slate-800 mb-2">Regular Practice Sheets</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Consistent question practice helps students become familiar with different question types and improve speed and accuracy.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h3 className="font-bold text-base text-slate-800 mb-2">Previous-Year Questions</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  JEE Main PYQs are an important part of our preparation, helping students understand the exact style and level of questions asked in the examinations.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h3 className="font-bold text-base text-slate-800 mb-2">Mock Tests & Assessment</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Regular tests help students evaluate accuracy, speed, time management, and subject-wise chapter performance to identify weak areas.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h3 className="font-bold text-base text-slate-800 mb-2">Doubt Support</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Students have access to dedicated academic doubt counters when they encounter difficult concepts or numerical problems.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h3 className="font-bold text-base text-slate-800 mb-2">Academic Mentorship</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We track and monitor student progression to build structured learning pathways matching individual student capabilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* JEE Main Preparation Strategy */}
        <section className="w-full py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                JEE Main Preparation Strategy
              </h2>
              <div className="w-16 h-1 bg-[#b72e2f] mx-auto mt-3 rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
              {strategyPhases.map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-100 relative">
                  <span className="text-xs font-black text-purple-600">{item.phase}</span>
                  <h3 className="font-extrabold text-sm text-[#1e1b4b] mt-2 mb-1">{item.title}</h3>
                  <p className="text-[10px] text-slate-500 leading-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Physics, Chemistry & Mathematics Coaching */}
        <section className="w-full py-16 px-4 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                Subject-Wise JEE Main Coaching
              </h2>
              <div className="w-16 h-1 bg-[#5B2D7C] mx-auto mt-3 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {subjects.map((sub, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="font-extrabold text-[#1e1b4b] text-lg mb-2 pb-2 border-b border-slate-200">
                      {sub.name}
                    </h3>
                    <p className="text-xs text-slate-400 mb-4">{sub.desc}</p>
                    <ul className="space-y-3">
                      {sub.topics.map((topic, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2 text-xs text-slate-600 font-semibold">
                          <CheckCircle className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* JEE Main Mock Tests & Test Series */}
        <section className="w-full py-16 px-4 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                JEE Main Mock Tests & Test Series
              </h2>
              <div className="w-16 h-1 bg-[#b72e2f] mx-auto mt-3 rounded-full" />
              <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
                Our mock tests closely simulate the actual computer-based test formats.
              </p>
            </div>

            <div className="max-w-3xl mx-auto bg-slate-50 border border-slate-100 rounded-3xl p-8 text-center">
              <h3 className="font-bold text-base text-slate-800 mb-4">JEE Main Mock Test Sequence:</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                {["Chapter Tests", "Part-Syllabus Tests", "Full-Syllabus Tests", "JEE Main Pattern CBT Mocks"].map((t, idx) => (
                  <div key={idx} className="bg-white p-3.5 rounded-xl border border-slate-100 font-bold text-xs text-slate-700">
                    {t}
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                After every mock examination, students receive detailed analytics covering test scores, accuracy leaks, time spent per subject, and chapter-wise performance reports to design personalized revision schemes.
              </p>
            </div>
          </div>
        </section>

        {/* JEE Main Previous-Year Questions */}
        <section className="w-full py-16 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                JEE Main Previous-Year Questions
              </h2>
              <div className="w-16 h-1 bg-[#5B2D7C] mx-auto mt-3 rounded-full" />
            </div>

            <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h3 className="font-bold text-base text-slate-800 mb-4">Why Practice JEE Main PYQs?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Understand examination question structures and formats",
                  "Identify high-weightage chapters and repeated concepts",
                  "Practice genuine board-approved examination questions",
                  "Develop speed and quick problem-solving accuracy",
                  "Understand difficulty levels across different years",
                  "Build confidence under timed pressure conditions"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 font-semibold">
                    <CheckCircle className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Courses Offered */}
        <section className="w-full py-16 px-4 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                JEE Main Prep Programs
              </h2>
              <div className="w-16 h-1 bg-[#b72e2f] mx-auto mt-3 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Class 11 */}
              <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100 flex flex-col justify-between shadow-sm">
                <div>
                  <h3 className="font-bold text-base text-[#1e1b4b] mb-2">Class 11 Target Course</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6">
                    For students starting in Class 11. Focuses on building fundamental concepts, extensive Physics/Chemistry/Mathematics drills, early PYQ exposure, and weekly chapter tests to balance boards and engineering goals.
                  </p>
                </div>
                <Link to="/iit-jee-coaching-in-patna" className="w-full py-2.5 bg-white text-center text-xs font-bold text-[#5B2D7C] border border-slate-200 hover:bg-purple-50 rounded-xl transition">
                  Explore Class 11 Program ➔
                </Link>
              </div>

              {/* Class 12 */}
              <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100 flex flex-col justify-between shadow-sm">
                <div>
                  <h3 className="font-bold text-base text-[#1e1b4b] mb-2">Class 12 Target Course</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6">
                    For Class 12 students. Focuses on completing the Class 12 syllabus efficiently, revision of Class 11 core topics, timed mock test practice, and balancing school board examinations.
                  </p>
                </div>
                <Link to="/best-jee-coaching-in-patna" className="w-full py-2.5 bg-white text-center text-xs font-bold text-[#5B2D7C] border border-slate-200 hover:bg-purple-50 rounded-xl transition">
                  Explore Class 12 Program ➔
                </Link>
              </div>

              {/* Droppers */}
              <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100 flex flex-col justify-between shadow-sm">
                <div>
                  <h3 className="font-bold text-base text-[#1e1b4b] mb-2">JEE Main Dropper Batch</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6">
                    For Class 12 passout repeaters. Focuses on diagnosis and improvement, previous attempt analysis, complete syllabus revision, intensive mock test cycles, and rank-boosting strategy.
                  </p>
                </div>
                <Link to="/jee-dropper-coaching-in-patna" className="w-full py-2.5 bg-white text-center text-xs font-bold text-[#5B2D7C] border border-slate-200 hover:bg-purple-50 rounded-xl transition">
                  Explore Dropper Program ➔
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* JEE Main Study Material */}
        <section className="w-full py-16 px-4 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                JEE Main Study Material
              </h2>
              <div className="w-16 h-1 bg-[#5B2D7C] mx-auto mt-3 rounded-full" />
              <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
                Comprehensive academic resources provided to all classroom students.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto text-center font-bold text-xs text-slate-700">
              {["Classroom Lecture Notes", "Practice Assignment Sheets", "Daily Practice Problems (DPPs)", "Chapter Questions & Worksheets", "JEE Main PYQ Banks", "Full-length Mock Papers", "Formula Revision Guides", "Formula Sheets"].map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* JEE Main Faculty at Team Excellent */}
        <section className="w-full py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                JEE Main Faculty & Mentorship
              </h2>
              <div className="w-16 h-1 bg-[#b72e2f] mx-auto mt-3 rounded-full" />
              <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
                Our faculty members bring years of teaching expertise to the classroom.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {facultyList.map((fac, idx) => (
                <div key={idx} className="bg-slate-50 rounded-3xl border border-slate-100 p-6 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#5B2D7C] flex items-center justify-center font-bold text-lg mb-4">
                      {fac.name[0]}
                    </div>
                    <h3 className="font-black text-[#1e1b4b] text-lg">{fac.name}</h3>
                    <p className="text-xs font-bold text-[#b72e2f] uppercase tracking-wider">{fac.subject} Faculty</p>
                    
                    <div className="mt-4 space-y-2 text-xs text-slate-500">
                      <p><strong>Qualification:</strong> {fac.qualification}</p>
                      <p><strong>Experience:</strong> {fac.experience} Teaching</p>
                      <p><strong>Specialization:</strong> {fac.specialization}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Should Join */}
        <section className="w-full py-16 px-4 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                Who Should Join JEE Main Coaching?
              </h2>
              <div className="w-16 h-1 bg-[#5B2D7C] mx-auto mt-3 rounded-full" />
            </div>

            <div className="max-w-2xl mx-auto bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
              <ul className="space-y-4">
                {[
                  "Class 11 students beginning JEE preparation early with a step-by-step foundation",
                  "Class 12 students targeting engineering admissions through JEE Main exam targets",
                  "Students who need daily doubt-solving counters and 1-on-1 support",
                  "Students who require structured classroom study plans and NTA CBT test portals",
                  "Aspirants looking for regular performance reviews, parent alerts, and counseling guidance",
                  "Dropper candidates preparing for another dedicated JEE attempt after Class 12"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs text-slate-600 font-semibold">
                    <CheckCircle className="w-4.5 h-4.5 text-purple-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* How to Choose JEE Main Coaching in Patna? */}
        <section className="w-full py-16 px-4 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                How to Choose JEE Main Coaching in Patna?
              </h2>
              <div className="w-16 h-1 bg-[#b72e2f] mx-auto mt-3 rounded-full" />
              <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
                Before choosing an institute, students and parents should compare key academic parameters.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {chooseCriteria.map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start gap-2.5 text-xs text-slate-700 font-semibold">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* JEE Main Coaching Fees in Patna */}
        <section className="w-full py-16 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                JEE Main Coaching Fees in Patna
              </h2>
              <div className="w-16 h-1 bg-[#5B2D7C] mx-auto mt-3 rounded-full" />
            </div>

            <div className="max-w-3xl mx-auto bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
              <h3 className="font-bold text-base text-slate-800 mb-3">JEE Main Coaching Fees at Team Excellent</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
                JEE Main coaching fees vary according to the course, batch, and duration. Contact Team Excellent for the current fee structure, available T-MAT scholarships, and admission offers.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => handleOpenModal("JEE Main Fees Enquiry")}
                  className="px-6 py-3 bg-[#5B2D7C] text-white text-xs font-bold rounded-xl hover:bg-[#472164] transition"
                >
                  Inquire Fee Structure
                </button>
                <Link 
                  to="/admission" 
                  className="px-6 py-3 bg-white text-slate-700 text-xs font-bold rounded-xl border border-slate-200 hover:border-[#5B2D7C]/60 hover:bg-[#5B2D7C]/5 transition"
                >
                  Scholarship Concessions
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Team Excellent Career Institute - Patna */}
        <section className="w-full py-16 px-4 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                Team Excellent Career Institute – Saketpuri, Patna
              </h2>
              <div className="w-16 h-1 bg-[#b72e2f] mx-auto mt-3 rounded-full" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-4xl mx-auto items-center">
              <div className="lg:col-span-6 space-y-5 text-left">
                <p className="text-xs text-slate-500 leading-relaxed">
                  Our institute is located in Saketpuri, Patna, Bihar, providing state-of-the-art classroom facilities, computer-based test labs, and academic mentorship spaces for JEE Main aspirants.
                </p>
                <div className="space-y-3.5 text-xs text-slate-600 font-semibold">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                    <span><strong>Address:</strong> New Kunj Colony, Saketpuri, Patna, Bihar 800006</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Phone className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                    <span><strong>Contact Helpline:</strong> +91 9942000371</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Clock className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                    <span><strong>Center Hours:</strong> Mon - Sat (8:00 AM to 8:00 PM)</span>
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6 bg-slate-50 p-6 rounded-3xl border border-slate-150">
                <h4 className="font-bold text-sm text-[#1e1b4b] mb-3">Verified Local Presence</h4>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  Team Excellent is publicly listed at New Kunj Colony, Saketpuri, Patna, Bihar 800006 with a 4.8/5 rating from 498 reviews on Google Business Listing.
                </p>
                <div className="bg-white p-4 rounded-xl border border-slate-100 flex items-center justify-center gap-2">
                  <Shield className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-[10px] text-slate-600 font-bold">4.8 Rating | Verified Google Review Proofpoints</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* JEE Main Admission in Patna */}
        <section className="w-full py-16 px-4 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                JEE Main Admission Process
              </h2>
              <div className="w-16 h-1 bg-[#5B2D7C] mx-auto mt-3 rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
              {admissionSteps.map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-100/60 relative">
                  <span className="text-xs font-black text-purple-600">{item.step}</span>
                  <h3 className="font-extrabold text-sm text-[#1e1b4b] mt-2 mb-1">{item.title}</h3>
                  <p className="text-[10px] text-slate-500 leading-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQSection faqs={faqs} />

        {/* Internal links segment */}
        <section className="w-full py-12 px-4 bg-slate-50 border-t border-slate-100">
          <div className="max-w-4xl mx-auto text-center">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Related Engineering Resources</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {seoClusters.map((cluster, idx) => (
                <Link 
                  key={idx} 
                  to={cluster.to} 
                  className="px-3 py-1.5 bg-white hover:bg-purple-50 text-[10px] text-slate-500 hover:text-[#5B2D7C] border border-slate-200/65 hover:border-purple-200 font-bold rounded-lg transition"
                >
                  {cluster.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full py-20 px-4 bg-gradient-to-br from-[#5B2D7C] to-[#3F1D5B] text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-800/20 via-transparent to-transparent pointer-events-none" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center gap-6">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Start Your JEE Main Preparation with Team Excellent
            </h2>
            
            <p className="text-purple-100 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
              Build your JEE Main preparation with structured learning, regular practice, mock tests, revision and academic guidance. Explore the available JEE Main programs at Team Excellent Career Institute and choose the preparation plan that matches your academic stage and goals.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <button 
                onClick={() => handleOpenModal("JEE Main CTA Enquiry")}
                className="px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-purple-950 font-black rounded-xl text-sm sm:text-base transition shadow-md active:scale-95 flex items-center gap-2"
              >
                Enquire Now
              </button>
              <button 
                onClick={() => handleOpenModal("JEE Main Book Counselling")}
                className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-sm sm:text-base border border-white/20 transition active:scale-95"
              >
                Book Counselling
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <EnrollmentForm 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        initialCourse={modalCourse} 
      />
    </>
  );
}
