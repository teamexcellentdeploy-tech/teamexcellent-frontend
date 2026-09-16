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
import StudyMaterialSection from "../Components/StudyMaterialSection";

export default function NeetClass11() {
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

  const whyChooseItems = [
    {
      title: "Concept-Based Teaching",
      desc: "Strong fundamentals help students understand and apply concepts while solving NEET questions. Classroom teaching focuses on explaining concepts clearly before moving to extensive practice."
    },
    {
      title: "Experienced Faculty",
      desc: "Students receive subject-wise preparation covering the major components of the NEET syllabus from senior medical/engineering prep mentors."
    },
    {
      title: "Physics, Chemistry & Biology Preparation",
      desc: "Complete comprehensive syllabus coverage matching standard NCERT line-by-line guidelines, backed by practice modules."
    },
    {
      title: "Regular Practice Sheets",
      desc: "Topic-wise worksheets, Assignments, and Daily Practice Problems (DPPs) are provided to build calculation speed and memory."
    },
    {
      title: "Mock Tests & Assessment",
      desc: "NTA-pattern test series simulating actual exam conditions. Helps students analyze speed limits, accuracy leaks, and time management."
    },
    {
      title: "Doubt Support",
      desc: "Dedicated doubt desks where students sit 1-on-1 with teachers to resolve numeric and conceptual biology/physics/chemistry difficulties."
    }
  ];

  const methodologyPhases = [
    { phase: "Phase 1", title: "Concept Building", desc: "Build strong fundamentals in Physics, Chemistry, and Biology from base NCERT levels." },
    { phase: "Phase 2", title: "Syllabus Coverage", desc: "Complete the NEET syllabus systematically with classroom teaching and guided practice." },
    { phase: "Phase 3", title: "Question Practice", desc: "Solve topic-wise, chapter-wise, NCERT-based, previous-year, and NEET-level mock questions." },
    { phase: "Phase 4", title: "Regular Testing", desc: "Take weekly chapter-wise and monthly cumulative tests to evaluate actual preparation metrics." },
    { phase: "Phase 5", title: "Performance Analysis", desc: "Identify weak chapters, incorrect questions, conceptual mistakes, and accuracy issues." },
    { phase: "Phase 6", title: "Revision", desc: "Repeated revision of NCERT concepts, formulas, important chemical reactions, diagrams, and incorrect questions." }
  ];

  const subjects = [
    {
      name: "NEET Physics",
      topics: [
        "Mechanics (Kinematics, Laws of Motion, Work-Energy-Power, Rotational Motion, Gravitation)",
        "Thermodynamics & Kinetic Theory",
        "Electrostatics & Current Electricity",
        "Magnetism & Electromagnetic Induction",
        "Optics & Wave Motion",
        "Modern Physics & Semiconductor Electronics",
        "Focus: Concept clarity, formula application, and numerical problem solving"
      ]
    },
    {
      name: "NEET Chemistry",
      topics: [
        "Physical Chemistry: Focus on chemical concepts, formulas, and numerical calculations.",
        "Organic Chemistry: Focus on reaction mechanisms, named reactions, and structural conversions.",
        "Inorganic Chemistry: Focus on periodic trends, chemical properties, coordination compounds, and NCERT-based preparation."
      ]
    },
    {
      name: "NEET Biology",
      topics: [
        "NCERT core reading and line-by-line concept checks",
        "Human Biology & Physiology systems",
        "Plant Biology, Botany & Plant Physiology",
        "Genetics, Heredity, and Molecular Basis of Inheritance",
        "Ecology, Environmental Biology & Adaptation profiles",
        "Cell Biology & Division cycles",
        "Biotechnology processes and applications"
      ]
    }
  ];

  const facultyList = [
    {
      name: "Dr. S. K. Singh",
      subject: "Biology",
      qualification: "M.D. / Ph.D. in Life Sciences, BHU",
      experience: "12+ Years",
      specialization: "Human Physiology & Genetics"
    },
    {
      name: "Albert Newwel",
      subject: "Physics",
      qualification: "M.Tech, IIT-BHU, Varanasi",
      experience: "12+ Years",
      specialization: "Mechanics & Electrodynamics"
    },
    {
      name: "R. K. Verma",
      subject: "Chemistry",
      qualification: "B.Tech, IIT Kanpur",
      experience: "8+ Years",
      specialization: "Organic & Physical Chemistry"
    }
  ];

  const chooseCriteria = [
    "Faculty teaching experience and medical exam success profiles",
    "Structured syllabus calendar and systematic lecture flow",
    "Small batch sizes to ensure individual attention",
    "NCERT-focused study modules, DPPs, and workbook sheets",
    "Mock test schedule matching the latest NEET UG patterns",
    "Dedicated doubt-solving desks and 1-on-1 counseling support",
    "Detailed student performance tracking and attendance alerts",
    "Verified previous exam results and rankers",
    "Transparent fees structure and installment plans",
    "Location safety and convenient landmark accessibility"
  ];

  const admissionSteps = [
    { step: "Step 1", title: "Enquiry", desc: "Student/parent contacts Team Excellent via form, phone, or center visit." },
    { step: "Step 2", title: "Counselling", desc: "Academic counselors discuss student objectives and target exams." },
    { step: "Step 3", title: "Course Selection", desc: "Select the appropriate NEET program based on academic level." },
    { step: "Step 4", title: "Registration", desc: "Complete the registration process and documentation." },
    { step: "Step 5", title: "Batch Allocation", desc: "Student is assigned to a batch, receiving class schedules and materials." },
    { step: "Step 6", title: "Classes Begin", desc: "Regular classroom classes, doubt support, and test series start." }
  ];

  const faqs = [
    {
      q: "What is NEET coaching in Patna?",
      a: "NEET coaching provides structured preparation for the NEET UG medical entrance exam through daily classroom sessions, study materials, mock tests, and faculty guidance."
    },
    {
      q: "Which is the best NEET coaching in Patna?",
      a: "Parents and students should compare faculty credentials, batch size limits, NCERT study package quality, doubt-clearing counters, and fee structures before selecting an institute."
    },
    {
      q: "Does Team Excellent provide NEET coaching?",
      a: "Yes, Team Excellent Career Institute offers dedicated NEET UG preparation courses in Patna, including Class 11, Class 12, and Dropper programs."
    },
    {
      q: "Does NEET coaching cover Biology, Chemistry, and Physics?",
      a: "Yes, NEET preparation covers all three core science subjects, with Biology (Botany & Zoology) constituting 50% of the total exam weightage."
    },
    {
      q: "Does Team Excellent provide NEET mock tests?",
      a: "Yes, we conduct weekly chapter-wise tests and cumulative NTA-pattern mock tests with detailed performance reports."
    },
    {
      q: "Does Team Excellent provide NEET PYQs?",
      a: "Yes, NEET Previous-Year Questions (PYQs) are fully integrated into our study packages, assignments, and test series."
    },
    {
      q: "Is NEET coaching available for Class 11 students?",
      a: "Yes, we offer a dedicated 2-Year Program for Class 11 students starting from basic concepts up to competitive benchmarks."
    },
    {
      q: "Is NEET coaching available for Class 12 students?",
      a: "Yes, we offer a 1-Year Program for Class 12 students focusing on board exams alongside intensive NEET revision."
    },
    {
      q: "Does Team Excellent offer NEET coaching for droppers?",
      a: "Yes, we have a dedicated NEET Droppers Batch. Please refer to our Droppers page for detailed batch schedule and strategy."
    },
    {
      q: "What are NEET coaching fees in Patna?",
      a: "Fees vary by institute and course duration. Please visit our center or fill out the enquiry form for fee structures and scholarship options."
    }
  ];

  const seoClusters = [
    { label: "NEET Coaching in Patna", to: "/neet-coaching-in-patna" },
    { label: "NEET Droppers Batch", to: "/neet-dropper-coaching-in-patna" },
    { label: "NEET Class 12 Boards Prep", to: "/neet-class-12-in-patna" },
    { label: "NEET Scholarship (T-MAT)", to: "/scholarship" },
    { label: "NEET Admission Process", to: "/admission" },
    { label: "NEET Results & Stars", to: "/result" }
  ];

  return (
    <>
      <Helmet>
        {/* Title & Description */}
        <title>NEET Coaching in Patna | Top Medical UG Institute - Team Excellent</title>
        <meta 
          name="description" 
          content="Looking for the best NEET coaching in Patna? Team Excellent offers premier NEET UG medical entrance preparation with expert biology & chemistry mentors, regular NTA-pattern mock tests, and personalized guidance." 
        />

        {/* Keywords */}
        <meta 
          name="keywords" 
          content="neet coaching in patna, best neet coaching in patna, medical coaching patna, neet preparation institute in patna, team excellent patna, neet dropper batch patna, biology coaching patna" 
        />

        {/* Open Graph */}
        <meta property="og:title" content="NEET Coaching in Patna | Top Medical UG Institute - Team Excellent" />
        <meta property="og:description" content="Crack NEET UG with Patna's leading medical coaching institute. Expert doctor faculty, customized NCERT materials, and regular test series." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://teamexcellentcareerinstitute.in/neet-coaching-in-patna" />
        <link rel="canonical" href="https://teamexcellentcareerinstitute.in/neet-coaching-in-patna" />
        <meta property="og:image" content="https://teamexcellentcareerinstitute.in/logo192.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NEET Coaching in Patna | Team Excellent" />
        <meta name="twitter:description" content="Looking for NEET coaching in Patna? Explore Team Excellent's NEET UG preparation programs." />
        <meta name="twitter:image" content="https://teamexcellentcareerinstitute.in/logo192.png" />

        {/* EducationalOrganization & LocalBusiness Schema with E-E-A-T Authority */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "EducationalOrganization", "School", "ProfessionalService", "Organization"],
            "@id": "https://teamexcellentcareerinstitute.in/#organization",
            "name": "Team Excellent Career Institute",
            "alternateName": "Team Excellent NEET Coaching Patna",
            "url": "https://teamexcellentcareerinstitute.in",
            "logo": "https://teamexcellentcareerinstitute.in/logo192.png",
            "image": "https://teamexcellentcareerinstitute.in/logo192.png",
            "description": "Premier medical entrance coaching institute in Patna, offering 2-Year, 1-Year, and Dropper preparation for NEET UG aspirants.",
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
            },
            "founder": {
              "@type": "Person",
              "name": "Albert Newwel",
              "jobTitle": "Founder & Director",
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "IIT-BHU Varanasi"
              },
              "description": "M.Tech from IIT-BHU with 12+ years experience in medical & engineering coaching leadership."
            },
            "knowsAbout": [
              "NEET UG Medical Coaching",
              "Class 11 2-Year Medical Foundation",
              "NCERT Biology Diagrams & Mnemonics",
              "Medical Physics Practice"
            ],
            "sameAs": [
              "https://www.facebook.com/share/1JTxznYnFg/",
              "https://www.instagram.com/team.excellent.patna",
              "https://www.youtube.com/@teamexcellentpatna"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "512"
            }
          })}
        </script>

        {/* Course Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "NEET UG Coaching Program in Patna",
            "description": "Comprehensive classroom program for NEET UG covering Physics, Chemistry, and NCERT-based Biology with daily doubt counters and NTA-pattern test series.",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "Team Excellent Career Institute",
              "url": "https://teamexcellentcareerinstitute.in/"
            },
            "hasCourseInstance": [
              {
                "@type": "CourseInstance",
                "name": "NEET 2-Year Program (Class 11)",
                "courseMode": "Offline Classroom",
                "duration": "P2Y"
              },
              {
                "@type": "CourseInstance",
                "name": "NEET 1-Year Program (Class 12)",
                "courseMode": "Offline Classroom",
                "duration": "P1Y"
              },
              {
                "@type": "CourseInstance",
                "name": "NEET Dropper / Repeater Batch",
                "courseMode": "Offline Classroom",
                "duration": "P1Y"
              }
            ],
            "offers": {
              "@type": "Offer",
              "category": "Scholarship Available up to 100% via T-MAT",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>

        {/* FAQPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
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
                "name": "NEET Coaching in Patna",
                "item": "https://teamexcellentcareerinstitute.in/neet-coaching-in-patna"
              }
            ]
          })}
        </script>
      </Helmet>

      <Navbar />

      <main id="main-content">
        {/* 1. H1 Header Section */}
        <section className="relative w-full pt-[130px] lg:pt-[165px] pb-16 bg-[#fafafc] overflow-hidden">
          {/* Ambient background grid & glow shapes */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffe4e6_1px,transparent_1px)] [background-size:24px_24px] opacity-35" />
          <div className="absolute -top-30 left-1/4 -z-10 h-[350px] w-[350px] rounded-full bg-red-200/20 blur-[80px]" />
          <div className="absolute top-20 right-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-rose-100/25 blur-[90px]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Two-Column Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Column: Content */}
              <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-5 md:gap-6">
                
                {/* Badge */}
                <span className="inline-flex items-center gap-2 rounded-full border border-rose-100 bg-rose-50/80 px-4 py-1.5 text-xs font-semibold text-[#b72e2f] shadow-sm backdrop-blur-sm">
                  <Trophy className="w-4 h-4 text-[#b72e2f]" />
                  NEET UG Target Program
                </span>
                
                {/* H1 Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#1e1b4b] leading-tight">
                  NEET Coaching <br />
                  <span className="bg-gradient-to-r from-[#b72e2f] via-rose-600 to-[#5B2D7C] bg-clip-text text-transparent">
                    in Patna
                  </span>
                </h1>
                
                <div className="w-20 h-1.5 bg-[#b72e2f] rounded-full" />
                
                {/* Subtitle / Bullet Points */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                  Team Excellent Career Institute provides structured NEET coaching in Patna for students preparing for NEET UG. Our preparation program focuses on Physics, Chemistry, and Biology to build strong fundamentals, practice examination-level questions, and improve accuracy.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-2">
                  <div className="flex items-center gap-1.5 bg-amber-50/80 px-2.5 py-1 rounded-full border border-amber-200/60 shadow-sm">
                    <div className="flex gap-0.5 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-amber-800">4.8 Rating</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-500">
                    Trusted by Medical Aspirants & Parents in Bihar
                  </span>
                </div>

                {/* Key Benefits List */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-left w-full max-w-lg mt-2">
                  {[
                    "NCERT line-by-line concept mapping",
                    "Daily Practice Problems (DPPs)",
                    "NTA-pattern test series & feedback",
                    "Dedicated doubt clearance desks"
                  ].map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-center gap-2 text-xs text-slate-600 font-semibold">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-4">
                  <button 
                    onClick={() => handleOpenModal("NEET Hero Inquiry")}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#b72e2f] hover:bg-[#a02829] px-6 py-3.5 text-sm font-bold text-white shadow-md transition duration-200 active:scale-95"
                  >
                    Enquire Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <Link 
                    to="/admission" 
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 hover:border-[#b72e2f]/60 hover:bg-[#b72e2f]/5 transition duration-200"
                  >
                    Scholarship Test
                  </Link>
                </div>
              </div>
              
              {/* Right Column: Topper card */}
              <div className="lg:col-span-5 w-full flex justify-center items-center px-4">
                <div className="relative w-full max-w-sm sm:max-w-[320px] bg-white p-3.5 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100 overflow-hidden group">
                  <div className="absolute top-6 left-6 z-10 flex items-center gap-1.5 px-3 py-1 bg-amber-500 text-white rounded-full text-[10px] font-black uppercase tracking-wider shadow-md">
                    <Trophy className="w-3.5 h-3.5" />
                    NEET Achiever
                  </div>

                  <div className="relative aspect-[489/667] w-full overflow-hidden bg-slate-50 rounded-2xl border border-slate-50">
                    <img
                      src="/neet-result/01.jpg"
                      alt="NEET Topper - Team Excellent Patna Result"
                      className="w-full h-full object-cover rounded-2xl transform hover:scale-[1.02] transition-transform duration-500"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>

            </div>

            {/* Statistics Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-slate-200/60 pt-8 mt-16 max-w-5xl mx-auto">
              {[
                { value: "12+ Years", label: "Academic Mentorship", icon: <Clock className="w-5 h-5 text-[#b72e2f]" /> },
                { value: "100+ Selections", label: "NEET UG Placements", icon: <Award className="w-5 h-5 text-[#b72e2f]" /> },
                { value: "3000+ Students", label: "Mentored & Guided", icon: <Users className="w-5 h-5 text-[#b72e2f]" /> }
              ].map((stat, idx) => (
                <div key={idx} className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center shrink-0">
                    {stat.icon}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-800 text-base">{stat.value}</h3>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Trusted Section (A Name You Can Trust) */}
        <TrustedSection />

        {/* NEET Preparation in Patna */}
        <section className="w-full py-16 px-4 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                NEET Preparation in Patna
              </h2>
              <div className="w-16 h-1 bg-[#b72e2f] mx-auto mt-3 rounded-full" />
              <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
                NEET preparation is not only about completing the syllabus. Students need a consistent preparation system.
              </p>
            </div>

            <div className="max-w-3xl mx-auto bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-sm">
              <h3 className="font-bold text-base text-slate-800 mb-4">A structured NEET preparation program should help students combine:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Deep conceptual understanding of all topics",
                  "Line-by-line NCERT-focused study schedules",
                  "Consistent daily question practice",
                  "Solving previous-year question databases",
                  "Regular revision of memory-based chapters",
                  "Simulated NEET UG-pattern mock tests",
                  "OMR bubble-marking time management",
                  "Test accuracy and error reduction drills",
                  "1-on-1 daily doubt resolution desks",
                  "Detailed progress performance analysis"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 font-semibold">
                    <CheckCircle className="w-4.5 h-4.5 text-red-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Team Excellent for NEET Preparation? */}
        <section className="w-full py-16 px-4 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                Why Choose Team Excellent for NEET Preparation?
              </h2>
              <div className="w-16 h-1 bg-[#b72e2f] mx-auto mt-3 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {whyChooseItems.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-2">
                  <h3 className="font-bold text-base text-slate-800">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Structured NEET Study Plan */}
        <section className="w-full py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                Structured NEET Study Plan
              </h2>
              <div className="w-16 h-1 bg-[#b72e2f] mx-auto mt-3 rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
              {methodologyPhases.map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-100 relative">
                  <span className="text-xs font-black text-red-600">{item.phase}</span>
                  <h3 className="font-extrabold text-sm text-[#1e1b4b] mt-2 mb-1">{item.title}</h3>
                  <p className="text-[10px] text-slate-500 leading-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Subject-Wise NEET Coaching */}
        <section className="w-full py-16 px-4 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                Subject-Wise NEET Coaching
              </h2>
              <div className="w-16 h-1 bg-[#b72e2f] mx-auto mt-3 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {subjects.map((sub, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="font-extrabold text-[#1e1b4b] text-lg mb-2 pb-2 border-b border-slate-200">
                      {sub.name}
                    </h3>
                    <ul className="space-y-3">
                      {sub.topics.map((topic, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2 text-xs text-slate-600 font-semibold">
                          <CheckCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
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

        {/* NEET Physics Coaching in Patna */}
        <section className="w-full py-16 px-4 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                NEET Physics Coaching in Patna
              </h2>
              <div className="w-16 h-1 bg-[#b72e2f] mx-auto mt-3 rounded-full" />
              <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
                Physics can be challenging for many NEET aspirants because it requires both conceptual understanding and numerical problem solving.
              </p>
            </div>

            <div className="max-w-3xl mx-auto bg-slate-50 border border-slate-100 rounded-3xl p-8">
              <h3 className="font-bold text-base text-[#1e1b4b] mb-4">Physics Core Chapter Coverage:</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 text-center font-semibold text-xs text-slate-700">
                {["Mechanics", "Laws of Motion", "Work, Energy & Power", "Rotational Motion", "Gravitation", "Thermodynamics", "Electrostatics", "Current Electricity", "Magnetism", "Electromagnetic Induction", "Optics", "Modern Physics", "Semiconductor Electronics"].map((item, idx) => (
                  <div key={idx} className="bg-white p-3 rounded-lg border border-slate-150">
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 leading-relaxed text-center">
                We guide medical students progressively: from basic concepts → solved examples → topic assignments → Previous-Year Questions (PYQs) → timed mock examinations.
              </p>
            </div>
          </div>
        </section>

        {/* NEET Chemistry Coaching in Patna */}
        <section className="w-full py-16 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                NEET Chemistry Coaching in Patna
              </h2>
              <div className="w-16 h-1 bg-[#b72e2f] mx-auto mt-3 rounded-full" />
              <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
                Chemistry preparation requires a balanced approach to Physical, Organic, and Inorganic Chemistry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h3 className="font-bold text-[#b72e2f] mb-3">Physical Chemistry</h3>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li>• Detailed conceptual understanding</li>
                  <li>• Formula application sheets</li>
                  <li>• Extensive numerical worksheets</li>
                  <li>• Focus on calculation accuracy</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h3 className="font-bold text-[#b72e2f] mb-3">Organic Chemistry</h3>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li>• Step-by-step reaction mechanisms</li>
                  <li>• Named organic reactions list</li>
                  <li>• Synthesis pathway analysis</li>
                  <li>• Timed reaction-based quizzes</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h3 className="font-bold text-[#b72e2f] mb-3">Inorganic Chemistry</h3>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li>• NCERT reading checks</li>
                  <li>• Periodic properties analysis</li>
                  <li>• Chemical bonding conceptual maps</li>
                  <li>• Coordination compounds & inorganic logic</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* NEET Biology Coaching in Patna */}
        <section className="w-full py-16 px-4 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                NEET Biology Coaching in Patna
              </h2>
              <div className="w-16 h-1 bg-[#b72e2f] mx-auto mt-3 rounded-full" />
              <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
                Biology is 50% of the exam weightage. It requires extensive conceptual understanding and repeated revision.
              </p>
            </div>

            <div className="max-w-3xl mx-auto bg-slate-50 border border-slate-100 rounded-3xl p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Repeated, active NCERT line-by-line reading",
                  "Chapter-wise worksheets and memory checks",
                  "Detailed diagram and cycle mapping",
                  "Important botanical & zoological terminology lists",
                  "Solving previous-year NEET UG questions",
                  "Regular biology-specific revision test papers",
                  "Biology mock tests for speed drills"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 font-semibold">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 text-center leading-relaxed mt-6">
                Students should develop a habit of repeatedly revising important NCERT concepts rather than relying only on last-minute preparation.
              </p>
            </div>
          </div>
        </section>

        {/* NEET Test Series & Mock Tests */}
        <section className="w-full py-16 px-4 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                NEET Test Series & Mock Tests
              </h2>
              <div className="w-16 h-1 bg-[#b72e2f] mx-auto mt-3 rounded-full" />
              <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
                Regular testing is a key component of our NEET UG medical coaching system.
              </p>
            </div>

            <div className="max-w-3xl mx-auto bg-white border border-slate-100 rounded-3xl p-8 text-center shadow-sm">
              <h3 className="font-bold text-base text-slate-800 mb-4">NEET Mock Test Progression:</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                {["Chapter Tests", "Part-Syllabus Tests", "Full-Syllabus Tests", "NEET UG Pattern Mocks"].map((t, idx) => (
                  <div key={idx} className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 font-bold text-xs text-slate-700">
                    {t}
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                After each test, students receive diagnostic performance metrics covering total score, subject-wise performance, OMR accuracy, incorrect and unattempted questions, time management per section, and chapter-wise error logs.
              </p>
            </div>
          </div>
        </section>

        {/* NEET Previous-Year Questions */}
        <section className="w-full py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                NEET Previous-Year Questions
              </h2>
              <div className="w-16 h-1 bg-[#b72e2f] mx-auto mt-3 rounded-full" />
            </div>

            <div className="max-w-3xl mx-auto bg-slate-50 border border-slate-100 rounded-3xl p-8">
              <h3 className="font-bold text-base text-[#1e1b4b] mb-4">Why Practice NEET PYQs?</h3>
              <ul className="space-y-3.5 text-xs text-slate-600 font-semibold">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span>Understand actual question patterns and format weightage</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span>Identify highly recurring and important biological/chemical concepts</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span>Practice examination-level questions under simulation</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span>Improve overall calculation speed and biology memory retrieval</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span>Understand frequently tested topics and NCERT direct extractions</span>
                </li>
              </ul>
              <p className="text-xs text-slate-400 mt-6 leading-relaxed">
                Team Excellent integrates PYQ practice directly into daily classroom assignments, reference study materials, and mock-test preparation worksheets.
              </p>
            </div>
          </div>
        </section>

        {/* NEET Study Material */}
        <StudyMaterialSection type="neet" title="NEET Medical Study Material & Resources" />

        {/* Faculty List */}
        <section className="w-full py-16 px-4 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                NEET Faculty & Mentorship
              </h2>
              <div className="w-16 h-1 bg-[#b72e2f] mx-auto mt-3 rounded-full" />
              <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
                Classes are led by experienced subject experts dedicated to student outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {facultyList.map((fac, idx) => (
                <div key={idx} className="bg-slate-50 rounded-3xl border border-slate-100 p-6 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#b72e2f] flex items-center justify-center font-bold text-lg mb-4">
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
                Who Should Join NEET Coaching?
              </h2>
              <div className="w-16 h-1 bg-[#b72e2f] mx-auto mt-3 rounded-full" />
            </div>

            <div className="max-w-2xl mx-auto bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
              <ul className="space-y-4">
                {[
                  "Class 11 students starting NEET preparation early with structured NCERT mapping",
                  "Class 12 students preparing for medical entrance alongside board examinations",
                  "Dropper candidates dedicating another year to achieve medical admissions",
                  "Students who require daily doubt-solving counters and 1-on-1 faculty support",
                  "Aspirants looking for regular testing schedules, progress metrics, and parent alerts",
                  "Students looking for structured offline classroom environments in Patna"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs text-slate-600 font-semibold">
                    <CheckCircle className="w-4.5 h-4.5 text-red-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* How to Choose NEET Coaching in Patna? */}
        <section className="w-full py-16 px-4 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                How to Choose NEET Coaching in Patna?
              </h2>
              <div className="w-16 h-1 bg-[#b72e2f] mx-auto mt-3 rounded-full" />
              <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
                Before enrolling, students and parents should evaluate key academic parameters.
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

        {/* NEET Coaching Fees in Patna */}
        <section className="w-full py-16 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                NEET Coaching Fees in Patna
              </h2>
              <div className="w-16 h-1 bg-[#b72e2f] mx-auto mt-3 rounded-full" />
            </div>

            <div className="max-w-3xl mx-auto bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
              <h3 className="font-bold text-base text-slate-800 mb-3">NEET Coaching Fees at Team Excellent</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
                NEET coaching fees vary depending on the course, batch, and duration. Contact Team Excellent for the current fee structure, available T-MAT scholarships, and enrollment schedules.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => handleOpenModal("NEET Fees Enquiry")}
                  className="px-6 py-3 bg-[#b72e2f] text-white text-xs font-bold rounded-xl hover:bg-[#a02829] transition"
                >
                  Inquire Fee Structure
                </button>
                <Link 
                  to="/admission" 
                  className="px-6 py-3 bg-white text-slate-700 text-xs font-bold rounded-xl border border-slate-200 hover:border-[#b72e2f]/60 hover:bg-[#b72e2f]/5 transition"
                >
                  Scholarship Waivers
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
                  Our center in Saketpuri, Patna, Bihar, is equipped with premium facilities, smart lecture halls, biology memory walls, and dedicated counseling spaces for medical aspirants.
                </p>
                <div className="space-y-3.5 text-xs text-slate-600 font-semibold">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span><strong>Address:</strong> New Kunj Colony, Saketpuri, Patna, Bihar 800006</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Phone className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span><strong>Contact Helpline:</strong> +91 9942000371</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Clock className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
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

        {/* NEET Admission in Patna */}
        <section className="w-full py-16 px-4 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                NEET Admission Process
              </h2>
              <div className="w-16 h-1 bg-[#b72e2f] mx-auto mt-3 rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
              {admissionSteps.map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-100/60 relative">
                  <span className="text-xs font-black text-red-600">{item.step}</span>
                  <h3 className="font-extrabold text-sm text-[#1e1b4b] mt-2 mb-1">{item.title}</h3>
                  <p className="text-[10px] text-slate-500 leading-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="w-full py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                Frequently Asked Questions
              </h2>
              <div className="w-16 h-1 bg-[#b72e2f] mx-auto mt-3 rounded-full" />
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className="bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden shadow-sm transition"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex justify-between items-center gap-4 text-slate-800 hover:bg-slate-100/50"
                  >
                    <span className="font-bold text-sm sm:text-base leading-snug">{faq.q}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-300 ${
                        openFaq === idx ? "transform rotate-180" : ""
                      }`} 
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="p-5 border-t border-slate-100 text-xs sm:text-sm text-slate-500 leading-relaxed bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal links segment */}
        <section className="w-full py-12 px-4 bg-slate-50 border-t border-slate-100">
          <div className="max-w-4xl mx-auto text-center">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Related Medical Resources</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {seoClusters.map((cluster, idx) => (
                <Link 
                  key={idx} 
                  to={cluster.to} 
                  className="px-3 py-1.5 bg-white hover:bg-rose-50 text-[10px] text-slate-500 hover:text-[#b72e2f] border border-slate-200/65 hover:border-rose-200 font-bold rounded-lg transition"
                >
                  {cluster.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full py-20 px-4 bg-gradient-to-br from-[#b72e2f] to-[#7f1d1d] text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-800/20 via-transparent to-transparent pointer-events-none" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center gap-6">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Start Your NEET UG Preparation with Team Excellent
            </h2>
            
            <p className="text-red-100 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
              Build your NEET UG preparation with structured learning, NCERT drills, regular practice, mock tests, and medical mentorship. Explore the available NEET courses at Team Excellent Career Institute and choose the plan that matches your goals.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <button 
                onClick={() => handleOpenModal("NEET UG CTA Enquiry")}
                className="px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-900 font-black rounded-xl text-sm sm:text-base transition shadow-md active:scale-95 flex items-center gap-2"
              >
                Enquire Now
              </button>
              <button 
                onClick={() => handleOpenModal("NEET UG Book Counselling")}
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
