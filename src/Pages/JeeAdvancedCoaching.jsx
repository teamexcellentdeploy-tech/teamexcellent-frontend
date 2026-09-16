import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import JeeAdvancedContent from '../Components/JeeAdvancedContent'
import TrustedSection from '../Components/TrustedSection'
import Testimonials from '../Components/Testimonials'
import ExploreLinks from '../Components/ExploreLinks'

export default function JeeAdvancedCoaching() {
  return (
    <>
      <Helmet>
        {/* Title & Description */}
        <title>Best JEE Advanced Coaching in Patna | IIT JEE Advanced Prep - Team Excellent</title>
        <meta 
          name="description" 
          content="Crack IIT JEE Advanced with Patna's leading engineering institute. Learn multi-concept problem solving from expert IITian faculty." 
        />

        {/* Keywords */}
        <meta 
          name="keywords" 
          content="jee advanced coaching in patna, iit advanced preparation patna, team excellent patna, albert newwel iit bhu, best jee coaching in patna" 
        />

        {/* Open Graph */}
        <meta property="og:title" content="Best JEE Advanced Coaching in Patna | IIT JEE Advanced Prep - Team Excellent" />
        <meta property="og:description" content="Prepare for JEE Advanced in Patna with Team Excellent Career Institute. Crack IIT JEE with Patna's leading engineering mentors." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://teamexcellentcareerinstitute.in/jee-advanced-coaching-in-patna" />
        <link rel="canonical" href="https://teamexcellentcareerinstitute.in/jee-advanced-coaching-in-patna" />
        <meta property="og:image" content="https://teamexcellentcareerinstitute.in/logo192.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best JEE Advanced Coaching in Patna | Team Excellent" />
        <meta name="twitter:description" content="Crack IIT JEE with Patna's leading engineering mentors." />
        <meta name="twitter:image" content="https://teamexcellentcareerinstitute.in/logo192.png" />

        {/* EducationalOrganization & LocalBusiness Schema with E-E-A-T Authority */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "EducationalOrganization", "School", "ProfessionalService", "Organization"],
            "@id": "https://teamexcellentcareerinstitute.in/#organization",
            "name": "Team Excellent Career Institute",
            "alternateName": "Team Excellent JEE Advanced Academy Patna",
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
            },
            "founder": {
              "@type": "Person",
              "name": "Albert Newwel",
              "jobTitle": "Founder & Director",
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "IIT-BHU Varanasi"
              },
              "description": "M.Tech from IIT-BHU with 12+ years of leadership in mentoring IIT-JEE Advanced top rankers in Patna."
            },
            "knowsAbout": [
              "JEE Advanced Coaching",
              "Multi-concept Numerical Problem Solving",
              "Calculus and Rotational Mechanics",
              "IIT Admissions Counseling"
            ],
            "sameAs": [
              "https://www.facebook.com/share/1JTxznYnFg/",
              "https://www.instagram.com/team.excellent.patna",
              "https://www.youtube.com/@teamexcellentpatna"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "540"
            }
          })}
        </script>

        {/* Course and Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "JEE Advanced Coaching Program",
            "description": "Premium JEE Advanced coaching program designed for IIT engineering aspirants in Patna, focusing on complex multi-concept calculations and subjective problem solving.",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "Team Excellent Career Institute",
              "url": "https://teamexcellentcareerinstitute.in/"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "510"
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
                "name": "How is JEE Advanced preparation different from JEE Main at Team Excellent?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "JEE Advanced focuses heavily on multi-concept integration, matrix-matching, integer-type questions, and deep theoretical understanding. Our JEE Advanced batches feature rigorous problem-solving modules led by IITian faculty."
                }
              },
              {
                "@type": "Question",
                "name": "Who teaches JEE Advanced at Team Excellent Patna?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Classes are mentored by experienced engineering faculty led by Founder & Director Albert Newwel (M.Tech from IIT-BHU Varanasi) with 12+ years of expertise in mentoring top rankers."
                }
              },
              {
                "@type": "Question",
                "name": "Does Team Excellent conduct mock tests on the actual JEE Advanced pattern?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we conduct dual-paper (Paper 1 & Paper 2, 3 hours each on the same day) Computer-Based Mock Tests simulating the exact examination conditions and negative marking patterns."
                }
              }
            ]
          })}
        </script>

        {/* Breadcrumb Schema */}
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
                "name": "JEE Advanced Coaching in Patna",
                "item": "https://teamexcellentcareerinstitute.in/jee-advanced-coaching-in-patna"
              }
            ]
          })}
        </script>
      </Helmet>

      <Navbar />
      <main id="main-content">
        <JeeAdvancedContent />
        <TrustedSection />
        <Testimonials />
        <ExploreLinks />
      </main>
      <Footer />
    </>
  )
}
