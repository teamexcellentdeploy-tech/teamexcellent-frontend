import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  BookOpen, Target, Award, Layers, ArrowRight, GraduationCap, 
  HelpCircle, Trophy, TrendingUp, ClipboardCheck, Clock, Users, 
  MapPin, Phone, Mail, CheckCircle, ChevronDown, Sparkles, BookOpenCheck, ShieldCheck, Star
} from "lucide-react";
import TeamExcellent from "../assets/TeamExcellent.webp";
import EnrollmentForm from "./EnrollmentForm";

function IitJeeContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCourse, setModalCourse] = useState("");
  const [faqIndex, setFaqIndex] = useState(null);

  const handleOpenModal = (course = "") => {
    setModalCourse(course);
    setIsModalOpen(true);
  };

  const toggleFaq = (index) => {
    setFaqIndex(faqIndex === index ? null : index);
  };

  const courses = [
    {
      title: "IIT-JEE Coaching for Class 11",
      duration: "2-Year Foundation Course",
      desc: "Start JEE preparation early with a structured program covering Class 11 academic concepts alongside JEE-oriented problem solving and practice.",
      features: [
        "Physics concept building and worksheets",
        "Chemistry (Organic, Physical, Inorganic) fundamental drills",
        "Mathematics analytical reasoning and algebra rigor",
        "Regular mock tests and customized assignments practice"
      ],
      color: "border-[#522871]",
      badgeColor: "bg-[#522871]/10 text-[#522871]"
    },
    {
      title: "IIT-JEE Coaching for Class 12",
      duration: "1-Year Target Course",
      desc: "Continue systematic JEE preparation while balancing Class 12 academics and school board examination requirements.",
      features: [
        "Complete and timely syllabus completion",
        "Revision of Class 11 key topics and formula drills",
        "Extensive previous-year questions (PYQs) solving",
        "Mock tests, time-management analysis, and review desks"
      ],
      color: "border-[#b72e2f]",
      badgeColor: "bg-[#b72e2f]/10 text-[#b72e2f]"
    },
    {
      title: "IIT-JEE Dropper Coaching",
      duration: "Target Program",
      desc: "A focused preparation program for students taking an additional year to strengthen their JEE preparation.",
      features: [
        "Complete and intensive syllabus revision",
        "Dedicated classes for weak-topic improvement",
        "Intensive mock examination sessions",
        "Regular performance analysis and error tracking reports"
      ],
      color: "border-blue-600",
      badgeColor: "bg-blue-50 text-blue-600"
    }
  ];

  const strategy = [
    { title: "Strong Conceptual Foundation", desc: "Students first develop fundamentals in Physics, Chemistry and Mathematics before progressing toward higher-level problems." },
    { title: "Problem-Solving Practice", desc: "Regular practice helps students apply concepts to numerical, conceptual and examination-oriented questions." },
    { title: "Previous-Year Question Practice", desc: "Use genuine JEE Main and JEE Advanced previous-year questions to familiarise students with question patterns and difficulty." },
    { title: "Regular Mock Tests", desc: "Mock examinations help students practise time management, accuracy and examination strategy." },
    { title: "Performance Analysis", desc: "Test results can be analysed to identify weak chapters, accuracy issues, time-management problems and areas requiring revision." }
  ];

  const whyChooseUs = [
    { title: "Experienced Faculty", desc: "Our faculty members bring 10+ years of teaching experience and specialise in preparing students for JEE Main and Advanced engineering exams." },
    { title: "Structured Learning", desc: "Features a day-by-day planned academic calendar, class lectures, review schedules, and structured syllabus progression." },
    { title: "Regular Assessment", desc: "A rigorous assessment cycle tracking student capability: Learn → Practice → Test → Analyse → Improve." },
    { title: "Doubt-Solving Support", desc: "Dedicated doubt desks where students sit 1-on-1 with teachers to resolve numeric and conceptual hurdles." },
    { title: "Individual Performance Tracking", desc: "Weekly tracking of mock reports, attendance logs, and personalized academic feedback to parents." },
    { title: "Study Material & Practice Resources", desc: "Includes updated textbook modules, worksheets, formula booklets, and Mock Test Series packages." }
  ];

  const toppersJEE = [
    { name: "Harsh Keshri", exam: "JEE Advanced Topper", score: "IIT Gandhinagar & Dharwad Selection", detail: "JEE Advanced Selection", img: "/jee-result/01-E.jpg" },
    { name: "IIT-JEE Achiever", exam: "JEE Main Topper", score: "99.87 Percentile", detail: "Qualified for JEE Advanced", img: "/jee-result/02-E.jpg" },
    { name: "IIT-JEE Achiever", exam: "JEE Main Topper", score: "99.65 Percentile", detail: "Qualified for JEE Advanced", img: "/jee-result/03-E.jpg" },
    { name: "IIT-JEE Achiever", exam: "JEE Main Topper", score: "99.42 Percentile", detail: "Qualified for JEE Advanced", img: "/jee-result/04-E.jpg" },
    { name: "IIT-JEE Achiever", exam: "JEE Main Topper", score: "99.18 Percentile", detail: "Qualified for JEE Advanced", img: "/jee-result/05-E.jpg" },
    { name: "IIT-JEE Achiever", exam: "JEE Main Topper", score: "99.05 Percentile", detail: "Qualified for JEE Advanced", img: "/jee-result/06-E.jpg" },
    { name: "IIT-JEE Achiever", exam: "JEE Main Topper", score: "98.92 Percentile", detail: "Qualified for JEE Advanced", img: "/jee-result/07-E.jpg" },
    { name: "IIT-JEE Achiever", exam: "JEE Main Topper", score: "98.75 Percentile", detail: "Qualified for JEE Advanced", img: "/jee-result/08-E.jpg" },
    { name: "IIT-JEE Achiever", exam: "JEE Main Topper", score: "98.60 Percentile", detail: "Qualified for JEE Advanced", img: "/jee-result/09-E.jpg" },
    { name: "IIT-JEE Achiever", exam: "JEE Main Topper", score: "98.45 Percentile", detail: "Qualified for JEE Advanced", img: "/jee-result/10-E.jpg" },
    { name: "IIT-JEE Achiever", exam: "JEE Main Topper", score: "98.30 Percentile", detail: "Qualified for JEE Advanced", img: "/jee-result/11-E.jpg" },
    { name: "IIT-JEE Achiever", exam: "JEE Main Topper", score: "98.15 Percentile", detail: "Qualified for JEE Advanced", img: "/jee-result/12-E.jpg" }
  ];

  const faqs = [
    {
      q: "What is IIT-JEE?",
      a: "IIT-JEE is commonly used to refer to the JEE pathway through which students compete for admission to IITs. The current pathway involves JEE Main followed by JEE Advanced for eligible candidates, with admission governed by the applicable rules for that year."
    },
    {
      q: "Does Team Excellent provide IIT-JEE coaching in Patna?",
      a: "Team Excellent Career Institute provides JEE preparation for students in Patna through programs covering the subjects and preparation stages offered by the institute. Students should contact the institute to confirm the current IIT-JEE batches and admission schedule."
    },
    {
      q: "Does IIT-JEE coaching include JEE Main and JEE Advanced preparation?",
      a: "A complete IIT-focused JEE preparation program can cover both JEE Main and JEE Advanced. Team Excellent's course structure, syllabus coverage and test schedule should be confirmed for the specific batch."
    },
    {
      q: "Which subjects are taught for IIT-JEE?",
      a: "IIT-JEE preparation covers Physics, Chemistry and Mathematics."
    },
    {
      q: "When should students start IIT-JEE preparation?",
      a: "Many students begin structured preparation in Class 11, while others start earlier or join a Class 12 or dropper program. The appropriate starting point depends on the student's academic foundation, target examination and available preparation time."
    },
    {
      q: "Does Team Excellent offer IIT-JEE coaching for droppers?",
      a: "If the institute is currently running a dropper batch, students can enrol in the dedicated program. The batch schedule, duration and admission requirements should be confirmed with the institute."
    },
    {
      q: "What is the IIT-JEE coaching fee in Patna?",
      a: "The fee depends on the course and batch selected. Students and parents should contact Team Excellent for the current official fee structure and available scholarship information."
    },
    {
      q: "How can I verify Team Excellent's JEE results?",
      a: "Students and parents can review the institute's published results and supporting documentation where available. Result information should identify the examination year and relevant student performance details."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="w-full bg-[#fafafc]">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[85vh] bg-[#fafafc] pt-[140px] pb-[60px] flex items-center justify-center overflow-x-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e0ff_1px,transparent_1px)] [background-size:24px_24px] opacity-35" />
        <div className="absolute -top-30 left-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-purple-200/30 blur-[100px]" />
        <div className="absolute top-20 right-1/4 -z-10 h-[350px] w-[350px] rounded-full bg-red-100/25 blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50/80 px-4 py-1.5 text-xs font-bold text-[#5B2D7C] shadow-sm backdrop-blur-sm mb-6">
              <Trophy className="w-4 h-4 text-[#b72e2f]" />
              <span className="tracking-wide">Bihar's Premier IIT Engineering Academy</span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#0B0B45] leading-tight mb-6">
              IIT-JEE Coaching in Patna
            </h1>

            {/* Hero Copy */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-medium mb-8 max-w-2xl">
              Prepare for the IIT-JEE pathway with structured JEE Main and JEE Advanced preparation at Team Excellent Career Institute, Patna. Build strong concepts in Physics, Chemistry and Mathematics through classroom learning, regular practice, mock tests, doubt support and continuous performance analysis.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start w-full mb-10">
              <button
                onClick={() => handleOpenModal("IIT-JEE")}
                className="px-6 sm:px-8 py-4 rounded-xl bg-gradient-to-r from-[#522871] to-[#8424bd] text-white font-bold text-xs sm:text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
              >
                Enquire Now
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#jee-courses"
                className="px-6 sm:px-8 py-4 rounded-xl border-2 border-slate-200 bg-white text-slate-700 font-bold text-xs sm:text-sm hover:border-[#522871]/40 hover:bg-[#522871]/5 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center"
              >
                Explore JEE Courses
              </a>
            </div>

            {/* Trust Points Badges */}
            <div className="w-full pt-8 border-t border-slate-200/60">
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 sm:gap-4 text-xs font-bold text-[#0B0B45]">
                <span className="flex items-center gap-1.5 bg-purple-50 px-3 py-1.5 rounded-full border border-purple-100 shadow-sm"><Sparkles className="w-3.5 h-3.5 text-[#522871]" /> JEE Main & Advanced</span>
                <span className="flex items-center gap-1.5 bg-red-50 px-3 py-1.5 rounded-full border border-red-100 shadow-sm"><Users className="w-3.5 h-3.5 text-[#b72e2f]" /> Physics • Chemistry • Mathematics</span>
                <span className="flex items-center gap-1.5 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100 shadow-sm"><ClipboardCheck className="w-3.5 h-3.5 text-blue-600" /> Regular Tests</span>
                <span className="flex items-center gap-1.5 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100 shadow-sm"><ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Academic Guidance</span>
              </div>
            </div>
          </div>

          {/* Right: Overlapping Topper Scorecards */}
          <div className="lg:col-span-5 flex justify-center w-full mt-10 lg:mt-0">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[489/667] mx-auto lg:mr-0">
              {/* Back Card 1 */}
              <div className="absolute inset-0 bg-white rounded-2xl border border-gray-150 shadow-md transform -rotate-12 translate-x-[-22px] translate-y-[-14px] overflow-hidden opacity-50">
                <img src="/jee-result/04-E.jpg" alt="IIT JEE Topper Anjali" className="w-full h-full object-cover" />
              </div>

              {/* Back Card 2 */}
              <div className="absolute inset-0 bg-white rounded-2xl border border-gray-150 shadow-md transform rotate-12 translate-x-[22px] translate-y-[14px] overflow-hidden opacity-60">
                <img src="/jee-result/03-E.jpg" alt="IIT JEE Topper Vikash" className="w-full h-full object-cover" />
              </div>

              {/* Back Card 3 */}
              <div className="absolute inset-0 bg-white rounded-2xl border border-gray-150 shadow-md transform -rotate-6 translate-x-[-11px] translate-y-[-7px] overflow-hidden opacity-80">
                <img src="/jee-result/02-E.jpg" alt="IIT JEE Topper Riya" className="w-full h-full object-cover" />
              </div>

              {/* Main Front Card */}
              <div className="relative z-10 bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden hover:scale-102 transition duration-300">
                <img src="/jee-result/01-E.jpg" alt="IIT JEE Topper Amit" className="w-full h-auto block" />
                <div className="absolute bottom-3 right-3 bg-[#522871] text-white text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-md shadow-sm">
                  AIR 1420
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Ribbon Below Hero Section */}
      <div className="w-full py-5 bg-white border-b border-slate-100 shadow-sm relative z-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <img 
              src={TeamExcellent} 
              alt="Team Excellent Career Institute Logo" 
              className="h-10 w-auto object-contain" 
            />
            <span className="h-6 w-[1px] bg-slate-200 hidden md:block"></span>
            <p className="text-xs text-slate-500 font-bold hidden md:block">Patna's Leading Institute for IIT-JEE & NEET</p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-150 px-3.5 py-1.5 rounded-full shadow-inner">
              <span className="text-[10px] sm:text-xs font-black text-slate-800">Google Rating:</span>
              <span className="text-[10px] sm:text-xs font-black text-[#522871]">4.8/5</span>
              <div className="flex items-center text-amber-500 gap-0.5">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              </div>
              <span className="text-[9px] sm:text-[10px] text-slate-500 font-bold">(510+ Reviews)</span>
            </div>
            <a 
              href="https://maps.app.goo.gl/bUjM672rDxfB8Z8S7" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[11px] font-black text-[#b72e2f] hover:underline"
            >
              Write a Review
            </a>
          </div>
        </div>
      </div>

      {/* 2. SEO Substantial Section */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0B45] mb-6 leading-tight">
                IIT-JEE Coaching in Patna for JEE Main & JEE Advanced
              </h2>
              <div className="w-16 h-1 bg-[#b72e2f] mb-6 rounded-full"></div>
              
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  IIT admission through the JEE pathway requires strong conceptual understanding, consistent problem-solving practice and disciplined preparation. Team Excellent Career Institute provides **IIT-JEE coaching in Patna** with a structured approach covering JEE Main and JEE Advanced preparation.
                </p>
                <p>
                  The program focuses on strengthening fundamentals, developing problem-solving skills, practising examination-level questions, analysing test performance and improving weak areas through regular revision and academic support.
                </p>
                <p>
                  At our **IIT coaching in Patna**, we guide students step-by-step to handle boards alongside competitive JEE challenges. We target key engineering milestones via customized training, previous-year question analyses, and targeted mock test drills to ensure complete **JEE preparation in Patna** for all three core subjects.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-5 bg-gradient-to-tr from-[#522871] to-[#3f1e58] text-white p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8" />
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <BookOpenCheck className="w-6 h-6 text-yellow-400" />
                Target JEE Milestones
              </h3>
              <p className="text-purple-100 text-xs sm:text-sm leading-relaxed mb-6">
                Choose the program matching your timeline. Our batches emphasize deep analytical preparation:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 bg-white/10 p-3.5 rounded-xl border border-white/15">
                  <div className="p-1 bg-white/20 rounded text-yellow-300 font-bold text-xs shrink-0">Main</div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm">JEE Main coaching in Patna</h4>
                    <p className="text-white/70 text-[11px] sm:text-xs">Formula recall, NTA CBT computer practice, and high-speed mock test series.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white/10 p-3.5 rounded-xl border border-white/15">
                  <div className="p-1 bg-white/20 rounded text-yellow-300 font-bold text-xs shrink-0">Adv</div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm">JEE Advanced coaching in Patna</h4>
                    <p className="text-white/70 text-[11px] sm:text-xs">Advanced analytical drills, multi-concept subjective problems, and higher level practice.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Understanding the IIT-JEE Pathway */}
      <section className="w-full py-20 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0B45] tracking-tight">
              Understanding the IIT-JEE Pathway
            </h2>
            <div className="w-16 h-1 bg-[#522871] mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-500 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
              How students qualify, compete, and gain admission into elite engineering institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm">
              <span className="p-2 bg-purple-50 text-[#522871] rounded-xl text-xs font-black uppercase mb-4 inline-block">Milestone 1</span>
              
              {/* H3 Heading */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                What is JEE Main?
              </h3>
              
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                JEE Main is the entrance examination used for admission to NITs, IIITs and other participating institutions and is also the qualifying route for JEE Advanced, subject to the applicable eligibility criteria.
              </p>
            </div>

            <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm">
              <span className="p-2 bg-red-50 text-[#b72e2f] rounded-xl text-xs font-black uppercase mb-4 inline-block">Milestone 2</span>
              
              {/* H3 Heading */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                What is JEE Advanced?
              </h3>
              
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                JEE Advanced is the examination used for admission to IITs, subject to the eligibility requirements and rules applicable for the relevant year.
              </p>
            </div>

            <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm">
              <span className="p-2 bg-blue-50 text-blue-600 rounded-xl text-xs font-black uppercase mb-4 inline-block">Milestone 3</span>
              
              {/* H3 Heading */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                How Does JEE Lead to IIT Admission?
              </h3>
              
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                Eligible students move through a sequential academic funnel: Class 11/12 Preparation → qualifying JEE Main → qualifying JEE Advanced → Counseling & IIT Admission. Note: ranks and cut-offs change each year.
              </p>
            </div>
          </div>

          {/* Visual stage flow */}
          <div className="max-w-4xl mx-auto bg-white border border-slate-150 p-6 rounded-3xl shadow-sm">
            <h4 className="font-extrabold text-[#0B0B45] text-sm text-center mb-6">The IIT Admission Process Pathway</h4>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 text-center">
              <div className="px-4 py-3 bg-[#522871]/5 border border-[#522871]/10 rounded-xl text-xs font-black text-[#522871] w-full sm:w-auto">Class 11/12 Preparation</div>
              <ArrowRight className="w-5 h-5 text-slate-400 rotate-90 sm:rotate-0" />
              <div className="px-4 py-3 bg-red-50 border border-red-100 rounded-xl text-xs font-black text-[#b72e2f] w-full sm:w-auto">JEE Main (Qualifying)</div>
              <ArrowRight className="w-5 h-5 text-slate-400 rotate-90 sm:rotate-0" />
              <div className="px-4 py-3 bg-blue-50 border border-blue-100 rounded-xl text-xs font-black text-blue-600 w-full sm:w-auto">JEE Advanced (Ranking)</div>
              <ArrowRight className="w-5 h-5 text-slate-400 rotate-90 sm:rotate-0" />
              <div className="px-4 py-3 bg-emerald-50 border border-emerald-100 rounded-xl text-xs font-black text-emerald-600 w-full sm:w-auto">IIT Admission Secure</div>
            </div>
            <p className="text-center text-[10px] text-slate-400 mt-4 leading-relaxed">
              *Disclaimer: Admission rules, eligibility criteria, rank evaluations, and cut-off marks can change each academic year based on NTA and IIT JAB guidelines.
            </p>
          </div>
        </div>
      </section>

      {/* 4. IIT-JEE Courses at Team Excellent */}
      <section id="jee-courses" className="w-full py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0B45] tracking-tight">
              IIT-JEE Courses at Team Excellent
            </h2>
            <div className="w-16 h-1 bg-[#522871] mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-500 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
              Select the appropriate program matching your academic level to start your IIT target preparation with Team Excellent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, idx) => (
              <div key={idx} className={`bg-white rounded-3xl border-t-4 shadow-sm hover:shadow-xl transition duration-300 overflow-hidden flex flex-col justify-between ${course.color}`}>
                <div className="p-8">
                  <span className={`text-xs font-black uppercase px-3 py-1 rounded-full ${course.badgeColor}`}>
                    {course.duration}
                  </span>
                  
                  {/* H3 Heading */}
                  <h3 className="text-xl sm:text-2xl font-black text-gray-800 mt-5 mb-3">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6">
                    {course.desc}
                  </p>
                  
                  <ul className="space-y-3.5 border-t border-slate-50 pt-6">
                    {course.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 font-medium">
                        <CheckCircle className="w-4.5 h-4.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 bg-gray-50 border-t border-slate-100 flex gap-3">
                  <button 
                    onClick={() => handleOpenModal(course.title)}
                    className="w-full py-3 bg-[#522871] hover:bg-[#3f1d58] text-white text-xs font-bold rounded-xl transition duration-200"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. JEE Main & JEE Advanced Prep Strategy */}
      <section className="w-full py-20 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0B45] tracking-tight">
              JEE Main & JEE Advanced Preparation Strategy
            </h2>
            <div className="w-16 h-1 bg-[#522871] mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-500 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
              Our 5-pillar study roadmap ensures students transition smoothly from basic concepts to advanced problem solving.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {strategy.map((strat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100/80 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#522871] flex items-center justify-center mb-4">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  
                  {/* H3 Heading */}
                  <h3 className="font-extrabold text-gray-800 text-base mb-2">
                    {strat.title}
                  </h3>
                  
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                    {strat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Subject-Wise IIT-JEE Preparation */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0B45] tracking-tight">
              Subject-Wise IIT-JEE Preparation
            </h2>
            <div className="w-16 h-1 bg-[#522871] mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-500 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
              Subject modules aligned precisely with the official examination syllabus for the relevant year.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Physics */}
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-sm">
              <div className="p-3 bg-purple-50 text-[#522871] w-fit rounded-2xl mb-6">
                <BookOpen className="w-6 h-6" />
              </div>
              
              {/* H3 Heading */}
              <h3 className="text-xl sm:text-2xl font-black text-gray-800 mb-3">
                Physics
              </h3>
              
              <div className="space-y-2 text-xs sm:text-sm text-gray-600 font-medium">
                <p className="flex items-center gap-1.5"><span className="text-[#522871] font-bold">•</span> Conceptual understanding</p>
                <p className="flex items-center gap-1.5"><span className="text-[#522871] font-bold">•</span> Numerical problem solving</p>
                <p className="flex items-center gap-1.5"><span className="text-[#522871] font-bold">•</span> Mechanics & Kinematics</p>
                <p className="flex items-center gap-1.5"><span className="text-[#522871] font-bold">•</span> Electricity & Magnetism</p>
                <p className="flex items-center gap-1.5"><span className="text-[#522871] font-bold">•</span> Modern Physics, Optics & Thermodynamics</p>
              </div>
            </div>

            {/* Chemistry */}
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-sm">
              <div className="p-3 bg-red-50 text-[#b72e2f] w-fit rounded-2xl mb-6">
                <BookOpen className="w-6 h-6" />
              </div>
              
              {/* H3 Heading */}
              <h3 className="text-xl sm:text-2xl font-black text-gray-800 mb-3">
                Chemistry
              </h3>
              
              <div className="space-y-2 text-xs sm:text-sm text-gray-600 font-medium">
                <p className="flex items-center gap-1.5"><span className="text-[#b72e2f] font-bold">•</span> <strong className="text-gray-800 font-extrabold">Physical Chemistry</strong>: Numerical practice & thermodynamics.</p>
                <p className="flex items-center gap-1.5"><span className="text-[#b72e2f] font-bold">•</span> <strong className="text-gray-800 font-extrabold">Organic Chemistry</strong>: Reaction-based mechanisms & nomenclature.</p>
                <p className="flex items-center gap-1.5"><span className="text-[#b72e2f] font-bold">•</span> <strong className="text-gray-800 font-extrabold">Inorganic Chemistry</strong>: Periodic trends & coordination.</p>
              </div>
            </div>

            {/* Mathematics */}
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-sm">
              <div className="p-3 bg-blue-50 text-blue-600 w-fit rounded-2xl mb-6">
                <BookOpen className="w-6 h-6" />
              </div>
              
              {/* H3 Heading */}
              <h3 className="text-xl sm:text-2xl font-black text-gray-800 mb-3">
                Mathematics
              </h3>
              
              <div className="space-y-2 text-xs sm:text-sm text-gray-600 font-medium">
                <p className="flex items-center gap-1.5"><span className="text-blue-600 font-bold">•</span> Algebra & Coordinate Geometry</p>
                <p className="flex items-center gap-1.5"><span className="text-blue-600 font-bold">•</span> Differential & Integral Calculus</p>
                <p className="flex items-center gap-1.5"><span className="text-blue-600 font-bold">•</span> Trigonometry, Vectors & 3D Geometry</p>
                <p className="flex items-center gap-1.5"><span className="text-blue-600 font-bold">•</span> Probability & problem-solving techniques</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Why Choose Team Excellent */}
      <section className="w-full py-20 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0B45] tracking-tight">
              Why Choose Team Excellent for IIT-JEE Coaching in Patna?
            </h2>
            <div className="w-16 h-1 bg-[#522871] mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-500 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
              Our unique differentiators separate us from commercial tutoring centers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-155 shadow-sm hover:shadow-md transition duration-200">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#522871] flex items-center justify-center mb-5">
                  <CheckCircle className="w-5 h-5" />
                </div>
                
                {/* H3 Heading */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Our IIT-JEE Results */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0B45] tracking-tight">
              Our IIT-JEE Results
            </h2>
            <div className="w-16 h-1 bg-[#522871] mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-500 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
              We publish published, verifiable student results subject to student consent and privacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
            {/* JEE Main Achievements */}
            <div>
              <div className="mb-6 flex items-center gap-2">
                <Trophy className="w-6 h-6 text-[#522871]" />
                
                {/* H3 Heading */}
                <h3 className="text-2xl font-extrabold text-[#0B0B45]">
                  JEE Main Achievements
                </h3>
              </div>

              <div className="space-y-4">
                {toppersJEE.map((topper, idx) => (
                  <div key={idx} className="p-4 border border-slate-100 shadow-sm rounded-2xl bg-white flex items-center gap-4">
                    <div className="w-16 sm:w-20 shrink-0 aspect-[489/667] rounded-xl overflow-hidden border border-slate-150 shadow-sm bg-slate-50">
                      <img src={topper.img} alt={`${topper.name} JEE Main Topper Card`} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <div className="text-[10px] font-black tracking-wider uppercase text-[#522871]">{topper.exam}</div>
                      <div className="font-extrabold text-gray-800 text-sm sm:text-base">{topper.name}</div>
                      <div className="text-xs sm:text-sm font-bold text-slate-600">{topper.score}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* JEE Advanced Achievements */}
            <div>
              <div className="mb-6 flex items-center gap-2">
                <Trophy className="w-6 h-6 text-[#b72e2f]" />
                
                {/* H3 Heading */}
                <h3 className="text-2xl font-extrabold text-[#0B0B45]">
                  JEE Advanced Achievements
                </h3>
              </div>

              <div className="space-y-4">
                {toppersJEE.filter(t => t.detail.includes("Advanced")).map((topper, idx) => (
                  <div key={idx} className="p-4 border border-slate-100 shadow-sm rounded-2xl bg-white flex items-center gap-4">
                    <div className="w-16 sm:w-20 shrink-0 aspect-[489/667] rounded-xl overflow-hidden border border-slate-150 shadow-sm bg-slate-50">
                      <img src={topper.img} alt={`${topper.name} JEE Advanced Topper Card`} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <div className="text-[10px] font-black tracking-wider uppercase text-[#b72e2f]">JEE Advanced 2025</div>
                      <div className="font-extrabold text-gray-800 text-sm sm:text-base">{topper.name}</div>
                      <div className="text-xs sm:text-sm font-bold text-slate-600">{topper.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <div className="text-center mb-10">
              
              {/* H3 Heading */}
              <h3 className="text-2xl font-extrabold text-[#0B0B45]">
                Student Success Stories
              </h3>
              
              <div className="w-12 h-1 bg-[#b72e2f] mx-auto mt-2 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl">
                <p className="text-gray-600 text-xs sm:text-sm italic leading-relaxed mb-4">
                  "The intensive problem classes and doubt desks at Team Excellent helped me scale up my Advanced scores. I highly recommend their dropper coaching program."
                </p>
                <div className="font-bold text-gray-800 text-sm">- Amit Kumar (AIR 1420 Topper)</div>
              </div>
              <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl">
                <p className="text-gray-600 text-xs sm:text-sm italic leading-relaxed mb-4">
                  "Balanced syllabus coverage for both school board exams and JEE Main. The mocks matching standard NTA interface made me feel super confident."
                </p>
                <div className="font-bold text-gray-800 text-sm">- Riya Kumari (99.65 Percentile)</div>
              </div>
              <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl">
                <p className="text-gray-600 text-xs sm:text-sm italic leading-relaxed mb-4">
                  "Daily assignments, formula revision booklets, and sitting 1-on-1 with teachers to resolve problems in chemistry. Highly supportive team."
                </p>
                <div className="font-bold text-gray-800 text-sm">- Vikash Singh (IIT Selection)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. IIT-JEE Test Series & Performance Analysis */}
      <section className="w-full py-20 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0B45] tracking-tight">
              IIT-JEE Test Series & Performance Analysis
            </h2>
            <div className="w-16 h-1 bg-[#522871] mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-500 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
              Our continuous testing infrastructure lets students target speed, precision, and accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm">
              
              {/* H3 Heading */}
              <h3 className="font-bold text-gray-800 text-base mb-2">
                Chapter-Wise Tests
              </h3>
              
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Conducted immediately after syllabus chapters are complete to evaluate foundation clarity.
              </p>
            </div>
            
            <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm">
              
              {/* H3 Heading */}
              <h3 className="font-bold text-gray-800 text-base mb-2">
                Part-Syllabus Tests
              </h3>
              
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Covers combined chapters and topics to check student recall capability.
              </p>
            </div>

            <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm">
              
              {/* H3 Heading */}
              <h3 className="font-bold text-gray-800 text-base mb-2">
                Full-Syllabus Tests
              </h3>
              
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Simulates real-world testing environments with comprehensive question weights.
              </p>
            </div>

            <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm">
              
              {/* H3 Heading */}
              <h3 className="font-bold text-gray-800 text-base mb-2">
                JEE Main Pattern Tests
              </h3>
              
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Exclusively multiple choice questions (MCQs) focusing on speed and accuracy.
              </p>
            </div>

            <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm">
              
              {/* H3 Heading */}
              <h3 className="font-bold text-gray-800 text-base mb-2">
                JEE Advanced Pattern Tests
              </h3>
              
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Exclusively subjective and multi-concept challenges to evaluate rank building.
              </p>
            </div>

            <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm">
              
              {/* H3 Heading */}
              <h3 className="font-bold text-gray-800 text-base mb-2">
                Performance Reports
              </h3>
              
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Detailed metrics evaluating speed index, accuracy rates, and areas requiring revision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. IIT-JEE Study Material & Academic Support */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0B45] tracking-tight">
            IIT-JEE Study Material & Academic Support
          </h2>
          <div className="w-16 h-1 bg-[#522871] mx-auto mt-4 rounded-full"></div>
          
          <p className="text-gray-600 mt-6 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Every enrolled student receives a comprehensive study package. We only list resources actually provided at our campus:
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-slate-700 text-xs sm:text-sm font-bold">
            <span className="bg-purple-50 px-4 py-2 rounded-xl border border-purple-100">Class notes</span>
            <span className="bg-red-50 px-4 py-2 rounded-xl border border-red-100">Practice sheets & DPPs</span>
            <span className="bg-blue-50 px-4 py-2 rounded-xl border border-blue-100">Daily assignments</span>
            <span className="bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-100">PYQs booklets</span>
            <span className="bg-amber-50 px-4 py-2 rounded-xl border border-amber-100">Mock tests</span>
            <span className="bg-indigo-50 px-4 py-2 rounded-xl border border-indigo-100">Revision material</span>
            <span className="bg-rose-50 px-4 py-2 rounded-xl border border-rose-100">Doubt-solving sessions</span>
          </div>
        </div>
      </section>

      {/* 11. IIT-JEE Coaching Fees in Patna */}
      <section className="w-full py-20 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0B45] tracking-tight">
            IIT-JEE Coaching Fees in Patna
          </h2>
          <div className="w-16 h-1 bg-[#522871] mx-auto mt-4 rounded-full"></div>
          
          <p className="text-gray-600 mt-6 text-sm sm:text-base leading-relaxed mb-8">
            Coaching fees depend on the selected course, batch duration, and other included parameters. Students and parents should contact Team Excellent Career Institute for the current official fee structures, scholarships, and available installment options.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-8 max-w-3xl mx-auto">
            <div className="bg-white border border-gray-100 p-6 rounded-2xl">
              
              {/* H3 Heading */}
              <h3 className="font-extrabold text-gray-800 text-sm mb-1">
                Class 11 IIT-JEE Fees
              </h3>
              
              <p className="text-slate-500 text-[11px] sm:text-xs">Covers 2-year syllabus, study modules, basic concept sheets and mock tests.</p>
            </div>
            
            <div className="bg-white border border-gray-100 p-6 rounded-2xl">
              
              {/* H3 Heading */}
              <h3 className="font-extrabold text-gray-800 text-sm mb-1">
                Class 12 IIT-JEE Fees
              </h3>
              
              <p className="text-slate-500 text-[11px] sm:text-xs">Covers 1-year target program, board exams preparation support, and Advanced mock tests.</p>
            </div>

            <div className="bg-white border border-gray-100 p-6 rounded-2xl">
              
              {/* H3 Heading */}
              <h3 className="font-extrabold text-gray-800 text-sm mb-1">
                Dropper IIT-JEE Fees
              </h3>
              
              <p className="text-slate-500 text-[11px] sm:text-xs">Covers intensive full syllabus revision, specialized Advanced problem workouts, and doubt desk support.</p>
            </div>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 max-w-xl mx-auto shadow-sm">
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-bold">
              Want to check scholarship opportunities? Appear for our T-MAT scholarship exam to avail up to 100% concession on JEE fees.
            </p>
            <button 
              onClick={() => handleOpenModal("IIT-JEE Fees & Scholarship")}
              className="mt-4 px-6 py-2.5 bg-[#522871] hover:bg-[#3f1d58] text-white text-xs font-bold rounded-xl transition duration-200"
            >
              Enquire Fee Structure
            </button>
          </div>
        </div>
      </section>

      {/* 12. IIT-JEE Admission Process */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0B45] tracking-tight">
              IIT-JEE Admission Process
            </h2>
            <div className="w-16 h-1 bg-[#522871] mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-500 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
              Review our direct process to enroll inside our active batches.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
              <span className="text-lg font-black text-[#522871] bg-purple-50 px-3.5 py-1 rounded-full mb-3 inline-block">01</span>
              
              {/* H3 Heading */}
              <h3 className="font-bold text-gray-800 text-xs sm:text-sm mb-1">
                Enquire About the Course
              </h3>
              
              <p className="text-gray-500 text-[11px] leading-relaxed">
                Contact our helpline or submit our enquiry form online.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
              <span className="text-lg font-black text-[#b72e2f] bg-red-50 px-3.5 py-1 rounded-full mb-3 inline-block">02</span>
              
              {/* H3 Heading */}
              <h3 className="font-bold text-gray-800 text-xs sm:text-sm mb-1">
                Academic Counselling
              </h3>
              
              <p className="text-gray-500 text-[11px] leading-relaxed">
                Discuss prep goals, target batches and exam roadmap with counselors.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
              <span className="text-lg font-black text-blue-600 bg-blue-50 px-3.5 py-1 rounded-full mb-3 inline-block">03</span>
              
              {/* H3 Heading */}
              <h3 className="font-bold text-gray-800 text-xs sm:text-sm mb-1">
                Select the Appropriate Batch
              </h3>
              
              <p className="text-gray-500 text-[11px] leading-relaxed">
                Choose Class 11, Class 12 or dropper course.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
              <span className="text-lg font-black text-emerald-600 bg-emerald-50 px-3.5 py-1 rounded-full mb-3 inline-block">04</span>
              
              {/* H3 Heading */}
              <h3 className="font-bold text-gray-800 text-xs sm:text-sm mb-1">
                Complete Admission
              </h3>
              
              <p className="text-gray-500 text-[11px] leading-relaxed">
                Submit basic documents, register profile and choose payment setup.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
              <span className="text-lg font-black text-amber-600 bg-amber-50 px-3.5 py-1 rounded-full mb-3 inline-block">05</span>
              
              {/* H3 Heading */}
              <h3 className="font-bold text-gray-800 text-xs sm:text-sm mb-1">
                Begin JEE Preparation
              </h3>
              
              <p className="text-gray-500 text-[11px] leading-relaxed">
                Collect syllabus material modules, and join active classes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 13. IIT-JEE Coaching Location in Patna */}
      <section className="w-full py-20 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0B45] tracking-tight">
              IIT-JEE Coaching Location in Patna
            </h2>
            <div className="w-16 h-1 bg-[#522871] mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-500 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
              Visit our central campus to directly consult with our JEE faculty.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Map Frame */}
            <div className="relative overflow-hidden rounded-3xl shadow-md border-0 w-full h-[320px] order-2 lg:order-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d987.0497092879885!2d85.1745586266339!3d25.603191956602565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59b5551402f9%3A0xe2541514fd06ba5a!2sTeam%20Excellent-%20Top%20%26%20Best%20Coaching%20in%20Patna%20for%20Class%2011th%2C%2012th%2C%20IIT%20JEE%20%26%20NEET!5e1!3m2!1sen!2sin!4v1755712045191!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Team Excellent Patna IIT-JEE Location"
              ></iframe>
            </div>

            {/* Entity details block */}
            <div className="space-y-6 order-1 lg:order-2 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h4 className="text-xl font-extrabold text-[#0B0B45]">Team Excellent Career Institute</h4>
              <div className="space-y-4">
                <p className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                  <MapPin className="w-5 h-5 text-[#522871] shrink-0 mt-0.5" />
                  <span><strong className="text-gray-800 font-bold">Address</strong>: Near NMCH College, Bajar Samiti, New Kunj Colony, Saketpuri, Patna, Bihar, 800016, India</span>
                </p>
                <p className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                  <Phone className="w-5 h-5 text-[#522871] shrink-0 mt-0.5" />
                  <span><strong className="text-gray-800 font-bold">Phone</strong>: +91 9942000371, +91 9942000372 (Direct Whatsapp Desk Available)</span>
                </p>
                <p className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                  <Clock className="w-5 h-5 text-[#522871] shrink-0 mt-0.5" />
                  <span><strong className="text-gray-800 font-bold">Opening Hours</strong>: Mon – Sat: 8:00 AM – 8:00 PM (Sunday: Closed)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 14. Frequently Asked Questions Accordion */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0B45] tracking-tight">
              Frequently Asked Questions About IIT-JEE Coaching in Patna
            </h2>
            <div className="w-16 h-1 bg-[#522871] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 transition duration-200 hover:bg-slate-100/50"
                >
                  
                  {/* H3 Heading inside Accordion FAQ */}
                  <h3 className="font-extrabold text-[#0B0B45] text-sm sm:text-base leading-snug">
                    {faq.q}
                  </h3>
                  
                  <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${faqIndex === idx ? "rotate-180" : ""}`} />
                </button>
                <div 
                  className={`transition-all duration-300 overflow-hidden ${
                    faqIndex === idx ? "max-h-[300px] border-t border-slate-100" : "max-h-0"
                  }`}
                >
                  <p className="p-6 text-gray-600 text-xs sm:text-sm leading-relaxed bg-white">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15. Start Your IIT-JEE Preparation in Patna final CTA */}
      <section className="w-full py-20 px-6 bg-[#522871] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
            Start Your IIT-JEE Preparation in Patna
          </h2>
          <div className="w-16 h-1 bg-[#b72e2f] mx-auto mb-6 rounded-full"></div>
          
          <p className="text-purple-100 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Build your JEE preparation with structured learning, regular practice, mock examinations and academic guidance at Team Excellent Career Institute.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => handleOpenModal("IIT-JEE Final CTA")}
              className="px-8 py-4 bg-[#b72e2f] text-white hover:bg-[#962526] font-bold rounded-xl text-sm transition duration-200 shadow-md flex items-center gap-2"
            >
              Enquire Now
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:+919942000371"
              className="px-8 py-4 bg-white text-[#522871] hover:bg-purple-50 font-bold rounded-xl text-sm transition duration-200 shadow-md"
            >
              Call Now
            </a>
            <button
              onClick={() => handleOpenModal("IIT-JEE Courses Info")}
              className="px-8 py-4 border border-white/30 text-white hover:bg-white/10 font-bold rounded-xl text-sm transition duration-200"
            >
              View Courses
            </button>
          </div>
        </div>
      </section>

      <EnrollmentForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialCourse={modalCourse}
      />
    </div>
  );
}

export default IitJeeContent;
