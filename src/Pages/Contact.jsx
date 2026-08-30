import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../Components/Navbar'
import ContactUs from '../Components/ContactUs'
import Footer from '../Components/Footer'
import ExploreLinks from '../Components/ExploreLinks'
import FAQSection from '../Components/FAQSection'

export default function Contact() {
  const faqs = [
    {
      question: "Where is Team Excellent located in Patna?",
      answer: "Team Excellent is located Near NMCH College, Bajar Samiti, New Kunj Colony, Saketpuri, Patna, Bihar, 800016."
    },
    {
      question: "What is the address of Team Excellent?",
      answer: "Our official physical address is: Near NMCH College, Bajar Samiti, New Kunj Colony, Saketpuri, Patna, Bihar, 800016."
    },
    {
      question: "How can I contact Team Excellent?",
      answer: "You can contact our center by calling +91-9942000371 or +91-9942000372, sending a WhatsApp enquiry, or writing to teamexcellentpatna@gmail.com."
    },
    {
      question: "What are the working hours?",
      answer: "We are open Monday to Saturday from 8:00 AM to 8:00 PM. Our center is closed on Sundays."
    },
    {
      question: "How can I reach Team Excellent?",
      answer: "Our Patna center is located near NMCH College in Saketpuri. It is well connected via local auto-rickshaws and public transport from all parts of Patna."
    },
    {
      question: "Does Team Excellent have multiple centers in Patna?",
      answer: "Currently, our main operational head campus is located at Saketpuri, Bajar Samiti, Patna, where we conduct all our offline coaching programs."
    },
    {
      question: "How can I enquire about JEE coaching?",
      answer: "You can book a free academic counseling session by calling us, sending a WhatsApp message, or submitting the enquiry form on our JEE course pages."
    },
    {
      question: "How can I enquire about NEET coaching?",
      answer: "Simply drop by our Saketpuri center or use our online enquiry form. Our counselors will guide you regarding our 1-year, 2-year, and repeater batches for NEET."
    },
    {
      question: "How can I enquire about admission?",
      answer: "You can request admission guidelines by calling our helpdesk, downloading our admission brochures, or visiting the Patna campus for a personal 1-on-1 counseling session."
    }
  ];

  return (
    <>
      <Helmet>
        {/* Title & Description */}
        <title>Contact Us | Team Excellent Coaching Institute Patna</title>
        <meta 
          name="description" 
          content="Get in touch with Team Excellent Coaching Institute, Patna. Contact us for admissions, JEE & NEET coaching, or foundation courses (Class 6–10). Visit our center, call, or send us a WhatsApp message." 
        />

        {/* Keywords */}
        <meta 
          name="keywords" 
          content="Team Excellent contact, Team Excellent, coaching institute Patna address, Team Excellent phone number, JEE coaching contact, NEET coaching Patna, foundation course contact, best coaching in Bihar" 
        />

        {/* Open Graph */}
        <meta property="og:title" content="Contact Us | Team Excellent Coaching Institute" />
        <meta property="og:description" content="Reach Team Excellent Coaching Institute, Patna for admissions, JEE/NEET queries, or foundation course details. Call, email, or visit us today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://teamexcellentcareerinstitute.in/contact" />
        <meta property="og:image" content="https://teamexcellentcareerinstitute.in/logo192.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Team Excellent Coaching Institute" />
        <meta name="twitter:description" content="Get in touch with Team Excellent Coaching Patna for admission queries, coaching details, and more." />
        <meta name="twitter:image" content="https://teamexcellentcareerinstitute.in/logo192.png" />

        {/* ContactPage & LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Us | Team Excellent Coaching Institute Patna",
            "description": "Get in touch with Team Excellent Coaching Institute, Patna. Contact us for admissions, JEE & NEET coaching, or foundation courses (Class 6–10).",
            "url": "https://teamexcellentcareerinstitute.in/contact",
            "mainEntity": {
              "@type": ["LocalBusiness", "EducationalOrganization", "School", "ProfessionalService"],
              "name": "Team Excellent Career Institute",
              "alternateName": "Team Excellent Coaching Institute Patna",
              "image": "https://teamexcellentcareerinstitute.in/logo192.png",
              "url": "https://teamexcellentcareerinstitute.in",
              "telephone": "+91-9942000371",
              "email": "teamexcellentpatna@gmail.com",
              "priceRange": "₹₹",
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
              "sameAs": [
                "https://www.facebook.com/share/1JTxznYnFg/",
                "https://www.instagram.com/team.excellent.patna",
                "https://www.linkedin.com/company/teamexcellentpatna",
                "https://www.youtube.com/@teamexcellentpatna"
              ]
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
                "name": "Contact Us",
                "item": "https://teamexcellentcareerinstitute.in/contact"
              }
            ]
          })}
        </script>
      </Helmet>

      <Navbar />
      <main id="main-content">
        <ContactUs />
        <FAQSection faqs={faqs} />
        <ExploreLinks />
      </main>
      <Footer />
    </>
  )
}
