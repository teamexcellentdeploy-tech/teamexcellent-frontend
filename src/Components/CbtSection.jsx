import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Monitor, Cpu, Clock, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

export default function CbtSection() {
  const [selectedAns, setSelectedAns] = useState(null);

  const stats = [
    { label: "Offline CBT Terminals", value: "50+" },
    { label: "NTA Pattern Simulated Tests", value: "100+" },
    { label: "Live Detailed Diagnostic Reports", value: "Instant" }
  ];

  return (
    <section className="w-full py-20 px-4 bg-slate-950 text-white relative overflow-hidden">
      {/* Ambient background grid & glow orbs */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] rounded-full bg-rose-600/10 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Information */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left gap-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-semibold text-purple-300 shadow-sm">
              <Monitor className="w-4 h-4 text-purple-400" />
              State-of-the-Art CBT Center
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Simulated Computer-Based <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                Testing (CBT) Environment
              </span>
            </h2>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
              Our Patna campus features a fully equipped Computer-Based Testing lab simulating the exact NTA exam environments. Prepare for JEE Main/Advanced and NEET with real-time timers, question palettes, and diagnostic analytics.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-md my-4">
              {stats.map((s, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-3.5 rounded-2xl text-center">
                  <h3 className="text-xl sm:text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {s.value}
                  </h3>
                  <p className="text-[9px] sm:text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link 
                to="/test-series" 
                className="inline-flex items-center gap-2 rounded-xl bg-purple-600 hover:bg-purple-500 px-6 py-3.5 text-sm font-bold text-white shadow-md transition duration-200 active:scale-95"
              >
                Explore Test Series
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/student-portal" 
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 px-6 py-3.5 text-sm font-bold text-slate-300 transition duration-200"
              >
                Access Portal
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Mock Screen Graphic */}
          <div className="lg:col-span-6 w-full flex justify-center items-center px-4">
            <div className="bg-[#0f0e26] border border-white/10 rounded-3xl p-5 sm:p-6 w-full max-w-lg shadow-2xl relative">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4 text-xs font-bold text-slate-400">
                <span className="flex items-center gap-2 text-purple-400">
                  <Cpu className="w-4 h-4" />
                  NTA JEE/NEET Simulator
                </span>
                <span className="flex items-center gap-1.5 bg-rose-500/10 text-rose-400 px-2.5 py-1 rounded-full border border-rose-500/20">
                  <Clock className="w-3.5 h-3.5" />
                  02:45:19
                </span>
              </div>

              {/* Main Simulated Area */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
                
                {/* Question Block */}
                <div className="sm:col-span-8 space-y-4">
                  <div className="bg-white/5 border border-white/5 p-4 rounded-xl">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-purple-400">Question 04 (Single Choice)</span>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-200 font-medium mt-1">
                      If the current through a resistor is increased by 100%, the percentage increase in the power dissipated across it will be (assuming resistance remains constant):
                    </p>
                  </div>

                  <div className="space-y-2 text-xs">
                    {[
                      { key: "A", text: "100%" },
                      { key: "B", text: "200%" },
                      { key: "C", text: "300%" },
                      { key: "D", text: "400%" }
                    ].map((opt) => (
                      <button 
                        key={opt.key}
                        onClick={() => setSelectedAns(opt.key)}
                        className={`w-full text-left p-3 rounded-xl border flex items-center justify-between transition ${
                          selectedAns === opt.key 
                            ? "bg-purple-600/20 border-purple-500 text-purple-200 font-bold" 
                            : "bg-white/5 border-white/5 hover:bg-white/10 text-slate-400"
                        }`}
                      >
                        <span>{opt.key}. {opt.text}</span>
                        {selectedAns === opt.key && <CheckCircle2 className="w-4.5 h-4.5 text-purple-400" />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Side Question Palette */}
                <div className="sm:col-span-4 bg-white/5 border border-white/5 p-4 rounded-2xl flex flex-col justify-between">
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-3 text-center">
                      Question Palette
                    </h4>
                    <div className="grid grid-cols-4 gap-1.5 justify-center">
                      {[
                        { num: 1, status: "answered" },
                        { num: 2, status: "answered" },
                        { num: 3, status: "unanswered" },
                        { num: 4, status: "active" },
                        { num: 5, status: "review" },
                        { num: 6, status: "unvisited" },
                        { num: 7, status: "unvisited" },
                        { num: 8, status: "unvisited" },
                        { num: 9, status: "unvisited" },
                        { num: 10, status: "unvisited" },
                        { num: 11, status: "unvisited" },
                        { num: 12, status: "unvisited" }
                      ].map((item) => (
                        <div 
                          key={item.num}
                          className={`w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-bold border transition duration-200 ${
                            item.status === "answered" ? "bg-emerald-600 border-emerald-500 text-white" :
                            item.status === "unanswered" ? "bg-rose-600 border-rose-500 text-white" :
                            item.status === "review" ? "bg-purple-600 border-purple-500 text-white" :
                            item.status === "active" ? "bg-white border-white text-slate-900 scale-105 shadow-md" :
                            "bg-white/5 border-white/10 text-slate-500"
                          }`}
                        >
                          {item.num}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 space-y-1.5 text-[8px] font-black uppercase tracking-wider text-slate-500">
                    <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 bg-emerald-600 rounded" /> Answered</div>
                    <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 bg-rose-600 rounded" /> Unanswered</div>
                    <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 bg-purple-600 rounded" /> Marked Review</div>
                  </div>
                </div>

              </div>

              {/* Bottom control buttons */}
              <div className="flex justify-between items-center border-t border-white/10 pt-4 mt-5 text-[10px] font-bold">
                <button className="px-3.5 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-slate-400">Clear Response</button>
                <div className="flex gap-2">
                  <button className="px-3.5 py-2 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-lg">Mark for Review</button>
                  <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-white">Save & Next</button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
