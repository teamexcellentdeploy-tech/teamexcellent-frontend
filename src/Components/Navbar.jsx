import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Mail, 
  Phone, 
  Home, 
  Award, 
  BookOpen, 
  GraduationCap, 
  Compass, 
  Info, 
  ArrowRight, 
  Sparkles,
  Stethoscope
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import TeamExcellent from "../assets/TeamExcellent.webp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const jeeItems = [
    { 
      to: "/best-jee-coaching-in-patna", 
      title: "Best JEE Coaching in Patna", 
      desc: "Why Team Excellent is Ranked #1 for Engineering",
      badge: "Top Choice"
    },
    { 
      to: "/iit-jee-coaching-in-patna", 
      title: "IIT-JEE Complete Program", 
      desc: "2-Year comprehensive coaching for Class 11",
      badge: "Popular"
    },
    { 
      to: "/jee-main-coaching-in-patna", 
      title: "JEE Main Coaching", 
      desc: "NTA pattern syllabus, PYQs & speed drills" 
    },
    { 
      to: "/jee-advanced-coaching-in-patna", 
      title: "JEE Advanced Coaching", 
      desc: "High-level problem solving & rank booster" 
    },
    { 
      to: "/jee-coaching-in-patna", 
      title: "JEE Class 12 Program", 
      desc: "Integrated 12th Board + JEE Main/Advanced" 
    },
    { 
      to: "/jee-dropper-coaching-in-patna", 
      title: "JEE Droppers Batch", 
      desc: "Targeted 1-year intensive rank booster" 
    },
  ];

  const neetItems = [
    { 
      to: "/best-neet-coaching-in-patna", 
      title: "Best NEET Coaching in Patna", 
      desc: "Why Team Excellent is Ranked #1 for Medical",
      badge: "Top Choice"
    },
    { 
      to: "/neet-coaching-in-patna", 
      title: "NEET Complete Hub (Class 11)", 
      desc: "2-Year NCERT medical foundation" 
    },
    { 
      to: "/neet-class-12-in-patna", 
      title: "NEET Class 12 (1-Yr)", 
      desc: "1-Year intensive board & NEET prep" 
    },
    { 
      to: "/neet-dropper-coaching-in-patna", 
      title: "NEET Droppers Batch", 
      desc: "Dedicated repeater batch with 100+ OMR tests" 
    },
  ];

  const foundationItems = [
    { 
      to: "/class-6-to-10", 
      title: "Class 6-10 Foundation Hub", 
      desc: "Olympiad, NTSE & Early Competitive Prep",
      badge: "Foundations"
    },
    { to: "/class-6-in-patna", title: "Class 6 Program", desc: "Building strong fundamentals" },
    { to: "/class-7-in-patna", title: "Class 7 Program", desc: "Math & Science conceptual mastery" },
    { to: "/class-8-in-patna", title: "Class 8 Program", desc: "Pre-foundation & competitive edge" },
    { to: "/class-9-in-patna", title: "Class 9 Program", desc: "Advanced science & math curriculum" },
    { to: "/class-10-in-patna", title: "Class 10 Board & NTSE", desc: "10th Board preparation & Olympiad" },
  ];

  const resultsItems = [
    { 
      to: "/result", 
      title: "All Results & Stars", 
      desc: "JEE & NEET top achievers of Patna",
      badge: "Toppers"
    },
    { 
      to: "/result/jee", 
      title: "JEE Results", 
      desc: "IIT & NIT selections from Patna" 
    },
    { 
      to: "/result/neet", 
      title: "NEET Results", 
      desc: "AIIMS & PMCH medical rankers" 
    },
    { 
      to: "/scholarship", 
      title: "T-MAT Scholarship", 
      desc: "Up to 100% scholarship entrance exam",
      badge: "Scholarship"
    },
  ];

  const resourcesItems = [
    { 
      to: "/study-material", 
      title: "Study Material", 
      desc: "High-yield NCERT modules & formula booklets" 
    },
    { 
      to: "/test-series", 
      title: "Test Series", 
      desc: "Real OMR & CBT mock test papers" 
    },
    { 
      to: "/rank-predictor", 
      title: "Rank Predictor", 
      desc: "Estimate your rank based on test marks" 
    },
    { 
      to: "/college-predictor", 
      title: "College Predictor", 
      desc: "Find eligible engineering & medical colleges" 
    },
    { 
      to: "/blogs", 
      title: "Blogs & Articles", 
      desc: "Preparation tips, strategy, and exam guides" 
    },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      {/* Top Contact & Announcement Bar */}
      <div className="w-full bg-gradient-to-r from-[#4A1D6D] via-[#5B2D7C] to-[#4A1D6D] text-white text-[11px] sm:text-xs py-1.5 px-4 sm:px-8 border-b border-purple-900/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded-full text-[10px] font-bold border border-amber-400/30">
              <Sparkles className="w-3 h-3 text-amber-300" /> T-MAT 2026-27
            </span>
            <span className="hidden sm:inline text-purple-100 font-medium">
              Admissions Open for JEE & NEET Batches | Up to 100% Scholarship
            </span>
            <Link to="/contact" className="underline text-amber-300 font-bold hover:text-white transition-colors ml-1">
              Apply Now →
            </Link>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 text-purple-100 font-medium">
            <a href="tel:+919942000371" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-amber-300" />
              <span className="font-semibold">+91 9942000371</span>
            </a>
            <span className="hidden md:inline text-purple-300/60">|</span>
            <a href="mailto:teamexcellentpatna@gmail.com" className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-purple-200" />
              <span>teamexcellentpatna@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="w-full bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src={TeamExcellent}
              alt="Team Excellent Career Institute Logo"
              className="w-44 sm:w-48 md:w-52 h-[38px] sm:h-[44px] md:h-[46px] object-contain"
              width="208"
              height="46"
              loading="eager"
              fetchpriority="high"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-2 xl:gap-4 text-[14px] xl:text-[15px] font-semibold text-[#0B0B45]">
            <NavItem to="/" label="Home" active={location.pathname === "/"} />
            
            <Dropdown
              to="/best-jee-coaching-in-patna"
              label="IIT JEE"
              items={jeeItems}
              active={location.pathname.includes("jee")}
            />

            <Dropdown
              to="/best-neet-coaching-in-patna"
              label="NEET"
              items={neetItems}
              active={location.pathname.includes("neet")}
            />

            <Dropdown
              to="/class-6-to-10"
              label="Foundation"
              items={foundationItems}
              active={location.pathname.includes("class-")}
            />

            <Dropdown
              to="/result"
              label="Results"
              items={resultsItems}
              active={location.pathname.startsWith("/result") || location.pathname === "/scholarship"}
            />

            <Dropdown
              to="/study-material"
              label="Resources"
              items={resourcesItems}
              active={["/study-material", "/test-series", "/rank-predictor", "/college-predictor", "/blogs"].some(p => location.pathname.startsWith(p))}
            />

            <NavItem to="/about" label="About" active={location.pathname === "/about"} />
            
            {/* Contact Us Button */}
            <li className="ml-1 xl:ml-2">
              <Link
                to="/contact"
                className="px-5 py-2.5 bg-gradient-to-r from-[#5B2D7C] to-[#8424bd] hover:from-[#4C2468] hover:to-[#6F1D9F] text-white text-xs xl:text-sm font-bold rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2 whitespace-nowrap hover:-translate-y-0.5"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 bg-purple-50 text-[#5B2D7C] hover:bg-purple-100 rounded-xl focus:outline-none transition-colors border border-purple-100"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar / Drawer (Slide in from Right) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="lg:hidden fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40"
            />

            {/* Sidebar Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="lg:hidden fixed top-0 right-0 h-full w-[310px] sm:w-[350px] bg-white shadow-2xl z-50 flex flex-col justify-between"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-slate-50/50">
                <Link to="/" onClick={() => setIsOpen(false)}>
                  <img
                    src={TeamExcellent}
                    alt="Team Excellent Logo"
                    className="h-9 w-auto object-contain"
                  />
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-slate-500 hover:text-purple-700 hover:bg-purple-50 rounded-xl transition-colors focus:outline-none"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Navigation List */}
              <div className="flex-1 overflow-y-auto px-3 py-5 space-y-2">
                <NavItemMobile 
                  to="/" 
                  label="Home" 
                  icon={<Home className="w-4.5 h-4.5 text-purple-600" />} 
                  onClick={() => setIsOpen(false)} 
                />
                
                <DropdownMobile
                  label="IIT JEE"
                  icon={<GraduationCap className="w-4.5 h-4.5 text-purple-600" />}
                  items={jeeItems}
                  onClose={() => setIsOpen(false)}
                />

                <DropdownMobile
                  label="NEET"
                  icon={<Stethoscope className="w-4.5 h-4.5 text-rose-600" />}
                  items={neetItems}
                  onClose={() => setIsOpen(false)}
                />

                <DropdownMobile
                  label="Foundation"
                  icon={<BookOpen className="w-4.5 h-4.5 text-blue-600" />}
                  items={foundationItems}
                  onClose={() => setIsOpen(false)}
                />

                <DropdownMobile
                  label="Results"
                  icon={<Award className="w-4.5 h-4.5 text-amber-500" />}
                  items={resultsItems}
                  onClose={() => setIsOpen(false)}
                />
                
                <DropdownMobile
                  label="Resources"
                  icon={<Compass className="w-4.5 h-4.5 text-emerald-600" />}
                  items={resourcesItems}
                  onClose={() => setIsOpen(false)}
                />

                <NavItemMobile 
                  to="/about" 
                  label="About Us" 
                  icon={<Info className="w-4.5 h-4.5 text-slate-600" />} 
                  onClick={() => setIsOpen(false)} 
                />
              </div>

              {/* Drawer Bottom Info & Contact */}
              <div className="p-4 border-t border-slate-100 bg-slate-50 space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="tel:+919942000371"
                    className="flex items-center justify-center gap-1.5 py-2.5 bg-white border border-slate-200 text-slate-800 text-xs font-bold rounded-xl shadow-sm hover:bg-slate-100 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#5B2D7C]" />
                    <span>Call Now</span>
                  </a>
                  <Link
                    to="/scholarship"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-1.5 py-2.5 bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold rounded-xl shadow-sm hover:bg-amber-100 transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>Scholarship</span>
                  </Link>
                </div>

                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-[#5B2D7C] to-[#8424bd] text-white text-xs font-bold rounded-xl shadow-md transition-all"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="space-y-0.5 text-[11px] text-slate-500 text-center font-medium">
                  <p className="font-semibold text-[#5B2D7C]">📞 +91 9942000371</p>
                  <p>📧 teamexcellentpatna@gmail.com</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

/* Desktop Nav Item */
function NavItem({ to, label, active }) {
  return (
    <li>
      <Link 
        to={to} 
        className={`px-3 py-2 rounded-xl transition-all duration-200 hover:text-[#5B2D7C] hover:bg-purple-50/70 ${
          active ? "text-[#5B2D7C] font-bold bg-purple-50/80" : ""
        }`}
      >
        {label}
      </Link>
    </li>
  );
}

/* Desktop Dropdown Component with Title, Subtitle, Badge and Arrow */
function Dropdown({ label, items, to, active }) {
  return (
    <li className="relative group py-2">
      <Link 
        to={to} 
        className={`flex items-center gap-1 px-3 py-1.5 rounded-xl transition-all duration-200 hover:text-[#5B2D7C] hover:bg-purple-50/70 cursor-pointer ${
          active ? "text-[#5B2D7C] font-bold bg-purple-50/80" : ""
        }`}
      >
        <span>{label}</span>
        <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#5B2D7C] group-hover:rotate-180 transition-transform duration-200" />
      </Link>
      
      {/* Dropdown Menu Container */}
      <div className="absolute left-0 top-[100%] pt-1 w-[290px] xl:w-[320px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 transform translate-y-1 group-hover:translate-y-0">
        <div className="bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-slate-100 p-2 overflow-hidden border-t-2 border-t-[#5B2D7C]">
          <div className="space-y-1">
            {items.map((item, idx) => (
              <Link
                key={idx}
                to={item.to}
                className="group/item flex items-start justify-between p-2.5 rounded-xl hover:bg-purple-50/80 transition-all duration-150"
              >
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs sm:text-[13px] font-bold text-slate-800 group-hover/item:text-[#5B2D7C] transition-colors">
                      {item.title}
                    </span>
                    {item.badge && (
                      <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-purple-100 text-[#5B2D7C]">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  {item.desc && (
                    <p className="text-[11px] text-slate-500 font-normal mt-0.5 line-clamp-1">
                      {item.desc}
                    </p>
                  )}
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover/item:text-[#5B2D7C] group-hover/item:translate-x-0.5 transition-all mt-1 shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
}

/* Mobile Nav Item Component */
function NavItemMobile({ to, label, icon, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-700 hover:bg-purple-50 hover:text-[#5B2D7C] font-semibold text-xs sm:text-sm transition-all duration-150"
    >
      <span className="p-1.5 bg-slate-100 rounded-lg text-slate-500 shrink-0">
        {icon}
      </span>
      <span>{label}</span>
    </Link>
  );
}

/* Mobile Dropdown Component */
function DropdownMobile({ label, icon, items, onClose }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-slate-700 hover:bg-purple-50/70 hover:text-[#5B2D7C] font-semibold text-xs sm:text-sm transition-all duration-150 focus:outline-none"
      >
        <div className="flex items-center gap-3">
          <span className="p-1.5 bg-slate-100 rounded-lg shrink-0">
            {icon}
          </span>
          <span>{label}</span>
        </div>
        <ChevronDown 
          className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${open ? "rotate-180 text-[#5B2D7C]" : ""}`} 
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden pl-10 pr-2 mt-1 space-y-1 border-l-2 border-purple-100 ml-5"
          >
            {items.map((item, idx) => (
              <Link
                key={idx}
                to={item.to}
                onClick={onClose}
                className="block py-2 px-3 rounded-lg text-xs text-slate-600 hover:bg-purple-50 hover:text-[#5B2D7C] font-medium transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-slate-800">{item.title}</span>
                    {item.desc && (
                      <p className="text-[10px] text-slate-400 font-normal">{item.desc}</p>
                    )}
                  </div>
                  {item.badge && (
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-purple-100 text-[#5B2D7C]">
                      {item.badge}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
