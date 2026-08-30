import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import EnrollmentForm from '../Components/EnrollmentForm';
import TrustedSection from '../Components/TrustedSection';
import Testimonials from '../Components/Testimonials';
import ExploreLinks from '../Components/ExploreLinks';
import FAQSection from '../Components/FAQSection';
import { 
  Award, Target, Clock, BookOpen, GraduationCap, ChevronDown, 
  CheckCircle, HelpCircle, Trophy, Sparkles, MapPin, Phone, Mail 
} from 'lucide-react';

export default function JeeDroppers() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalCourse, setModalCourse] = useState("");
  const [openFaq, setOpenFaq] = useState(null);

  const handleOpenModal = (course = "") => {
    setModalCourse(course);
    setIsOpen(true);
  };

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const whyDropperStrategy = [
    { title: "Full Syllabus Coverage", desc: "Since you have already been introduced to the complete syllabus, we skip slow-paced baseline warmups to address analytical applications directly." },
    { title: "Identify & Repair Weak Chapters", desc: "Diagnostic checks pinpoint chapters where concepts are weak, allowing us to spend more time repairing execution blockages." },
    { title: "High-Weightage Chapters First", desc: "Prioritize topics that carry maximum weight in JEE Main and Advanced to ensure high scoring potential." },
    { title: "Extensive PYQ Worksheets", desc: "Daily practice sessions centered entirely on last 15 years' JEE question banks to master exact pattern demands." },
    { title: "Regular Mock Tests", desc: "Simulated Computer-Based Tests (CBT) to help students manage exam time, panic, and accuracy traps." },
    { title: "Speed & Accuracy Optimization", desc: "Solve questions using shortcuts, elimination strategies, and logical assumptions to boost score velocity." }
  ];

  const subjectsPrep = [
    {
      sub: "Physics",
      topics: ["Concept revision of high-weightage topics", "Numerical application and formula logs", "JEE Main & Advanced conceptual problems", "Topic-wise past year questions (PYQs)"]
    },
    {
      sub: "Chemistry",
      topics: ["Physical Chemistry formula mapping and calculation drills", "Organic Chemistry reaction mechanisms and charts", "Inorganic Chemistry NCERT-based core revision", "Symmetrical practice sheets & past papers"]
    },
    {
      sub: "Mathematics",
      topics: ["Detailed concept revision for complex areas", "Calculus & coordinate geometry worksheets", "JEE Main speed calculation practice", "JEE Advanced-level multi-concept questions"]
    }
  ];

  const studyPlanPhases = [
    { phase: "Phase 1", title: "Assessment & Concept Repair", desc: "Conduct diagnostic tests to identify weak chapters. Rebuild core concepts in Physics, Chemistry, and Math from the roots." },
    { phase: "Phase 2", title: "Complete Syllabus Coverage", desc: "Cover both Class 11 and 12 competitive syllabi systematically with daily lectures and structured study guides." },
    { phase: "Phase 3", title: "Intensive Practice", desc: "Solve Daily Practice Problems (DPPs), chapter assignments, and start writing weekly topic-specific tests." },
    { phase: "Phase 4", title: "Revision Cycles", desc: "Run dedicated revision cycles to consolidate high-weightage topics and core formulae before JEE Main Session 1." },
    { phase: "Phase 5", title: "Full-Length Testing", desc: "Practice NTA-pattern Computer-Based Tests (CBT) under strict timed conditions with detailed metric analysis." },
    { phase: "Phase 6", title: "Final Revision & Advanced Focus", desc: "Focus entirely on multi-concept subjective problems, revision of mistake logs, and JEE Advanced mock practice." }
  ];

  const testSystem = [
    "Chapter-wise unit assessments",
    "Part-syllabus cumulative tests",
    "Full-syllabus mock examinations",
    "JEE Main pattern online tests",
    "JEE Advanced pattern offline/online tests",
    "Detailed analytical diagnostic reports",
    "Individual score & rank tracking logs",
    "Weak-topic diagnostic evaluations"
  ];

  const materialFeatures = [
    "Expert-written class notes and formula summaries",
    "Level-wise graded daily practice problems (DPPs)",
    "Topic-specific printed assignments with step solutions",
    "Past 10 years' JEE Main & Advanced chapter-wise PYQs",
    "Full-length CBT portal mock test series papers",
    "Intensive revision check booklets and error-tracking logs"
  ];

  const whoShouldJoin = [
    "Completed Class 12 board examinations",
    "Appeared for JEE Main and want to improve percentile",
    "Aiming for a significantly higher rank in JEE Advanced",
    "Need another dedicated, distraction-free attempt for IITs",
    "Have conceptual gaps in core Physics, Chemistry, or Math",
    "Need structured, disciplined offline schedules and daily testing",
    "Struggle with self-study focus and require expert mentoring"
  ];

  const admissionSteps = [
    { step: "1", title: "Enquiry & Center Visit", desc: "Visit our Patna center or contact counselor to learn details." },
    { step: "2", title: "Counselling & Academic Check", desc: "Discuss past scores and identify critical prep improvement areas." },
    { step: "3", title: "Course Selection", desc: "Opt for the dedicated 1-Year JEE Droppers target batch." },
    { step: "4", title: "Fee Payment & T-MAT", desc: "Complete registration fees or claim concessions via T-MAT scholarship." },
    { step: "5", title: "Batch Allocation", desc: "Receive study materials, timetable schedule, and digital batch access." },
    { step: "6", title: "Classes Begin", desc: "Start regular daily lectures, study desks, and weekly test tracks." }
  ];

  const faqs = [
    {
      question: "Which is the best JEE dropper coaching in Patna?",
      answer: "Team Excellent Career Institute is highly recommended for JEE droppers in Patna, offering dedicated one-year repeater courses with small batch sizes, experienced faculty, and rigorous numerical practice."
    },
    {
      question: "Does Team Excellent offer a dedicated JEE dropper batch?",
      answer: "Yes, we offer dedicated batches exclusively for Class 12 passed/dropper students. This allows us to focus 100% on competitive JEE Main & Advanced patterns without school board distractions."
    },
    {
      question: "Who should join a JEE dropper program?",
      answer: "Class 12 pass-out students who wish to improve their JEE Main percentiles, secure a better rank in JEE Advanced, or want to dedicatedly prepare for top-tier IITs/NITs should join this program."
    },
    {
      question: "Can droppers prepare for both JEE Main and Advanced?",
      answer: "Absolutely. With school board exams already cleared, droppers can dedicate their entire time to mastering JEE Main speed calculations and solving multi-concept advanced subjective problems."
    },
    {
      question: "What is included in the JEE dropper course?",
      answer: "The program includes daily interactive lectures covering Physics, Chemistry, and Math from basics to advanced levels, comprehensive study packages, DPPs, and diagnostic analysis."
    },
    {
      question: "Does the course include regular mock tests?",
      answer: "Yes, we conduct weekly chapter tests and full-syllabus Computer-Based Tests (CBT) on our online student portal, simulating the official NTA examination environment."
    },
    {
      question: "Does Team Excellent provide doubt-solving for droppers?",
      answer: "Yes, we have dedicated daily doubt-clearing desks where students can interact one-on-one with senior teachers to resolve complex queries."
    },
    {
      question: "Is study material provided to JEE droppers?",
      answer: "Yes, droppers receive exhaustive study packages, assignments, revision sheets, and a dedicated bank of past 10 years' chapter-wise Previous-Year Questions (PYQs)."
    },
    {
      question: "What is the duration of the JEE dropper course?",
      answer: "The JEE Dropper course is a high-intensity 1-year classroom program running from the launch of batches in June/July until the JEE Advanced examination."
    },
    {
      question: "What is the fee for JEE dropper coaching?",
      answer: "Our fees are highly competitive. Students can secure up to 100% fee waivers based on their scores in the T-MAT Scholarship Exam. Contact our center for a detailed fee structure."
    },
    {
      question: "Can an average student improve their JEE rank through a dropper year?",
      answer: "Yes. With disciplined study schedules, systematic problem-solving strategies, and structured mentoring from our faculty, average students consistently improve their percentiles significantly."
    },
    {
      question: "How can I take admission to the JEE dropper batch?",
      answer: "You can register online, call our admissions office, or visit our Saketpuri center in Patna near NMCH College for direct counseling and registration."
    }
  ];

  return (
    <>
      <Helmet>
        <title>JEE Dropper Coaching in Patna | JEE Main & Advanced | Team Excellent</title>
        <meta 
          name="description" 
          content="Looking for JEE dropper coaching in Patna? Explore Team Excellent's one-year JEE preparation program for droppers targeting JEE Main and JEE Advanced." 
        />
        <link rel="canonical" href="https://teamexcellentcareerinstitute.in/jee-dropper-coaching-in-patna" />

        {/* Course Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "JEE Dropper Coaching Program",
            "description": "Intensive one-year classroom target program for repeaters and droppers targeting top ranks in JEE Main and Advanced.",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "Team Excellent Career Institute",
              "url": "https://teamexcellentcareerinstitute.in/"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
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
                "name": "JEE Dropper Coaching in Patna",
                "item": "https://teamexcellentcareerinstitute.in/jee-dropper-coaching-in-patna"
              }
            ]
          })}
        </script>
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-slate-50">
        
        {/* 1. H1 Header Section */}
        <section className="relative w-full pt-[130px] lg:pt-[160px] pb-16 bg-[#fafafc] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#e2e0ff_1px,transparent_1px)] [background-size:24px_24px] opacity-35" />
          <div className="absolute -top-30 left-1/4 -z-10 h-[350px] w-[350px] rounded-full bg-purple-200/30 blur-[80px]" />
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50/80 px-4 py-1.5 text-xs font-semibold text-[#5B2D7C] shadow-sm">
                <Trophy className="w-4.5 h-4.5 text-[#b72e2f]" />
                1-Year Engineering Target Batch
              </span>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#1e1b4b] leading-tight">
                JEE Dropper Coaching in Patna
              </h1>
              
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#5B2D7C] to-[#b72e2f] rounded-full mt-2" />
              
              <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-medium mt-4">
                Preparing for JEE again after Class 12? Team Excellent Career Institute offers a structured JEE dropper program in Patna designed for students who want to improve their JEE Main and JEE Advanced performance through focused learning, systematic revision, regular testing, doubt resolution and intensive problem-solving practice.
              </p>

              <div className="flex flex-wrap gap-4 mt-6">
                <button 
                  onClick={() => handleOpenModal("JEE Droppers Program")}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#5B2D7C] px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#472164] hover:-translate-y-0.5 transition duration-200"
                >
                  Join Target Batch
                </button>
                <Link 
                  to="/admission" 
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 hover:border-[#5B2D7C]/60 hover:bg-[#5B2D7C]/5 transition duration-200"
                >
                  Scholarship Details
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Render Trusted Section below the Hero block */}
        <TrustedSection />

        {/* 2. Why Choose a Dedicated JEE Dropper Program? */}
        <section className="w-full py-16 px-4 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                Why Choose a Dedicated JEE Dropper Program?
              </h2>
              <div className="w-16 h-1 bg-[#5B2D7C] mx-auto mt-3 rounded-full" />
              <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
                Repeater students require a completely different academic strategy compared to regular class students.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {whyDropperStrategy.map((item, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-100/60 p-6 rounded-2xl flex flex-col gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-50 text-[#5B2D7C] text-xs font-black shrink-0">
                    {idx + 1}
                  </div>
                  <h3 className="font-extrabold text-sm text-[#1e1b4b]">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. JEE Dropper Program at Team Excellent */}
        <section className="w-full py-16 px-4 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                JEE Dropper Program at Team Excellent
              </h2>
              <div className="w-16 h-1 bg-[#b72e2f] mx-auto mt-3 rounded-full" />
              <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
                A subject-wise breakdown of our intensive target syllabus approach.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {subjectsPrep.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                  <h3 className="font-extrabold text-[#1e1b4b] text-lg mb-4 pb-2 border-b border-slate-100">
                    {item.sub}
                  </h3>
                  <ul className="space-y-3">
                    {item.topics.map((t, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2 text-xs text-slate-600 font-semibold">
                        <CheckCircle className="w-4.5 h-4.5 text-purple-600 shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. JEE Main & JEE Advanced Preparation for Droppers */}
        <section className="w-full py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                JEE Main & JEE Advanced Preparation for Droppers
              </h2>
              <div className="w-16 h-1 bg-[#5B2D7C] mx-auto mt-3 rounded-full" />
              <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
                Distinct approaches are necessary for scoring high percentiles in Main and clearing the Advanced cutoff.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-purple-50/30 border border-purple-100 p-8 rounded-3xl">
                <h3 className="text-xl font-bold text-[#5B2D7C] mb-4">JEE Main Focus</h3>
                <ul className="space-y-3.5">
                  {["Speed simulation drills to handle 75 questions", "Accuracy analysis to restrict negative marking", "Exhaustive past-year papers review (PYQs)", "Full syllabus Computer-Based Tests (CBT)", "Effective time management methods per subject", "NTA exam interface practice runs"].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 font-semibold">
                      <CheckCircle className="w-4.5 h-4.5 text-purple-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50/30 border border-red-100 p-8 rounded-3xl">
                <h3 className="text-xl font-bold text-[#b72e2f] mb-4">JEE Advanced Focus</h3>
                <ul className="space-y-3.5">
                  {["Conceptual depth sessions for tricky modules", "Solving multi-concept subjective questions", "Advanced numerical derivation calculations", "High-order thinking questions (HOTs)", "IIT-JEE past papers solving", "Full-length comprehensive mock papers"].map((item, idx) => (
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

        {/* 5. One-Year JEE Dropper Study Plan */}
        <section className="w-full py-16 px-4 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                One-Year JEE Dropper Study Plan
              </h2>
              <div className="w-16 h-1 bg-[#5B2D7C] mx-auto mt-3 rounded-full" />
              <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
                A structured 6-phase plan to optimize performance within a single academic year.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
              {studyPlanPhases.map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                  <span className="text-xs font-black text-purple-600">{item.phase}</span>
                  <h3 className="font-extrabold text-sm text-[#1e1b4b] mt-2 mb-1">{item.title}</h3>
                  <p className="text-[10px] text-slate-500 leading-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Regular Tests & Performance Analysis */}
        <section className="w-full py-16 px-4 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                Regular Tests & Performance Analysis
              </h2>
              <div className="w-16 h-1 bg-[#b72e2f] mx-auto mt-3 rounded-full" />
              <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
                Testing under pressure is key to converting conceptual knowledge into ranks.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {testSystem.map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-100/60 flex items-start gap-2.5 text-xs text-slate-700 font-semibold">
                  <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Doubt Solving & Personal Mentorship */}
        <section className="w-full py-16 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                Doubt Solving & Personal Mentorship
              </h2>
              <div className="w-16 h-1 bg-[#5B2D7C] mx-auto mt-3 rounded-full" />
            </div>

            <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-6">
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Repeater students face unique stress. We provide regular mental-counseling and structured doubt clearance. Our subject faculties sit at the doubt desks daily to help students address problem-solving bottlenecks 1-on-1.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-slate-100">
                <div className="text-center p-4 bg-slate-50 rounded-2xl">
                  <span className="font-extrabold text-base text-[#5B2D7C]">Daily Doubt Desks</span>
                  <p className="text-[10px] text-slate-500 mt-1">1-on-1 clearing slots</p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-2xl">
                  <span className="font-extrabold text-base text-[#5B2D7C]">Subject Mentors</span>
                  <p className="text-[10px] text-slate-500 mt-1">Experienced counselors</p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-2xl">
                  <span className="font-extrabold text-base text-[#5B2D7C]">Performance Logs</span>
                  <p className="text-[10px] text-slate-500 mt-1">Weekly progress reviews</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. JEE Dropper Study Material */}
        <section className="w-full py-16 px-4 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                JEE Dropper Study Material
              </h2>
              <div className="w-16 h-1 bg-[#b72e2f] mx-auto mt-3 rounded-full" />
              <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
                Complete, detailed resources provided to every enrolled student.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {materialFeatures.map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-100/60 flex items-start gap-2.5 text-xs text-slate-700 font-semibold">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Who Should Join a JEE Dropper Batch? */}
        <section className="w-full py-16 px-4 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                Who Should Join a JEE Dropper Batch?
              </h2>
              <div className="w-16 h-1 bg-[#5B2D7C] mx-auto mt-3 rounded-full" />
            </div>

            <div className="max-w-2xl mx-auto bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
              <ul className="space-y-4">
                {whoShouldJoin.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs text-slate-600 font-semibold">
                    <CheckCircle className="w-4.5 h-4.5 text-purple-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 10. JEE Dropper Coaching Fees in Patna */}
        <section className="w-full py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                JEE Dropper Coaching Fees in Patna
              </h2>
              <div className="w-16 h-1 bg-[#b72e2f] mx-auto mt-3 rounded-full" />
              <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
                Information regarding tuition fees, payment models, and scholarship options.
              </p>
            </div>

            <div className="max-w-3xl mx-auto bg-slate-50 border border-slate-100 rounded-3xl p-8">
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
                Fees for the 1-Year JEE Droppers program depend on study material options, tests access, and student categories. Team Excellent offers concessions up to 100% on tuition depending on T-MAT scholarship results. Please contact our counseling team for the current detailed fee structure.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => handleOpenModal("Dropper Fee Details")}
                  className="px-6 py-3 bg-[#5B2D7C] text-white text-xs font-bold rounded-xl hover:bg-[#472164] transition"
                >
                  Inquire Fee Struct
                </button>
                <Link 
                  to="/admission" 
                  className="px-6 py-3 bg-white text-slate-700 text-xs font-bold rounded-xl border border-slate-200 hover:border-[#5B2D7C]/60 hover:bg-[#5B2D7C]/5 transition"
                >
                  T-MAT Registration
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 11. JEE Dropper Batch Admission in Patna */}
        <section className="w-full py-16 px-4 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                JEE Dropper Batch Admission in Patna
              </h2>
              <div className="w-16 h-1 bg-[#5B2D7C] mx-auto mt-3 rounded-full" />
              <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
                Step-by-step registration roadmap to get started with your preparation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
              {admissionSteps.map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm relative">
                  <span className="text-xs font-black text-purple-600">{item.step}</span>
                  <h3 className="font-extrabold text-sm text-[#1e1b4b] mt-2 mb-1">{item.title}</h3>
                  <p className="text-[10px] text-slate-500 leading-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 12. Why Choose Team Excellent for JEE Droppers? */}
        <section className="w-full py-16 px-4 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                Why Choose Team Excellent for JEE Droppers?
              </h2>
              <div className="w-16 h-1 bg-[#b72e2f] mx-auto mt-3 rounded-full" />
              <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
                Authentic trust metrics highlighting our coaching infrastructure and reviews.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex flex-col justify-between">
                <div>
                  <h3 className="font-black text-base text-slate-800 mb-2">Google Business Listing rating</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    Our institute holds a 4.8 rating from over 498 verified student reviews, confirming our tutoring standards and mentorship.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-2xl font-black text-[#5B2D7C]">4.8 / 5</div>
                  <div className="text-xs text-slate-400 font-bold">Google Rating</div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex flex-col justify-between">
                <div>
                  <h3 className="font-black text-base text-slate-800 mb-2">Faculty & Batch Inclusions</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    Learn under senior mentors including IIT-BHU alumni, who conduct classroom sessions in small, focused student groups.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-2xl font-black text-[#b72e2f]">12+ Years</div>
                  <div className="text-xs text-slate-400 font-bold">Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FAQSection faqs={faqs} />
        {/* 14. Start Your JEE Dropper Preparation with Team Excellent */}
        <section className="w-full py-20 px-4 bg-gradient-to-br from-[#5B2D7C] to-[#3F1D5B] text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-800/20 via-transparent to-transparent pointer-events-none" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center gap-6">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Start Your JEE Dropper Preparation with Team Excellent
            </h2>
            
            <p className="text-purple-100 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
              Preparing for JEE requires the right strategy, consistent practice, and regular academic guidance. Explore Team Excellent's JEE programs, speak with the academic team, and choose the preparation program that matches your goals.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <button 
                onClick={() => handleOpenModal("JEE Dropper CTA Enquiry")}
                className="px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-purple-950 font-black rounded-xl text-sm sm:text-base transition shadow-md active:scale-95 flex items-center gap-2"
              >
                Enquire Now
              </button>
              <button 
                onClick={() => handleOpenModal("Counseling Session")}
                className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-sm sm:text-base border border-white/20 transition active:scale-95"
              >
                Book a Counselling Session
              </button>
            </div>
          </div>
        </section>

        <Testimonials />
        <ExploreLinks />

      </main>

      <EnrollmentForm 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        initialCourse={modalCourse} 
      />

      <Footer />
    </>
  );
}
