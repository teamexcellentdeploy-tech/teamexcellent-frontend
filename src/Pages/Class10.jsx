import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import EnrollmentForm from '../Components/EnrollmentForm'
import { GraduationCap, CheckCircle, Calendar } from 'lucide-react'
import TrustedSection from '../Components/TrustedSection'
import Testimonials from '../Components/Testimonials'
import ExploreLinks from '../Components/ExploreLinks'

export default function Class10() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Helmet>
        <title>Class 10 Foundation Course in Patna | Team Excellent</title>
        <meta 
          name="description" 
          content="Succeed in your Board exams and build a strong foundation for JEE/NEET with our Class 10 coaching program in Patna. Prepare for Boards, NTSE, and Olympiads." 
        />
        <link rel="canonical" href="https://teamexcellentcareerinstitute.in/class-10-in-patna" />
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-gray-50 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Header */}
          <div className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white rounded-3xl p-8 md:p-12 mb-12 shadow-lg relative overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <span className="px-3.5 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-bold uppercase tracking-wider text-blue-200 inline-block mb-4">
                Senior School Foundation / Board Target
              </span>
              <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
                Class 10 Foundation Coaching
              </h1>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Aim for Board top ranks. Our Class 10 foundation program balances complete school syllabus coverage (CBSE/Bihar Board) with analytical problem solving targeting NTSE, Olympiads, and early JEE/NEET preparation.
              </p>
              <button 
                onClick={() => setIsOpen(true)}
                className="px-8 py-3 bg-white text-[#2563eb] font-bold rounded-xl shadow-md hover:bg-blue-50 transition-all active:scale-95 text-sm"
              >
                Enroll in Batch
              </button>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-[#0B0B45] mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-[#2563eb]" />
                Course Features
              </h2>
              <ul className="space-y-4">
                {[
                  "Detailed coverage of Class 10 board curriculum with board answer-writing practices.",
                  "Intensive test series matching official board answer sheets and MCQ formats.",
                  "Advanced conceptual training in Physics, Chemistry, Biology, and Algebra.",
                  "Specific preparation for NTSE Stage-1, Stage-2, and national Olympiads."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-600 text-sm">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-[#0B0B45] mb-6 flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-[#b72e2f]" />
                  Batch Information
                </h2>
                <div className="space-y-3 text-sm text-gray-600 mb-6">
                  <p className="flex justify-between py-2 border-b border-gray-100">
                    <strong className="text-gray-700">Course Duration:</strong>
                    <span>1 Year Program</span>
                  </p>
                  <p className="flex justify-between py-2 border-b border-gray-100">
                    <strong className="text-gray-700">Class Frequency:</strong>
                    <span>4 Days a Week</span>
                  </p>
                  <p className="flex justify-between py-2 border-b border-gray-100">
                    <strong className="text-gray-700">Subjects Covered:</strong>
                    <span>Mathematics, Physics, Chemistry, Biology, Social Science, MAT</span>
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(true)}
                className="w-full py-3 bg-[#b72e2f] hover:bg-[#a02829] text-white font-bold rounded-xl text-sm transition-all shadow-md active:scale-95"
              >
                Inquire Batch Details
              </button>
            </div>
          </div>

        </div>
        <TrustedSection />
        <Testimonials />
        <ExploreLinks />
      </main>

      <EnrollmentForm 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        initialCourse="School Foundation Course (Class 6-10)" 
      />

      <Footer />
    </>
  )
}
