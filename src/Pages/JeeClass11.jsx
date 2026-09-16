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
        
        {/* EducationalOrganization & LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "EducationalOrganization", "School", "ProfessionalService", "Organization"],
            "@id": "https://teamexcellentcareerinstitute.in/#organization",
            "name": "Team Excellent Career Institute",
            "alternateName": "Team Excellent IIT-JEE Coaching Patna",
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
            "name": "IIT-JEE (Main & Advanced) Coaching Program in Patna",
            "description": "Comprehensive engineering entrance preparation program with IITian faculty, small batches, Daily Practice Problems (DPPs), and Computer-Based Test Series.",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "Team Excellent Career Institute",
              "url": "https://teamexcellentcareerinstitute.in/"
            },
            "hasCourseInstance": [
              {
                "@type": "CourseInstance",
                "name": "Class 11 2-Year JEE Foundation Course",
                "courseMode": "Offline Classroom",
                "duration": "P2Y"
              },
              {
                "@type": "CourseInstance",
                "name": "Class 12 1-Year JEE Target Course",
                "courseMode": "Offline Classroom",
                "duration": "P1Y"
              },
              {
                "@type": "CourseInstance",
                "name": "JEE Dropper / Repeater Rank Booster Batch",
                "courseMode": "Offline Classroom",
                "duration": "P1Y"
              }
            ],
            "offers": {
              "@type": "Offer",
              "category": "Scholarship Available up to 100% via T-MAT Exam",
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
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Which is the best IIT-JEE coaching institute in Patna?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Team Excellent Career Institute is widely regarded as one of Patna's top IIT-JEE coaching centers, led by Founder & Director Albert Newwel (M.Tech IIT-BHU) with experienced IITian faculties, small batch sizes, and a proven track record of 99+ percentilers."
                }
              },
              {
                "@type": "Question",
                "name": "What courses are offered for IIT-JEE preparation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide a 2-Year Comprehensive Program for Class 11, a 1-Year Target Program for Class 12, and a 1-Year Rank Booster Batch for 12th Pass / Dropper students targeting JEE Main and Advanced."
                }
              },
              {
                "@type": "Question",
                "name": "Does Team Excellent conduct Computer-Based Tests (CBT) for JEE Main?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we run regular All India Test Series (AITS) on a dedicated Computer-Based Test portal that perfectly replicates the NTA test interface, complete with timer, question palettes, and granular analytics."
                }
              },
              {
                "@type": "Question",
                "name": "Can students get scholarships for JEE coaching at Team Excellent?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, through the T-MAT (Team Excellent Mentorship & Admission Test) examination, deserving students can secure up to 100% scholarship on course tuition fees."
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
                "name": "IIT JEE Coaching in Patna",
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
