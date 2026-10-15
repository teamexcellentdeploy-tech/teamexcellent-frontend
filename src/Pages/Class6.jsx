import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import EnrollmentForm from '../Components/EnrollmentForm'
import { GraduationCap, CheckCircle, Calendar } from 'lucide-react'
import TrustedSection from '../Components/TrustedSection'
import Testimonials from '../Components/Testimonials'
import ExploreLinks from '../Components/ExploreLinks'

export default function Class6() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Helmet>
        <title>Class 6 Foundation Course in Patna | Team Excellent</title>
        <meta 
          name="description" 
          content="Start building strong basic concepts early with our school foundation course for Class 6 in Patna. Prepare for Science, Math, and Mental Ability." 
        />
        <link rel="canonical" href="https://teamexcellentcareerinstitute.in/class-6-in-patna" />

        {/* EducationalOrganization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Team Excellent Career Institute",
            "url": "https://teamexcellentcareerinstitute.in",
            "logo": "https://teamexcellentcareerinstitute.in/logo192.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Near NMCH College, Bajar Samiti, New Kunj Colony, Saketpuri",
              "addressLocality": "Patna",
              "addressRegion": "Bihar",
              "postalCode": "800016",
              "addressCountry": "IN"
            }
          })}
        </script>

        {/* Course Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Class 6 Foundation Course",
            "description": "Junior school foundation course for Class 6 students in Patna covering Mathematics, Science, and Mental Ability for Olympiads and early competitive exam preparation.",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "Team Excellent Career Institute",
              "url": "https://teamexcellentcareerinstitute.in"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "180"
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
                "name": "Foundation (Class 6-10)",
                "item": "https://teamexcellentcareerinstitute.in/class-6-to-10"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Class 6 Foundation",
                "item": "https://teamexcellentcareerinstitute.in/class-6-in-patna"
              }
            ]
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
                "name": "What is covered in the Class 6 foundation coaching at Team Excellent Patna?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Class 6 program covers comprehensive Mathematics, General Science (Physics, Chemistry, Biology basics), and Logical Reasoning/Mental Ability aligned with CBSE/ICSE syllabus and Olympiads."
                }
              },
              {
                "@type": "Question",
                "name": "Can Class 6 students win scholarships at Team Excellent?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Class 6 students can appear for the T-MAT scholarship exam to receive up to 100% scholarship on tuition fees."
                }
              },
              {
                "@type": "Question",
                "name": "How does early foundation coaching in Class 6 help students?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It builds curiosity, improves school exam marks, eliminates math anxiety, and builds strong critical thinking skills for future exams like JEE and NEET."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-gray-50 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Header */}
          <div className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white rounded-3xl p-8 md:p-12 mb-12 shadow-lg relative overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <span className="px-3.5 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-bold uppercase tracking-wider text-blue-200 inline-block mb-4">
                Junior School Foundation Program
              </span>
              <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
                Class 6 Foundation Coaching
              </h1>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Shape logical thinking from the start. Our Class 6 foundation course builds structural mastery of Math, Science, and Mental Ability, laying the groundwork for Olympiads, NTSE, and future JEE/NEET prep.
              </p>
              <button 
                onClick={() => setIsOpen(true)}
                className="px-8 py-3 bg-white text-[#2563eb] font-bold rounded-xl shadow-md hover:bg-blue-50 transition-all active:scale-95 text-sm"
              >
                Enroll Your Child
              </button>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-[#0B0B45] mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-[#2563eb]" />
                Course Features
              </h2>
              <ul className="space-y-4">
                {[
                  "Complete coverage of school board syllabus (CBSE/ICSE) with extended competitive levels.",
                  "Focus on logical reasoning and introductory Mental Ability Tests (MAT).",
                  "Small class batches enabling direct teacher-student interaction and comfort.",
                  "Interactive learning sessions, animations, and periodic review reports for parents."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-600 text-sm">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-[#0B0B45] mb-6 flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-[#b72e2f]" />
                  Batch Information
                </h2>
                <div className="space-y-3 text-sm text-gray-600 mb-6">
                  <p className="flex justify-between py-2 border-b border-gray-100">
                    <strong className="text-gray-700">Course Duration:</strong>
                    <span>1 Year Program</span>
                  </p>
                  <p className="flex justify-between py-2 border-b border-gray-100">
                    <strong className="text-gray-700">Class Frequency:</strong>
                    <span>3 Days a Week</span>
                  </p>
                  <p className="flex justify-between py-2 border-b border-gray-100">
                    <strong className="text-gray-700">Subjects Covered:</strong>
                    <span>Mathematics, Science, English, Mental Ability</span>
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(true)}
                className="w-full py-3 bg-[#b72e2f] hover:bg-[#a02829] text-white font-bold rounded-xl text-sm transition-all shadow-md active:scale-95"
              >
                Inquire Batch Timings
              </button>
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
        initialCourse="School Foundation Course (Class 6-10)" 
      />

      <Footer />
    </>
  )
}
