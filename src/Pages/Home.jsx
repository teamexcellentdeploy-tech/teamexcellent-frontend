import { useState, useEffect, lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import { fetchApprovedReviews } from '../lib/reviewApi'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Strip from '../Components/Strip'

// Lazy load below-the-fold components
const WhyChooseSection = lazy(() => import('../Components/WhyChooseSection'))
const Programs = lazy(() => import('../Components/Programs'))
const ResultsSection = lazy(() => import('../Components/ResultsSection'))
const TMatSection = lazy(() => import('../Components/TMatSection'))
const Features = lazy(() => import('../Components/Features'))
const TrustedSection = lazy(() => import('../Components/TrustedSection'))
const FAQSection = lazy(() => import('../Components/FAQSection'))
const Testimonials = lazy(() => import('../Components/Testimonials'))
const AdmissionRoadmap = lazy(() => import('../Components/AdmissionRoadmap'))
const CbtSection = lazy(() => import('../Components/CbtSection'))
const ExploreLinks = lazy(() => import('../Components/ExploreLinks'))
const Footer = lazy(() => import('../Components/Footer'))

export default function Home() {
  const [reviews, setReviews] = useState([])
  const [aggregate, setAggregate] = useState({ ratingValue: "4.8", ratingCount: "510" })

  useEffect(() => {
    const getReviews = async () => {
      try {
        const data = await fetchApprovedReviews()
        if (data.success && data.reviews.length > 0) {
          setReviews(data.reviews.slice(0, 5)) // Take top 5 for schema
          const avg = data.reviews.reduce((acc, curr) => acc + curr.rating, 0) / data.reviews.length
          setAggregate({
            ratingValue: avg.toFixed(1),
            ratingCount: data.reviews.length.toString()
          })
        }
      } catch (error) {
        console.error("Schema fetch error:", error)
      }
    }
    getReviews()
  }, [])

  const homepageFaqs = [
    {
      question: "What is Team Excellent Career Institute?",
      answer: "Team Excellent Career Institute is a premier coaching center in Patna specializing in IIT-JEE (Main & Advanced), NEET preparation, and Class 6-10 foundations. We focus on building deep conceptual clarity and problem-solving skills."
    },
    {
      question: "Where is Team Excellent located in Patna?",
      answer: "We are located near NMCH College, Bajar Samiti, New Kunj Colony, Saketpuri, Patna, Bihar, 800016. Our location is easily accessible for students in Patna."
    },
    {
      question: "Which courses does Team Excellent offer?",
      answer: "We offer comprehensive 1-year and 2-year classroom courses for IIT-JEE and NEET (Class 11, Class 12, Repeater/Dropper batches), along with Pre-Foundation courses for Class 6 to 10 students."
    },
    {
      question: "Does Team Excellent provide JEE coaching in Patna?",
      answer: "Yes, Team Excellent is highly rated for JEE Main and Advanced coaching in Patna, offering mentorship from experienced educators and IITian faculty."
    },
    {
      question: "Does Team Excellent provide NEET coaching in Patna?",
      answer: "Yes, we offer specialized NEET coaching in Patna with focused curriculum design in Physics, Chemistry, and Biology to boost scores in competitive medical entrances."
    },
    {
      question: "Does Team Excellent offer coaching for JEE droppers?",
      answer: "Yes, we offer dedicated JEE repeater/dropper batches. These programs emphasize rapid concept revision, continuous mock tests, and rigorous numerical practice."
    },
    {
      question: "Does Team Excellent offer NEET dropper batches?",
      answer: "Yes, our NEET repeater batch is customized for medical aspirants aiming to boost their ranks with specialized study materials and diagnostic tests."
    },
    {
      question: "How can I take admission to Team Excellent?",
      answer: "You can apply online, take our T-MAT scholarship exam, or visit our Patna admission desk near NMCH College. Admissions are open for both foundation and entrance batches."
    },
    {
      question: "How can I contact Team Excellent?",
      answer: "You can call us at +91 9942000371 or +91 9942000372, email us at teamexcellentpatna@gmail.com, or visit our Saketpuri center in Patna."
    },
    {
      question: "Why should students choose Team Excellent?",
      answer: "Students choose us for our qualified faculty, interactive smart classrooms, custom study packages, dedicated doubt desks, and computer-based test portal."
    }
  ];

  return (
    <>
      <Helmet>
        <title>IIT-JEE & NEET Coaching in Patna | Team Excellent Career Institute</title>
        <meta
          name="description"
          content="Looking for the best IIT-JEE & NEET coaching in Patna? Team Excellent Career Institute turns Bihar's talent into doctors and engineers with expert mentoring and smart classes. Enroll for Class 6-10 foundations, JEE, and NEET success."
        />
        <meta
          name="keywords"
          content="IIT-JEE coaching in Patna, NEET coaching in Patna, best coaching for JEE in Bihar, medical entrance preparation, Team Excellent Career Institute, Patna coaching center, Class 6 to 10 foundation"
        />
        <meta property="og:title" content="IIT-JEE & NEET Coaching in Patna | Team Excellent Career Institute" />
        <meta property="og:description" content="Turning Bihar's Talent into IITians & Doctors. Join Team Excellent for the best JEE & NEET preparation in Patna." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://teamexcellentcareerinstitute.in/" />
        <link rel="canonical" href="https://teamexcellentcareerinstitute.in/" />
        <meta property="og:image" content="/logo192.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IIT-JEE & NEET Coaching in Patna | Team Excellent Career Institute" />
        <meta name="twitter:description" content="Join Team Excellent for JEE, NEET, and school foundation success in Patna." />
        <meta name="twitter:image" content="/logo192.png" />

        {/* Structured Data (Schema.org) */}
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
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Patna",
                "sameAs": "https://en.wikipedia.org/wiki/Patna"
              },
              {
                "@type": "State",
                "name": "Bihar",
                "sameAs": "https://en.wikipedia.org/wiki/Bihar"
              }
            ],
            "priceRange": "₹₹",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "08:00",
                "closes": "20:00"
              }
            ],
            "sameAs": [
              "https://www.facebook.com/share/1JTxznYnFg/",
              "https://www.instagram.com/team.excellent.patna",
              "https://www.linkedin.com/company/teamexcellentpatna",
              "https://www.youtube.com/@teamexcellentpatna"
            ],
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+91-9942000371",
                "contactType": "admissions desk",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
              },
              {
                "@type": "ContactPoint",
                "telephone": "+91-9942000372",
                "contactType": "customer support",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
              }
            ],
            "knowsAbout": [
              "IIT JEE Coaching",
              "NEET Coaching",
              "Foundation Courses",
              "Medical Entrance Preparation",
              "Engineering Entrance Preparation",
              "JEE Advanced",
              "JEE Main",
              "NEET Preparation",
              "Class 6 to 10 Foundation"
            ],
            "offers": [
              {
                "@type": "Offer",
                "name": "IIT-JEE Coaching Program",
                "description": "Comprehensive preparation courses for JEE Main and Advanced."
              },
              {
                "@type": "Offer",
                "name": "NEET Coaching Program",
                "description": "Expert guidance and mentoring for medical entrance exam preparation."
              },
              {
                "@type": "Offer",
                "name": "Class 6-10 Foundation Courses",
                "description": "Strong concept-building programs for school students."
              }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": aggregate.ratingValue,
              "ratingCount": aggregate.ratingCount
            },
            "review": reviews.map(r => ({
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": r.name
              },
              "datePublished": new Date(r.createdAt).toISOString().split('T')[0],
              "reviewBody": r.review,
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": r.rating.toString(),
                "bestRating": "5"
              }
            }))
          })}
        </script>

        {/* WebSite Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Team Excellent Career Institute",
            "url": "https://teamexcellentcareerinstitute.in",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://teamexcellentcareerinstitute.in/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </Helmet>

      {/* Page Content */}
      <Navbar />
      <main id="main-content">
        <Hero />
        <Strip />
        <Suspense fallback={<div className="h-20 bg-slate-50 animate-pulse rounded-2xl m-4" />}>
          <TrustedSection />
          <Programs />
          <ResultsSection />
          <TMatSection />
          <WhyChooseSection />
          <AdmissionRoadmap />
          <CbtSection />
          <Features />
          <Testimonials />
          <FAQSection faqs={homepageFaqs} />
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-40 bg-slate-900" />}>
        <Footer />
      </Suspense>
    </>
  )
}
