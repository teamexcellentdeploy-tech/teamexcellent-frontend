import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import IitJeeContent from '../Components/IitJeeContent'
import TrustedSection from '../Components/TrustedSection'
import Testimonials from '../Components/Testimonials'
import ExploreLinks from '../Components/ExploreLinks'

export default function JeeClass11() {
  return (
    <>
      <Helmet>
        {/* Title & Description */}
        <title>JEE Coaching for Class 11 in Patna | Team Excellent</title>
        <meta 
          name="description" 
          content="Start your engineering dream early with our JEE coaching program for Class 11 in Patna. Focus on solid basic concepts and board support." 
        />

        {/* Keywords */}
        <meta 
          name="keywords" 
          content="jee class 11 coaching in patna, iit class 11 preparation patna, team excellent patna, best class 11 engineering coaching" 
        />

        {/* Open Graph */}
        <meta property="og:title" content="JEE Coaching for Class 11 in Patna | Team Excellent" />
        <meta property="og:description" content="Start your engineering dream early with our JEE coaching program for Class 11 in Patna. Focus on solid basic concepts and board support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://teamexcellentcareerinstitute.in/iit-jee-coaching-in-patna" />
        <link rel="canonical" href="https://teamexcellentcareerinstitute.in/iit-jee-coaching-in-patna" />
        <meta property="og:image" content="https://teamexcellentcareerinstitute.in/logo192.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="JEE Coaching for Class 11 in Patna | Team Excellent" />
        <meta name="twitter:description" content="Start your engineering dream early with our JEE coaching program for Class 11 in Patna." />
        <meta name="twitter:image" content="https://teamexcellentcareerinstitute.in/logo192.png" />
        
        {/* Course Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Class 11 IIT-JEE Program",
            "description": "2-Year JEE foundation course covering Physics, Chemistry, and Mathematics with board and competitive exam preparation.",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "Team Excellent Career Institute",
              "url": "https://teamexcellentcareerinstitute.in/"
            },
            "offers": {
              "@type": "Offer",
              "category": "Scholarship Available up to 100% via T-MAT Exam",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock"
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
                "name": "JEE Coaching for Class 11 in Patna",
                "item": "https://teamexcellentcareerinstitute.in/iit-jee-coaching-in-patna"
              }
            ]
          })}
        </script>
      </Helmet>

      <Navbar />
      <main id="main-content">
        <IitJeeContent />
        <TrustedSection />
        <Testimonials />
        <ExploreLinks />
      </main>
      <Footer />
    </>
  )
}
