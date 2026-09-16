import React from "react";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  FileText, 
  ClipboardCheck, 
  Layers, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Download,
  BookMarked,
  HelpCircle,
  Clock,
  CheckCircle
} from "lucide-react";

export const defaultJeeMaterials = [
  {
    title: "Classroom Lecture Notes",
    tag: "Theory & Concepts",
    badgeColor: "bg-purple-100 text-[#5B2D7C] border-purple-200",
    icon: <BookOpen className="w-5 h-5 text-[#5B2D7C]" />,
    desc: "Concept-rich theory booklets covering complete NCERT + JEE Advanced derivations, solved illustrations, and step-by-step derivations.",
    highlights: [
      "Covers Physics, Chemistry & Math in systematic chapters",
      "Includes faculty shortcuts and step-by-step solved examples"
    ]
  },
  {
    title: "Practice Sheets & Assignments",
    tag: "Graded Exercises",
    badgeColor: "bg-blue-100 text-blue-700 border-blue-200",
    icon: <FileText className="w-5 h-5 text-blue-600" />,
    desc: "Homework problem sheets categorized into Level 1 (Board/Main), Level 2 (JEE Advanced Single Choice), and Level 3 (Multi-Correct/Matrix).",
    highlights: [
      "Over 300+ graded questions per chapter",
      "Contains assertion-reasoning & numerical answer questions"
    ]
  },
  {
    title: "Daily Practice Problems (DPPs)",
    tag: "Daily Assessment",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    icon: <ClipboardCheck className="w-5 h-5 text-emerald-600" />,
    desc: "Time-bound 10-15 question daily problem sheets distributed after each lecture to reinforce same-day concept retention and active solving.",
    highlights: [
      "Instant next-day 1-on-1 faculty doubt clearing",
      "Builds rapid question decoding speed under timed conditions"
    ]
  },
  {
    title: "Chapter-wise & PYQ Workbooks",
    tag: "15+ Years Archive",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    icon: <Layers className="w-5 h-5 text-amber-600" />,
    desc: "Exhaustive archive of authentic past JEE Main & JEE Advanced questions organized by topic with comprehensive, step-by-step answer keys.",
    highlights: [
      "Fully updated with latest 2024-2026 NTA CBT papers",
      "Chapter weightage and high-yield score trends included"
    ]
  },
  {
    title: "Full-Length Mock Papers",
    tag: "NTA CBT Simulation",
    badgeColor: "bg-rose-100 text-rose-700 border-rose-200",
    icon: <Award className="w-5 h-5 text-rose-600" />,
    desc: "Simulated computer-based test series matching NTA's official digital interface, sectional timers, and -1 negative marking protocols.",
    highlights: [
      "Real-time All India Rank (AIR) projection and percentile scores",
      "In-depth AI diagnostic report on speed, accuracy, and weak areas"
    ]
  },
  {
    title: "Revision Check & Formula Books",
    tag: "Quick Revision",
    badgeColor: "bg-indigo-100 text-indigo-700 border-indigo-200",
    icon: <Sparkles className="w-5 h-5 text-indigo-600" />,
    desc: "Pocket-sized formula handbooks, organic reaction mechanism charts, and high-yield takeaway mind-maps for rapid revision during exam weeks.",
    highlights: [
      "All essential Physics & Chemistry formulas in concise charts",
      "Quick memory tricks and common negative-marking pitfalls"
    ]
  }
];

export const defaultNeetMaterials = [
  {
    title: "NCERT Line-by-Line Modules",
    tag: "100% NCERT Focused",
    badgeColor: "bg-red-100 text-[#b72e2f] border-red-200",
    icon: <BookOpen className="w-5 h-5 text-[#b72e2f]" />,
    desc: "Comprehensive modules meticulously deconstructing every NCERT line, diagram, table, and summary for Botany, Zoology, Chemistry & Physics.",
    highlights: [
      "Complete coverage of Class 11 & 12 NCERT medical syllabus",
      "Statement-based, match-the-column & assertion-reasoning drills"
    ]
  },
  {
    title: "Daily Practice Problems (DPPs)",
    tag: "Daily Drills",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    icon: <ClipboardCheck className="w-5 h-5 text-emerald-600" />,
    desc: "Topic-wise daily worksheets with 20-30 MCQs designed to build calculation confidence in Physics and numerical Chemistry accuracy.",
    highlights: [
      "Daily post-class assignments to eliminate conceptual doubts",
      "Faculty-led doubt resolution counters every morning"
    ]
  },
  {
    title: "Chapter-wise 20-Yr PYQ Banks",
    tag: "20+ Years Archive",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    icon: <Layers className="w-5 h-5 text-amber-600" />,
    desc: "Exhaustive archive of past AIPMT and NEET UG questions mapped chapter-wise with detailed biological reasoning and physical explanations.",
    highlights: [
      "Detailed step-by-step solutions for tricky question options",
      "Identifies recurring high-yield questions for 650+ target scores"
    ]
  },
  {
    title: "Doctor-Curated Class Notes",
    tag: "High-Yield Notes",
    badgeColor: "bg-purple-100 text-purple-700 border-purple-200",
    icon: <BookMarked className="w-5 h-5 text-purple-600" />,
    desc: "Crisp, handwritten and printed lecture notes prepared by top medical mentors highlighting examiner favorites and memory mnemonics.",
    highlights: [
      "Color-coded anatomical diagrams and biochemical cycles",
      "Highlighting high-yield topics and past trap questions"
    ]
  },
  {
    title: "Full-Length OMR Mock Series",
    tag: "OMR Simulation",
    badgeColor: "bg-rose-100 text-rose-700 border-rose-200",
    icon: <Award className="w-5 h-5 text-rose-600" />,
    desc: "3-Hour 20-minute simulated tests conducted on official NTA carbonless OMR sheets to master time management and zero-bubbling error.",
    highlights: [
      "All India percentile tracking & state-level cutoff predictions",
      "Detailed diagnostic report highlighting subject-wise accuracy"
    ]
  },
  {
    title: "Formula & Diagram Flashcards",
    tag: "Last-Minute Booster",
    badgeColor: "bg-blue-100 text-blue-700 border-blue-200",
    icon: <Sparkles className="w-5 h-5 text-blue-600" />,
    desc: "Handy revision flashcards, plant/animal kingdom taxonomy charts, and essential physics/chemistry formula booklets for quick revision.",
    highlights: [
      "Essential physics formulas and chemistry reaction charts",
      "Mnemonics for rapid recall of biological classifications"
    ]
  }
];

export const defaultFoundationMaterials = [
  {
    title: "NCERT & Board Theory Modules",
    tag: "School & Board Prep",
    badgeColor: "bg-blue-100 text-blue-700 border-blue-200",
    icon: <BookOpen className="w-5 h-5 text-blue-600" />,
    desc: "In-depth chapter modules designed to build strong school board fundamentals while introducing advanced conceptual reasoning.",
    highlights: [
      "Covers CBSE/ICSE Physics, Chemistry, Math & Biology",
      "Step-by-step concept explanations with real-world examples"
    ]
  },
  {
    title: "Daily Practice Worksheets",
    tag: "Daily Practice",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    icon: <ClipboardCheck className="w-5 h-5 text-emerald-600" />,
    desc: "Targeted daily problem sheets instilling disciplined homework habits and steady mathematical & scientific problem solving.",
    highlights: [
      "Regular homework evaluation with teacher feedback",
      "Encourages active analytical curiosity and logical thinking"
    ]
  },
  {
    title: "Olympiad & NTSE Question Banks",
    tag: "Competitive Edge",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    icon: <Layers className="w-5 h-5 text-amber-600" />,
    desc: "Specialized question banks curated for NSO, IMO, NTSE, and national talent search examinations with graded challenge problems.",
    highlights: [
      "Develops early competitive temperament and analytical aptitude",
      "Detailed solutions with conceptual logic breakdowns"
    ]
  },
  {
    title: "Mental Ability & Logic Booklets",
    tag: "Aptitude Building",
    badgeColor: "bg-purple-100 text-purple-700 border-purple-200",
    icon: <Sparkles className="w-5 h-5 text-purple-600" />,
    desc: "Dedicated worksheets covering verbal and non-verbal reasoning, pattern recognition, series, and puzzle-solving skills.",
    highlights: [
      "Sharpens brain agility and mathematical IQ",
      "Essential foundation for future JEE/NEET analytical thinking"
    ]
  },
  {
    title: "Bi-Weekly Assessment Papers",
    tag: "Progress Tracking",
    badgeColor: "bg-rose-100 text-rose-700 border-rose-200",
    icon: <Award className="w-5 h-5 text-rose-600" />,
    desc: "Regular unit tests and term exams with detailed performance reports shared transparently during monthly Parent-Teacher Meetings (PTMs).",
    highlights: [
      "Comprehensive performance analysis and weakness diagnosis",
      "Individual teacher mentoring for areas needing improvement"
    ]
  },
  {
    title: "Formula & Science Cheat Sheets",
    tag: "Quick Review",
    badgeColor: "bg-indigo-100 text-indigo-700 border-indigo-200",
    icon: <FileText className="w-5 h-5 text-indigo-600" />,
    desc: "Compact summary cards with key math theorems, science definitions, chemical equations, and units for effortless revision.",
    highlights: [
      "Quick memory aids for school exams and unit tests",
      "Easy-to-digest summaries for rapid recall before exams"
    ]
  }
];

export default function StudyMaterialSection({
  type = "jee", // "jee" | "neet" | "foundation"
  title,
  subtitle,
  materials,
  className = ""
}) {
  const getDefaults = () => {
    switch (type) {
      case "neet":
        return {
          title: "NEET Study Material & Resources",
          subtitle: "Comprehensive, doctor-curated reference resources and NCERT deconstructions provided to all registered medical classroom students.",
          accentLine: "bg-[#b72e2f]",
          badgeBg: "bg-red-50 text-[#b72e2f] border-red-100",
          tagLabel: "Medical Entrance Study Kit",
          items: defaultNeetMaterials
        };
      case "foundation":
        return {
          title: "Foundation Study Material (Classes 6–10)",
          subtitle: "School board curriculum, Olympiad modules, and mental aptitude problem sets curated for early competitive excellence.",
          accentLine: "bg-blue-600",
          badgeBg: "bg-blue-50 text-blue-700 border-blue-100",
          tagLabel: "Junior Foundation Kit",
          items: defaultFoundationMaterials
        };
      case "jee":
      default:
        return {
          title: "JEE Study Material & Resources",
          subtitle: "Comprehensive reference modules, topic-wise practice sheets, and NTA CBT test series provided to all classroom students.",
          accentLine: "bg-[#5B2D7C]",
          badgeBg: "bg-purple-50 text-[#5B2D7C] border-purple-100",
          tagLabel: "Engineering Entrance Study Kit",
          items: defaultJeeMaterials
        };
    }
  };

  const defaults = getDefaults();
  const displayTitle = title || defaults.title;
  const displaySubtitle = subtitle || defaults.subtitle;
  const displayItems = materials || defaults.items;

  return (
    <section className={`w-full py-20 px-4 bg-gradient-to-b from-white via-slate-50/60 to-white border-t border-slate-100 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold shadow-sm mb-3.5 ${defaults.badgeBg}`}>
            <BookOpen className="w-4 h-4" />
            <span>{defaults.tagLabel}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1e1b4b] tracking-tight">
            {displayTitle}
          </h2>
          <div className={`w-20 h-1 ${defaults.accentLine} mx-auto mt-3.5 rounded-full`} />
          <p className="text-xs sm:text-sm text-slate-500 mt-3.5 max-w-2xl mx-auto leading-relaxed">
            {displaySubtitle}
          </p>
        </div>

        {/* Rich Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {displayItems.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-3 rounded-2xl bg-slate-50 group-hover:bg-purple-50 group-hover:scale-105 transition-all">
                    {item.icon}
                  </div>
                  <span className={`text-[10px] sm:text-xs font-extrabold uppercase px-3 py-1 rounded-full border ${item.badgeColor}`}>
                    {item.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-extrabold text-base sm:text-lg text-[#1e1b4b] mb-2 group-hover:text-[#5B2D7C] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {item.desc}
                </p>

                {/* Key Bullet Highlights */}
                {item.highlights && item.highlights.length > 0 && (
                  <ul className="space-y-2 pt-3 border-t border-slate-100 mb-2">
                    {item.highlights.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-[11px] sm:text-xs text-slate-600 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Bottom Micro Banner */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-400 group-hover:text-[#5B2D7C] transition-colors">
                <span>Included in Classroom Package</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Callout Footer */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Want to review sample modules or collect physical copies?{" "}
            <Link to="/study-material" className="text-[#5B2D7C] font-bold underline hover:text-[#b72e2f] transition-colors">
              Explore Our Complete Study Material Center & Samples ➔
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
