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
