import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  Trophy, Clock, LineChart, Cpu, ArrowRight, ShieldCheck, 
  CheckCircle2, Monitor, Award, Calendar, BookOpen, Sparkles
} from "lucide-react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import TrustedSection from "../Components/TrustedSection";
import Testimonials from "../Components/Testimonials";
import ExploreLinks from "../Components/ExploreLinks";

export default function TestSeries() {
  const [selectedAns, setSelectedAns] = useState(null);

  const features = [
    {
      icon: <Cpu className="w-6 h-6 text-purple-600" />,
      title: "NTA Layout Simulation",
      desc: "Get hands-on experience with the exact color coding, timer, navigation layout, and question schemas utilized by NTA in national level exams."
    },
    {
      icon: <LineChart className="w-6 h-6 text-rose-600" />,
      title: "Granular Analytics",
      desc: "Receive immediate detailed performance analysis showing time spent per question, error-prone topics, negative mark breakdown, and rank standings."
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "Timed Speed Building",
      desc: "Systematically scheduled mock test patterns help students regulate time limits and master structural shifts between section questions."
    }
  ];

  const testPrograms = [
    {
      title: "JEE Main & Advanced Challenger Series",
      price: "Included in Classroom Course",
      features: [
        "24 Part-Syllabus Chapter Tests",
        "12 Full-Syllabus NTA Mock Tests",
        "Advanced Multi-concept Question Sheets",
        "Detailed Video Solutions by IITian Faculty"
      ],
      link: "/contact",
      btnText: "Enquire for Series",
      color: "border-t-purple-600",
      tag: "JEE Aspirants"
    },
    {
      title: "NEET UG Conqueror Series",
      price: "Included in Classroom Course",
      features: [
        "30 Unit-wise NCERT Based Tests",
        "15 OMR & CBT Full Mock Tests",
        "Zoology & Botany specialized coverage",
        "Error analysis sessions by Doctor Mentors"
      ],
      link: "/contact",
      btnText: "Enquire for Series",
      color: "border-t-rose-600",
      tag: "NEET Aspirants"
    },
    {
      title: "Junior Foundation Booster Series",
      price: "Included in Classroom Course",
      features: [
        "Mental Ability Test (MAT) special focus",
        "Class 6 to 10 School Board papers",
        "Olympiad & NTSE introductory level mock tests",
        "Interactive quiz sessions and parent reports"
      ],
      link: "/contact",
      btnText: "Enquire for Series",
      color: "border-t-blue-600",
      tag: "Class 6-10"
    }
  ];

  return (
    <>
      <Helmet>
        <title>All India CBT Test Series | Team Excellent Career Institute Patna</title>
        <meta 
          name="description" 
          content="Accelerate your preparation with NTA computer-based mock test series for JEE Main, JEE Advanced, and NEET UG at Team Excellent Patna." 
        />
        <meta 
          name="keywords" 
          content="jee test series patna, neet mock test patna, cbt test series bihar, online mock tests for engineering, medical test series saketpuri" 
        />
        <link rel="canonical" href="https://teamexcellentcareerinstitute.in/test-series" />
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-[#fafafc] pb-20">
        
        {/* ── HIGHLY PROFESSIONAL TWO-COLUMN HERO SECTION ── */}
        <section className="relative w-full pt-[130px] lg:pt-[160px] pb-20 bg-[#fafafc] overflow-hidden text-slate-800 border-b border-slate-100">
          {/* Ambient overlays */}
          <div className="absolute inset-0 bg-[radial-gradient(#e2e0ff_1px,transparent_1px)] [background-size:24px_24px] opacity-35" />
          <div className="absolute -top-30 left-1/4 -z-10 h-[350px] w-[350px] rounded-full bg-purple-200/30 blur-[80px]" />
          <div className="absolute top-20 right-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-rose-100/25 blur-[90px]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Headers & Info */}
              <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left gap-5 md:gap-6">
                
                <span className="inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50/80 px-4 py-1.5 text-xs font-semibold text-[#5B2D7C] shadow-sm backdrop-blur-sm">
                  <Trophy className="w-4 h-4 text-[#5B2D7C]" />
                  All India Online Mock Test Series
                </span>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#1e1b4b] leading-tight tracking-tight">
                  CBT <span className="bg-gradient-to-r from-[#5B2D7C] to-[#b72e2f] bg-clip-text text-transparent">Test Series</span>
                </h1>

                <div className="w-20 h-1.5 bg-gradient-to-r from-[#5B2D7C] to-[#b72e2f] rounded-full lg:mx-0 mx-auto" />

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                  Practice on NTA-pattern mock tests designed for JEE and NEET candidates. Improve speed, analyze errors instantly, and qualify with real exam simulations.
                </p>

                {/* Micro checklist elements */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2 text-xs text-slate-700 font-semibold w-full">
                  <div className="flex items-center gap-2 lg:justify-start justify-center">
                    <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                    <span>Exact NTA Console Mockup</span>
                  </div>
                  <div className="flex items-center gap-2 lg:justify-start justify-center">
                    <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                    <span>Granular Time & Score Analytics</span>
                  </div>
                  <div className="flex items-center gap-2 lg:justify-start justify-center">
                    <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                    <span>Negative Mark Strategies</span>
                  </div>
                  <div className="flex items-center gap-2 lg:justify-start justify-center">
                    <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                    <span>Percentile Rankings</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-4 justify-center lg:justify-start">
                  <Link 
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#5B2D7C] hover:bg-[#472164] px-6 py-3.5 text-sm font-bold text-white shadow-md transition duration-200 active:scale-95 animate-bounce-slow"
                  >
                    Register for Series
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link 
                    to="/student-portal"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 hover:border-[#5B2D7C]/60 hover:bg-[#5B2D7C]/5 transition duration-200"
                  >
                    Go to Student Portal
                  </Link>
                </div>
              </div>

              {/* Right Column: Premium Light Dashboard Mockup */}
              <div className="lg:col-span-6 w-full flex justify-center items-center px-4">
                <div className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-6 w-full max-w-md shadow-[0_20px_50px_rgba(0,0,0,0.06)] relative overflow-hidden">
                  
                  {/* Browser Header Dot Indicators */}
                  <div className="flex items-center gap-1.5 border-b border-slate-100 pb-3.5 mb-4 text-xs font-bold text-slate-400">
                    <div className="flex gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-450/20 border border-rose-400 bg-rose-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-450/20 border border-amber-400 bg-amber-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-450/20 border border-emerald-400 bg-emerald-400" />
                    </div>
                    <span className="ml-2 text-[9px] text-slate-400 font-bold bg-slate-100 px-3 py-0.5 rounded-md">
                      cbt.teamexcellent.in
                    </span>
                  </div>

                  {/* Mock Performance Chart Card */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-xs font-black text-slate-800">CBT Score Analytics</h4>
                        <p className="text-[10px] text-slate-400 font-bold">IIT-JEE & NEET Mock Drills</p>
                      </div>
                      <span className="text-[10px] font-black text-[#5B2D7C] bg-purple-50 px-2.5 py-1 rounded-md border border-purple-100">
                        +18% Accuracy Gain
                      </span>
                    </div>

                    {/* Visual Bars representing test score increments */}
                    <div className="flex items-end justify-between gap-3 h-28 pt-4 border-b border-slate-100">
                      {[
                        { label: "Test 1", val: "h-[30%]", score: "140", color: "bg-slate-200" },
                        { label: "Test 2", val: "h-[50%]", score: "185", color: "bg-slate-300" },
                        { label: "Test 3", val: "h-[75%]", score: "220", color: "bg-purple-400" },
                        { label: "Test 4", val: "h-[90%]", score: "265", color: "bg-gradient-to-t from-[#5B2D7C] to-rose-500" }
                      ].map((bar, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group cursor-pointer">
                          <div className="text-[8px] font-black text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">
                            {bar.score}
                          </div>
                          <div className={`w-full rounded-t-lg transition-all duration-500 ${bar.val} ${bar.color} group-hover:brightness-95`} />
                          <span className="text-[8px] text-slate-400 font-bold mt-1">{bar.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Test List Status */}
                    <div className="space-y-2 text-xs">
                      {[
                        { name: "Full Mock Test 04", date: "Ended yesterday", score: "265/300", badge: "JEE Main", statusColor: "text-emerald-600 bg-emerald-50 border-emerald-100" },
                        { name: "NEET All India Test 07", date: "Live Now (Sunday)", score: "Pending", badge: "NEET UG", statusColor: "text-rose-600 bg-rose-50 border-rose-100" }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl border border-slate-100 hover:bg-slate-50 transition">
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="font-extrabold text-slate-700 text-[11px]">{item.name}</span>
                              <span className="text-[9px] px-1.5 py-0.5 rounded font-black bg-slate-100 text-slate-500">{item.badge}</span>
                            </div>
                            <span className="text-[10px] text-slate-400 font-bold">{item.date}</span>
                          </div>
                          <span className={`text-[9px] font-black px-2 py-0.5 rounded-md border ${item.statusColor}`}>
                            {item.score}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── TEST SYSTEM FEATURES ── */}
        <section className="w-full py-20 px-4 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50/80 px-4 py-1.5 text-xs font-semibold text-[#5B2D7C] shadow-sm mb-4">
                <Sparkles className="w-4 h-4 text-[#5B2D7C]" />
                Key Engine Metrics
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b]">
                CBT Testing Engine Core Features
              </h2>
              <div className="w-16 h-1 bg-[#b72e2f] mx-auto mt-3 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-150/70 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300">
                  <div className="p-3.5 bg-white rounded-2xl inline-block shadow-sm border border-slate-100 mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-800 mb-3">{feature.title}</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-semibold">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── AVAILABLE TEST SERIES CARDS ── */}
        <section className="w-full py-20 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-black text-[#1e1b4b]">
                Choose Your Test Program
              </h2>
              <div className="w-16 h-1 bg-[#b72e2f] mx-auto mt-3 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testPrograms.map((card, idx) => (
                <div key={idx} className={`bg-white border-t-4 ${card.color} rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between border-x border-b border-slate-150`}>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">{card.tag}</span>
                    <h3 className="text-lg font-extrabold text-slate-800 mb-2 leading-tight">{card.title}</h3>
                    <p className="text-xs text-purple-700 font-bold mb-6 bg-purple-50 inline-block px-3 py-1 rounded-full">{card.price}</p>
                    <ul className="space-y-3.5 mb-8">
                      {card.features.map((feat, fidx) => (
                        <li key={fidx} className="flex items-start gap-2.5 text-slate-600 text-xs font-semibold">
                          <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    to={card.link}
                    className="w-full py-3.5 bg-slate-50 hover:bg-[#5B2D7C] hover:text-white border border-slate-200 hover:border-[#5B2D7C] text-center font-bold text-xs text-slate-600 rounded-xl transition-all flex items-center justify-center gap-2 active:scale-95"
                  >
                    {card.btnText} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PORTAL CTA BANNER ── */}
        <section className="w-full py-16 px-4 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#5B2D7C] to-[#8424bd] text-white rounded-3xl p-8 md:p-12 text-center shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />
            <h3 className="text-2xl sm:text-3xl font-black mb-4 relative z-10">Access Online Test Portal</h3>
            <p className="text-purple-100 text-xs sm:text-sm max-w-2xl mx-auto mb-8 relative z-10 leading-relaxed">
              Registered Team Excellent classroom students can access their computer-based tests, historical score reports, and rankings directly via the student portal.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
              <Link 
                to="/student-portal"
                className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#5B2D7C] hover:bg-purple-50 font-bold rounded-xl text-xs sm:text-sm transition shadow-md flex items-center justify-center gap-2"
              >
                Go to Student Portal
              </Link>
              <Link 
                to="/contact"
                className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/20 hover:bg-white/10 font-bold rounded-xl text-xs sm:text-sm transition flex items-center justify-center"
              >
                Request Test Schedule
              </Link>
            </div>
          </div>
        </section>

        {/* Trusted & Reviews */}
        <TrustedSection />
        <Testimonials />
        <ExploreLinks />
      </main>

      <Footer />
    </>
  );
}
