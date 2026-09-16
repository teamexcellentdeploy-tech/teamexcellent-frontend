import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { BookOpen, Download, ClipboardList, FileText, Send, Sparkles } from 'lucide-react'
import toast from 'react-hot-toast'
import { submitEnrollment } from '../lib/enrollmentApi'
import ExploreLinks from '../Components/ExploreLinks'
import FAQSection from '../Components/FAQSection'
import StudyMaterialSection from '../Components/StudyMaterialSection'

export default function StudyMaterial() {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    course: 'JEE Main/Advanced',
    city: 'Patna',
    query: 'Requesting Study Material Sample'
  })
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.fullName || !formData.mobileNumber) {
      toast.error('Please fill in your name and mobile number')
      return
    }
    const mobileRegex = /^\d{10}$/
    if (!mobileRegex.test(formData.mobileNumber)) {
      toast.error('Please enter a valid 10-digit mobile number')
      return
    }

    try {
      setSubmitting(true)
      await submitEnrollment(formData)
      toast.success('Your request has been submitted! Our team will contact you shortly.')
      setFormData({
        fullName: '',
        mobileNumber: '',
        course: 'JEE Main/Advanced',
        city: 'Patna',
        query: 'Requesting Study Material Sample'
      })
    } catch (err) {
      toast.error(err.message || 'Failed to submit request')
    } finally {
      setSubmitting(false)
    }
  }

  const faqs = [
    {
      question: "What is included in the Team Excellent study material for JEE & NEET?",
      answer: "Our packages include comprehensive theory booklets, graded exercise sheets (Level 1, Level 2, Level 3), Daily Practice Problems (DPPs), chapter-wise 15-year PYQs, and quick formula revision flashcards."
    },
    {
      question: "Is the study material available for Class 11, Class 12, and Dropper batches?",
      answer: "Yes, separate meticulously structured modules are provided for 2-year Class 11 courses, 1-year Class 12 courses, and high-intensity Repeater/Dropper rank booster batches."
    },
    {
      question: "Is Team Excellent study material aligned with the latest NCERT & NTA syllabus?",
      answer: "Yes, our study material is 100% updated every academic year to reflect the latest NTA JEE Main, IIT JEE Advanced, and NEET UG syllabus and question patterns."
    },
    {
      question: "How can external students obtain Team Excellent study material in Patna?",
      answer: "Students can register via the request form on this page or visit our Patna center at Saketpuri, Bajar Samiti to collect study modules or enroll in postal delivery."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Comprehensive Study Material | Team Excellent Career Institute Patna</title>
        <meta 
          name="description" 
          content="Get high-quality IIT JEE & NEET study materials, Daily Practice Problems (DPPs), question banks, and revision notes from Team Excellent Career Institute Patna." 
        />
        <meta 
          name="keywords" 
          content="jee study material patna, neet study material, dpp iit jee, chemistry notes, physics worksheets patna, biology coaching material" 
        />
        <link rel="canonical" href="https://teamexcellentcareerinstitute.in/study-material" />

        {/* EducationalOrganization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Team Excellent Career Institute",
            "url": "https://teamexcellentcareerinstitute.in",
            "logo": "https://teamexcellentcareerinstitute.in/logo192.png",
            "founder": {
              "@type": "Person",
              "name": "Albert Newwel",
              "jobTitle": "Founder & Director",
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "IIT-BHU Varanasi"
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
                "name": "Study Material",
                "item": "https://teamexcellentcareerinstitute.in/study-material"
              }
            ]
          })}
        </script>
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-gray-50 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 bg-purple-100 rounded-2xl mb-4 text-[#5B2D7C]">
              <BookOpen className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0B0B45] mb-4">
              Premium <span className="text-[#b72e2f]">Study Material</span>
            </h1>
            <div className="w-24 h-1 bg-[#9333ea] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Unlock conceptual clarity and excel in exams with systematically structured study booklets, Daily Practice Problems (DPPs), and chapter-wise question banks prepared by expert IITian and medical faculty.
            </p>
          </div>

          {/* Pillars of Material */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <BookOpen className="w-6 h-6 text-purple-600" />,
                title: "Comprehensive Modules",
                desc: "Thorough explanations of every topic with real-world examples, illustrations, and categorized exercise levels.",
                bg: "bg-purple-50 border-purple-100"
              },
              {
                icon: <ClipboardList className="w-6 h-6 text-red-600" />,
                title: "Daily Practice Papers",
                desc: "Topic-wise daily assessment sheets (DPPs) ensuring continuous evaluation and incremental concept strengthening.",
                bg: "bg-red-50 border-red-100"
              },
              {
                icon: <FileText className="w-6 h-6 text-blue-600" />,
                title: "Chapterwise PYQs",
                desc: "Handpicked and fully solved previous 15-year questions from JEE Main, Advanced, and NEET exams.",
                bg: "bg-blue-50 border-blue-100"
              },
              {
                icon: <Sparkles className="w-6 h-6 text-amber-600" />,
                title: "Revision Formula Sheets",
                desc: "Micro-summaries and key equations for last-minute revision, designed to maximize exam score output.",
                bg: "bg-amber-50 border-amber-100"
              }
            ].map((item, idx) => (
              <div key={idx} className={`p-8 rounded-3xl border bg-white shadow-sm hover:shadow-md transition-all ${item.bg}`}>
                <div className="p-3 bg-white rounded-xl inline-block shadow-sm mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Specialized Material Kits by Stream */}
          <div className="mb-20 space-y-12">
            <StudyMaterialSection type="jee" title="IIT JEE Engineering Study Package" />
            <StudyMaterialSection type="neet" title="NEET Medical Entrance Study Package" />
            <StudyMaterialSection type="foundation" title="Classes 6–10 Junior Foundation Package" />
          </div>

          {/* Sample Material Section */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-[#0B0B45] mb-8 text-center">Sample Module Previews</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { subject: "Physics", topic: "Electrostatics & Gauss Law", tag: "JEE/NEET", pages: "12 Pages Sample" },
                { subject: "Chemistry", topic: "GOC & Organic Nomenclature", tag: "JEE/NEET", pages: "15 Pages Sample" },
                { subject: "Biology", topic: "Cell Cycle & Cell Division", tag: "NEET Special", pages: "10 Pages Sample" }
              ].map((sample, idx) => (
                <div key={idx} className="border border-gray-100 bg-gray-50/50 p-6 rounded-2xl flex flex-col justify-between hover:border-purple-300 transition-all group">
                  <div>
                    <span className="px-3 py-1 bg-white text-xs font-bold rounded-full text-purple-700 shadow-sm border border-gray-100 inline-block mb-3">
                      {sample.tag}
                    </span>
                    <h3 className="text-lg font-black text-gray-800 mb-1">{sample.subject}</h3>
                    <p className="text-gray-600 text-sm mb-4">{sample.topic}</p>
                    <span className="text-xs text-gray-400 block mb-6">{sample.pages}</span>
                  </div>
                  <button 
                    onClick={() => {
                      toast.success(`Sample download started for ${sample.subject} - ${sample.topic}`)
                    }}
                    className="w-full py-2.5 bg-white border border-purple-200 text-purple-700 font-bold rounded-xl text-sm flex items-center justify-center gap-2 group-hover:bg-purple-700 group-hover:text-white transition-all shadow-sm"
                  >
                    <Download className="w-4 h-4" /> Download Sample
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Query Form Section */}
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#5B2D7C] to-[#3F1D5B] text-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-extrabold mb-4">Request Printed Modules</h3>
                <p className="text-purple-100 text-sm leading-relaxed mb-6">
                  Want the complete physical printed copy of our study materials? Fill out this simple request form, and our counselors will guide you on collection points or courier details.
                </p>
                <div className="space-y-2 text-xs text-purple-200">
                  <p>✓ Complete theory + question modules</p>
                  <p>✓ Topic-wise DPP sets with solutions</p>
                  <p>✓ Free syllabus coverage guide booklet</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="bg-white text-gray-800 p-6 rounded-2xl space-y-4 shadow-md">
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Kumar" 
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-600 outline-none text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1">Mobile Number</label>
                  <input 
                    type="tel" 
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="e.g. 9876543210" 
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-600 outline-none text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1">Target Exam</label>
                  <select 
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-600 outline-none text-sm cursor-pointer"
                  >
                    <option value="JEE Main/Advanced">IIT JEE Preparation</option>
                    <option value="NEET UG Medical">NEET UG Preparation</option>
                    <option value="School Foundation Class 6-10">Class 6-10 Foundation</option>
                  </select>
                </div>
                <button 
                  type="submit" 
                  disabled={submitting}
                  className="w-full py-3 bg-[#b72e2f] hover:bg-[#a02829] text-white font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-md active:scale-95"
                >
                  {submitting ? 'Submitting...' : <><Send className="w-4 h-4" /> Request Material</>}
                </button>
              </form>
            </div>
          </div>

        </div>
        <FAQSection faqs={faqs} />
        <ExploreLinks />
      </main>

      <Footer />
    </>
  )
}
