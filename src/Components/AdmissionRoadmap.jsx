import React from "react";
import { Link } from "react-router-dom";
import { 
  FileText, Users, GraduationCap, ClipboardCheck, 
  Play, BookOpen, ArrowRight 
} from "lucide-react";

export default function AdmissionRoadmap() {
  const steps = [
    {
      number: "01",
      title: "Online / Offline Enquiry",
      desc: "Fill out the quick enquiry form online or visit our Saketpuri center in Patna to register your interest.",
      icon: <FileText className="w-6 h-6 text-[#5B2D7C]" />,
      color: "border-l-[#5B2D7C]"
    },
    {
      number: "02",
      title: "Academic Counseling Session",
      desc: "Meet 1-on-1 with our senior mentors to discuss goals, target exams, strengths, and standard batch flows.",
      icon: <Users className="w-6 h-6 text-rose-600" />,
      color: "border-l-rose-600"
    },
    {
      number: "03",
      title: "T-MAT Scholarship Test",
      desc: "Participate in the Team Excellent Mentorship & Admission Test to evaluate levels and claim up to 100% fee waivers.",
      icon: <GraduationCap className="w-6 h-6 text-amber-500" />,
      color: "border-l-amber-500"
    },
    {
      number: "04",
      title: "Registration & Admission",
      desc: "Confirm admission by submitting basic documents, academic transcripts, photographs, and completing registrations.",
      icon: <ClipboardCheck className="w-6 h-6 text-[#5B2D7C]" />,
      color: "border-l-[#5B2D7C]"
    },
    {
      number: "05",
      title: "Batch Allocation & Study Kit",
      desc: "Get assigned to your respective academic batch, receive your lecture schedules, and pick up your reference study books.",
      icon: <BookOpen className="w-6 h-6 text-rose-600" />,
      color: "border-l-rose-600"
    },
    {
      number: "06",
      title: "Commencement of Classes",
      desc: "Attend regular classroom lectures, participate in weekly assessments, and access daily doubt support desks.",
      icon: <Play className="w-6 h-6 text-emerald-500" />,
      color: "border-l-emerald-500"
    }
  ];

  return (
    <section className="w-full py-20 px-4 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50/80 px-4 py-1.5 text-xs font-semibold text-[#5B2D7C] shadow-sm mb-4">
            <ClipboardCheck className="w-4 h-4 text-[#5B2D7C]" />
            Easy Enrollment Steps
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1e1b4b]">
            How to Take Admission at Team Excellent
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#5B2D7C] to-[#b72e2f] mx-auto mt-4 rounded-full" />
          
          <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
            A simple, step-by-step admission roadmap guiding you from initial inquiry to starting your first classroom lecture.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((item, idx) => (
            <div 
              key={idx} 
              className={`bg-slate-50 rounded-3xl border-l-4 ${item.color} border-y border-r border-slate-150 p-7 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100">
                    {item.icon}
                  </div>
                  <span className="text-2xl font-black text-slate-300 tracking-tight">
                    {item.number}
                  </span>
                </div>
                
                <h3 className="font-extrabold text-slate-800 text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA link */}
        <div className="mt-12 text-center">
          <Link 
            to="/admission" 
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#5B2D7C] to-[#8424bd] hover:from-[#4a2464] hover:to-[#6d1c9e] px-8 py-4 text-sm font-bold text-white shadow-md transition duration-200 active:scale-95"
          >
            Start Your Admission Journey
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
