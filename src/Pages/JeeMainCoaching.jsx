import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  BookOpen, Target, Award, Layers, ArrowRight, GraduationCap, 
  HelpCircle, Trophy, TrendingUp, ClipboardCheck, Clock, Users, 
  MapPin, Phone, Mail, CheckCircle, ChevronDown, Sparkles, Star, Shield,
  Laptop, CheckCircle2, Zap, FileText, Calculator, BarChart3
} from "lucide-react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import EnrollmentForm from "../Components/EnrollmentForm";
import TrustedSection from "../Components/TrustedSection";
import Testimonials from "../Components/Testimonials";
import ExploreLinks from "../Components/ExploreLinks";
import FAQSection from "../Components/FAQSection";
import TMatSection from "../Components/TMatSection";

export default function JeeMainCoaching() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCourse, setModalCourse] = useState("");

  const handleOpenModal = (course = "") => {
    setModalCourse(course);
    setIsModalOpen(true);
  };

  const quickStats = [
    { value: "99.8%", label: "Top JEE Main Percentile", sub: "Achieved by classroom students" },
    { value: "45+", label: "Full NTA CBT Mock Tests", sub: "Simulated exam hall environment" },
    { value: "35-45", label: "Small Batch Strength", sub: "Individual attention guaranteed" },
    { value: "100%", label: "T-MAT Scholarship", sub: "Up to 100% fee waiver for merit" }
  ];

  const strategyPhases = [
    { phase: "Phase 1", title: "NCERT & Concept Mastery", desc: "Build rock-solid theoretical clarity in Physics, Chemistry, and Math with step-by-step concept derivations." },
    { phase: "Phase 2", title: "Daily Practice Papers (DPP)", desc: "Solve 30-40 graded numericals daily per subject to master speed, shortcut techniques, and accuracy." },
    { phase: "Phase 3", title: "15-Year PYQ Deconstruction", desc: "Exhaustively analyze all past NTA JEE Main shift papers from 2019-2025 chapter-wise." },
    { phase: "Phase 4", title: "Real NTA CBT Mock Series", desc: "Attempt weekly computer-based tests on our real exam-simulated CBT platform under strict 3-hour timing." },
    { phase: "Phase 5", title: "AI-Driven Error Analytics", desc: "Pinpoint negative marking patterns, silly mistakes, and time-draining questions with individual diagnostics." },
    { phase: "Phase 6", title: "High-Yield Rank Revision", desc: "Rapid formula revision sheets, mock test rework, and dedicated 1-on-1 doubt clearing for 99+ percentile." }
  ];

  const examPatternDetails = [
    { subject: "Physics", mcqs: "20 Questions", numericals: "10 Questions (Attempt any 5)", totalMarks: "100 Marks" },
    { subject: "Chemistry", mcqs: "20 Questions", numericals: "10 Questions (Attempt any 5)", totalMarks: "100 Marks" },
    { subject: "Mathematics", mcqs: "20 Questions", numericals: "10 Questions (Attempt any 5)", totalMarks: "100 Marks" },
  ];

  const subjects = [
    {
      name: "JEE Main Physics",
      desc: "Physics in JEE Main tests fundamental clarity, formula agility, and numerical speed without unnecessary complexity.",
      color: "border-purple-200 bg-purple-50/50",
      accent: "text-[#5B2D7C]",
      topics: [
        "Mechanics: Kinematics, Newton's Laws, Work-Energy-Power, Rotational Dynamics",
        "Electrodynamics: Electrostatics, Gauss Law, Current Electricity & Circuit Analysis",
        "Magnetism & EMI: Biot-Savart, Ampere's Law, Faraday's Law & AC Circuits",
        "Optics & Modern Physics: Dual Nature, Atoms, Nuclei, Semiconductors & Wave Optics",
        "Thermodynamics & Heat: Kinetic Theory, Heat Engines, Calorimetry & Thermal Expansion"
      ]
    },
    {
      name: "JEE Main Chemistry",
      desc: "Chemistry is the highest-scoring rank booster in JEE Main with equal emphasis on physical numericals and NCERT lines.",
      color: "border-red-200 bg-red-50/50",
      accent: "text-[#b72e2f]",
      topics: [
        "Physical Chemistry: Mole Concept, Chemical Equilibrium, Thermodynamics & Electrochemistry",
        "Organic Chemistry: GOC, Reaction Mechanisms, Hydrocarbons, Aldehydes & Polymers",
        "Inorganic Chemistry: Periodic Table Trends, Chemical Bonding, Coordination Compounds, p/d/f-block",
        "NCERT Exemplar & Fact Drills: Line-by-line coverage for direct memory-based questions",
        "Daily Shortcut Tables: Named reactions summary sheets & formula flashcards"
      ]
    },
    {
      name: "JEE Main Mathematics",
      desc: "Mathematics demands high speed, algebraic precision, and smart question selection among multi-step calculus problems.",
      color: "border-blue-200 bg-blue-50/50",
      accent: "text-blue-600",
      topics: [
        "Calculus: Functions, Limits, Continuity, Differentiation, Definite Integrals & Area",
        "Algebra: Matrices, Determinants, Complex Numbers, Permutations & Probability",
        "Coordinate Geometry: Straight Lines, Circles, Parabola, Ellipse & Hyperbola",
        "Vectors & 3D Geometry: High weightage scoring chapters with 3D plane visualizations",
        "Statistics & Mathematical Reasoning: Direct-formula scoring chapters for guaranteed marks"
      ]
    }
  ];

  const facultyList = [
    {
      name: "Albert Newwel",
      subject: "Physics",
      qualification: "M.Tech, IIT-BHU, Varanasi",
      experience: "12+ Years",
      specialization: "Mechanics, Electrodynamics & Numerical Shortcuts"
    },
    {
      name: "Dr. S. K. Singh",
      subject: "Chemistry",
      qualification: "Ph.D. in Chemistry, IIT Delhi",
      experience: "10+ Years",
      specialization: "Organic Mechanisms & NCERT Line Precision"
    },
    {
      name: "R. K. Verma",
      subject: "Mathematics",
      qualification: "B.Tech, IIT Kanpur",
      experience: "8+ Years",
      specialization: "Calculus, 3D Coordinate Geometry & Speed Tricks"
    }
  ];

  const chooseCriteria = [
    "Permanent IITian & NITian faculty mentoring students throughout the entire year",
    "Small focused batches (35-45 students) for personalized 1-on-1 teacher access",
    "Real NTA Computer-Based Test (CBT) platform with real-time percentile rankings",
    "Daily Practice Problem (DPP) sheets with topic-wise graded exercise modules",
    "In-person daily doubt desks after regular classes to resolve every single query",
    "Chapter-wise 15-year JEE Main PYQ booklets with complete step-by-step solutions",
    "Detailed student performance analytics and attendance monitoring on Student Portal",
    "Transparent fee structure with up to 100% scholarships via the T-MAT Entrance Exam",
    "Proven track record of top NIT, IIIT, and IIT selections year after year in Bihar",
    "Safe, central campus in Saketpuri, Patna with nearby verified hostel accommodations"
  ];

  const admissionSteps = [
    { step: "Step 1", title: "Enquiry & Counseling", desc: "Submit the online enquiry form or visit our Saketpuri center for free expert career counseling." },
    { step: "Step 2", title: "T-MAT Scholarship Exam", desc: "Appear for the Team Excellent Talent Search Exam to qualify for up to 100% fee scholarships." },
    { step: "Step 3", title: "Batch Selection", desc: "Choose the target program (Class 11 2-Year, Class 12 1-Year, or Dropper Rank Booster)." },
    { step: "Step 4", title: "Registration & Kit", desc: "Complete registration to collect the complete printed JEE Main study packages and DPP sets." },
    { step: "Step 5", title: "Portal Onboarding", desc: "Receive login credentials for the online CBT Test Series and Student Portal dashboard." },
    { step: "Step 6", title: "Classes & Mentoring", desc: "Begin daily classroom lectures, daily 1-on-1 doubt counters, and weekly CBT mock tests." }
  ];

  const faqs = [
    {
      question: "Which is the best JEE Main coaching institute in Patna?",
      answer: "Team Excellent Career Institute in Saketpuri, Patna is widely recognized as one of the best JEE Main coaching institutes in Patna. It offers mentorship by IIT-BHU and IIT Kanpur alumni, small batch sizes (35-45 students), 45+ full-length NTA CBT mock tests, daily 1-on-1 doubt counters, and scholarships of up to 100% via the T-MAT Exam."
    },
    {
      question: "How does Team Excellent help students score 99+ percentile in JEE Main?",
      answer: "Our 6-phase preparation framework combines complete NCERT-to-Advanced concept coverage, daily practice problems (DPPs), 15-year chapter-wise PYQs, real-time NTA CBT mock exams with negative marking analytics, and personalized 1-on-1 mentorship by experienced IITian faculty."
    },
    {
      question: "What is the fee structure for JEE Main coaching at Team Excellent Patna?",
      answer: "Our fee structure is affordable and transparent. Deserving and meritorious students can secure up to 100% scholarship on coaching tuition fees through the Team Excellent Talent Search & Scholarship Test (T-MAT). Contact our admission desk at +91-9942000371 for specific batch fees."
    },
    {
      question: "Are mock tests conducted on the real NTA computer-based (CBT) pattern?",
      answer: "Yes, all our mock exams are conducted on our simulated computer-based test platform which replicates the exact NTA JEE Main interface, countdown timer, question palette, and marking scheme (+4, -1)."
    },
    {
      question: "What batches are available for JEE Main preparation at Team Excellent?",
      answer: "We offer three specialized programs: (1) 2-Year Comprehensive Foundation Program for Class 11 students, (2) 1-Year Target Program for Class 12 students, and (3) Intensive Dropper / Repeater Rank Booster Batch for 12th pass students."
    },
    {
      question: "Does Team Excellent provide JEE Main study material and DPPs?",
      answer: "Yes, students receive complete theory modules, categorized Level 1, 2 & 3 worksheets, Daily Practice Problems (DPPs), 15-year solved PYQ books, and concise formula revision booklets for Physics, Chemistry, and Mathematics."
    },
    {
      question: "How are doubts resolved at Team Excellent?",
      answer: "We have permanent daily 1-on-1 doubt clearance counters where students can sit directly with subject teachers after class to solve every numerical or theoretical doubt on the same day."
    },
    {
      question: "Can Class 12 students balance CBSE/BSEB Board exams with JEE Main?",
      answer: "Yes, our Class 12 Target Course is meticulously mapped with NCERT board syllabi. We conduct board-level descriptive tests alongside objective JEE Main mock tests to ensure 90%+ in board exams while securing top engineering ranks."
    },
    {
      question: "Where is the Team Excellent JEE coaching center located in Patna?",
      answer: "Our main center is located at Near NMCH College, Bajar Samiti, New Kunj Colony, Saketpuri, Patna, Bihar 800016, easily accessible from Kankarbagh, Boring Road, Rajendra Nagar, and Bazar Samiti."
    },
    {
      question: "How can I register for a free demo class or admission counseling?",
      answer: "You can book a free demo class by submitting the online enquiry form on this page, calling our admission helpline at +91-9942000371, or visiting our Saketpuri campus directly."
    }
  ];

  const seoClusters = [
    { label: "Best JEE Coaching in Patna", to: "/best-jee-coaching-in-patna" },
    { label: "IIT JEE Complete Program (Class 11)", to: "/iit-jee-coaching-in-patna" },
    { label: "JEE Advanced Coaching in Patna", to: "/jee-advanced-coaching-in-patna" },
    { label: "JEE Class 12 Target Batch", to: "/jee-coaching-in-patna" },
    { label: "JEE Dropper Coaching in Patna", to: "/jee-dropper-coaching-in-patna" },
    { label: "JEE Rank Predictor 2026", to: "/rank-predictor" },
    { label: "JEE College Predictor", to: "/college-predictor" },
    { label: "T-MAT 100% Scholarship Test", to: "/scholarship" },
    { label: "CBT Test Series Platform", to: "/test-series" },
    { label: "Study Material & DPPs", to: "/study-material" },
    { label: "JEE Results & Toppers", to: "/result/jee" },
    { label: "Student Portal Login", to: "/student-portal" }
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

        {/* EducationalOrganization & LocalBusiness Schema with E-E-A-T Authority */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "EducationalOrganization", "School", "ProfessionalService", "Organization"],
            "@id": "https://teamexcellentcareerinstitute.in/#organization",
            "name": "Team Excellent Career Institute",
            "alternateName": "Team Excellent JEE Main Coaching Patna",
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
            },
            "founder": {
              "@type": "Person",
              "name": "Albert Newwel",
              "jobTitle": "Founder & Director",
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "IIT-BHU Varanasi"
              },
              "description": "M.Tech from IIT-BHU Varanasi with 12+ years of expertise in mentoring JEE Main & Advanced top rankers."
            },
            "knowsAbout": [
              "JEE Main Preparation",
              "Engineering Entrance Coaching",
              "Speed and Accuracy Numerical Workouts",
              "NTA CBT Test Series Simulation"
            ],
            "sameAs": [
              "https://www.facebook.com/share/1JTxznYnFg/",
              "https://www.instagram.com/team.excellent.patna",
              "https://www.youtube.com/@teamexcellentpatna"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "540"
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
        {/* 1. H1 Hero Header Section */}
        <section className="relative w-full pt-[130px] lg:pt-[160px] pb-16 bg-[#fafafc] overflow-hidden border-b border-slate-100">
          <div className="absolute inset-0 bg-[radial-gradient(#e2e0ff_1px,transparent_1px)] [background-size:24px_24px] opacity-35" />
          <div className="absolute -top-30 left-1/4 -z-10 h-[350px] w-[350px] rounded-full bg-purple-200/30 blur-[80px]" />
          <div className="absolute top-20 right-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-rose-100/25 blur-[90px]" />
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50/80 px-4 py-1.5 text-xs font-semibold text-[#5B2D7C] shadow-sm">
                <Trophy className="w-4 h-4 text-[#b72e2f]" />
                NTA JEE Main 2026-2027 Targeted Preparation Hub
              </span>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#1e1b4b] leading-tight">
                Best JEE Main Coaching <br />
                <span className="bg-gradient-to-r from-[#5B2D7C] via-[#8424bd] to-[#b72e2f] bg-clip-text text-transparent">
                  in Patna, Bihar
                </span>
              </h1>
              
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#5B2D7C] to-[#b72e2f] rounded-full mt-1" />
              
              <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-medium mt-3">
                Aiming for a <strong>99+ Percentile</strong> in JEE Main to secure your dream engineering seat in top <strong>NITs, IIITs, and CFTIs</strong>? Team Excellent Career Institute offers Patna's most rigorous, NCERT-to-Advanced classroom coaching mentored by senior <strong>IIT-BHU and IIT Kanpur alumni</strong>.
              </p>

              {/* Quick Stat Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-4xl mt-6">
                {quickStats.map((stat, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm text-center hover:shadow-md hover:border-purple-200 transition-all">
                    <div className="text-2xl sm:text-3xl font-black text-[#5B2D7C]">{stat.value}</div>
                    <div className="text-xs font-bold text-slate-800 mt-1">{stat.label}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{stat.sub}</div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-6 justify-center">
                <button 
                  onClick={() => handleOpenModal("JEE Main Target Course")}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#5B2D7C] to-[#8424bd] hover:from-[#472164] hover:to-[#6a1c97] px-8 py-3.5 text-sm font-bold text-white shadow-lg transition duration-200 active:scale-95"
                >
                  Apply for JEE Main Batch
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link 
                  to="/scholarship" 
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 hover:border-[#5B2D7C]/60 hover:bg-[#5B2D7C]/5 transition duration-200"
                >
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  Take 100% Scholarship Test (T-MAT)
                </Link>
                <Link 
                  to="/rank-predictor" 
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-purple-200 bg-purple-50/50 px-6 py-3.5 text-sm font-bold text-[#5B2D7C] hover:bg-purple-100 transition duration-200"
                >
                  <Calculator className="w-4 h-4 text-[#5B2D7C]" />
                  JEE Rank Predictor
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted Section */}
        <TrustedSection />

        {/* 2. NTA JEE Main Exam Pattern & Structure Blueprint */}
        <section className="w-full py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[#5B2D7C] text-xs font-bold tracking-wider uppercase bg-purple-50 px-3.5 py-1 rounded-full border border-purple-100">
                Exam Blueprint & Analysis
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b] mt-3">
                NTA JEE Main 2026 Exam Pattern & Marking Scheme
              </h2>
              <div className="w-16 h-1 bg-[#5B2D7C] mx-auto mt-3 rounded-full" />
              <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
                Understanding the NTA computer-based examination structure is the first step toward smart time management and eliminating negative marks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {examPatternDetails.map((item, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200/70 rounded-3xl p-6 shadow-sm hover:border-purple-300 transition-all">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
                    <h3 className="font-extrabold text-lg text-[#1e1b4b]">{item.subject}</h3>
                    <span className="text-xs font-black px-2.5 py-1 bg-purple-100 text-[#5B2D7C] rounded-lg">{item.totalMarks}</span>
                  </div>
                  <div className="space-y-3 text-xs text-slate-600">
                    <p className="flex justify-between">
                      <span className="font-semibold text-slate-500">Section A (MCQs):</span>
                      <strong className="text-slate-800">{item.mcqs}</strong>
                    </p>
                    <p className="flex justify-between">
                      <span className="font-semibold text-slate-500">Section B (Numerical):</span>
                      <strong className="text-slate-800">{item.numericals}</strong>
                    </p>
                    <p className="flex justify-between pt-2 border-t border-slate-200/60">
                      <span className="font-semibold text-slate-500">Marking Scheme:</span>
                      <strong className="text-emerald-600">+4 Correct / -1 Incorrect</strong>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Exam Highlights Grid */}
            <div className="bg-gradient-to-r from-purple-900 to-indigo-950 text-white rounded-3xl p-8 shadow-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-2xl font-black text-amber-300">300 Marks</div>
                  <div className="text-xs text-purple-200 mt-1">Total Exam Score (75 to attempt)</div>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-2xl font-black text-amber-300">3 Hours</div>
                  <div className="text-xs text-purple-200 mt-1">180 Mins CBT Exam Duration</div>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-2xl font-black text-amber-300">2 Sessions</div>
                  <div className="text-xs text-purple-200 mt-1">January & April NTA Attempts</div>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-2xl font-black text-amber-300">Top 2.5 Lakh</div>
                  <div className="text-xs text-purple-200 mt-1">Eligible for JEE Advanced Exam</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Why Team Excellent is Patna's #1 Institute for JEE Main */}
        <section className="w-full py-16 px-4 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[#b72e2f] text-xs font-bold tracking-wider uppercase bg-red-50 px-3.5 py-1 rounded-full border border-red-100">
                The Team Excellent Edge
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b] mt-3">
                Why Choose Team Excellent for JEE Main Preparation?
              </h2>
              <div className="w-16 h-1 bg-[#5B2D7C] mx-auto mt-3 rounded-full" />
              <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
                We combine experienced IITian faculty, systematic curriculum planning, daily doubt clearing counters, and genuine CBT test analytics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-purple-200 transition-all">
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-[#5B2D7C] flex items-center justify-center font-bold mb-4">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-slate-800 mb-2">IITian & NITian Mentors</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Learn directly from senior educators led by Director Albert Newwel (M.Tech from IIT-BHU Varanasi) who have over a decade of experience producing top 99.8+ percentile rankers in Bihar.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-purple-200 transition-all">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-[#b72e2f] flex items-center justify-center font-bold mb-4">
                  <Laptop className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-slate-800 mb-2">Real NTA CBT Test Portal</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Practice on 45+ full-length computer-based mock tests on our online platform replicating the official NTA UI, question palette, countdown timer, and negative-mark algorithms.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-purple-200 transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-4">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-slate-800 mb-2">15-Year Chapterwise PYQs</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Exhaustively solve every single question from past NTA JEE Main papers (2019-2025) categorized by sub-topic with step-by-step shortcuts and graphical solutions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-purple-200 transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold mb-4">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-slate-800 mb-2">Daily 1-on-1 Doubt Desks</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Never leave a doubt unresolved. Our permanent doubt clearance counters allow students to sit 1-on-1 with subject faculties immediately after lectures to debug every equation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-purple-200 transition-all">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-slate-800 mb-2">Small Batch Focus (35-45)</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Unlike crowded institutes with 200+ students per batch, our strict cap of 35-45 students ensures the teacher knows your individual strengths, test gaps, and speed bottlenecks.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-purple-200 transition-all">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold mb-4">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-slate-800 mb-2">AI-Diagnostic Analytics</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Access micro-level reports on our <Link to="/student-portal" className="text-[#5B2D7C] font-bold underline">Student Portal</Link> identifying question-skipping tendencies, accuracy dips under time pressure, and percentile trends.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. 6-Phase Systematic Preparation Strategy */}
        <section className="w-full py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[#5B2D7C] text-xs font-bold tracking-wider uppercase bg-purple-50 px-3.5 py-1 rounded-full border border-purple-100">
                Methodology
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b] mt-3">
                Our Proven 6-Phase JEE Main Preparation Strategy
              </h2>
              <div className="w-16 h-1 bg-[#b72e2f] mx-auto mt-3 rounded-full" />
              <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
                A structured roadmap taking students systematically from fundamental NCERT basics to scoring 99+ percentile in JEE Main.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {strategyPhases.map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:border-purple-200 transition-all shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black px-3 py-1 bg-purple-100 text-[#5B2D7C] rounded-full">{item.phase}</span>
                    <Zap className="w-4 h-4 text-amber-500" />
                  </div>
                  <h3 className="font-extrabold text-base text-[#1e1b4b] mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Subject-Wise In-Depth Coaching Breakdown */}
        <section className="w-full py-16 px-4 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[#b72e2f] text-xs font-bold tracking-wider uppercase bg-red-50 px-3.5 py-1 rounded-full border border-red-100">
                Subject Mastery
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b] mt-3">
                Subject-Wise JEE Main Coaching Syllabus & Focus
              </h2>
              <div className="w-16 h-1 bg-[#5B2D7C] mx-auto mt-3 rounded-full" />
              <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
                Specialized pedagogical approaches tailored for Physics numericals, Chemistry NCERT accuracy, and Mathematics algebraic precision.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {subjects.map((sub, idx) => (
                <div key={idx} className={`p-7 rounded-3xl border shadow-sm flex flex-col justify-between ${sub.color}`}>
                  <div>
                    <h3 className={`font-black text-xl mb-2 pb-2 border-b border-slate-200/80 ${sub.accent}`}>
                      {sub.name}
                    </h3>
                    <p className="text-xs text-slate-600 mb-5 leading-relaxed font-medium">{sub.desc}</p>
                    <ul className="space-y-3">
                      {sub.topics.map((topic, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-semibold">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${sub.accent}`} />
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

        {/* 6. Batches Offered */}
        <section className="w-full py-16 px-4 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[#5B2D7C] text-xs font-bold tracking-wider uppercase bg-purple-50 px-3.5 py-1 rounded-full border border-purple-100">
                Enrollment Options
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b] mt-3">
                Target JEE Main Batches at Team Excellent
              </h2>
              <div className="w-16 h-1 bg-[#b72e2f] mx-auto mt-3 rounded-full" />
              <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
                Choose the specialized batch matching your current class and academic level to begin target preparation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Class 11 */}
              <div className="bg-slate-50 rounded-3xl p-7 border border-slate-100 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-purple-200 transition-all">
                <div>
                  <span className="bg-purple-100 text-[#5B2D7C] text-[10px] font-extrabold uppercase px-3 py-1 rounded-full">2-Year Foundation</span>
                  <h3 className="font-extrabold text-xl text-[#1e1b4b] mt-3 mb-2">Class 11 Target Course</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6">
                    For students moving to Class 11. Covers complete Class 11 NCERT syllabus with gradual progression to JEE Main problem solving, weekly unit tests, and board exam integration.
                  </p>
                </div>
                <div className="space-y-2.5">
                  <button onClick={() => handleOpenModal("JEE Main Class 11")} className="w-full py-2.5 bg-[#5B2D7C] text-center text-xs font-bold text-white rounded-xl hover:bg-[#472164] transition">
                    Enroll in Class 11 Batch
                  </button>
                  <Link to="/iit-jee-coaching-in-patna" className="w-full py-2 bg-white text-center text-xs font-bold text-[#5B2D7C] border border-slate-200 hover:bg-purple-50 rounded-xl transition block">
                    View Full Details ➔
                  </Link>
                </div>
              </div>

              {/* Class 12 */}
              <div className="bg-slate-50 rounded-3xl p-7 border border-slate-100 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-red-200 transition-all">
                <div>
                  <span className="bg-red-100 text-[#b72e2f] text-[10px] font-extrabold uppercase px-3 py-1 rounded-full">1-Year Target</span>
                  <h3 className="font-extrabold text-xl text-[#1e1b4b] mt-3 mb-2">Class 12 Target Course</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6">
                    For Class 12 students. Master Class 12 board preparation alongside complete JEE Main application training and intensive revision capsules for Class 11 topics.
                  </p>
                </div>
                <div className="space-y-2.5">
                  <button onClick={() => handleOpenModal("JEE Main Class 12")} className="w-full py-2.5 bg-[#b72e2f] text-center text-xs font-bold text-white rounded-xl hover:bg-[#962526] transition">
                    Enroll in Class 12 Batch
                  </button>
                  <Link to="/jee-coaching-in-patna" className="w-full py-2 bg-white text-center text-xs font-bold text-[#b72e2f] border border-slate-200 hover:bg-red-50 rounded-xl transition block">
                    View Full Details ➔
                  </Link>
                </div>
              </div>

              {/* Droppers */}
              <div className="bg-slate-50 rounded-3xl p-7 border border-slate-100 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-blue-200 transition-all">
                <div>
                  <span className="bg-blue-100 text-blue-700 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full">Rank Booster</span>
                  <h3 className="font-extrabold text-xl text-[#1e1b4b] mt-3 mb-2">JEE Main Dropper Batch</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6">
                    For Class 12 passout repeaters. High-intensity program covering complete 11th & 12th syllabus in 8-9 months with 45+ CBT mock tests and mistake-rectification sessions.
                  </p>
                </div>
                <div className="space-y-2.5">
                  <button onClick={() => handleOpenModal("JEE Main Dropper")} className="w-full py-2.5 bg-blue-600 text-center text-xs font-bold text-white rounded-xl hover:bg-blue-700 transition">
                    Enroll in Dropper Batch
                  </button>
                  <Link to="/jee-dropper-coaching-in-patna" className="w-full py-2 bg-white text-center text-xs font-bold text-blue-600 border border-slate-200 hover:bg-blue-50 rounded-xl transition block">
                    View Full Details ➔
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. T-MAT 100% Scholarship Banner */}
        <TMatSection theme="purple" />

        {/* 8. Faculty Section */}
        <section className="w-full py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[#b72e2f] text-xs font-bold tracking-wider uppercase bg-red-50 px-3.5 py-1 rounded-full border border-red-100">
                E-E-A-T Mentorship
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b] mt-3">
                Learn from Patna's Premier IITian Faculty
              </h2>
              <div className="w-16 h-1 bg-[#b72e2f] mx-auto mt-3 rounded-full" />
              <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
                Our permanent mentors are alumni of top IITs with over 10-12 years of coaching expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {facultyList.map((fac, idx) => (
                <div key={idx} className="bg-slate-50 rounded-3xl border border-slate-100 p-6 shadow-sm flex flex-col justify-between hover:border-purple-200 transition-all">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-purple-100 text-[#5B2D7C] flex items-center justify-center font-bold text-lg mb-4">
                      {fac.name[0]}
                    </div>
                    <h3 className="font-black text-[#1e1b4b] text-lg">{fac.name}</h3>
                    <p className="text-xs font-bold text-[#b72e2f] uppercase tracking-wider">{fac.subject} Faculty</p>
                    
                    <div className="mt-4 space-y-2 text-xs text-slate-600">
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

        {/* 9. Local Campus Presence & Google Verified Reviews */}
        <section className="w-full py-16 px-4 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[#5B2D7C] text-xs font-bold tracking-wider uppercase bg-purple-50 px-3.5 py-1 rounded-full border border-purple-100">
                Campus & Center Info
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b] mt-3">
                Team Excellent Career Institute – Saketpuri, Patna
              </h2>
              <div className="w-16 h-1 bg-[#5B2D7C] mx-auto mt-3 rounded-full" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-center">
              <div className="lg:col-span-6 space-y-5 text-left bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Conveniently situated in Saketpuri near NMCH College and Bajar Samiti, our campus provides state-of-the-art AC classrooms, a computer-based CBT mock test laboratory, dedicated doubt solving counters, and nearby verified hostel facilities.
                </p>
                <div className="space-y-3.5 text-xs text-slate-700 font-semibold">
                  <p className="flex items-start gap-2.5">
                    <MapPin className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                    <span><strong>Address:</strong> Near NMCH College, Bajar Samiti, New Kunj Colony, Saketpuri, Patna, Bihar 800016</span>
                  </p>
                  <p className="flex items-start gap-2.5">
                    <Phone className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                    <span><strong>Admission Desk:</strong> +91 9942000371 / +91 9942000372</span>
                  </p>
                  <p className="flex items-start gap-2.5">
                    <Clock className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                    <span><strong>Center Timings:</strong> Monday to Saturday (8:00 AM – 8:00 PM)</span>
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6 bg-gradient-to-br from-purple-900 to-[#1e1b4b] text-white p-8 rounded-3xl shadow-xl">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                </div>
                <h4 className="font-extrabold text-xl text-white mb-2">4.9 / 5.0 Star Rating</h4>
                <p className="text-xs text-purple-200 leading-relaxed mb-6">
                  Rated as one of the most reliable, result-oriented JEE coaching institutes in Patna by 540+ verified students and parents across Bihar.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button onClick={() => handleOpenModal("JEE Main Demo Class")} className="px-5 py-2.5 bg-amber-400 text-purple-950 font-bold rounded-xl text-xs hover:bg-amber-300 transition">
                    Book Free Demo Class
                  </button>
                  <Link to="/contact" className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-xs border border-white/20 transition">
                    Get Center Directions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Admission Roadmap */}
        <section className="w-full py-16 px-4 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[#5B2D7C] text-xs font-bold tracking-wider uppercase bg-purple-50 px-3.5 py-1 rounded-full border border-purple-100">
                Simple 6-Step Enrollment
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b] mt-3">
                How to Enroll in JEE Main Coaching at Team Excellent
              </h2>
              <div className="w-16 h-1 bg-[#b72e2f] mx-auto mt-3 rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
              {admissionSteps.map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-100 relative shadow-sm">
                  <span className="text-xs font-black text-purple-600">{item.step}</span>
                  <h3 className="font-extrabold text-sm text-[#1e1b4b] mt-2 mb-1">{item.title}</h3>
                  <p className="text-[10px] text-slate-500 leading-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11. FAQ Section */}
        <FAQSection faqs={faqs} />

        {/* 12. Testimonials */}
        <Testimonials />

        {/* 13. Explore Quick Links */}
        <ExploreLinks />

        {/* 14. Related SEO Links Cluster */}
        <section className="w-full py-12 px-4 bg-slate-50 border-t border-slate-100">
          <div className="max-w-5xl mx-auto text-center">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Explore Related JEE Preparation Resources</h4>
            <div className="flex flex-wrap justify-center gap-2.5">
              {seoClusters.map((cluster, idx) => (
                <Link 
                  key={idx} 
                  to={cluster.to} 
                  className="px-3.5 py-2 bg-white hover:bg-purple-50 text-xs text-slate-600 hover:text-[#5B2D7C] border border-slate-200/80 hover:border-purple-200 font-bold rounded-xl transition shadow-sm"
                >
                  {cluster.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 15. Final CTA */}
        <section className="w-full py-20 px-4 bg-gradient-to-br from-[#5B2D7C] to-[#3F1D5B] text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-800/20 via-transparent to-transparent pointer-events-none" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center gap-6">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Start Your JEE Main 2026 Journey with Team Excellent
            </h2>
            
            <p className="text-purple-100 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
              Don't leave your engineering dream to chance. Join Patna's most trusted coaching institute and gain access to top IITian mentorship, 45+ NTA CBT mock exams, and up to 100% scholarship via the T-MAT exam.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <button 
                onClick={() => handleOpenModal("JEE Main CTA Enquiry")}
                className="px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-purple-950 font-black rounded-xl text-sm sm:text-base transition shadow-md active:scale-95 flex items-center gap-2"
              >
                Enroll Now
                <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => handleOpenModal("JEE Main Book Counselling")}
                className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-sm sm:text-base border border-white/20 transition active:scale-95"
              >
                Book Free Counseling
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
