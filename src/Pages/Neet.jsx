import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import NeetContent from '../Components/NeetContent'
import TrustedSection from '../Components/TrustedSection'
import Testimonials from '../Components/Testimonials'
import ExploreLinks from '../Components/ExploreLinks'

export default function Neet() {
  const schemaFaqs = [
    {
      q: "Which is the best NEET coaching in Patna?",
      a: "Team Excellent Career Institute is widely recognized as one of the best NEET coaching institutes in Patna, offering doctor-mentored biology preparation, top-tier physics & chemistry faculty, small batch sizes, and a proven track record of MBBS selections in AIIMS, PMCH, NMCH, and IGIMS."
    },
    {
      q: "Why choose Team Excellent for NEET UG preparation in Patna?",
      a: "Team Excellent stands out with its 100% NCERT-aligned curriculum, 1-on-1 daily doubt desks, high-yield Daily Practice Problems (DPPs), real OMR-based simulated test series, small batches (35-45 students), and up to 100% scholarship via the T-MAT exam."
    },
    {
      q: "What batches are available for NEET coaching at Team Excellent Patna?",
      a: "We provide three specialized batches: (1) 2-Year Foundation Course for Class 11 students, (2) 1-Year Target Course for Class 12 students, and (3) Dropper/Repeater Batch for Class 12 passout aspirants."
    },
    {
      q: "What is the fee structure for NEET coaching at Team Excellent?",
      a: "Our fee structure is affordable and transparent. Deserving students can avail up to 100% fee waivers on tuition through the Team Excellent Talent Search & Scholarship Test (T-MAT)."
    },
    {
      q: "Does Team Excellent provide NEET study material and test series?",
      a: "Yes, all students receive comprehensive printed theory modules, question banks, assertion-reason sheets, previous years' questions (PYQs), and full-length OMR mock tests with detailed performance reports."
    },
    {
      q: "How does Team Excellent help medical aspirants with Physics and Chemistry?",
      a: "Medical students often struggle with physics numericals and organic mechanisms. We offer specialized numerical shortcut sessions, conceptual foundation lectures, and step-by-step problem-solving desks to build high confidence."
    },
    {
      q: "Where is Team Excellent NEET coaching located in Patna?",
      a: "Our campus is conveniently located at Saketpuri, Near NMCH College, Bajar Samiti, Patna, Bihar (800016), easily reachable from Kankarbagh, Boring Road, Rajendra Nagar, and Bazar Samiti."
    },
    {
      q: "How can I apply for admission or book a free demo class?",
      a: "You can apply online through our website enrollment form, call our admission helpdesk at +91-9942000371 / +91-9942000372, or visit our Saketpuri center for a direct counseling session and free demo classes."
    }
  ];

  return (
    <>
      <Helmet>
        {/* Title & Description */}
        <title>Best NEET Coaching in Patna | Top Medical Institute - Team Excellent</title>
        <meta 
          name="description" 
          content="Looking for the best NEET coaching in Patna? Team Excellent Career Institute offers top NEET UG medical entrance coaching with doctor faculty, NCERT mastery, proven AIIMS/PMCH selections, small batches & scholarship." 
        />

        {/* Keywords */}
        <meta 
          name="keywords" 
          content="best neet coaching in patna, best coaching for neet in patna, neet coaching in patna, best institute for neet in patna, top neet coaching in bihar, neet medical coaching patna, patna neet coaching fees, neet preparation institute in patna, Team Excellent Patna, medical entrance coaching Patna" 
        />

        {/* Canonical */}
        <link rel="canonical" href="https://teamexcellentcareerinstitute.in/best-neet-coaching-in-patna" />

        {/* Open Graph */}
        <meta property="og:title" content="Best NEET Coaching in Patna | Top Medical Institute - Team Excellent" />
        <meta property="og:description" content="Crack NEET UG with Patna's premier medical entrance coaching institute. Doctor faculty, 100% NCERT focus, small batch mentorship & OMR test series." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://teamexcellentcareerinstitute.in/best-neet-coaching-in-patna" />
        <meta property="og:image" content="https://teamexcellentcareerinstitute.in/Favicon.webp" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best NEET Coaching in Patna | Team Excellent Career Institute" />
        <meta name="twitter:description" content="Enroll at Team Excellent for NEET UG coaching in Patna. Expert doctor faculty, personalized doubt resolution, and top medical selection records." />
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
            "description": "Team Excellent Career Institute is Patna's premier medical entrance coaching institute offering specialized NEET UG preparation for Class 11, Class 12, and Dropper students.",
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
              "reviewCount": "530"
            }
          })}
        </script>

        {/* Course Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Best NEET UG Coaching Program in Patna",
            "description": "Comprehensive NEET UG medical entrance preparation program featuring NCERT line-by-line biology lectures, step-by-step medical physics, organic chemistry mastery, and regular OMR mock test series.",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "Team Excellent Career Institute",
              "url": "https://teamexcellentcareerinstitute.in/"
            },
            "hasCourseInstance": [
              {
                "@type": "CourseInstance",
                "name": "NEET 2-Year Comprehensive Program (Class 11)",
                "courseMode": "Offline Classroom",
                "duration": "P2Y"
              },
              {
                "@type": "CourseInstance",
                "name": "NEET 1-Year Target Program (Class 12)",
                "courseMode": "Offline Classroom",
                "duration": "P1Y"
              },
              {
                "@type": "CourseInstance",
                "name": "NEET Dropper / Repeater Rank Booster Batch",
                "courseMode": "Offline Classroom",
                "duration": "P1Y"
              }
            ],
            "offers": {
              "@type": "Offer",
              "category": "Up to 100% Scholarship via T-MAT Exam",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "530"
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

        {/* FAQPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": schemaFaqs.map((faq) => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
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

