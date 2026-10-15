import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import JeeContent from '../Components/JeeContent'

export default function Jee() {
  return (
    <>
      <Helmet>
        {/* Title & Description */}
        <title>Best JEE Coaching in Patna | IIT JEE Main & Advanced - Team Excellent</title>
        <meta 
          name="description" 
          content="Looking for the best JEE coaching in Patna? Team Excellent Career Institute offers top IIT-JEE (Mains & Advanced) coaching with expert IITian faculty, regular test series, and personalized mentoring." 
        />

        {/* Keywords */}
        <meta 
          name="keywords" 
          content="jee coaching in patna, iit coaching in patna, best iit coaching in patna, best coaching for jee in patna, best institute for iit in patna, top 10 coaching institute in patna for iit, top 10 iit jee coaching in patna, top institute in patna for iit jee, iit jee coaching in patna, Team Excellent, Team Excellent Patna" 
        />

        {/* Open Graph */}
        <meta property="og:title" content="Best JEE Coaching in Patna | IIT JEE Main & Advanced - Team Excellent" />
        <meta property="og:description" content="Enroll in the best JEE coaching in Patna at Team Excellent. Get top-class preparation for JEE Main & Advanced from expert IITian faculty." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://teamexcellentcareerinstitute.in/best-jee-coaching-in-patna" />
        <link rel="canonical" href="https://teamexcellentcareerinstitute.in/best-jee-coaching-in-patna" />
        <meta property="og:image" content="https://teamexcellentcareerinstitute.in/logo192.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best JEE Coaching in Patna | IIT JEE Prep" />
        <meta name="twitter:description" content="Crack JEE Main & Advanced with Patna's leading JEE coaching institute. Expert faculty and personal mentorship." />
        <meta name="twitter:image" content="https://teamexcellentcareerinstitute.in/logo192.png" />
        
        {/* EducationalOrganization & LocalBusiness Schema with E-E-A-T */}
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
            "description": "Team Excellent Career Institute is a premier coaching institute in Patna, Bihar, providing IIT-JEE (Main & Advanced), NEET, and foundation preparation programs for students aiming for top engineering and medical institutions.",
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
                "name": "IIT-BHU Varanasi",
                "sameAs": "https://en.wikipedia.org/wiki/Indian_Institute_of_Technology_(BHU)_Varanasi"
              },
              "description": "M.Tech from IIT-BHU Varanasi with 12+ years of expertise in mentoring JEE & NEET aspirants in Patna, Bihar."
            },
            "knowsAbout": [
              "IIT-JEE Main Coaching",
              "IIT-JEE Advanced Coaching",
              "Engineering Entrance Preparation",
              "Physics Numericals for JEE",
              "Advanced Calculus and Mathematics",
              "Organic & Inorganic Chemistry for JEE",
              "NTA CBT Mock Test Platform"
            ],
            "sameAs": [
              "https://www.facebook.com/share/1JTxznYnFg/",
              "https://www.instagram.com/team.excellent.patna",
              "https://www.linkedin.com/company/teamexcellentpatna",
              "https://www.youtube.com/@teamexcellentpatna"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "510"
            }
          })}
        </script>

        {/* Course, CourseInstance, and Offer Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "IIT-JEE (Main & Advanced) Coaching Program",
            "description": "Comprehensive JEE coaching program for aspirants covering physics, chemistry, and mathematics with regular tests, performance tracking, and expert mentoring by IITian faculty.",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "Team Excellent Career Institute",
              "url": "https://teamexcellentcareerinstitute.in/"
            },
            "hasCourseInstance": [
              {
                "@type": "CourseInstance",
                "name": "Class 11 2-Year JEE Program",
                "courseMode": "Offline Classroom",
                "duration": "P2Y"
              },
              {
                "@type": "CourseInstance",
                "name": "Class 12 1-Year JEE Program",
                "courseMode": "Offline Classroom",
                "duration": "P1Y"
              },
              {
                "@type": "CourseInstance",
                "name": "JEE Dropper / Repeater Batch",
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
              "ratingValue": "4.9",
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
                "name": "Best JEE Coaching in Patna",
                "item": "https://teamexcellentcareerinstitute.in/best-jee-coaching-in-patna"
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
                "name": "Which is the best coaching institute for IIT JEE in Patna?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Team Excellent Career Institute is widely recognized as one of the best coaching institutes in Patna for IIT JEE (Main & Advanced), led by IIT-BHU alumni and expert faculty with high success rates."
                }
              },
              {
                "@type": "Question",
                "name": "Does Team Excellent provide coaching for both JEE Main and JEE Advanced?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, our integrated curriculum covers both JEE Main concept mastery and JEE Advanced analytical problem solving with dedicated numerical practice and computer-based mock tests."
                }
              },
              {
                "@type": "Question",
                "name": "What batches are available for JEE preparation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer 2-year classroom programs for Class 11 students, 1-year target batches for Class 12 students, and intensive repeater/dropper batches for 12th pass students."
                }
              },
              {
                "@type": "Question",
                "name": "Is scholarship available for JEE coaching at Team Excellent?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, students can appear for the T-MAT (Team Excellent Talent Search Examination) to receive up to 100% scholarships on tuition fees."
                }
              },
              {
                "@type": "Question",
                "name": "How does Team Excellent help with doubt clearing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide daily 1-on-1 doubt clearing sessions with senior faculties, dedicated discussion rooms, and complete module-wise DPP solutions."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <Navbar />
      <main id="main-content">
        <JeeContent />
      </main>
      <Footer />
    </>
  )
}
