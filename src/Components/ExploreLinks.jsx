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
  Calculator,
  ArrowRight,
  Compass
} from "lucide-react";

export default function ExploreLinks() {
  const location = useLocation();
  const currentPath = location.pathname;

  const categories = [
    {
      name: "JEE Coaching Programs",
      desc: "Comprehensive engineering entrance preparation from NCERT fundamentals to Advanced problem solving.",
      badge: "Engineering Entrance",
      badgeColor: "bg-purple-100 text-[#5B2D7C] border-purple-200",
      theme: {
        iconBg: "bg-purple-50 group-hover:bg-purple-600 group-hover:text-white text-[#5B2D7C]",
        borderHover: "hover:border-purple-300 hover:shadow-purple-500/5",
        textHover: "group-hover:text-[#5B2D7C]"
      },
      links: [
        { 
          to: "/iit-jee-coaching-in-patna", 
          label: "IIT JEE Coaching in Patna", 
          desc: "2-Year comprehensive foundation & entrance coaching for Class 11 students.",
          icon: <GraduationCap className="w-5 h-5" /> 
        },
        { 
          to: "/jee-main-coaching-in-patna", 
          label: "JEE Main Coaching in Patna", 
          desc: "NTA CBT pattern preparation, speed workouts & 99+ percentile roadmap.",
          icon: <GraduationCap className="w-5 h-5" /> 
        },
        { 
          to: "/jee-advanced-coaching-in-patna", 
          label: "JEE Advanced Coaching in Patna", 
          desc: "High-level multi-concept analytical problem solving mentored by senior IITians.",
          icon: <GraduationCap className="w-5 h-5" /> 
        },
        { 
          to: "/jee-coaching-in-patna", 
          label: "JEE Preparation for Class 12", 
          desc: "Integrated Class 12 board preparation with intensive Class 11 revision capsules.",
          icon: <GraduationCap className="w-5 h-5" /> 
        },
        { 
          to: "/jee-dropper-coaching-in-patna", 
          label: "JEE Dropper Coaching in Patna", 
          desc: "Targeted 1-year repeater rank booster with 45+ NTA CBT mock tests.",
          icon: <GraduationCap className="w-5 h-5" /> 
        },
      ]
    },
    {
      name: "NEET Coaching Programs",
      desc: "Doctor-mentored medical entrance coaching with 100% NCERT deconstruction & high-yield OMR test series.",
      badge: "Medical Entrance",
      badgeColor: "bg-red-100 text-[#b72e2f] border-red-200",
      theme: {
        iconBg: "bg-red-50 group-hover:bg-[#b72e2f] group-hover:text-white text-[#b72e2f]",
        borderHover: "hover:border-red-300 hover:shadow-red-500/5",
        textHover: "group-hover:text-[#b72e2f]"
      },
      links: [
        { 
          to: "/neet-coaching-in-patna", 
          label: "NEET Coaching in Patna", 
          desc: "2-Year NCERT medical foundation & line-by-line biology for Class 11 aspirants.",
          icon: <Stethoscope className="w-5 h-5" /> 
        },
        { 
          to: "/neet-class-12-in-patna", 
          label: "NEET & Class 12 Coaching in Patna", 
          desc: "Target batch balancing 12th Board examinations with high-yield NEET mock drills.",
          icon: <Stethoscope className="w-5 h-5" /> 
        },
        { 
          to: "/neet-dropper-coaching-in-patna", 
          label: "NEET Dropper Coaching in Patna", 
          desc: "Intensive repeater program with 50+ simulated OMR tests targeting 650+ scores.",
          icon: <Stethoscope className="w-5 h-5" /> 
        },
      ]
    },
    {
      name: "Foundation & Junior Wings",
      desc: "Building rock-solid analytical fundamentals and competitive aptitude from an early school age.",
      badge: "Classes 6–10",
      badgeColor: "bg-blue-100 text-blue-700 border-blue-200",
      theme: {
        iconBg: "bg-blue-50 group-hover:bg-blue-600 group-hover:text-white text-blue-600",
        borderHover: "hover:border-blue-300 hover:shadow-blue-500/5",
        textHover: "group-hover:text-blue-700"
      },
      links: [
        { 
          to: "/class-6-to-10", 
          label: "Foundation Coaching for Classes 6–10", 
          desc: "Olympiad, NTSE, Science & Math conceptual clarity for middle and high school students.",
          icon: <BookOpen className="w-5 h-5" /> 
        },
      ]
    },
    {
      name: "Institute & Resources",
      desc: "Admissions, scholarship tests, verified student selection lists, and latest academic updates.",
      badge: "Admissions & Updates",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
      theme: {
        iconBg: "bg-amber-50 group-hover:bg-amber-600 group-hover:text-white text-amber-700",
        borderHover: "hover:border-amber-300 hover:shadow-amber-500/5",
        textHover: "group-hover:text-amber-800"
      },
      links: [
        { 
          to: "/admission", 
          label: "Admission & Scholarship", 
          desc: "Step-by-step registration guidelines, fee structures, and installment policies.",
          icon: <ClipboardCheck className="w-5 h-5" /> 
        },
        { 
          to: "/result", 
          label: "Results & Toppers", 
          desc: "Authentic selections in premier IITs, NITs, AIIMS, and Government Medical Colleges.",
          icon: <Trophy className="w-5 h-5" /> 
        },
        { 
          to: "/blogs", 
          label: "Articles & Guides", 
          desc: "Expert exam tips, subject revision strategies, and entrance notification updates.",
          icon: <FileText className="w-5 h-5" /> 
        },
        { 
          to: "/about", 
          label: "About Institute", 
          desc: "Our teaching philosophy, permanent IITian faculty credentials, and smart infrastructure.",
          icon: <Info className="w-5 h-5" /> 
        },
        { 
          to: "/contact", 
          label: "Contact Us", 
          desc: "Saketpuri Patna campus location, admission helplines, and free counseling booking.",
          icon: <Send className="w-5 h-5" /> 
        },
      ]
    },
    {
      name: "Interactive Student Tools",
      desc: "Free online diagnostic calculators, cut-off predictors, and national scholarship tests.",
      badge: "Predictors & Tests",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
      theme: {
        iconBg: "bg-emerald-50 group-hover:bg-emerald-600 group-hover:text-white text-emerald-700",
        borderHover: "hover:border-emerald-300 hover:shadow-emerald-500/5",
        textHover: "group-hover:text-emerald-800"
      },
      links: [
        { 
          to: "/rank-predictor", 
          label: "JEE & NEET Rank Predictor", 
          desc: "Estimate your All India Rank and expected percentile based on your test marks.",
          icon: <Calculator className="w-5 h-5" /> 
        },
        { 
          to: "/college-predictor", 
          label: "Engineering & Medical College Predictor", 
          desc: "Discover eligible IITs, NITs, IIITs, and Medical Colleges matching your target score.",
          icon: <Building2 className="w-5 h-5" /> 
        },
        { 
          to: "/scholarship", 
          label: "T-MAT 100% Scholarship Test", 
          desc: "Take the talent reward exam to qualify for up to 100% fee waivers on tuition.",
          icon: <Sparkles className="w-5 h-5" /> 
        },
        { 
          to: "/test-series", 
          label: "NTA CBT Mock Test Series", 
          desc: "All India test series simulating the official computer-based exam platform.",
          icon: <Award className="w-5 h-5" /> 
        },
      ]
    }
  ];

  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-white via-slate-50/80 to-slate-100/60 border-t border-slate-150 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/5 -translate-y-1/2 -z-10 h-[350px] w-[350px] rounded-full bg-purple-100/40 blur-[100px]" />
      <div className="absolute top-3/4 right-1/5 -translate-y-1/2 -z-10 h-[350px] w-[350px] rounded-full bg-rose-100/30 blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50/80 px-4 py-1.5 text-xs font-semibold text-[#5B2D7C] shadow-sm mb-3">
            <Compass className="w-4 h-4 text-[#5B2D7C]" />
            <span>Structured Academic Sitemap</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1e1b4b] tracking-tight">
            Explore Our Coaching Programs & Resources
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#5B2D7C] to-[#b72e2f] mx-auto mt-3 rounded-full" />
          <p className="text-xs sm:text-sm text-slate-500 mt-3 max-w-2xl mx-auto leading-relaxed">
            Navigate directly to our specialized classroom batches, entrance target hubs, scholarship schemes, and interactive predictor tools.
          </p>
        </div>

        {/* Categorized Clusters Stack */}
        <div className="space-y-10 max-w-6xl mx-auto">
          {categories.map((cat, catIdx) => {
            const visibleLinks = cat.links.filter((l) => l.to !== currentPath);
            if (visibleLinks.length === 0) return null;

            return (
              <div 
                key={catIdx}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:border-slate-300 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-6 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-5 bg-[#5B2D7C] rounded-full inline-block"></span>
                      <h3 className="font-black text-lg sm:text-xl text-[#1e1b4b]">
                        {cat.name}
                      </h3>
                    </div>
                    {cat.desc && (
                      <p className="text-xs text-slate-500 mt-1 ml-4 sm:ml-4">{cat.desc}</p>
                    )}
                  </div>
                  <span className={`self-start sm:self-auto text-[10px] sm:text-xs font-extrabold uppercase px-3 py-1 rounded-full border shrink-0 ${cat.badgeColor}`}>
                    {cat.badge}
                  </span>
                </div>

                {/* Rich Cards Grid */}
                <div className={`grid grid-cols-1 md:grid-cols-2 ${visibleLinks.length > 2 ? "lg:grid-cols-3" : ""} gap-4`}>
                  {visibleLinks.map((link, linkIdx) => (
                    <Link
                      key={linkIdx}
                      to={link.to}
                      className={`group flex items-start justify-between gap-3.5 p-4 sm:p-5 bg-slate-50/70 hover:bg-white border border-slate-200/70 ${cat.theme.borderHover} rounded-2xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md`}
                    >
                      <div className="flex items-start gap-3.5 flex-1 min-w-0">
                        <div className={`p-2.5 rounded-xl shrink-0 transition-colors duration-200 ${cat.theme.iconBg}`}>
                          {link.icon}
                        </div>
                        <div className="min-w-0">
                          <h4 className={`font-bold text-xs sm:text-sm text-slate-800 ${cat.theme.textHover} transition-colors leading-snug line-clamp-1`}>
                            {link.label}
                          </h4>
                          <p className="text-[11px] sm:text-xs text-slate-500 font-normal mt-1 leading-relaxed line-clamp-2">
                            {link.desc}
                          </p>
                        </div>
                      </div>

                      <ArrowRight className={`w-4 h-4 text-slate-400 group-hover:text-[#5B2D7C] group-hover:translate-x-1 transition-all duration-200 shrink-0 mt-2`} />
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

