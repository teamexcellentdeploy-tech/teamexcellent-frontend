import React from 'react'
import Navbar from '../Components/Navbar'
import StudentMarks from '../Components/StudentMarks'
import ExploreLinks from '../Components/ExploreLinks'
import Footer from '../Components/Footer'
import MockTestSection from '../Components/MockTestSection'
import { Helmet } from 'react-helmet-async'

export default function Student() {
  return (
    <>
      <Helmet>
        <title>Student Portal | Team Excellent Career Institute</title>
        <meta name="description" content="Access student performance marks, test results, and academic progress at Team Excellent Career Institute's Student Portal." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://teamexcellentcareerinstitute.in/student-portal" />
        <link rel="canonical" href="https://teamexcellentcareerinstitute.in/student-portal" />

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
                "name": "Student Portal",
                "item": "https://teamexcellentcareerinstitute.in/student-portal"
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
                "name": "How can enrolled students check their weekly test marks?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Students can enter their registered Roll Number or Mobile Number in the Student Performance section to view detailed marks and subject-wise scorecards."
                }
              },
              {
                "@type": "Question",
                "name": "What is the AITS Online Examination Centre?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AITS is our Computer-Based Test (CBT) portal simulating the real NTA interface for JEE Main, JEE Advanced, and NEET mock examinations."
                }
              },
              {
                "@type": "Question",
                "name": "How do students access the online mock test portal?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Students can click the 'Start Online Test' link on the portal to log in with their allocated credentials at teamexcellent-aits.online."
                }
              }
            ]
          })}
        </script>
      </Helmet>
      <Navbar />
      
      {/* AITS Online Examination Practice Centre Section */}
      <section className="pt-40 pb-12 px-4 flex flex-col items-center text-center relative overflow-hidden bg-[#FAFAFA]" 
        style={{
          backgroundImage: `
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center top'
        }}
      >
        {/* Subtle top gradient overlay to fade the grid under the navbar */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#FAFAFA] to-transparent z-0"></div>

        <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md border border-[#E5E7EB] bg-white shadow-sm mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#5B2D7C]"></div>
            <span className="text-[11px] sm:text-xs font-bold text-[#374151] tracking-[0.2em] uppercase">Online Practice Platform</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0F172A] mb-5 tracking-tight" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.1' }}>
            AITS Online Examination<br className="hidden md:block" /> Practice Centre
          </h1>
          
          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#475569] max-w-3xl mb-8 font-medium leading-relaxed px-4">
            Prepare for India's toughest exams with real CBT-simulation
            mock tests. Practice <span className="font-semibold text-[#334155]">JEE, NEET, Board & NCERT</span> — anytime, anywhere.
          </p>
          
          {/* CTA Button */}
          <a 
            href="https://teamexcellent-aits.online/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-[#0F172A] rounded-xl hover:bg-[#5B2D7C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5B2D7C] shadow-lg hover:shadow-xl hover:-translate-y-0.5 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Practicing Now
              <svg className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
        </div>
      </section>

      <MockTestSection />
      <StudentMarks />
      <Footer />
    </>
  )
}

