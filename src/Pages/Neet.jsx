import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import NeetContent from '../Components/NeetContent'
import TrustedSection from '../Components/TrustedSection'
import Testimonials from '../Components/Testimonials'
import ExploreLinks from '../Components/ExploreLinks'

export default function Neet() {
  return (
    <>
      <Helmet>
        {/* Title & Description */}
        <title>Best NEET Coaching in Patna | Medical UG Preparation - Team Excellent</title>
        <meta 
          name="description" 
          content="Looking for the best NEET coaching in Patna? Team Excellent Career Institute offers top NEET UG medical entrance coaching with experienced doctors/faculty, custom mock tests, and personal mentorship." 
        />

        {/* Keywords */}
        <meta 
          name="keywords" 
          content="neet coaching in patna, best coaching for neet in patna, best neet coaching in patna, best institute for neet in patna, patna neet coaching fees, neet preparation institute in patna, neet institute in patna, patna neet coaching, Team Excellent, Team Excellent Patna, medical entrance coaching Patna" 
        />

        {/* Open Graph */}
        <meta property="og:title" content="Best NEET Coaching in Patna | Medical UG Preparation - Team Excellent" />
        <meta property="og:description" content="Crack NEET UG with Patna's premier medical coaching institute. Expert faculty, customized materials, and regular test series." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://teamexcellentcareerinstitute.in/best-neet-coaching-in-patna" />
        <link rel="canonical" href="https://teamexcellentcareerinstitute.in/best-neet-coaching-in-patna" />
        <meta property="og:image" content="https://teamexcellentcareerinstitute.in/logo192.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best NEET Coaching in Patna | Team Excellent" />
        <meta name="twitter:description" content="Enroll at Team Excellent for NEET UG coaching in Patna. Led by top biology and physics/chemistry experts." />
        <meta name="twitter:image" content="https://teamexcellentcareerinstitute.in/logo192.png" />

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

        {/* Course, CourseInstance, and Offer Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "NEET (Medical Entrance) Coaching Program",
            "description": "Comprehensive NEET coaching program for medical aspirants covering physics, chemistry, and biology with specialized mentoring, regular tests, and performance tracking.",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "Team Excellent Career Institute",
              "url": "https://teamexcellentcareerinstitute.in/"
            },
            "hasCourseInstance": [
              {
                "@type": "CourseInstance",
                "name": "Class 11 2-Year NEET Program",
                "courseMode": "Offline Classroom",
                "duration": "P2Y"
              },
              {
                "@type": "CourseInstance",
                "name": "Class 12 1-Year NEET Program",
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
              "category": "Scholarship Available up to 100% via T-MAT Exam",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "510"
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
                "name": "Best NEET Coaching in Patna",
                "item": "https://teamexcellentcareerinstitute.in/best-neet-coaching-in-patna"
              }
            ]
          })}
        </script>
      </Helmet>

      <Navbar />
      <main id="main-content">
        <NeetContent />
        <TrustedSection />
        <Testimonials />
        <ExploreLinks />
      </main>
      <Footer />
    </>
  )
}
