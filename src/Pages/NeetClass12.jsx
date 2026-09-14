import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import EnrollmentForm from '../Components/EnrollmentForm'
import { 
  GraduationCap, CheckCircle, Calendar, BookOpen, Target, Award, 
  Clock, Users, ClipboardCheck, Sparkles, ChevronDown, ArrowRight, 
  Stethoscope, ShieldCheck, HeartPulse, HelpCircle 
} from 'lucide-react'
import TrustedSection from '../Components/TrustedSection'
import Testimonials from '../Components/Testimonials'
import ExploreLinks from '../Components/ExploreLinks'

export default function NeetClass12() {
  const [isOpen, setIsOpen] = useState(false)
  const [modalCourse, setModalCourse] = useState("NEET Class 12 Coaching")
  const [openFaq, setOpenFaq] = useState(null)

  const handleOpenModal = (courseName = "NEET Class 12 Coaching") => {
    setModalCourse(courseName)
    setIsOpen(true)
  }

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx)
  }

  const courseHighlights = [
    {
      title: "Class 12 Boards & NEET Synchronization",
      desc: "Balanced syllabus coverage designed to secure 90%+ in CBSE/Bihar Board examinations alongside high-percentile NEET UG speed problem solving."
    },
    {
      title: "Complete Class 11 Winter Revision",
      desc: "Specialized booster modules starting in November to rigorously revise Class 11 Botany, Zoology, Human Physiology, Mechanics, and Chemical Bonding."
    },
    {
      title: "NCERT Line-by-Line Biology Mastery",
      desc: "Daily diagram exercises, assertion-reason practice, and statement-based questions ensuring 340+ marks out of 360 in Biology."
    },
    {
      title: "Physics & Chemistry Numerical Drills",
      desc: "Step-by-step formula derivations, dimensional analysis tricks, and timed practice sessions to eliminate fear in Physics and Physical Chemistry."
    },
    {
      title: "OMR Speed & Accuracy Mock Tests",
      desc: "Weekly part-syllabus and full-syllabus tests on actual NTA OMR sheets to train speed, eliminate negative markings, and optimize exam temperament."
    },
    {
      title: "1-on-1 Faculty Doubt Clearance",
      desc: "Daily post-class doubt desks with senior medical entrance mentors to address conceptual doubts and calculation bottlenecks individually."
    }
  ];

  const subjects = [
    {
      name: "Biology (Botany & Zoology)",
      focus: "Target: 340+ / 360 Marks",
      topics: [
        "Genetics and Evolution (Mendelian Principles, Molecular Basis of Inheritance)",
        "Biotechnology: Principles, Processes, and Clinical Applications",
        "Ecology and Environment (Ecosystem, Biodiversity Conservation)",
        "Human Reproduction & Reproductive Health",
        "Microbes in Human Welfare & Biology in Human Welfare"
      ],
      badge: "Highest Scoring Area"
    },
    {
      name: "Physics",
      focus: "Target: 140+ / 180 Marks",
      topics: [
        "Electrostatics, Current Electricity & Capacitance",
        "Magnetic Effects of Current & Magnetism",
        "Electromagnetic Induction & Alternating Current (AC)",
        "Optics (Ray Optics, Wave Optics & Optical Instruments)",
        "Modern Physics, Dual Nature of Matter, Atoms & Nuclei",
        "Semiconductor Electronics & Digital Logic Gates"
      ],
      badge: "Concept & Speed Drills"
    },
    {
      name: "Chemistry",
      focus: "Target: 150+ / 180 Marks",
      topics: [
        "Organic Chemistry (Haloalkanes, Alcohols, Aldehydes, Ketones, Amines, Biomolecules)",
        "Physical Chemistry (Solutions, Electrochemistry, Chemical Kinetics)",
        "Inorganic Chemistry (Coordination Compounds, d & f-Block Elements)",
        "Daily named reaction conversions and NCERT exemplar problem solving"
      ],
      badge: "High Accuracy Focus"
    }
  ];

  const batchSchedules = [
    { feature: "Target Examination", detail: "NEET (UG) 2026 / 2027 & Class 12 Boards" },
    { feature: "Eligibility", detail: "Students entering or studying in Class 12 (PCB / PCMB)" },
    { feature: "Class Days", detail: "5 to 6 Days a Week (Mon – Sat)" },
    { feature: "Class Duration", detail: "4 to 4.5 Hours Daily (Lectures + Doubt Counters)" },
    { feature: "Study Material", detail: "Full Printed Modules, Daily Practice Problems (DPPs), Formula Sheets" },
    { feature: "Testing Schedule", detail: "Weekly Minor Tests + Bi-Weekly Major OMR CBT Mock Tests" },
    { feature: "Scholarship Support", detail: "Up to 100% Fee Waiver via T-MAT Scholarship Test" }
  ];

  const faqs = [
    {
      q: "How does Team Excellent balance Class 12 Board exams with NEET preparation?",
      a: "Our curriculum is synchronized with the NCERT syllabus. We cover theory derivations and long-answer formatting required for CBSE and State Boards, while simultaneously training students with objective speed techniques and assertion-reason questions needed for NEET."
    },
    {
      q: "Will Class 11 syllabus be revised during the Class 12 NEET course?",
      a: "Yes. After completing the Class 12 syllabus by late October/November, our teachers conduct dedicated Fast-Track Revision modules for all critical Class 11 chapters including Human Physiology, Mechanics, Thermodynamics, and Organic Chemistry."
    },
    {
      q: "What is the batch size for Class 12 NEET coaching at Team Excellent?",
      a: "We maintain disciplined, optimal batch sizes to ensure every student receives personal attention, active classroom participation, and accessible one-on-one doubt clearing."
    },
    {
      q: "Are regular mock tests conducted on OMR sheets?",
      a: "Yes. All our weekly and monthly tests use standard NTA NEET-pattern OMR sheets. Detailed performance analytics are generated showing topic-wise accuracy, speed limits, and negative marking patterns."
    },
    {
      q: "Can students apply for scholarships in the Class 12 NEET batch?",
      a: "Yes! Students can participate in our T-MAT (Team Excellent Mentorship & Admission Test) to avail merit-based scholarships up to 100% on tuition fees."
    },
    {
      q: "How can I take admission in the NEET Class 12 coaching program?",
      a: "You can apply directly online by clicking 'Enquire Now', visit our center near NMCH College, Saketpuri, Patna, or call our admission counseling desk."
    }
  ];

  const seoClusters = [
    { label: "NEET Coaching in Patna", to: "/neet-coaching-in-patna" },
    { label: "NEET Droppers Batch", to: "/neet-dropper-coaching-in-patna" },
    { label: "T-MAT Scholarship Scheme", to: "/scholarship" },
    { label: "Study Material & DPPs", to: "/study-material" },
    { label: "NEET Test Series", to: "/test-series" },
    { label: "NEET Rank Predictor", to: "/rank-predictor" },
    { label: "Admission Procedure", to: "/admission" },
    { label: "Results & Star Achievers", to: "/result" }
  ];

  return (
    <>
      <Helmet>
        {/* Title & Description */}
        <title>NEET Coaching for Class 12 in Patna | 1-Year Target Batch - Team Excellent</title>
        <meta 
          name="description" 
          content="Join Team Excellent's 1-Year NEET Class 12 target batch in Patna. Master NCERT Biology, Physics, & Chemistry with board exam balance, OMR drills, and personal doubt desks." 
        />

        {/* Keywords */}
        <meta 
          name="keywords" 
          content="neet class 12 coaching in patna, class 12 neet preparation patna, best medical coaching for class 12 in patna, neet 1 year target batch patna, team excellent neet, neet coaching patna" 
        />

        {/* Canonical */}
        <link rel="canonical" href="https://teamexcellentcareerinstitute.in/neet-class-12-in-patna" />

        {/* Open Graph */}
        <meta property="og:title" content="NEET Coaching for Class 12 in Patna | 1-Year Target Batch - Team Excellent" />
        <meta property="og:description" content="Prepare for NEET UG alongside Class 12 Boards at Team Excellent Patna. Expert doctor faculty, synchronized NCERT syllabus, and regular OMR tests." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://teamexcellentcareerinstitute.in/neet-class-12-in-patna" />
        <meta property="og:image" content="https://teamexcellentcareerinstitute.in/logo192.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NEET Coaching for Class 12 in Patna | Team Excellent" />
        <meta name="twitter:description" content="Score 650+ in NEET UG and excel in Class 12 Boards with Team Excellent's dedicated medical program." />
        <meta name="twitter:image" content="https://teamexcellentcareerinstitute.in/logo192.png" />

        {/* Course Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "NEET Class 12 Target Course (1-Year Program)",
            "description": "Comprehensive 1-year classroom coaching program for Class 12 students preparing for NEET (UG) and school board examinations.",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "Team Excellent Career Institute",
              "url": "https://teamexcellentcareerinstitute.in/"
            },
            "offers": {
              "@type": "Offer",
              "category": "Merit Scholarship available via T-MAT Exam",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>

        {/* FAQ Schema */}
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
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Class 12 NEET Coaching",
                "item": "https://teamexcellentcareerinstitute.in/neet-class-12-in-patna"
              }
            ]
          })}
        </script>
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-slate-50 pt-28 sm:pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Banner */}
          <div className="bg-gradient-to-br from-[#7f1d1d] via-[#b72e2f] to-[#522871] text-white rounded-3xl p-8 sm:p-12 md:p-16 mb-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-black/20 blur-2xl pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 border border-white/25 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-red-100 mb-6 backdrop-blur-md">
                <Stethoscope className="w-4 h-4 text-red-200" />
                1-Year Intensive Target Program • Class 12 + NEET
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
                NEET Class 12 Coaching in Patna
              </h1>
              <p className="text-red-100 text-base sm:text-lg md:text-xl mb-10 leading-relaxed font-medium">
                Fast-track your medical entrance success. Complete your Class 12 PCB syllabus on time, revise high-weightage Class 11 chapters, and conquer NCERT with Patna’s top doctor and senior faculty mentors.
              </p>
              
              <div className="flex flex-wrap gap-4 items-center">
                <button 
                  onClick={() => handleOpenModal("NEET Class 12 Coaching")}
                  className="px-8 py-4 bg-white text-[#b72e2f] font-black rounded-2xl shadow-xl hover:bg-red-50 hover:shadow-2xl transition-all duration-200 active:scale-95 text-sm sm:text-base flex items-center gap-2 group"
                >
                  Apply for Admission
                  <ArrowRight className="w-5 h-5 text-[#b72e2f] group-hover:translate-x-1 transition-transform" />
                </button>
                <a 
                  href="#curriculum"
                  className="px-7 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 transition-all text-sm sm:text-base backdrop-blur-sm"
                >
                  Explore Curriculum
                </a>
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-16">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm text-center">
              <span className="text-3xl font-black text-[#b72e2f] block mb-1">650+</span>
              <span className="text-xs sm:text-sm text-slate-600 font-semibold">NEET Score Target</span>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm text-center">
              <span className="text-3xl font-black text-[#522871] block mb-1">100%</span>
              <span className="text-xs sm:text-sm text-slate-600 font-semibold">NCERT PCB Aligned</span>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm text-center">
              <span className="text-3xl font-black text-[#b72e2f] block mb-1">50+</span>
              <span className="text-xs sm:text-sm text-slate-600 font-semibold">OMR Mock Tests</span>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm text-center">
              <span className="text-3xl font-black text-[#522871] block mb-1">1-on-1</span>
              <span className="text-xs sm:text-sm text-slate-600 font-semibold">Doubt Mentorship</span>
            </div>
          </div>

          {/* Core Program Highlights */}
          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#b72e2f] bg-red-50 px-3.5 py-1 rounded-full border border-red-100">
                Why Choose Team Excellent
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1e1b4b] mt-3">
                Key Highlights of Our Class 12 NEET Program
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {courseHighlights.map((hl, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#b72e2f] flex items-center justify-center font-black text-lg mb-6 border border-red-100">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-[#1e1b4b] mb-3">{hl.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{hl.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Subject-Wise Mastery Section */}
          <div id="curriculum" className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#522871] bg-purple-50 px-3.5 py-1 rounded-full border border-purple-100">
                Subject Strategy
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1e1b4b] mt-3">
                Subject-Wise NEET Preparation Roadmap
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {subjects.map((sub, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-bold px-3 py-1 bg-red-50 text-[#b72e2f] rounded-full border border-red-100">
                        {sub.badge}
                      </span>
                      <span className="text-xs font-bold text-slate-500">{sub.focus}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#1e1b4b] mb-4">{sub.name}</h3>
                    <ul className="space-y-3 mb-8">
                      {sub.topics.map((top, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{top}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={() => handleOpenModal(`NEET Class 12 - ${sub.name}`)}
                    className="w-full py-3 bg-slate-50 hover:bg-red-50 text-[#b72e2f] font-bold rounded-xl text-xs sm:text-sm border border-slate-200 transition"
                  >
                    Enquire for {sub.name.split(' ')[0]} ➔
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Batch Information & Schedule Table */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm mb-20">
            <div className="max-w-3xl mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1e1b4b] mb-3">
                Class 12 NEET Batch Structure & Timings
              </h2>
              <p className="text-sm text-slate-600">
                Detailed parameters of our 1-Year Classroom Program for students aspiring to join premier government medical colleges (AIIMS, PMCH, NMCH).
              </p>
            </div>

            <div className="divide-y divide-slate-100 border-y border-slate-100">
              {batchSchedules.map((row, idx) => (
                <div key={idx} className="py-4 flex flex-col sm:flex-row justify-between sm:items-center gap-1 sm:gap-4 text-sm">
                  <span className="font-bold text-slate-800 sm:w-1/3">{row.feature}</span>
                  <span className="text-slate-600 sm:w-2/3">{row.detail}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4 items-center justify-between">
              <span className="text-xs sm:text-sm text-slate-500 font-medium">
                Limited seats per batch to guarantee personal mentorship.
              </span>
              <button
                onClick={() => handleOpenModal("NEET Class 12 Batch Inquiry")}
                className="px-8 py-3.5 bg-gradient-to-r from-[#b72e2f] to-[#7f1d1d] text-white font-bold rounded-xl text-sm shadow-md hover:shadow-lg transition active:scale-95"
              >
                Reserve Your Seat Today
              </button>
            </div>
          </div>

          {/* FAQs Section */}
          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#b72e2f] bg-red-50 px-3.5 py-1 rounded-full border border-red-100">
                Frequently Asked Questions
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1e1b4b] mt-3">
                Got Questions About Class 12 NEET Prep?
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-[#1e1b4b] text-base hover:text-[#b72e2f] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${openFaq === idx ? 'rotate-180 text-[#b72e2f]' : ''}`} />
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contextual Cluster Links */}
          <div className="bg-gradient-to-br from-red-50 to-purple-50 rounded-3xl p-8 border border-red-100 text-center mb-16">
            <h3 className="text-xl font-bold text-[#1e1b4b] mb-2">Related Medical & Engineering Programs in Patna</h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">Explore our specialized batches, predictors, and scholarship opportunities.</p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {seoClusters.map((cl, cIdx) => (
                <Link
                  key={cIdx}
                  to={cl.to}
                  className="px-4 py-2 bg-white rounded-xl text-xs sm:text-sm font-bold text-slate-700 hover:text-[#b72e2f] border border-slate-200 shadow-sm hover:shadow transition"
                >
                  {cl.label}
                </Link>
              ))}
            </div>
          </div>

        </div>

        <TrustedSection />
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
  )
}
