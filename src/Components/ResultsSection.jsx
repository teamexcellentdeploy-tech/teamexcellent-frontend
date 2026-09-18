import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Trophy, Award, Users, CheckCircle, GraduationCap, Star, ArrowRight } from "lucide-react";
import Marquee from "react-fast-marquee";

export default function ResultsSection() {
    const [activeTab, setActiveTab] = useState("jee"); // "jee" or "neet"

    const jeeImages = Array.from({ length: 12 }, (_, i) => {
        const num = String(i + 1).padStart(2, '0');
        return {
            src: `/jee-result/${num}-E.webp`,
            alt: `Team Excellent Patna IIT JEE Advanced Result Scorecard - Topper Achiever ${num}`
        };
    });

    const neetImages = Array.from({ length: 8 }, (_, i) => {
        const num = String(i + 1).padStart(2, '0');
        return {
            src: `/neet-result/${num}.webp`,
            alt: `Team Excellent Patna NEET UG Entrance Exam Result Scorecard - Topper Achiever ${num}`
        };
    });

    const activeImages = activeTab === "jee" ? jeeImages : neetImages;

    const highlights = [
        { count: "10,000+", label: "Students Guided", desc: "Expert academic career counseling & coaching", icon: <Users className="w-6 h-6" /> },
        { count: "2,500+", label: "Successful Selections", desc: "IITs, NITs, AIIMS & government colleges", icon: <Award className="w-6 h-6" /> },
        { count: "500+", label: "Top Performers", desc: "AIR rankers and high percentile achievers", icon: <Star className="w-6 h-6" /> },
        { count: "10+", label: "Years of Academic Excellence", desc: "Consistently delivering premium education in Bihar", icon: <GraduationCap className="w-6 h-6" /> }
    ];

    const whyBetterResults = [
        "Expert faculty guidance",
        "Structured study plans",
        "Regular mock tests",
        "Performance analysis",
        "Doubt-solving support",
        "Personalized mentoring"
    ];

    return (
        <section className="relative w-full bg-gradient-to-b from-gray-50 via-white to-gray-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-gray-100">
            
            {/* Ambient Background Glows */}
            <div className="absolute top-10 left-0 w-80 h-80 bg-purple-200/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-1/2 right-0 w-90 h-90 bg-red-200/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-200/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#522871]/10 text-[#522871] rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-[#522871]/20">
                        <Trophy className="w-3.5 h-3.5 text-[#b72e2f]" />
                        Delivering Academic Milestones
                    </div>
                    
                    <h2 className="text-4xl sm:text-5xl font-black text-[#0B0B45] tracking-tight">
                        Our Results Speak for Us
                    </h2>
                    
                    <div className="w-24 h-1 bg-[#522871] mx-auto mt-4 rounded-full"></div>
                    
                    <p className="text-gray-600 mt-6 text-lg max-w-4xl mx-auto leading-relaxed">
                        At Team Excellent Career Institute, Patna, our students' achievements reflect focused preparation, expert guidance, regular assessments, and consistent academic support.
                    </p>
                </div>

                {/* Highlights Grid */}
                <div className="mb-20">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-extrabold text-[#0B0B45]">Our Result Highlights</h3>
                        <div className="w-12 h-1 bg-[#b72e2f] mx-auto mt-2 rounded-full"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {highlights.map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition duration-300 flex flex-col gap-4">
                                <div className="p-3 bg-purple-50 rounded-2xl w-fit text-[#522871]">
                                    {item.icon}
                                </div>
                                <div>
                                    <div className="text-3xl font-black text-[#522871]">{item.count}</div>
                                    <div className="font-bold text-gray-800 text-sm mt-1">{item.label}</div>
                                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Outstanding Achievers Image Gallery (Full Width) */}
                <div className="mb-20">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                        <div>
                            <h3 className="text-2xl font-extrabold text-[#0B0B45]">Outstanding Achievers</h3>
                            <div className="w-12 h-0.5 bg-[#522871] mt-2 rounded-full"></div>
                        </div>
                        
                        {/* Tab Switcher */}
                        <div className="inline-flex p-1 bg-gray-100 rounded-xl border border-gray-200 shadow-inner">
                            <button
                                onClick={() => setActiveTab("jee")}
                                className={`px-4 py-2 rounded-lg font-bold text-xs transition-all duration-300 ${
                                    activeTab === "jee"
                                        ? "bg-white text-[#522871] shadow-sm"
                                        : "text-gray-500 hover:text-[#522871]"
                                }`}
                            >
                                IIT-JEE
                            </button>
                            <button
                                onClick={() => setActiveTab("neet")}
                                className={`px-4 py-2 rounded-lg font-bold text-xs transition-all duration-300 ${
                                    activeTab === "neet"
                                        ? "bg-white text-[#b72e2f] shadow-sm"
                                        : "text-gray-500 hover:text-[#b72e2f]"
                                }`}
                            >
                                NEET-UG
                            </button>
                        </div>
                    </div>

                    {/* Infinite horizontal scrolling cards */}
                    <div className="relative overflow-hidden rounded-3xl border border-gray-100 py-4 bg-white shadow-inner">
                        <Marquee speed={35} gradient={false} pauseOnHover={true} direction="left">
                            {activeImages.map((image, index) => (
                                <div key={index} className="w-[180px] sm:w-[220px] mx-4 my-2">
                                    <div className="relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group/card transform hover:-translate-y-1">
                                        <div className="relative overflow-hidden bg-gray-50 rounded-2xl">
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                width="220"
                                                height="300"
                                                loading="lazy"
                                                decoding="async"
                                                className="w-full h-auto block transform group-hover/card:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* CTA card at the end of the scroll list */}
                            <div className="w-[180px] sm:w-[220px] mx-4 my-2 flex">
                                <div className="w-full aspect-[489/667] bg-[#522871]/5 rounded-2xl border-2 border-dashed border-[#522871]/20 p-4 flex flex-col justify-between items-center text-center">
                                    <div className="my-auto flex flex-col items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-[#522871]/10 flex items-center justify-center text-[#522871]">
                                            <Trophy className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-extrabold text-[#0B0B45] text-base leading-tight">Looking for more?</h3>
                                            <p className="text-[11px] text-gray-500 mt-1 max-w-[170px] leading-snug">Check out our comprehensive selection lists and rank lists.</p>
                                        </div>
                                    </div>
                                    <Link
                                        to={activeTab === "jee" ? "/result/jee" : "/result/neet"}
                                        className={`w-full py-2.5 text-white font-bold rounded-xl text-xs transition-all duration-300 text-center ${
                                            activeTab === "jee"
                                                ? "bg-[#522871] hover:bg-[#3F1D5B]"
                                                : "bg-[#b72e2f] hover:bg-[#962526]"
                                        }`}
                                    >
                                        View All {activeTab === "jee" ? "JEE" : "NEET"} Results
                                    </Link>
                                </div>
                            </div>
                        </Marquee>
                    </div>
                </div>

                {/* Results across competitive examinations block */}
                <div className="bg-[#522871]/5 border border-[#522871]/10 rounded-[2.5rem] p-8 md:p-12 mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                        <div className="lg:col-span-1">
                            <h3 className="text-2xl sm:text-3xl font-black text-[#0B0B45] leading-tight">
                                Results Across Competitive & Entrance Exams
                            </h3>
                            <div className="w-16 h-1 bg-[#b72e2f] mt-4 rounded-full"></div>
                        </div>
                        <div className="lg:col-span-2">
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                                Team Excellent Career Institute helps students prepare for JEE, NEET, CUET, board examinations, and other competitive examinations through structured classroom learning, regular tests, doubt-solving, and personalized academic guidance.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Why Our Students Achieve Better Results & Success Story starts here */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

                    {/* Why Better Results */}
                    <div className="bg-white border border-gray-100 shadow-sm rounded-3xl p-8 flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-extrabold text-[#0B0B45] mb-2">Why Our Students Achieve Better Results</h3>
                            <div className="w-12 h-1 bg-[#b72e2f] mb-8 rounded-full"></div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {whyBetterResults.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 py-2">
                                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                                        <span className="text-gray-700 text-sm font-semibold">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Success story starts here */}
                    <div className="bg-[#522871] rounded-3xl p-8 text-white flex flex-col justify-between shadow-lg">
                        <div>
                            <h3 className="text-2xl font-extrabold mb-2">Your Success Story Starts Here</h3>
                            <div className="w-12 h-1 bg-[#b72e2f] mb-6 rounded-full"></div>
                            <p className="text-purple-100 text-base md:text-lg leading-relaxed mb-8">
                                Join Team Excellent Career Institute, Patna, and take the next step toward your academic and career goals.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="/admission"
                                className="px-6 py-3.5 bg-[#b72e2f] hover:bg-[#962526] text-white font-bold rounded-xl text-sm transition duration-300 shadow-md flex items-center gap-2"
                            >
                                Enroll Online
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                to="/contact"
                                className="px-6 py-3.5 bg-white hover:bg-purple-50 text-[#522871] font-bold rounded-xl text-sm transition duration-300 shadow-md"
                            >
                                Contact Admission Office
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
