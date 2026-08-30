import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import AdmissionProcess from '../Components/AdmissionProcess'
import ExploreLinks from '../Components/ExploreLinks'

export default function Admission() {
  return (
    <>
      <Helmet>
        {/* Title & Description */}
        <title>Admission Process | Team Excellent Coaching Institute</title>
        <meta
          name="description"
          content="Explore the admission process at Team Excellent Coaching Institute for JEE, NEET, and school-level foundations (Class 6–10). Join us to excel with expert guidance and proven results."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="Team Excellent admission, Team Excellent, JEE coaching admission, NEET coaching admission, foundation courses admission, Patna coaching enrollment, how to join Team Excellent, IIT JEE admission process, medical coaching admission Bihar"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Admission Process | Team Excellent Coaching" />
        <meta property="og:description" content="Step into success with Team Excellent. Learn about our admission process for JEE, NEET, and school foundations (Class 6–10)." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://teamexcellentcareerinstitute.in/admission" />
        <link rel="canonical" href="https://teamexcellentcareerinstitute.in/admission" />
        <meta property="og:image" content="https://teamexcellentcareerinstitute.in/logo192.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Admission Process | Team Excellent Coaching" />
        <meta name="twitter:description" content="Know how to enroll at Team Excellent for JEE, NEET, and foundation courses." />
        {/* WebPage & FAQPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Admission Process | Team Excellent Coaching Institute",
            "description": "Explore the admission process at Team Excellent Coaching Institute for JEE, NEET, and school-level foundations (Class 6–10).",
            "url": "https://teamexcellentcareerinstitute.in/admission"
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
                "name": "Admission Process",
                "item": "https://teamexcellentcareerinstitute.in/admission"
              }
            ]
          })}
        </script>
      </Helmet>

      <Navbar />
      <main id="main-content">
        <AdmissionProcess />
        <ExploreLinks />
      </main>
      <Footer />
    </>
  )
}
