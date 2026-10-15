import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import AboutContent from '../Components/AboutContent'
import ExploreLinks from '../Components/ExploreLinks'

export default function About() {
  return (
    <>
      <Helmet>
        {/* Title & Description */}
        <title>About Us | Team Excellent Coaching Institute</title>
        <meta 
          name="description" 
          content="Learn about Team Excellent, a leading coaching institute for JEE, NEET, and Class 6–10 foundations. Guided by expert faculty and led by Founder & Director Albert Newwel, IIT-BHU (M.Tech)." 
        />

        {/* Keywords */}
        <meta 
          name="keywords" 
          content="About Team Excellent,Team Excellent, JEE coaching Patna, NEET coaching Patna, foundation courses class 6 to 10, IIT-JEE preparation, medical coaching Bihar, best coaching institute in Patna, Albert Newwel IIT-BHU" 
        />

        {/* Open Graph */}
        <meta property="og:title" content="About Team Excellent | Best Coaching for JEE, NEET & Foundations" />
        <meta property="og:description" content="Know more about Team Excellent and its mission to guide students towards success in JEE, NEET, and foundations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://teamexcellentcareerinstitute.in/about" />
        <link rel="canonical" href="https://teamexcellentcareerinstitute.in/about" />
        <meta property="og:image" content="https://teamexcellentcareerinstitute.in/logo192.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Team Excellent | Best Coaching for JEE, NEET & Foundations" />
        <meta name="twitter:description" content="Discover Team Excellent, led by IIT-BHU alumnus Albert Newwel, offering JEE, NEET, and foundation coaching with excellence." />
        <meta name="twitter:image" content="https://teamexcellentcareerinstitute.in/logo192.png" />

        {/* AboutPage & Person (Founder/Director) Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Us | Team Excellent Coaching Institute",
            "description": "Learn about Team Excellent, a leading coaching institute for JEE, NEET, and Class 6–10 foundations. Guided by expert faculty and led by Founder & Director Albert Newwel, IIT-BHU (M.Tech).",
            "url": "https://teamexcellentcareerinstitute.in/about",
            "mainEntity": {
              "@type": ["EducationalOrganization", "Organization"],
              "name": "Team Excellent Career Institute",
              "url": "https://teamexcellentcareerinstitute.in",
              "founder": {
                "@type": "Person",
                "name": "Albert Newwel",
                "jobTitle": "Founder & Director",
                "alumniOf": {
                  "@type": "EducationalOrganization",
                  "name": "IIT-BHU Varanasi"
                },
                "description": "M.Tech from IIT-BHU, Varanasi with 12+ years experience in mentoring JEE & NEET aspirants in Patna."
              }
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
                "name": "About Us",
                "item": "https://teamexcellentcareerinstitute.in/about"
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
                "name": "Who is the founder of Team Excellent Career Institute?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Team Excellent Career Institute was founded and is led by Albert Newwel, an alumnus of IIT-BHU Varanasi (M.Tech) with over 12 years of specialized experience in mentoring IIT-JEE and NEET aspirants."
                }
              },
              {
                "@type": "Question",
                "name": "What courses does Team Excellent offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide dedicated coaching for IIT-JEE (Main & Advanced), NEET UG, and School Foundation courses for Class 6 to 10 students."
                }
              },
              {
                "@type": "Question",
                "name": "What is Team Excellent's teaching philosophy?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our philosophy revolves around fundamental conceptual clarity, rigorous numerical practice, individual doubt resolution, and real-time computer-based test simulation."
                }
              },
              {
                "@type": "Question",
                "name": "Where is the Team Excellent campus in Patna?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our head institute is located Near NMCH College, Bajar Samiti, New Kunj Colony, Saketpuri, Patna, Bihar, 800016."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <Navbar />
      <main id="main-content">
        <AboutContent />
        <ExploreLinks />
      </main>
      <Footer />
    </>
  )
}
