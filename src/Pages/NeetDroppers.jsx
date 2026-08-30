import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import EnrollmentForm from '../Components/EnrollmentForm'
import { GraduationCap, CheckCircle, Calendar } from 'lucide-react'
import TrustedSection from '../Components/TrustedSection'
import Testimonials from '../Components/Testimonials'
import ExploreLinks from '../Components/ExploreLinks'
import FAQSection from '../Components/FAQSection'

export default function NeetDroppers() {
  const [isOpen, setIsOpen] = useState(false)

  const faqs = [
    {
      question: "What is a NEET dropper batch?",
      answer: "A NEET dropper batch is a high-intensity, one-year repeater course designed for Class 12 passout students to prepare exclusively for the NEET UG medical entrance exam."
    },
    {
      question: "Who should join NEET dropper coaching?",
      answer: "Students who have completed Class 12 and wish to focus their full attention on improving their NEET score, concepts, and speed without the distraction of board exams should join."
    },
    {
      question: "Does Team Excellent offer NEET dropper coaching in Patna?",
      answer: "Yes, we offer dedicated offline NEET dropper coaching at our Patna center, featuring OMR-based mock testing and specialized physics guidance."
    },
    {
      question: "Can NEET droppers improve their score with one year of preparation?",
      answer: "Yes. With a disciplined offline lecture schedule, regular concept revision, and rigorous testing, most dropper students secure a significantly higher score."
    },
    {
      question: "What subjects are covered in the NEET dropper program?",
      answer: "The program covers Physics, Chemistry, and Biology (both Botany and Zoology) in complete depth, strictly aligned with the NCERT curriculum."
    },
    {
      question: "Does the program include regular tests?",
      answer: "Yes, we conduct weekly chapter tests and full-syllabus mock tests on real NEET-pattern OMR sheets to minimize exam-day bubbling errors."
    },
    {
      question: "Is NEET study material provided?",
      answer: "Yes, we provide exhaustive printed modules, Daily Practice Problems (DPPs), summary charts, and assertion-reason worksheets."
    },
    {
      question: "Are doubt-solving sessions available?",
      answer: "Yes, senior teachers manage dedicated doubt-clearing desks daily, helping repeaters resolve concept queries on a one-on-one basis."
    },
    {
      question: "What is the duration of the NEET dropper course?",
      answer: "It is a 1-year offline classroom program that starts shortly after board/NEET results and continues until the next NEET UG exam."
    },
    {
      question: "What is the NEET dropper coaching fee?",
      answer: "Our fees are highly competitive. We offer up to 100% scholarship fee waivers based on performance in our T-MAT Scholarship Exam."
    },
    {
      question: "How can I enroll in the NEET dropper batch?",
      answer: "You can submit an enquiry form on our website, call our counseling office, or visit our Patna Saketpuri center near NMCH College."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Best NEET Dropper Coaching in Patna | Repeater Batch - Team Excellent</title>
        <meta 
          name="description" 
          content="Supercharge your medical career ambitions with the best NEET Droppers (Repeater) batch in Patna. Complete biology, chemistry, and physics coaching." 
        />
        <link rel="canonical" href="https://teamexcellentcareerinstitute.in/neet-dropper-coaching-in-patna" />

        {/* Course Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "NEET Dropper / Repeater Program",
            "description": "Intensive offline classroom target program for repeaters and droppers targeting top ranks in the NEET UG medical entrance exam.",
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
                "name": "NEET Dropper Coaching in Patna",
                "item": "https://teamexcellentcareerinstitute.in/neet-dropper-coaching-in-patna"
              }
            ]
          })}
        </script>
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-gray-50 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Header */}
          <div className="bg-gradient-to-r from-[#b72e2f] to-[#7f1d1d] text-white rounded-3xl p-8 md:p-12 mb-12 shadow-lg relative overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <span className="px-3.5 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-bold uppercase tracking-wider text-red-200 inline-block mb-4">
                NEET Target Batch / Repeaters
              </span>
              <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
                NEET Droppers Batch
              </h1>
              <p className="text-red-100 text-lg mb-8 leading-relaxed">
                Aim for top medical colleges. Our NEET Repeppers batch is a comprehensive, high-intensity program covering the complete 11th and 12th syllabus, specializing in speed tactics, diagnostic error corrections, and OMR test drills.
              </p>
              <button 
                onClick={() => setIsOpen(true)}
                className="px-8 py-3 bg-white text-[#b72e2f] font-bold rounded-xl shadow-md hover:bg-red-50 transition-all active:scale-95 text-sm"
              >
                Join Target Batch
              </button>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-[#0B0B45] mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-[#b72e2f]" />
                Course Features
              </h2>
              <ul className="space-y-4">
                {[
                  "Rigorous coverage of complete Physics, Chemistry & Biology (Botany + Zoology) syllabus.",
                  "OMR bubble sheets mock exams mimicking actual NEET exam pressures.",
                  "Daily practice booklets with live interactive explanations by expert doctors.",
                  "Special diagnostic analysis of past mistakes to construct targeted improvement areas."
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
                    <span>1 Year Intensive Program</span>
                  </p>
                  <p className="flex justify-between py-2 border-b border-gray-100">
                    <strong className="text-gray-700">Class Frequency:</strong>
                    <span>5 to 6 Days a Week</span>
                  </p>
                  <p className="flex justify-between py-2 border-b border-gray-100">
                    <strong className="text-gray-700">Daily Study Hours:</strong>
                    <span>5 to 6 Hours Classroom Coaching</span>
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(true)}
                className="w-full py-3 bg-[#b72e2f] hover:bg-[#a02829] text-white font-bold rounded-xl text-sm transition-all shadow-md active:scale-95"
              >
                Inquire Batch Details
              </button>
            </div>
          </div>

        </div>
        <TrustedSection />
        <Testimonials />
        <FAQSection faqs={faqs} />
        <ExploreLinks />
      </main>

      <EnrollmentForm 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        initialCourse="NEET Droppers Batch" 
      />

      <Footer />
    </>
  )
}
