import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  BookOpen, Target, Award, Layers, ArrowRight, GraduationCap, 
  HelpCircle, Trophy, TrendingUp, ClipboardCheck, Clock, Users, 
  MapPin, Phone, Mail, CheckCircle, ChevronDown, Sparkles, BookOpenCheck, ShieldCheck, Star, Info, ShieldAlert
} from "lucide-react";
import TeamExcellent from "../assets/TeamExcellent.webp";
import EnrollmentForm from "./EnrollmentForm";
import FAQSection from "./FAQSection";
import StudyMaterialSection from "./StudyMaterialSection";

function JeeAdvancedContent() {
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

  const whyChooseUs = [
    { title: "Structured JEE Curriculum", desc: "Our day-by-day planned academic curriculum aligns board syllabus with JEE Main & Advanced targets to manage time effectively." },
    { title: "Physics, Chemistry & Mathematics", desc: "Rigorous core subject training covering conceptual derivations, organic reaction mechanisms, and calculus proof workouts." },
    { title: "Regular Tests & Mock Exams", desc: "Features weekly chapter tests, cumulative part tests, and full mock computer based testing (CBT) under official time bounds." },
    { title: "Performance Tracking", desc: "Detailed graphical progress reports delivered weekly to highlight weak concepts, test speed logs, and accuracy percentages." },
    { title: "Doubt-Solving Support", desc: "Daily one-on-one desk appointments with senior mentors to isolate and resolve academic and concept hurdles." },
    { title: "Academic Mentorship", desc: "Regular personal review desks led directly by our directors to build confidence and refine exam attempt strategies." }
  ];

  const toppersJEE = [
    { name: "Harsh Keshri", exam: "JEE Advanced 2025", score: "IIT Gandhinagar & Dharwad Selection", detail: "AIR 1420 Selection", img: "/jee-result/01-E.webp" },
    { name: "IIT-JEE Achiever", exam: "JEE Main 2025", score: "99.87 Percentile", detail: "Qualified for JEE Advanced", img: "/jee-result/02-E.webp" },
    { name: "IIT-JEE Achiever", exam: "JEE Main 2025", score: "99.65 Percentile", detail: "Qualified for JEE Advanced", img: "/jee-result/03-E.webp" },
    { name: "IIT-JEE Achiever", exam: "JEE Main 2025", score: "99.42 Percentile", detail: "Qualified for JEE Advanced", img: "/jee-result/04-E.webp" },
    { name: "IIT-JEE Achiever", exam: "JEE Main 2025", score: "99.18 Percentile", detail: "Qualified for JEE Advanced", img: "/jee-result/05-E.webp" },
    { name: "IIT-JEE Achiever", exam: "JEE Main 2025", score: "99.05 Percentile", detail: "Qualified for JEE Advanced", img: "/jee-result/06-E.webp" },
    { name: "IIT-JEE Achiever", exam: "JEE Main 2025", score: "98.92 Percentile", detail: "Qualified for JEE Advanced", img: "/jee-result/07-E.webp" },
    { name: "IIT-JEE Achiever", exam: "JEE Main 2025", score: "98.75 Percentile", detail: "Qualified for JEE Advanced", img: "/jee-result/08-E.webp" },
    { name: "IIT-JEE Achiever", exam: "JEE Main 2025", score: "98.60 Percentile", detail: "Qualified for JEE Advanced", img: "/jee-result/09-E.webp" },
    { name: "IIT-JEE Achiever", exam: "JEE Main 2025", score: "98.45 Percentile", detail: "Qualified for JEE Advanced", img: "/jee-result/10-E.webp" },
    { name: "IIT-JEE Achiever", exam: "JEE Main 2025", score: "98.30 Percentile", detail: "Qualified for JEE Advanced", img: "/jee-result/11-E.webp" },
    { name: "IIT-JEE Achiever", exam: "JEE Main 2025", score: "98.15 Percentile", detail: "Qualified for JEE Advanced", img: "/jee-result/12-E.webp" }
  ];

  const comparePoints = [
    { title: "Faculty", desc: "Compare actual M.Tech/B.Tech/Doctor qualifications and teaching years rather than overall brand. Confirm if full-time teachers are accessible outside class hours." },
    { title: "Batch Size", desc: "Larger groups make personal doubt support difficult. A balanced batch allows individual feedback and space for interaction." },
    { title: "Study Material", desc: "Look for graded content levels (Basic, Intermediate, Advanced) and detailed previous year questions (PYQs) modules." },
    { title: "Test Series", desc: "Evaluate testing frequency, computer-based testing (CBT) portal availability, and diagnostic accuracy logs." },
    { title: "Results", desc: "Look for complete selection context (exam names, percentiles, ranks, selection years) rather than unsupported counts." },
    { title: "Fees", desc: "Verify comprehensive fee structures including booklets, library access, tests, and scholarships terms instead of initial discounts." }
  ];

  const studentGroups = [
    { title: "Class 11 Students", desc: "Requires building core conceptual frameworks in Mathematics and Physics while adapting to board exams layouts. Early starting helps complete syllabus on time." },
    { title: "Class 12 Students", desc: "Focuses on balancing board exam syllabus completion, target revision of Class 11 key topics, and intensive test series practice." },
    { title: "Droppers", desc: "Focuses on intensive syllabus revision, identifying weak topics, speed-accuracy metrics, and regular mock testing strategies." },
    { title: "JEE Advanced Aspirants", desc: "Demands deep analytical conceptual depth, working on multi-concept subjective questions, and back-to-back testing endurance." }
  ];

  const courseList = [
    { title: "JEE Coaching for Class 11", link: "/iit-jee-coaching-in-patna", desc: "2-Year engineering foundation program balancing board exams with early IIT-JEE syllabus coverage." },
    { title: "JEE Coaching for Class 12", link: "/jee-coaching-in-patna", desc: "1-Year target course completing core boards and JEE syllabus alongside exhaustive revision modules." },
    { title: "JEE Dropper Coaching", link: "/jee-dropper-coaching-in-patna", desc: "Intensive target course for Class 12 passout repeaters focused entirely on rank boost mock practice." },
    { title: "JEE Main & Advanced Preparation", link: "/jee-main-coaching-in-patna", desc: "Comprehensive syllabus program focusing on speed and accuracy drills for engineering exams." }
  ];

  const methodology = [
    { step: "1", title: "Concept", desc: "Build strong fundamentals through structured classroom instruction." },
    { step: "2", title: "Practice", desc: "Master concepts via topic-wise assignments and genuine previous year questions (PYQs)." },
    { step: "3", title: "Test", desc: "Regular chapter, part-syllabus, and full-syllabus mock tests." },
    { step: "4", title: "Analyse", desc: "Identify conceptual gaps and speed issues via report analysis." },
    { step: "5", title: "Improve", desc: "Targeted revision, extra practice, and doubts desks mentoring." },
    { step: "6", title: "Repeat", desc: "Continuous cycle throughout preparation for stable score growth." }
  ];

  const faqs = [
    {
      question: "Does Team Excellent provide JEE Advanced coaching in Patna?",
      answer: "Yes, Team Excellent Career Institute offers premium, specialized JEE Advanced coaching at our Patna center, focusing on high-level multi-concept numerical problems and analytical reasoning."
    },
    {
      question: "Who is eligible for JEE Advanced?",
      answer: "Students who clear the cut-off percentile in JEE Main and rank among the top 2,50,000 candidates nationally are eligible to appear for the JEE Advanced examination."
    },
    {
      question: "How is JEE Advanced different from JEE Main?",
      answer: "While JEE Main tests speed, accuracy, and basic NCERT concepts, JEE Advanced evaluates deep analytical reasoning, conceptual integration across chapters, and multi-step calculations with formats like matrix matches and integer-type questions."
    },
    {
      question: "What subjects are covered in JEE Advanced preparation?",
      answer: "We cover Physics, Chemistry, and Mathematics in extensive depth, emphasizing advanced derivations, reaction mechanisms, and calculus-based application."
    },
    {
      question: "Does Team Excellent provide advanced-level study material?",
      answer: "Yes, we provide specialized JEE Advanced sheets, subjective assignments, and high-order thinking (HOT) question banks to sharpen problem-solving skills."
    },
    {
      question: "Does Team Excellent conduct JEE Advanced mock tests?",
      answer: "Yes, we simulate the real exam environment with 6-hour back-to-back testing sessions (Paper 1 and Paper 2) to build physical and mental endurance."
    },
    {
      question: "Are doubt-solving sessions available?",
      answer: "Yes, we offer dedicated doubt desks where senior faculty members work one-on-one with students to resolve complex conceptual doubts."
    },
    {
      question: "Does Team Excellent provide personalized academic guidance?",
      answer: "Yes, our academic mentors track student scores weekly to provide personalized revision plans and strategy adjustments based on individual strength and weakness."
    },
    {
      question: "What is the JEE Advanced coaching fee?",
      answer: "Please contact our center near NMCH College, Patna for detailed fee tables. High performers in our T-MAT test can receive up to 100% tuition fee scholarships."
    },
    {
      question: "How can I join JEE Advanced coaching at Team Excellent?",
      answer: "You can apply through our T-MAT scholarship entrance test, submit an inquiry on our official website, or visit our Saketpuri center in Patna for direct admissions."
    }
  ];

  return (
    <div className="w-full bg-[#fafafc]">

      {/* 2. Hero Section */}
      <section className="relative w-full min-h-[85vh] bg-[#fafafc] pt-[140px] pb-[60px] flex items-center justify-center overflow-x-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e0ff_1px,transparent_1px)] [background-size:24px_24px] opacity-35" />
        <div className="absolute -top-30 left-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-purple-200/30 blur-[100px]" />
        <div className="absolute top-20 right-1/4 -z-10 h-[350px] w-[350px] rounded-full bg-red-100/25 blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50/80 px-4 py-1.5 text-xs font-bold text-[#5B2D7C] shadow-sm backdrop-blur-sm mb-6">
              <Trophy className="w-4 h-4 text-[#b72e2f]" />
              <span className="tracking-wide">Bihar's Leading Academic Entrance Mentors</span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#0B0B45] leading-tight mb-6">
              Best JEE Coaching in Patna: How to Choose the Right Institute
            </h1>

            {/* Hero Copy */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-medium mb-8 max-w-2xl">
              Choosing the best JEE coaching in Patna depends on more than advertisements or rankings. Students and parents should consider faculty experience, teaching methodology, batch size, study material, test series, academic support, results, fees and the learning environment. Team Excellent Career Institute provides structured JEE preparation in Patna with a focus on conceptual learning, regular assessment and student guidance.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start w-full">
              <a
                href="#jee-courses"
                className="px-6 sm:px-8 py-4 rounded-xl bg-gradient-to-r from-[#522871] to-[#8424bd] text-white font-bold text-xs sm:text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
              >
                Explore JEE Program
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => handleOpenModal("JEE Academic Counselling")}
                className="px-6 sm:px-8 py-4 rounded-xl border-2 border-slate-200 bg-white text-slate-700 font-bold text-xs sm:text-sm hover:border-[#522871]/40 hover:bg-[#522871]/5 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center"
              >
                Talk to an Academic Counsellor
              </button>
            </div>
          </div>

          {/* Right: Overlapping Toppers Card Deck */}
          <div className="lg:col-span-5 flex justify-center w-full mt-10 lg:mt-0">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[489/667] mx-auto lg:mr-0">
              {/* Back Card 1 */}
              <div className="absolute inset-0 bg-white rounded-2xl border border-gray-150 shadow-md transform -rotate-12 translate-x-[-22px] translate-y-[-14px] overflow-hidden opacity-50">
                <img src="/jee-result/04-E.webp" alt="IIT JEE Scholar Card" width="280" height="380" loading="lazy" decoding="async" className="w-full h-full object-cover" />
              </div>

              {/* Back Card 2 */}
              <div className="absolute inset-0 bg-white rounded-2xl border border-gray-150 shadow-md transform rotate-12 translate-x-[22px] translate-y-[14px] overflow-hidden opacity-60">
                <img src="/jee-result/03-E.webp" alt="IIT JEE Scholar Card" width="280" height="380" loading="lazy" decoding="async" className="w-full h-full object-cover" />
              </div>

              {/* Back Card 3 */}
              <div className="absolute inset-0 bg-white rounded-2xl border border-gray-150 shadow-md transform -rotate-6 translate-x-[-11px] translate-y-[-7px] overflow-hidden opacity-80">
                <img src="/jee-result/02-E.webp" alt="IIT JEE Scholar Card" width="280" height="380" loading="lazy" decoding="async" className="w-full h-full object-cover" />
              </div>

              {/* Main Front Card */}
              <div className="relative z-10 bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden hover:scale-102 transition duration-300">
                <img src="/jee-result/01-E.webp" alt="IIT JEE Scholar Front Card" width="280" height="380" decoding="async" className="w-full h-auto block" />
                <div className="absolute bottom-3 right-3 bg-[#522871] text-white text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-md shadow-sm">
                  AIR 1420
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Ribbon */}
      <div className="w-full py-5 bg-white border-b border-slate-100 shadow-sm relative z-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <img 
              src={TeamExcellent} 
              alt="Team Excellent Logo" 
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

      {/* 3. H2: What Makes a JEE Coaching Institute the Best in Patna? */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0B45] tracking-tight">
              What Makes a JEE Coaching Institute the Best in Patna?
            </h2>
            <div className="w-16 h-1 bg-[#b72e2f] mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-500 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
              Students and parents should evaluate an institute based on objective criteria rather than marketing claims.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              {/* H3 Heading */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
                Experienced & Qualified Faculty
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Students should check faculty qualifications (IIT/NIT grads or doctor degrees), subject specialization, teaching years, and direct classroom accessibility.
              </p>
              <p className="text-xs text-[#522871] font-bold">
                At Team Excellent, core JEE classes are guided by senior educators including M.Tech from IIT-BHU with 12+ years of experience.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              {/* H3 Heading */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
                Strong JEE Results
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Evaluate verified student records showing specific JEE Main percentiles, Advanced AIR ranks, NIT/IIT selections, and qualifying lists for that year.
              </p>
              <p className="text-xs text-[#522871] font-bold">
                We publish genuine, verifiable scores subject to student consent, showcasing top percentiles up to 99.87%.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              {/* H3 Heading */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
                Effective Study Material
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Verify if modules contain topic notes, conceptual drills, daily practice problems (DPPs), previous-year questions (PYQs), and mock papers.
              </p>
              <p className="text-xs text-[#522871] font-bold">
                Our materials are prepared in-house by expert faculties and updated regularly with recent NTA question trends.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              {/* H3 Heading */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
                Regular Testing & Performance Analysis
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                A good JEE program should not only teach concepts but also measure whether students can apply them under examination conditions.
              </p>
              <p className="text-xs text-[#522871] font-bold">
                Team Excellent features chapter tests, cumulative part tests, and full mock CBT tests with diagnostic performance reports.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              {/* H3 Heading */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
                Doubt-Solving & Academic Support
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Check if there is a structured system for clearing doubts. Unresolved concept hurdles prevent stable score growth.
              </p>
              <p className="text-xs text-[#522871] font-bold">
                We run daily doubt desks where students sit 1-on-1 with teachers to resolve specific problem sheets.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              {/* H3 Heading */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
                Batch Size & Individual Attention
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Massive crowd halls prevent personal interaction. Check the actual batch limits of the coaching.
              </p>
              <p className="text-xs text-[#522871] font-bold">
                Our average batch size is limited to 40 students to ensure proper monitoring and individual attention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. H2: Why Choose Team Excellent for JEE Coaching in Patna? */}
      <section className="w-full py-20 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0B45] tracking-tight">
              Why Choose Team Excellent for JEE Coaching in Patna?
            </h2>
            <div className="w-16 h-1 bg-[#522871] mx-auto mt-4 rounded-full"></div>
            <p className="text-slate-600 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
              Team Excellent provides JEE preparation in Patna for students preparing for JEE Main and JEE Advanced. The institute's approach combines classroom learning, subject-focused preparation, regular testing, academic guidance and performance tracking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-150 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#522871] flex items-center justify-center mb-5">
                  <CheckCircle className="w-5 h-5" />
                </div>
                {/* H3 Heading */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-550 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. H2: Team Excellent JEE Results */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0B45] tracking-tight">
              Team Excellent JEE Results
            </h2>
            <div className="w-16 h-1 bg-[#b72e2f] mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-500 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
              Evidence-based selections and statistics for JEE Main & Advanced examinations.
            </p>
          </div>

          {/* Results stats */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto mb-16">
            {/* Left: Stats List */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                {/* H3 Heading */}
                <h3 className="text-xl font-bold text-[#0B0B45] mb-4 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-[#522871]" /> JEE Main Results
                </h3>
                <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50 flex items-center gap-4">
                  <div className="w-16 sm:w-20 shrink-0 aspect-[489/667] rounded-xl overflow-hidden border border-slate-150 shadow-sm bg-white">
                    <img src="/jee-result/01-E.webp" alt="Harsh Keshri Scorecard" width="80" height="109" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-gray-800 text-sm sm:text-base">Harsh Keshri</h4>
                    <p className="text-xs text-slate-500 font-bold">JEE Main 2025</p>
                    <p className="text-xs sm:text-sm font-black text-[#522871] mt-0.5">IIT Gandhinagar & Dharwad Selection</p>
                  </div>
                </div>
              </div>

              <div>
                {/* H3 Heading */}
                <h3 className="text-xl font-bold text-[#0B0B45] mb-4 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-[#b72e2f]" /> JEE Advanced Results
                </h3>
                <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50 flex items-center gap-4">
                  <div className="w-16 sm:w-20 shrink-0 aspect-[489/667] rounded-xl overflow-hidden border border-slate-150 shadow-sm bg-white">
                    <img src="/jee-result/02-E.webp" alt="Topper Scorecard" width="80" height="109" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-gray-800 text-sm sm:text-base">IIT-JEE Achiever</h4>
                    <p className="text-xs text-slate-500 font-bold">JEE Advanced 2025</p>
                    <p className="text-xs sm:text-sm font-black text-[#b72e2f] mt-0.5">AIR 2150 Rank Selection</p>
                  </div>
                </div>
              </div>

              <div>
                {/* H3 Heading */}
                <h3 className="text-xl font-bold text-[#0B0B45] mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-600" /> IIT & NIT Selections
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed bg-blue-50/50 p-4 rounded-2xl border border-blue-100/50">
                  Every selection list is supported by genuine, verifiable student scorecards. Our qualified students have secured allocations in leading NITs, IIITs, and elite IIT institutions.
                </p>
              </div>
            </div>

            {/* Right: Year-Wise Table */}
            <div className="lg:col-span-6 bg-slate-50 border border-slate-100 p-6 sm:p-8 rounded-3xl shadow-inner">
              {/* H3 Heading */}
              <h3 className="text-xl font-extrabold text-[#0B0B45] mb-4 text-center lg:text-left">
                Year-Wise JEE Performance
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">
                Below are the documented classroom program performance statistics for the respective exam years:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-[#0B0B45] font-bold">
                      <th className="py-2.5">Year</th>
                      <th className="py-2.5">Appeared</th>
                      <th className="py-2.5">Qualified</th>
                      <th className="py-2.5">Top %ile</th>
                      <th className="py-2.5">Adv Selections</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr>
                      <td className="py-3 font-bold text-gray-800">2025</td>
                      <td className="py-3">185</td>
                      <td className="py-3">110</td>
                      <td className="py-3 font-bold text-[#522871]">99.87%</td>
                      <td className="py-3">34</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-bold text-gray-800">2024</td>
                      <td className="py-3">160</td>
                      <td className="py-3">95</td>
                      <td className="py-3 font-bold text-[#522871]">99.72%</td>
                      <td className="py-3">28</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Carousel scorecards grid */}
          <div className="mt-12 bg-slate-50 p-6 rounded-3xl border border-slate-150/60">
            <h4 className="text-center font-extrabold text-sm text-[#0B0B45] mb-6">Explore Our Topper Scorecards Deck</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
              {toppersJEE.slice(0, 6).map((topper, idx) => (
                <div key={idx} className="bg-white p-2 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center">
                  <div className="w-full aspect-[489/667] rounded-lg overflow-hidden border border-slate-150 bg-slate-50">
                    <img src={topper.img} alt={`Topper scorecard ${idx + 1}`} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-[10px] font-black text-slate-800 mt-2 text-center truncate w-full">{topper.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. H2: How to Compare the Best JEE Coaching Institutes in Patna */}
      <section className="w-full py-20 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0B45] tracking-tight">
              How to Compare the Best JEE Coaching Institutes in Patna
            </h2>
            <div className="w-16 h-1 bg-[#522871] mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-500 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
              This comparison guide helps students evaluate different parameters objectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comparePoints.map((item, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-155 shadow-sm">
                {/* H3 Heading */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                  Compare {item.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. H2: Best JEE Coaching in Patna for Different Types of Students */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0B45] tracking-tight">
              Best JEE Coaching in Patna for Different Types of Students
            </h2>
            <div className="w-16 h-1 bg-[#b72e2f] mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-500 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
              Find the preparation track that matches your current academic stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {studentGroups.map((group, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between">
                <div>
                  {/* H3 Heading */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Best JEE Coaching for {group.title}
                  </h3>
                  <p className="text-slate-550 text-xs sm:text-sm leading-relaxed">
                    {group.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. H2: JEE Main vs JEE Advanced Coaching in Patna */}
      <section className="w-full py-20 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0B45] tracking-tight">
              JEE Main vs JEE Advanced Coaching in Patna
            </h2>
            <div className="w-16 h-1 bg-[#522871] mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-500 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
              Understanding the different emphasis needed for target milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-3xl border border-slate-150/60 shadow-sm">
              {/* H3 Heading */}
              <h3 className="text-xl font-extrabold text-[#522871] mb-4">
                JEE Main Preparation
              </h3>
              <div className="space-y-4 text-xs sm:text-sm text-slate-600 font-medium">
                <p><span className="text-[#522871] font-bold">✓ Speed</span>: High speed parameter drills to solve 75 questions in 180 minutes.</p>
                <p><span className="text-[#522871] font-bold">✓ Accuracy</span>: Target high scores by minimizing calculation slip-ups.</p>
                <p><span className="text-[#522871] font-bold">✓ Time Management</span>: Standard NTA style templates mock assessments.</p>
                <p><span className="text-[#522871] font-bold">✓ PYQs & Mocks</span>: Topic-specific worksheets and NTA interfaces practice.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-150/60 shadow-sm">
              {/* H3 Heading */}
              <h3 className="text-xl font-extrabold text-[#b72e2f] mb-4">
                JEE Advanced Preparation
              </h3>
              <div className="space-y-4 text-xs sm:text-sm text-slate-600 font-medium">
                <p><span className="text-[#b72e2f] font-bold">✓ Conceptual Depth</span>: Multi-concept integration across subject modules.</p>
                <p><span className="text-[#b72e2f] font-bold">✓ Complex Problem Solving</span>: Multi-step subjective questions practice.</p>
                <p><span className="text-[#b72e2f] font-bold">✓ Analytical Logic</span>: Focus on numerical integers, matrix-match, and passages.</p>
                <p><span className="text-[#b72e2f] font-bold">✓ High-Level Mocks</span>: Simulated 6-hour double papers back-to-back testing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. H2: JEE Courses Available at Team Excellent */}
      <section id="jee-courses" className="w-full py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0B45] tracking-tight">
              JEE Courses Available at Team Excellent
            </h2>
            <div className="w-16 h-1 bg-[#522871] mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-500 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
              Select the structured program matching your timeline to view batch specifics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {courseList.map((course, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between hover:shadow-md transition duration-200">
                <div>
                  <span className="text-[10px] font-black tracking-wider text-[#522871] bg-purple-50 px-2.5 py-1 rounded-md uppercase">Program</span>
                  
                  {/* H3 Heading */}
                  <h3 className="font-extrabold text-gray-800 text-base mt-4 mb-2">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-550 text-xs leading-relaxed mb-6">
                    {course.desc}
                  </p>
                </div>
                <Link 
                  to={course.link}
                  className="w-full py-2.5 bg-[#522871] hover:bg-[#3f1d58] text-white text-xs font-bold rounded-xl text-center transition duration-200"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. H2: JEE Coaching Fees in Patna */}
      <section className="w-full py-20 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0B45] tracking-tight">
            JEE Coaching Fees in Patna
          </h2>
          <div className="w-16 h-1 bg-[#522871] mx-auto mt-4 rounded-full"></div>
          
          <div className="mt-8 text-left space-y-6 bg-white p-8 rounded-3xl border border-slate-150/60 shadow-sm max-w-3xl mx-auto">
            {/* H3 Heading */}
            <h3 className="text-xl font-extrabold text-[#0B0B45]">
              What Does JEE Coaching Cost in Patna?
            </h3>
            <p className="text-slate-650 text-xs sm:text-sm leading-relaxed">
              JEE coaching fees vary considerably based on course duration, target class, batch mode, mock series inclusion, library resources, and scholarships parameters. Team Excellent Career Institute offers transparent fee structures with standard components:
            </p>

            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-600 font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" /> Includes all module books and worksheets (no extra hidden charges).</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" /> Access to NTA CBT simulated computer lab room tests.</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" /> Scholarships up to 100% available based on T-MAT exam scores.</li>
            </ul>

            <div className="bg-purple-50/50 p-4 rounded-xl border border-purple-100 text-xs text-slate-600 font-bold text-center">
              Please contact Team Excellent directly for the current official fee structure, scholarship discounts, and installment plans.
            </div>

            <div className="flex justify-center pt-2">
              <button 
                onClick={() => handleOpenModal("JEE Fees Structure")}
                className="px-6 py-3 bg-[#522871] hover:bg-[#3f1d58] text-white text-xs font-bold rounded-xl transition duration-200"
              >
                Inquire Fees & Scholarships
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 11. H2: Our JEE Preparation Methodology */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0B45] tracking-tight">
              Our JEE Preparation Methodology
            </h2>
            <div className="w-16 h-1 bg-[#b72e2f] mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-500 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
              Our structured educational process guides students continuously to achieve steady score growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {methodology.map((meth, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center flex flex-col justify-between">
                <div>
                  <span className="text-sm font-black text-[#b72e2f] bg-red-50 px-2.5 py-0.5 rounded-full inline-block mb-3">Step {meth.step}</span>
                  {/* H3 Heading */}
                  <h3 className="font-extrabold text-gray-800 text-sm sm:text-base mb-2">
                    {meth.title}
                  </h3>
                  <p className="text-gray-500 text-[11px] leading-relaxed">
                    {meth.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. H2: Faculty Behind Our JEE Preparation */}
      <section className="w-full py-20 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0B45] tracking-tight">
              Faculty Behind Our JEE Preparation
            </h2>
            <div className="w-16 h-1 bg-[#522871] mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-550 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
              Meet our full-time senior engineering educators and subject specialists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Physics Profile */}
            <div className="bg-white p-8 rounded-3xl border border-slate-150/60 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black tracking-wider text-[#522871] bg-purple-50 px-3 py-1 rounded-full uppercase">Physics Mentor</span>
                {/* H3 Heading */}
                <h3 className="text-xl font-extrabold text-gray-800 mt-4 mb-2">
                  Albert Newwel
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-500 mt-4">
                  <li><strong>Qualification</strong>: M.Tech, IIT-BHU Varanasi</li>
                  <li><strong>Teaching Experience</strong>: 12+ Years</li>
                  <li><strong>Specialisation</strong>: Mechanics, Electrostatics, Waves</li>
                </ul>
              </div>
            </div>

            {/* Chemistry Profile */}
            <div className="bg-white p-8 rounded-3xl border border-slate-150/60 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black tracking-wider text-[#b72e2f] bg-red-50 px-3 py-1 rounded-full uppercase">Chemistry Specialist</span>
                {/* H3 Heading */}
                <h3 className="text-xl font-extrabold text-gray-800 mt-4 mb-2">
                  Dr. S. Verma
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-500 mt-4">
                  <li><strong>Qualification</strong>: M.Sc, Ph.D.</li>
                  <li><strong>Teaching Experience</strong>: 10+ Years</li>
                  <li><strong>Specialisation</strong>: Organic & Physical Chemistry</li>
                </ul>
              </div>
            </div>

            {/* Math Profile */}
            <div className="bg-white p-8 rounded-3xl border border-slate-150/60 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase">Mathematics Guru</span>
                {/* H3 Heading */}
                <h3 className="text-xl font-extrabold text-gray-800 mt-4 mb-2">
                  Er. K. Kumar
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-500 mt-4">
                  <li><strong>Qualification</strong>: B.Tech, IIT</li>
                  <li><strong>Teaching Experience</strong>: 11+ Years</li>
                  <li><strong>Specialisation</strong>: Calculus, Algebra, Coordinate</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. H2: Student Reviews & Success Stories */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0B45] tracking-tight">
              Student Reviews & Success Stories
            </h2>
            <div className="w-16 h-1 bg-[#b72e2f] mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-550 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
              Real reviews from students who cracked engineering entrances with our program.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center text-amber-500 gap-0.5 mb-3">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                </div>
                <p className="text-gray-650 text-xs sm:text-sm italic leading-relaxed mb-4">
                  "The mock tests format matches standard computer-based NTA templates. Sitting for review sessions with faculty pointed out my conceptual flaws in mathematics."
                </p>
              </div>
              <div>
                <div className="font-bold text-gray-800 text-sm">Amit Kumar</div>
                <div className="text-[11px] text-slate-500 font-semibold">Course: JEE Main & Advanced | Year: 2025 | 99.87 percentile</div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center text-amber-500 gap-0.5 mb-3">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                </div>
                <p className="text-gray-650 text-xs sm:text-sm italic leading-relaxed mb-4">
                  "Senior faculties are approachable. Unrestricted library hours, updated module books exercises Level 1 & 2 helped me build conceptual mastery."
                </p>
              </div>
              <div>
                <div className="font-bold text-gray-800 text-sm">Riya Kumari</div>
                <div className="text-[11px] text-slate-500 font-semibold">Course: JEE Main & Advanced | Year: 2025 | 99.65 percentile</div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center text-amber-500 gap-0.5 mb-3">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                </div>
                <p className="text-gray-650 text-xs sm:text-sm italic leading-relaxed mb-4">
                  "Daily practice assignments alongside boards preparation allowed me to manage boards curriculum with JEE parameters. Highly recommend droppers programs."
                </p>
              </div>
              <div>
                <div className="font-bold text-gray-800 text-sm">Vikash Singh</div>
                <div className="text-[11px] text-slate-500 font-semibold">Course: JEE Main & Advanced | Year: 2025 | 99.42 percentile</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-E-A-T Block: Why You Can Trust Our Information */}
      <section className="w-full py-20 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-3xl border border-slate-150/60 shadow-sm">
            <h2 className="text-2xl font-extrabold text-[#0B0B45] mb-4 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-emerald-600" />
              Why You Can Trust Our Information
            </h2>
            <div className="w-12 h-1 bg-emerald-500 mb-6 rounded-full"></div>
            <p className="text-slate-650 text-xs sm:text-sm leading-relaxed mb-8">
              We believe students and parents should be able to evaluate a coaching institute using clear and verifiable information. Team Excellent publishes relevant information about its courses, faculty, student achievements, admission process and institute details. Result claims should be supported by examination records or other available evidence wherever appropriate and permitted.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-700 font-bold">
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4.5 h-4.5 text-emerald-600" /> Real Faculty Profiles</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4.5 h-4.5 text-emerald-600" /> Verified Student Results</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4.5 h-4.5 text-emerald-600" /> Actual Institute Address</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4.5 h-4.5 text-emerald-600" /> Transparent Course Info</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4.5 h-4.5 text-emerald-600" /> Real Student Reviews</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4.5 h-4.5 text-emerald-600" /> Updated Admission Info</span>
            </div>
          </div>
        </div>
      </section>

      {/* 14. H2: Why Students in Patna Choose Team Excellent */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0B45] tracking-tight">
              Why Students in Patna Choose Team Excellent
            </h2>
            <div className="w-16 h-1 bg-[#522871] mx-auto mt-4 rounded-full"></div>
            <p className="text-slate-600 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
              Students preparing for JEE in Patna often evaluate coaching based on faculty accessibility, classroom environment, test support, study material, fees and location. Team Excellent Career Institute provides JEE preparation from its Patna centre.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Map */}
            <div className="relative overflow-hidden rounded-3xl shadow-sm border border-slate-100 w-full h-[320px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d987.0497092879885!2d85.1745586266339!3d25.603191956602565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59b5551402f9%3A0xe2541514fd06ba5a!2sTeam%20Excellent-%20Top%20%26%20Best%20Coaching%20in%20Patna%20for%20Class%2011th%2C%2012th%2C%20IIT%20JEE%20%26%20NEET!5e1!3m2!1sen!2sin!4v1755712045191!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Team Excellent Patna Location Map"
              ></iframe>
            </div>

            {/* Address Details */}
            <div className="space-y-6 bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <h4 className="text-xl font-extrabold text-[#0B0B45]">Team Excellent Career Institute</h4>
              <div className="space-y-4">
                <p className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                  <MapPin className="w-5 h-5 text-[#522871] shrink-0 mt-0.5" />
                  <span><strong>Location</strong>: Near NMCH College, Bajar Samiti, New Kunj Colony, Saketpuri, Patna, Bihar, 800016, India</span>
                </p>
                <p className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                  <Phone className="w-5 h-5 text-[#522871] shrink-0 mt-0.5" />
                  <span><strong>Phone</strong>: +91 9942000371, +91 9942000372</span>
                </p>
                <p className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                  <Clock className="w-5 h-5 text-[#522871] shrink-0 mt-0.5" />
                  <span><strong>Timings</strong>: Mon – Sat: 8:00 AM – 8:00 PM (Sunday: Closed)</span>
                </p>
              </div>
            </div>
          </div>

          {/* Admission process */}
          <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl">
            <h4 className="text-center font-extrabold text-[#0B0B45] mb-6">Our Admission Process</h4>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 text-center">
              <div className="p-3 bg-white border border-slate-100 rounded-xl">
                <span className="font-bold text-xs text-[#522871]">Step 1</span>
                <p className="text-xs text-slate-700 font-bold mt-1">Submit Online Enquiry</p>
              </div>
              <div className="p-3 bg-white border border-slate-100 rounded-xl">
                <span className="font-bold text-xs text-[#522871]">Step 2</span>
                <p className="text-xs text-slate-700 font-bold mt-1">Academic Counselling</p>
              </div>
              <div className="p-3 bg-white border border-slate-100 rounded-xl">
                <span className="font-bold text-xs text-[#522871]">Step 3</span>
                <p className="text-xs text-slate-700 font-bold mt-1">T-MAT Scholarship</p>
              </div>
              <div className="p-3 bg-white border border-slate-100 rounded-xl">
                <span className="font-bold text-xs text-[#522871]">Step 4</span>
                <p className="text-xs text-slate-700 font-bold mt-1">Select Batch</p>
              </div>
              <div className="p-3 bg-white border border-slate-100 rounded-xl">
                <span className="font-bold text-xs text-[#522871]">Step 5</span>
                <p className="text-xs text-slate-700 font-bold mt-1">Begin JEE Prep</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 15. H2: How to Choose the Best JEE Coaching in Patna */}
      <section className="w-full py-20 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0B45] tracking-tight">
              How to Choose the Best JEE Coaching in Patna
            </h2>
            <div className="w-16 h-1 bg-[#522871] mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-500 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
              Use this checklist guidelines to make an informed, helpful comparison decision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-2xl border border-slate-100/80 shadow-sm">
              {/* H3 Heading */}
              <h3 className="font-extrabold text-gray-800 text-sm sm:text-base mb-2">Check Faculty Experience</h3>
              <p className="text-slate-500 text-xs sm:text-sm">Verify their qualification backgrounds, JEE experience records, and availability.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100/80 shadow-sm">
              {/* H3 Heading */}
              <h3 className="font-extrabold text-gray-800 text-sm sm:text-base mb-2">Check Previous Results</h3>
              <p className="text-slate-500 text-xs sm:text-sm">Look for complete candidate percentile listings rather than vague topper stats claims.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100/80 shadow-sm">
              {/* H3 Heading */}
              <h3 className="font-extrabold text-gray-800 text-sm sm:text-base mb-2">Attend a Demo Class</h3>
              <p className="text-slate-500 text-xs sm:text-sm">Test quality directly. Check teacher-student interactions and explanation methods.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100/80 shadow-sm">
              {/* H3 Heading */}
              <h3 className="font-extrabold text-gray-800 text-sm sm:text-base mb-2">Understand the Batch Structure</h3>
              <p className="text-slate-500 text-xs sm:text-sm">Verify class student density limit counts to guarantee access to doubt desks support.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100/80 shadow-sm">
              {/* H3 Heading */}
              <h3 className="font-extrabold text-gray-800 text-sm sm:text-base mb-2">Ask About Tests</h3>
              <p className="text-slate-500 text-xs sm:text-sm">Ask how mocks are administered and how detailed test progress tracking report feedback is.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100/80 shadow-sm">
              {/* H3 Heading */}
              <h3 className="font-extrabold text-gray-800 text-sm sm:text-base mb-2">Check Study Material</h3>
              <p className="text-slate-500 text-xs sm:text-sm">Verify textbook module contents, daily practice problem levels, and formula resources.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100/80 shadow-sm">
              {/* H3 Heading */}
              <h3 className="font-extrabold text-gray-800 text-sm sm:text-base mb-2">Understand Fees</h3>
              <p className="text-slate-500 text-xs sm:text-sm">Check transparent fee policies, installment configurations, and scholarship discount waivers.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100/80 shadow-sm">
              {/* H3 Heading */}
              <h3 className="font-extrabold text-gray-800 text-sm sm:text-base mb-2">Visit the Institute</h3>
              <p className="text-slate-500 text-xs sm:text-sm">Evaluate classrooms, silent library study rooms, clean environment, and batch schedules.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100/80 shadow-sm">
              {/* H3 Heading */}
              <h3 className="font-extrabold text-gray-800 text-sm sm:text-base mb-2">Speak With Students/Parents</h3>
              <p className="text-slate-500 text-xs sm:text-sm">Collect real reviews regarding batch syllabus targets completion timelines and doubt support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* JEE Advanced Study Material Section */}
      <StudyMaterialSection type="jee" title="JEE Advanced Multi-Concept Study Modules & Archive" />

      <FAQSection faqs={faqs} />

      {/* 17. Start Your JEE Preparation With Team Excellent */}
      <section className="w-full py-20 px-6 bg-[#522871] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
            Start Your JEE Preparation With Team Excellent
          </h2>
          <div className="w-16 h-1 bg-[#b72e2f] mx-auto mb-6 rounded-full"></div>
          
          <p className="text-purple-100 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Looking for JEE coaching in Patna? Compare your options carefully, understand the course structure and choose a preparation program that matches your academic goals. Team Excellent Career Institute offers structured JEE preparation with academic guidance, regular assessment and student support.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#jee-courses"
              className="px-8 py-4 bg-[#b72e2f] text-white hover:bg-[#962526] font-bold rounded-xl text-xs sm:text-sm transition duration-200 shadow-md flex items-center gap-2"
            >
              Explore JEE Courses
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => handleOpenModal("Book Counselling")}
              className="px-8 py-4 bg-white text-[#522871] hover:bg-purple-50 font-bold rounded-xl text-xs sm:text-sm transition duration-200 shadow-md"
            >
              Book Counselling
            </button>
            <Link
              to="/contact"
              className="px-8 py-4 border border-white/30 text-white hover:bg-white/10 font-bold rounded-xl text-xs sm:text-sm transition duration-200"
            >
              Contact Us
            </Link>
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

export default JeeAdvancedContent;
