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
        <title>IIT JEE Coaching in Patna | Best Institute for JEE Prep - Team Excellent</title>
        <meta 
          name="description" 
          content="Looking for premier IIT JEE coaching in Patna? Team Excellent offers top JEE Main & Advanced preparation with expert IITian mentors, Class 11-12 batches, dropper courses, and regular mock tests." 
        />

        {/* Keywords */}
        <meta 
          name="keywords" 
          content="iit jee coaching in patna, jee coaching in patna, best jee coaching in patna, iit jee preparation patna, team excellent patna, engineering coaching patna, jee main coaching patna, jee advanced coaching patna" 
        />

        {/* Open Graph */}
        <meta property="og:title" content="IIT JEE Coaching in Patna | Best Institute for JEE Prep - Team Excellent" />
        <meta property="og:description" content="Prepare for IIT JEE Main & Advanced in Patna with Team Excellent. Expert IITian faculty, Class 11-12 batches, and comprehensive test series." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://teamexcellentcareerinstitute.in/iit-jee-coaching-in-patna" />
        <link rel="canonical" href="https://teamexcellentcareerinstitute.in/iit-jee-coaching-in-patna" />
        <meta property="og:image" content="https://teamexcellentcareerinstitute.in/logo192.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IIT JEE Coaching in Patna | Team Excellent" />
        <meta name="twitter:description" content="Crack JEE Main & Advanced with Patna's leading IIT coaching institute. Expert faculty and personal mentorship." />
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
