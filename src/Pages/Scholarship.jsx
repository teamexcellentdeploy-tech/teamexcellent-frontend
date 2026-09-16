import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import TematEnrollmentForm from '../Components/TematEnrollmentForm'
import StudentMarks from '../Components/StudentMarks'
import { Award, Calendar, BookOpen, Clock, Users, ShieldAlert, CheckCircle } from 'lucide-react'
import TrustedSection from '../Components/TrustedSection'
import Testimonials from '../Components/Testimonials'
import ExploreLinks from '../Components/ExploreLinks'

export default function Scholarship() {
  const [isTmatOpen, setIsTmatOpen] = useState(false)

  return (
    <>
      <Helmet>
        <title>T-MAT Scholarship Test 2026 | Win up to 100% Scholarship - Team Excellent Patna</title>
        <meta 
          name="description" 
          content="Apply for T-MAT (Team Excellent Mentorship & Admission Test) 2026 to win up to 100% scholarship on IIT-JEE, NEET, and Class 6-10 foundation courses in Patna. Check exam dates, syllabus, and results." 
        />
        <meta 
          name="keywords" 
          content="t-mat scholarship test 2026, coaching scholarship in patna, 100 percent scholarship iit jee neet, team excellent scholarship exam, admission test bihar" 
        />
        <link rel="canonical" href="https://teamexcellentcareerinstitute.in/scholarship" />
        <meta property="og:title" content="T-MAT Scholarship Test 2026 | Win up to 100% Scholarship - Team Excellent" />
        <meta property="og:description" content="Apply for T-MAT to win up to 100% scholarship on JEE, NEET, and Foundation programs in Patna." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://teamexcellentcareerinstitute.in/scholarship" />
        <meta property="og:image" content="https://teamexcellentcareerinstitute.in/logo192.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="T-MAT Scholarship Test 2026 | Team Excellent Patna" />
        <meta name="twitter:description" content="Win up to 100% tuition fee waiver for IIT-JEE and NEET prep with T-MAT 2026." />
        <meta name="twitter:image" content="https://teamexcellentcareerinstitute.in/logo192.png" />

        {/* EducationalOrganization & Offer Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Team Excellent Career Institute",
            "url": "https://teamexcellentcareerinstitute.in",
            "logo": "https://teamexcellentcareerinstitute.in/logo192.png",
            "makesOffer": {
              "@type": "Offer",
              "name": "T-MAT 100% Scholarship Program",
              "description": "Talent hunt & scholarship examination for students of Class 6 to 12 & Droppers to win up to 100% tuition waivers for IIT-JEE & NEET preparation.",
              "price": "0",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "validThrough": "2026-12-31"
            }
          })}
        </script>

        {/* FAQPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the T-MAT Scholarship Test?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "T-MAT (Team Excellent Mentorship & Admission Test) is an all-Bihar talent assessment test offering up to 100% scholarship on coaching fees for IIT-JEE, NEET, and Class 6-10 foundation courses."
                }
              },
              {
                "@type": "Question",
                "name": "Who is eligible to appear for the T-MAT exam?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Students studying in Classes 6, 7, 8, 9, 10, 11, 12, as well as 12th Pass / Dropper students are eligible to apply."
                }
              },
              {
                "@type": "Question",
                "name": "What is the registration fee for T-MAT?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Registration for the T-MAT Scholarship Examination is completely free of cost when applying online or at our Saketpuri, Patna center."
                }
              }
            ]
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
                "name": "Scholarship (T-MAT)",
                "item": "https://teamexcellentcareerinstitute.in/scholarship"
              }
            ]
          })}
        </script>
      </Helmet>

      <Navbar />

      {/* Scholarship Examination Result Checker at the top */}
      <StudentMarks isPageHeader={true} />

      <main className="min-h-screen bg-gray-50 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 bg-amber-100 rounded-2xl mb-4 text-amber-700 animate-pulse">
              <Award className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0B0B45] mb-4">
              T-MAT <span className="text-[#b72e2f]">Scholarship Test</span>
            </h1>
            <div className="w-24 h-1 bg-[#9333ea] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Earn up to <strong className="text-purple-700">100% Scholarship</strong> on course tuition fees. Team Excellent Mentorship & Admission Test (T-MAT) identifies and rewards bright minds, providing financial aid and elite mentoring to crack IIT-JEE & NEET.
            </p>
          </div>



          {/* Exam Structure and Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            {/* Exam Pattern */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold text-[#0B0B45] mb-6 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-purple-700" />
                T-MAT Exam Pattern
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Exam Mode", val: "Offline (Pen & Paper) at Patna Center" },
                  { label: "Questions Type", val: "Multiple Choice Questions (MCQs)" },
                  { label: "Total Questions", val: "60 Questions (Physics, Chemistry, Maths/Biology, Mental Ability)" },
                  { label: "Marking Scheme", val: "+4 for correct, -1 for incorrect answers" },
                  { label: "Duration", val: "120 Minutes (2 Hours)" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between py-3 border-b border-gray-100 text-sm">
                    <span className="font-bold text-gray-600">{item.label}</span>
                    <span className="text-gray-800 font-medium">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Syllabi and Guidelines */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[#0B0B45] mb-6 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-red-600" />
                  Syllabus Guidelines
                </h3>
                <ul className="space-y-4 text-sm text-gray-600 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Class 6 to 10:</strong> School board curriculum (Science, Mathematics) of the current and preceding class.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Class 11 & 12:</strong> Physics, Chemistry, Mathematics/Biology based on NCERT boards syllabus.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Mental Ability (MAT):</strong> Simple logical puzzles, series completion, coding-decoding, and verbal reasoning.</span>
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-purple-50 rounded-2xl border border-purple-100 flex items-start gap-3">
                <Calendar className="w-5 h-5 text-purple-700 shrink-0 mt-0.5" />
                <p className="text-xs text-purple-800 leading-relaxed">
                  T-MAT is conducted every Sunday at our Patna study center. Once registered, our admission counselors will contact you to assign your test batch timing.
                </p>
              </div>
            </div>

          </div>

          {/* Registration Section */}
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#5B2D7C] to-[#b72e2f] rounded-[2.5rem] p-8 md:p-16 text-white text-center shadow-xl relative overflow-hidden">
            <div className="absolute left-0 top-0 translate-x-[-10%] translate-y-[-10%] w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Register for T-MAT Today</h2>
            <p className="text-purple-100 text-base max-w-2xl mx-auto mb-8">
              Take the first step towards academic excellence. Apply online today to secure your test date and claim up to 100% scholarship.
            </p>
            <button 
              onClick={() => setIsTmatOpen(true)}
              className="px-10 py-4 bg-white text-[#5B2D7C] font-bold rounded-2xl hover:bg-purple-50 transition-all shadow-lg text-base active:scale-95 duration-200"
            >
              Fill T-MAT Registration Form
            </button>
          </div>

        </div>
        <TrustedSection />
        <Testimonials />
        <ExploreLinks />
      </main>

      {/* T-MAT Form Modal Component */}
      <TematEnrollmentForm 
        isOpen={isTmatOpen} 
        onClose={() => setIsTmatOpen(false)} 
      />

      <Footer />
    </>
  )
}
