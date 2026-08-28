import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import EnrollmentForm from '../Components/EnrollmentForm'
import { GraduationCap, CheckCircle, Calendar } from 'lucide-react'
import TrustedSection from '../Components/TrustedSection'
import Testimonials from '../Components/Testimonials'
import ExploreLinks from '../Components/ExploreLinks'

export default function NeetClass12() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Helmet>
        <title>Best NEET Coaching in Patna for Class 12 | Board + NEET - Team Excellent</title>
        <meta 
          name="description" 
          content="Maximize your NEET UG score and board results with the best medical coaching for Class 12 in Patna. Learn biology diagrams, shortcuts, and OMR drills." 
        />
        <link rel="canonical" href="https://teamexcellentcareerinstitute.in/neet-coaching-in-patna" />
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-gray-50 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Header */}
          <div className="bg-gradient-to-r from-[#b72e2f] to-[#7f1d1d] text-white rounded-3xl p-8 md:p-12 mb-12 shadow-lg relative overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <span className="px-3.5 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-bold uppercase tracking-wider text-red-200 inline-block mb-4">
                Class 12 Boards + NEET Prep
              </span>
              <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
                NEET Class 12 Coaching
              </h1>
              <p className="text-red-100 text-lg mb-8 leading-relaxed">
                Step up your pace. This course focuses on rapid completion of the Class 12 medical syllabus by October, followed by rigorous revision of Class 11 core chapters and intensive mock test simulations.
              </p>
              <button 
                onClick={() => setIsOpen(true)}
                className="px-8 py-3 bg-white text-[#b72e2f] font-bold rounded-xl shadow-md hover:bg-red-50 transition-all active:scale-95 text-sm"
              >
                Register & Enroll
              </button>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-[#0B0B45] mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-[#b72e2f]" />
                Course Features
              </h2>
              <ul className="space-y-4">
                {[
                  "Parallel focus on Class 12 Boards (answer writing) and NEET (speed MCQ solving).",
                  "Comprehensive revision modules for Class 11 human physiology and plant physiology.",
                  "OMR bubble sheets mock exams mimicking actual NEET exam pressures.",
                  "Individual academic mentoring and counseling sessions."
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
                    <span>4 to 5 Days a Week</span>
                  </p>
                  <p className="flex justify-between py-2 border-b border-gray-100">
                    <strong className="text-gray-700">Special revision:</strong>
                    <span>Class 11 core chapters revised in winter</span>
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
        initialCourse="NEET Class 12 Coaching" 
      />

      <Footer />
    </>
  )
}
