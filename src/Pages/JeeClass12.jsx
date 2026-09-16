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

export default function JeeClass12() {
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
      title: "Concept-Based Learning",
      desc: "JEE preparation starts with understanding concepts. Students should learn how and why a formula or method works before moving toward advanced problem-solving."
    },
    {
      title: "Experienced Faculty",
      desc: "Students receive subject-wise guidance in Physics, Chemistry, and Mathematics from senior mentors including M.Tech graduates from IIT-BHU."
    },
    {
      title: "Small-Batch Learning",
      desc: "We maintain small batch sizes to enable greater classroom interaction, focused individual attention, and easier direct access to faculty."
    },
    {
      title: "Regular Tests",
      desc: "Regular testing helps students measure their preparation level, track progress metrics, and identify topics that require additional practice."
    },
    {
      title: "Doubt-Clearing Support",
      desc: "JEE preparation involves solving large numbers of questions. Dedicated doubt support counters help students address conceptual and numerical difficulties."
    },
    {
      title: "Structured Study Plan",
      desc: "Our study program logically guides students through a complete academic cycle: Concept → Practice → Test → Analysis → Revision → Improvement."
    }
  ];

  const courses = [
    {
      title: "JEE Foundation Program",
      desc: "For students beginning competitive-exam preparation at an early stage. Combines school syllabus/NCERT coverage with analytical thinking, logical reasoning development, and future JEE/NEET base preparation.",
      link: "/class-6-to-10"
    },
    {
      title: "Class 11 JEE Program",
      desc: "For students beginning dedicated JEE preparation alongside Class 11. Focuses on Class 11 competitive syllabus, core concept fundamentals, structured practice sheets, and balancing school board exams.",
      link: "/iit-jee-coaching-in-patna"
    },
    {
      title: "Class 12 JEE Program",
      desc: "For students preparing for JEE while completing Class 12. Focuses on Class 12 board preparations, complete JEE Main/Advanced syllabus, previous-year question practice, and full revision mocks.",
      link: "/best-jee-coaching-in-patna"
    },
    {
      title: "JEE Dropper Program",
      desc: "For students who have completed Class 12 and are preparing for another JEE attempt. Focuses on complete syllabus revision, weak-topic diagnostics, and test strategy. Note: We have a dedicated page for droppers.",
      link: "/jee-dropper-coaching-in-patna"
    }
  ];

  const methodology = [
    { step: "1", title: "Concept Building", desc: "Students first develop a strong understanding of Physics, Chemistry and Mathematics concepts." },
    { step: "2", title: "Guided Practice", desc: "Concepts are reinforced through progressively challenging numeric and conceptual worksheets." },
    { step: "3", title: "Previous-Year Questions", desc: "Students practice questions from previous JEE examinations to understand exact question patterns and difficulty." },
    { step: "4", title: "Regular Assessment", desc: "Topic-wise and cumulative mock tests are used to evaluate preparation levels and track accuracy metrics." },
    { step: "5", title: "Performance Analysis", desc: "Detailed test diagnostics identify weak chapters, speed limits, accuracy leaks, and repeated errors." },
    { step: "6", title: "Revision", desc: "Structured revision cycles help students consolidate formulae, retain concepts, and optimize actual test scores." }
  ];

  const subjects = [
    {
      name: "Physics",
      topics: ["Mechanics", "Electrodynamics", "Modern Physics", "Thermodynamics", "Optics", "Waves", "Numerical problem solving"]
    },
    {
      name: "Chemistry",
      topics: [
        "Physical Chemistry: Numerical problem solving, chemical calculations & formula application",
        "Organic Chemistry: Named reactions, complex reaction mechanisms & structural analysis",
        "Inorganic Chemistry: Periodic trends, chemical coordination, and NCERT-based core preparation"
      ]
    },
    {
      name: "Mathematics",
      topics: ["Algebra", "Calculus", "Coordinate Geometry", "Trigonometry", "Vectors and 3D Geometry", "Probability", "Complex Numbers"]
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
    "Faculty experience and subject competence",
    "Structured course design and syllabus flow",
    "Limited student batch sizes to ensure focus",
    "Comprehensive study modules and assignments",
    "Test series frequency and NTA-simulated portal",
    "Dedicated doubt-solving counters and desks",
    "Student performance tracking and parent alerts",
    "Verified previous exam results",
    "Fees transparency and scholarship concessions",
    "Location accessibility and safe classroom environment"
  ];

  const admissionSteps = [
    { step: "Step 1", title: "Enquiry", desc: "Student/parent contacts the institute via website form, phone, or center visit." },
    { step: "Step 2", title: "Counselling", desc: "Counselors discuss past performance, target examinations, and address queries." },
    { step: "Step 3", title: "Course Selection", desc: "Student selects the appropriate JEE program (Foundation, Class 11, Class 12, or Dropper)." },
    { step: "Step 4", title: "Admission", desc: "Complete registration, fee details, and required documentation." },
    { step: "Step 5", title: "Batch Allocation", desc: "Student receives a batch assignment, study materials package, and class schedule." },
    { step: "Step 6", title: "Classes Begin", desc: "Regular daily classroom lectures, study sessions, tests, and doubt support begin." }
  ];

  const faqs = [
    {
      q: "What is the best JEE coaching in Patna?",
      a: "The right JEE coaching institute depends on factors such as faculty, teaching methodology, batch size, study material, testing system, doubt support, results, and fees. Team Excellent provides JEE Main and JEE Advanced preparation in Patna with structured academic support."
    },
    {
      q: "Is JEE coaching available for both JEE Main and JEE Advanced?",
      a: "Yes, Team Excellent covers preparation for both examinations. JEE Main focuses on calculations, speed, and accuracy, whereas JEE Advanced prep covers multi-concept subjective problem solving."
    },
    {
      q: "Which class should I join JEE coaching?",
      a: "Students generally begin dedicated JEE preparation in Class 11, although foundation programs can begin earlier in Class 6–10. The appropriate course depends on the student's current class and preparation level."
    },
    {
      q: "Does Team Excellent provide JEE coaching for Class 11?",
      a: "Yes, we offer a dedicated 2-Year Program for Class 11 students starting from basic concepts up to competitive benchmarks."
    },
    {
      q: "Does Team Excellent provide JEE coaching for Class 12?",
      a: "Yes, we offer a 1-Year Program for Class 12 students focusing on board exams alongside intensive JEE revision."
    },
    {
      q: "Does Team Excellent have a JEE dropper batch?",
      a: "Yes, we have a dedicated Droppers Batch. Please explore details on our dedicated Droppers page."
    },
    {
      q: "Does Team Excellent provide JEE test series?",
      a: "Yes, we conduct weekly chapter-wise tests and monthly Computer-Based Tests (CBT) matching the NTA pattern."
    },
    {
      q: "What makes Team Excellent the best JEE coaching in Patna?",
      a: "Team Excellent provides an integrated preparation system led by experienced IITian faculties, structured study material, disciplined testing cycles, and individual mentoring."
    },
    {
      q: "Does Team Excellent offer coaching for both JEE Main and JEE Advanced?",
      a: "Yes, our programs provide comprehensive preparation covering the conceptual clarity needed for JEE Main along with the analytical depth required for JEE Advanced."
    },
    {
      q: "What is the batch size for JEE coaching at Team Excellent?",
      a: "We maintain optimized batch sizes to ensure every student gets personal attention and faculty interaction during doubt clearing sessions."
    },
    {
      q: "Are scholarships available for JEE courses?",
      a: "Yes! Students can participate in our T-MAT (Team Excellent Mentorship & Admission Test) to avail scholarships up to 100% on course tuition fees."
    },
    {
      q: "How can I take admission to Team Excellent?",
      a: "You can visit our Patna admission center to enroll directly, call our helpline, or fill out the enquiry form on our website."
    }
  ];

  const seoClusters = [
    { label: "IIT JEE Coaching in Patna", to: "/iit-jee-coaching-in-patna" },
    { label: "JEE Main Coaching in Patna", to: "/jee-main-coaching-in-patna" },
    { label: "JEE Advanced Coaching in Patna", to: "/jee-advanced-coaching-in-patna" },
    { label: "JEE Dropper Coaching in Patna", to: "/jee-dropper-coaching-in-patna" },
    { label: "JEE Foundation Coaching in Patna", to: "/class-6-to-10" },
    { label: "JEE Scholarship (T-MAT)", to: "/scholarship" },
    { label: "JEE Admission in Patna", to: "/admission" },
    { label: "JEE Results", to: "/result" }
  ];

  return (
    <>
      <Helmet>
        {/* Title & Description */}
        <title>JEE Coaching in Patna | JEE Main & Advanced | Team Excellent</title>
        <meta 
          name="description" 
          content="Looking for JEE coaching in Patna? Explore Team Excellent's JEE Main and Advanced preparation programs, faculty, study support, tests, courses and admission details." 
        />

        {/* Keywords */}
        <meta 
          name="keywords" 
          content="jee coaching institute in patna, jee preparation in patna, iit jee coaching in patna, jee classes in patna, engineering entrance coaching in patna" 
        />

        {/* Open Graph */}
        <meta property="og:title" content="JEE Coaching in Patna | JEE Main & Advanced | Team Excellent" />
        <meta property="og:description" content="Looking for JEE coaching in Patna? Explore Team Excellent's JEE Main and Advanced preparation programs, faculty, study support, tests, courses and admission details." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://teamexcellentcareerinstitute.in/jee-coaching-in-patna" />
        <link rel="canonical" href="https://teamexcellentcareerinstitute.in/jee-coaching-in-patna" />
        <meta property="og:image" content="https://teamexcellentcareerinstitute.in/logo192.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="JEE Coaching in Patna | JEE Main & Advanced | Team Excellent" />
        <meta name="twitter:description" content="Looking for JEE coaching in Patna? Explore Team Excellent's JEE Main and Advanced preparation programs." />
        <meta name="twitter:image" content="https://teamexcellentcareerinstitute.in/logo192.png" />

        {/* EducationalOrganization & LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "EducationalOrganization", "School", "ProfessionalService", "Organization"],
            "@id": "https://teamexcellentcareerinstitute.in/#organization",
            "name": "Team Excellent Career Institute",
            "alternateName": "Team Excellent JEE Coaching Patna",
            "url": "https://teamexcellentcareerinstitute.in",
            "logo": "https://teamexcellentcareerinstitute.in/logo192.png",
            "image": "https://teamexcellentcareerinstitute.in/logo192.png",
            "description": "Premier engineering entrance coaching institute in Patna, Bihar, providing IIT-JEE (Main & Advanced) and foundation preparation programs.",
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
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "540"
            }
          })}
        </script>

        {/* Course Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "JEE (Main & Advanced) Preparation Program",
            "description": "Structured coaching program for JEE aspirants covering Physics, Chemistry, and Mathematics with NTA-pattern test series and IITian faculty mentoring.",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "Team Excellent Career Institute",
              "url": "https://teamexcellentcareerinstitute.in/"
            },
            "offers": {
              "@type": "Offer",
              "category": "Up to 100% Scholarship via T-MAT",
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
                "name": "JEE Coaching in Patna",
                "item": "https://teamexcellentcareerinstitute.in/jee-coaching-in-patna"
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
                Engineering Preparatory Academy
              </span>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#1e1b4b] leading-tight">
                JEE Coaching in Patna
              </h1>
              
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#5B2D7C] to-[#b72e2f] rounded-full mt-2" />
              
              <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-medium mt-4">
                Preparing for the Joint Entrance Examination requires more than completing the syllabus. Students need strong concepts, regular practice, effective revision, problem-solving ability and consistent performance evaluation.
                <br/><br/>
                Team Excellent Career Institute provides JEE preparation in Patna for students targeting JEE Main and JEE Advanced, with a structured academic approach covering Physics, Chemistry and Mathematics. The program focuses on concept clarity, exam-oriented practice, regular assessment, doubt support and academic guidance.
                <br/><br/>
                Whether you are beginning your JEE preparation in Class 11, continuing your preparation in Class 12, or looking for a structured preparation program after Class 12, the right course should match your academic level, preparation stage and target examination.
              </p>

              <div className="flex flex-wrap gap-4 mt-6">
                <button 
                  onClick={() => handleOpenModal("JEE General Inquiry")}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#5B2D7C] hover:bg-[#472164] px-6 py-3.5 text-sm font-bold text-white shadow-md transition duration-200 active:scale-95"
                >
                  Enquire Now
                </button>
                <Link 
                  to="/admission" 
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 hover:border-[#5B2D7C]/60 hover:bg-[#5B2D7C]/5 transition duration-200"
                >
                  Scholarship Info
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted Section (A Name You Can Trust) */}
        <TrustedSection />

        {/* JEE Main and JEE Advanced Coaching in Patna */}
        <section className="w-full py-16 px-4 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                JEE Main and JEE Advanced Coaching in Patna
              </h2>
              <div className="w-16 h-1 bg-[#5B2D7C] mx-auto mt-3 rounded-full" />
              <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
                JEE preparation has two distinct examination stages, and students need to understand the requirements of both.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* JEE Main */}
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="text-xl font-bold text-[#5B2D7C] mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  JEE Main Preparation
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  The JEE Main program helps students develop conceptual speed and accuracy.
                </p>
                <ul className="space-y-3">
                  {["Strong fundamentals in Physics, Chemistry and Mathematics", "Chapter-wise problem-solving skills", "Previous-year question practice", "Speed and accuracy drills", "Time-management skills in exams", "Regular mock-test practice on NTA portal", "Revision and error log analysis"].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 font-semibold">
                      <CheckCircle className="w-4.5 h-4.5 text-purple-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* JEE Advanced */}
              <div className="bg-red-50/10 p-8 rounded-3xl border border-red-100">
                <h3 className="text-xl font-bold text-[#b72e2f] mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  JEE Advanced Preparation
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  For students targeting JEE Advanced, preparation needs greater emphasis on depth and analytics.
                </p>
                <ul className="space-y-3">
                  {["Deep conceptual exploration & application", "Solving multi-concept subjective problems", "Analytical thinking and calculation strategy", "Advanced-level numerical calculation drills", "Previous-year JEE Advanced question databases", "Complex subjective problem-solving tricks", "Full-length mock exam simulations"].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 font-semibold">
                      <CheckCircle className="w-4.5 h-4.5 text-red-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Team Excellent for JEE Preparation? */}
        <section className="w-full py-16 px-4 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                Why Choose Team Excellent for JEE Preparation?
              </h2>
              <div className="w-16 h-1 bg-[#5B2D7C] mx-auto mt-3 rounded-full" />
              <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
                Our institute focuses on real, verifiable differentiators rather than repeatedly claiming "best."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseItems.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col gap-2">
                  <h3 className="font-bold text-base text-slate-800">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* JEE Courses at Team Excellent */}
        <section className="w-full py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                JEE Courses at Team Excellent
              </h2>
              <div className="w-16 h-1 bg-[#b72e2f] mx-auto mt-3 rounded-full" />
              <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
                Choose the program that matches your class, preparation level, and targets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {courses.map((course, idx) => (
                <div key={idx} className="bg-slate-50 rounded-3xl p-6 border border-slate-100 flex flex-col justify-between hover:shadow-sm transition">
                  <div>
                    <h3 className="font-bold text-base text-slate-800 mb-2">{course.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-6">{course.desc}</p>
                  </div>
                  <Link 
                    to={course.link} 
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 w-full bg-white text-[#5B2D7C] hover:bg-purple-50 text-xs font-bold rounded-xl border border-slate-200 transition"
                  >
                    Explore Program
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our JEE Preparation Methodology */}
        <section className="w-full py-16 px-4 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                Our JEE Preparation Methodology
              </h2>
              <div className="w-16 h-1 bg-[#5B2D7C] mx-auto mt-3 rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
              {methodology.map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm relative">
                  <span className="text-xs font-black text-purple-600">Step {item.step}</span>
                  <h3 className="font-extrabold text-sm text-[#1e1b4b] mt-2 mb-1">{item.title}</h3>
                  <p className="text-[10px] text-slate-500 leading-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Physics, Chemistry & Mathematics Preparation */}
        <section className="w-full py-16 px-4 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                Physics, Chemistry & Mathematics Preparation
              </h2>
              <div className="w-16 h-1 bg-[#b72e2f] mx-auto mt-3 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {subjects.map((sub, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
                  <h3 className="font-extrabold text-[#1e1b4b] text-lg mb-4 pb-2 border-b border-slate-200">
                    {sub.name}
                  </h3>
                  <ul className="space-y-3">
                    {sub.topics.map((topic, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2 text-xs text-slate-600 font-semibold">
                        <CheckCircle className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* JEE Test Series & Performance Analysis */}
        <section className="w-full py-16 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                JEE Test Series & Performance Analysis
              </h2>
              <div className="w-16 h-1 bg-[#5B2D7C] mx-auto mt-3 rounded-full" />
              <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
                Our testing process simulates exact examination conditions to guide performance improvement.
              </p>
            </div>

            <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h3 className="font-bold text-base text-slate-800 mb-4">Graduated Test Formats:</h3>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 text-center mb-6">
                {["Chapter Test", "Part Test", "Full Syllabus Test", "JEE Main Mock", "JEE Advanced Mock"].map((t, idx) => (
                  <div key={idx} className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 font-bold text-xs text-slate-700">
                    {t}
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                We track test scores, timing velocity, and conceptual gaps. Results are analyzed to identify weak topics, mistake patterns, and time-management bottlenecks, allowing teachers to deliver structured revision guidelines.
              </p>
            </div>
          </div>
        </section>

        {/* JEE Study Material */}
        <section className="w-full py-16 px-4 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                JEE Study Material
              </h2>
              <div className="w-16 h-1 bg-[#b72e2f] mx-auto mt-3 rounded-full" />
              <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
                Comprehensive reference resources provided to all classroom students.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {["Classroom Notes", "Practice Sheets & Assignments", "Daily Practice Problems (DPPs)", "Chapter-wise & PYQ Workbooks", "Full-length Mock Papers", "Revision Check Booklets"].map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-100/60 flex items-start gap-2.5 text-xs text-slate-700 font-semibold">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* JEE Faculty & Mentorship */}
        <section className="w-full py-16 px-4 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                JEE Faculty & Mentorship
              </h2>
              <div className="w-16 h-1 bg-[#5B2D7C] mx-auto mt-3 rounded-full" />
              <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
                Our classrooms are guided by experienced educators dedicated to student progression.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {facultyList.map((fac, idx) => (
                <div key={idx} className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#5B2D7C] flex items-center justify-center font-bold text-lg mb-4">
                      {fac.name[0]}
                    </div>
                    <h3 className="font-black text-[#1e1b4b] text-lg">{fac.name}</h3>
                    <p className="text-xs font-bold text-[#b72e2f] uppercase tracking-wider">{fac.subject} Mentor</p>
                    
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

        {/* Who Should Join JEE Coaching at Team Excellent? */}
        <section className="w-full py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                Who Should Join JEE Coaching at Team Excellent?
              </h2>
              <div className="w-16 h-1 bg-[#b72e2f] mx-auto mt-3 rounded-full" />
            </div>

            <div className="max-w-2xl mx-auto bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-sm">
              <ul className="space-y-4">
                {[
                  "Class 11 students beginning their JEE preparation journey early",
                  "Class 12 students preparing for both JEE Main and Advanced alongside boards",
                  "Aspirants looking for structured offline classroom environments",
                  "Students who require regular testing and structured diagnostic reviews",
                  "Students who need daily doubt-solving desks and 1-on-1 support",
                  "Dropper candidates preparing for another dedicated JEE attempt"
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

        {/* How to Choose the Right JEE Coaching Institute in Patna? */}
        <section className="w-full py-16 px-4 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                How to Choose the Right JEE Coaching Institute in Patna?
              </h2>
              <div className="w-16 h-1 bg-[#5B2D7C] mx-auto mt-3 rounded-full" />
              <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
                Patna has a large and competitive JEE coaching market. Compare key parameters before choosing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {chooseCriteria.map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-slate-100 flex items-start gap-2.5 text-xs text-slate-700 font-semibold">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* JEE Coaching Fees in Patna */}
        <section className="w-full py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                JEE Coaching Fees in Patna
              </h2>
              <div className="w-16 h-1 bg-[#b72e2f] mx-auto mt-3 rounded-full" />
            </div>

          <div className="max-w-3xl mx-auto bg-slate-50 border border-slate-100 rounded-3xl p-8">
            <h3 className="font-bold text-base text-slate-800 mb-3">JEE Coaching Fees at Team Excellent</h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
              The fee for JEE coaching may vary depending on the course, batch, duration, and student program. Students and parents can contact Team Excellent for the latest fee structure, available T-MAT scholarships, and installment options.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => handleOpenModal("General Fees Enquiry")}
                className="px-6 py-3 bg-[#5B2D7C] text-white text-xs font-bold rounded-xl hover:bg-[#472164] transition"
              >
                Inquire Fee Structure
              </button>
              <Link 
                to="/admission" 
                className="px-6 py-3 bg-white text-slate-700 text-xs font-bold rounded-xl border border-slate-200 hover:border-[#5B2D7C]/60 hover:bg-[#5B2D7C]/5 transition"
              >
                Scholarship Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team Excellent Career Institute – Patna */}
      <section className="w-full py-16 px-4 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
              Team Excellent Career Institute – Patna
            </h2>
            <div className="w-16 h-1 bg-[#5B2D7C] mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-4xl mx-auto items-center">
            <div className="lg:col-span-6 space-y-5 text-left">
              <h3 className="text-xl font-bold text-[#1e1b4b]">Local SEO Location Details</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Team Excellent- Best JEE Coaching in Patna, Best NEET Coaching in Patna is publicly listed at New Kunj Colony, Saketpuri, Patna, Bihar 800006. Our current business listing holds a 4.8/5 rating from 498 reviews.
              </p>
              <div className="space-y-3.5 text-xs text-slate-600 font-semibold">
                <p className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                  <span><strong>Address:</strong> New Kunj Colony, Saketpuri, Patna, Bihar 800006</span>
                </p>
                <p className="flex items-start gap-2">
                  <Phone className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                  <span><strong>Contact:</strong> +91 9942000371</span>
                </p>
                <p className="flex items-start gap-2">
                  <Clock className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                  <span><strong>Office Hours:</strong> Mon - Sat (8:00 AM to 8:00 PM)</span>
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white p-6 rounded-3xl border border-slate-200">
              <h4 className="font-bold text-sm text-[#1e1b4b] mb-3">Directions & Nearby Landmark</h4>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Located near NMCH College, our center is easily accessible for students traveling from Boring Road, Kankarbagh, Rajendra Nagar, and surrounding Patna areas.
              </p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center justify-center gap-2">
                <Shield className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-[10px] text-slate-600 font-bold">4.8 Rating | Verified Google Listing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JEE Admission Process */}
      <section className="w-full py-16 px-4 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
              JEE Admission Process
            </h2>
            <div className="w-16 h-1 bg-[#b72e2f] mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {admissionSteps.map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-100/60 relative">
                <span className="text-xs font-black text-purple-600">{item.step}</span>
                <h3 className="font-extrabold text-sm text-[#1e1b4b] mt-2 mb-1">{item.title}</h3>
                <p className="text-[10px] text-slate-500 leading-normal">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="w-full py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 bg-[#5B2D7C] mx-auto mt-3 rounded-full" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm transition"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex justify-between items-center gap-4 text-slate-800 hover:bg-slate-50/50"
                >
                  <span className="font-bold text-sm sm:text-base leading-snug">{faq.q}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-300 ${
                      openFaq === idx ? "transform rotate-180" : ""
                    }`} 
                  />
                </button>
                {openFaq === idx && (
                  <div className="p-5 border-t border-slate-50 text-xs sm:text-sm text-slate-500 leading-relaxed bg-slate-50/30">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links segment */}
      <section className="w-full py-12 px-4 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Related Engineering Resources</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {seoClusters.map((cluster, idx) => (
              <Link 
                key={idx} 
                to={cluster.to} 
                className="px-3 py-1.5 bg-slate-50 hover:bg-purple-50 text-[10px] text-slate-500 hover:text-[#5B2D7C] border border-slate-200/65 hover:border-purple-200 font-bold rounded-lg transition"
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
            Start Your JEE Preparation in Patna
          </h2>
          
          <p className="text-purple-100 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
            A strong JEE preparation strategy combines conceptual understanding, consistent practice, regular testing and continuous improvement. Explore Team Excellent's JEE programs and choose the course that matches your class, preparation level and JEE target.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <button 
              onClick={() => handleOpenModal("JEE CTA Enquiry")}
              className="px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-purple-950 font-black rounded-xl text-sm sm:text-base transition shadow-md active:scale-95 flex items-center gap-2"
            >
              Enquire Now
            </button>
            <button 
              onClick={() => handleOpenModal("View Courses")}
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
