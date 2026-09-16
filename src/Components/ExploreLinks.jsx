import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  GraduationCap, 
  Stethoscope, 
  BookOpen, 
  ClipboardCheck, 
  Award, 
  Send,
  ChevronRight,
  Trophy,
  FileText,
  Info,
  Building2,
  Sparkles,
  Calculator
} from "lucide-react";

export default function ExploreLinks() {
  const location = useLocation();
  const currentPath = location.pathname;

  const categories = [
    {
      name: "JEE Coaching Programs",
      badge: "Engineering Entrance",
      badgeColor: "bg-purple-100 text-[#5B2D7C] border-purple-200",
      links: [
        { to: "/iit-jee-coaching-in-patna", label: "IIT JEE Coaching in Patna", icon: <GraduationCap className="w-4 h-4 text-[#5B2D7C]" /> },
        { to: "/jee-main-coaching-in-patna", label: "JEE Main Coaching in Patna", icon: <GraduationCap className="w-4 h-4 text-[#5B2D7C]" /> },
        { to: "/jee-advanced-coaching-in-patna", label: "JEE Advanced Coaching in Patna", icon: <GraduationCap className="w-4 h-4 text-[#5B2D7C]" /> },
        { to: "/jee-coaching-in-patna", label: "JEE Preparation for Class 12", icon: <GraduationCap className="w-4 h-4 text-[#5B2D7C]" /> },
        { to: "/jee-dropper-coaching-in-patna", label: "JEE Dropper Coaching in Patna", icon: <GraduationCap className="w-4 h-4 text-[#5B2D7C]" /> },
      ]
    },
    {
      name: "NEET Coaching Programs",
      badge: "Medical Entrance",
      badgeColor: "bg-red-100 text-[#b72e2f] border-red-200",
      links: [
        { to: "/neet-coaching-in-patna", label: "NEET Coaching in Patna", icon: <Stethoscope className="w-4 h-4 text-[#b72e2f]" /> },
        { to: "/neet-class-12-in-patna", label: "NEET & Class 12 Coaching in Patna", icon: <Stethoscope className="w-4 h-4 text-[#b72e2f]" /> },
        { to: "/neet-dropper-coaching-in-patna", label: "NEET Dropper Coaching in Patna", icon: <Stethoscope className="w-4 h-4 text-[#b72e2f]" /> },
      ]
    },
    {
      name: "Foundation & Junior Wings",
      badge: "Classes 6–10",
      badgeColor: "bg-blue-100 text-blue-700 border-blue-200",
      links: [
        { to: "/class-6-to-10", label: "Foundation Coaching for Classes 6–10", icon: <BookOpen className="w-4 h-4 text-blue-600" /> },
      ]
    },
    {
      name: "Institute & Resources",
      badge: "Admission & Updates",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
      links: [
        { to: "/admission", label: "Admission & Scholarship", icon: <ClipboardCheck className="w-4 h-4 text-amber-600" /> },
        { to: "/result", label: "Results & Toppers", icon: <Trophy className="w-4 h-4 text-amber-600" /> },
        { to: "/blogs", label: "Articles & Guides", icon: <FileText className="w-4 h-4 text-amber-600" /> },
        { to: "/about", label: "About Institute", icon: <Info className="w-4 h-4 text-amber-600" /> },
        { to: "/contact", label: "Contact Us", icon: <Send className="w-4 h-4 text-amber-600" /> },
      ]
    },
    {
      name: "Interactive Student Tools",
      badge: "Predictors & Tests",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
      links: [
        { to: "/rank-predictor", label: "JEE & NEET Rank Predictor", icon: <Calculator className="w-4 h-4 text-emerald-600" /> },
        { to: "/college-predictor", label: "Engineering & Medical College Predictor", icon: <Building2 className="w-4 h-4 text-emerald-600" /> },
        { to: "/scholarship", label: "T-MAT 100% Scholarship Test", icon: <Sparkles className="w-4 h-4 text-emerald-600" /> },
        { to: "/test-series", label: "NTA CBT Mock Test Series", icon: <Award className="w-4 h-4 text-emerald-600" /> },
      ]
    }
  ];

  return (
    <section className="relative w-full py-16 bg-gradient-to-b from-white via-slate-50/70 to-slate-100/50 border-t border-slate-100 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 -z-10 h-[300px] w-[300px] rounded-full bg-purple-100/40 blur-[90px]" />
      <div className="absolute top-2/3 right-1/4 -translate-y-1/2 -z-10 h-[300px] w-[300px] rounded-full bg-rose-100/30 blur-[90px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[#5B2D7C] text-xs font-bold tracking-wider uppercase bg-purple-50 px-3.5 py-1 rounded-full border border-purple-100">
            Sitemap & Navigation Hub
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1e1b4b] mt-3 tracking-tight">
            Explore Our Coaching Programs & Resources
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#5B2D7C] to-[#b72e2f] mx-auto mt-3 rounded-full" />
          <p className="text-xs sm:text-sm text-slate-500 mt-3 max-w-xl mx-auto">
            Direct access to all specialized engineering, medical, foundation courses, admissions, and rank prediction tools.
          </p>
        </div>

        {/* Categorized Clusters Grid */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {categories.map((cat, catIdx) => {
            const visibleLinks = cat.links.filter((l) => l.to !== currentPath);
            if (visibleLinks.length === 0) return null;

            return (
              <div 
                key={catIdx}
                className="bg-white/90 backdrop-blur-sm rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-purple-200 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-100">
                  <h3 className="font-extrabold text-sm sm:text-base text-slate-800 flex items-center gap-2">
                    <span className="w-1.5 h-4 bg-[#5B2D7C] rounded-full inline-block"></span>
                    {cat.name}
                  </h3>
                  <span className={`text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full border ${cat.badgeColor}`}>
                    {cat.badge}
                  </span>
                </div>

                {/* Links inside this Category */}
                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                  {visibleLinks.map((link, linkIdx) => (
                    <Link
                      key={linkIdx}
                      to={link.to}
                      className="group inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 bg-slate-50 hover:bg-purple-50 border border-slate-200/70 hover:border-purple-300 rounded-xl text-slate-700 hover:text-[#5B2D7C] font-semibold text-xs sm:text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
                    >
                      <span className="shrink-0 group-hover:scale-110 transition-transform">
                        {link.icon}
                      </span>
                      <span>{link.label}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#5B2D7C] group-hover:translate-x-0.5 transition-all duration-200 shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

