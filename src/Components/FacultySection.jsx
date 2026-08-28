import React from "react";
import { Award, Users, BookOpen, Trophy } from "lucide-react";

export default function FacultySection() {
  const facultyList = [
    {
      name: "Dr. S. K. Singh",
      subject: "Biology / Zoology & Botany",
      qualification: "M.D. / Ph.D. in Life Sciences, BHU",
      experience: "12+ Years",
      specialization: "Human Physiology, Genetics & Ecology",
      accent: "from-rose-500 to-red-600",
      bg: "bg-rose-50/50"
    },
    {
      name: "Albert Newwel",
      subject: "Physics / Mechanics & Electrodynamics",
      qualification: "M.Tech, IIT-BHU, Varanasi",
      experience: "12+ Years",
      specialization: "Calculus-based Physics, Mechanics & Waves",
      accent: "from-[#5B2D7C] to-[#8424bd]",
      bg: "bg-purple-50/50"
    },
    {
      name: "R. K. Verma",
      subject: "Chemistry / Organic & Physical",
      qualification: "B.Tech, IIT Kanpur",
      experience: "8+ Years",
      specialization: "Named Organic Reactions & Chemistry Numerics",
      accent: "from-amber-500 to-orange-600",
      bg: "bg-amber-50/50"
    }
  ];

  return (
    <section className="w-full py-20 px-4 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50/80 px-4 py-1.5 text-xs font-semibold text-[#5B2D7C] shadow-sm mb-4">
            <Users className="w-4 h-4 text-[#5B2D7C]" />
            Elite Academic Mentors
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1e1b4b]">
            Expert Faculty & Mentorship
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#5B2D7C] to-[#b72e2f] mx-auto mt-4 rounded-full" />
          
          <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
            Learn from senior medical and engineering preparatory specialists dedicated to transforming Bihar's talent into future Doctors and IITians.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {facultyList.map((fac, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-3xl border border-slate-150/70 p-8 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-purple-50/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div>
                {/* Initials Avatar */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${fac.accent} text-white flex items-center justify-center font-black text-xl mb-6 shadow-md shadow-slate-200/50 group-hover:scale-105 transition-transform duration-300`}>
                  {fac.name.split(" ").map(n => n[0]).join("").replace(".", "")}
                </div>
                
                <h3 className="font-extrabold text-[#1e1b4b] text-xl mb-1 group-hover:text-[#5B2D7C] transition-colors">
                  {fac.name}
                </h3>
                <span className="inline-block px-2.5 py-1 bg-slate-100 text-slate-700 text-[10px] font-bold rounded-md mb-6 border border-slate-200">
                  {fac.subject}
                </span>

                <ul className="space-y-3.5 text-xs text-slate-600 font-semibold mb-6">
                  <li className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span><strong>Qual:</strong> {fac.qualification}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-amber-500 shrink-0" />
                    <span><strong>Exp:</strong> {fac.experience} Teaching</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-indigo-500 shrink-0" />
                    <span><strong>Focus:</strong> {fac.specialization}</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-slate-100 pt-4 text-center">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  Available for 1-on-1 Doubt Sessions
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
