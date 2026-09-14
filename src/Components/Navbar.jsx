import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp, Mail, Phone, Home, Award, BookOpen, GraduationCap, Compass, Info, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import TeamExcellent from "../assets/TeamExcellent.webp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      {/* Top Contact Bar */}
      <div
        className="w-full flex flex-col sm:flex-row sm:justify-center sm:items-center 
        bg-gradient-to-r from-[#5B2D7C] to-[#3F1D5B] text-white 
        text-center sm:text-left py-1 px-2 sm:space-x-6 space-y-0.5 sm:space-y-0 
        text-[10px] sm:text-xs lg:text-sm"
      >
        <p className="flex items-center gap-1.5 justify-center sm:justify-start">
          <Mail className="w-3.5 h-3.5 text-purple-200" />
          teamexcellentpatna@gmail.com
        </p>

        <p className="flex items-center gap-1.5 justify-center sm:justify-start">
          <Phone className="w-3.5 h-3.5 text-purple-200" />
          +91 9942000371
        </p>
      </div>

      {/* Logo + Navigation */}
      <nav className="w-full flex items-center justify-between lg:px-6 px-3 py-2 bg-white shadow">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={TeamExcellent}
            alt="Team Excellent Career Institute Logo"
            className="w-44 sm:w-48 md:w-52 lg:w-56 h-[39px] sm:h-[43px] md:h-[46px] lg:h-[50px] object-contain"
            width="224"
            height="50"
            loading="eager"
            fetchpriority="high"
            decoding="async"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-4 xl:gap-8 text-[15px] text-[#0B0B45] font-semibold">
          <NavItem to="/" label="Home" />
          <Dropdown
            to="/iit-jee-coaching-in-patna"
            label="IIT JEE"
            items={[
              { to: "/iit-jee-coaching-in-patna", label: "IIT-JEE Complete Program" },
              { to: "/jee-main-coaching-in-patna", label: "JEE Main Coaching" },
              { to: "/jee-advanced-coaching-in-patna", label: "JEE Advanced Coaching" },
              { to: "/jee-coaching-in-patna", label: "JEE Class 12" },
              { to: "/jee-dropper-coaching-in-patna", label: "JEE Droppers" },
            ]}
          />
          <Dropdown
            to="/neet-coaching-in-patna"
            label="NEET"
            items={[
              { to: "/neet-coaching-in-patna", label: "NEET Complete Program" },
              { to: "/neet-class-12-in-patna", label: "NEET Class 12" },
              { to: "/neet-dropper-coaching-in-patna", label: "NEET Droppers" },
            ]}
          />
          <Dropdown
            to="/class-6-to-10"
            label="Foundation"
            items={[
              { to: "/class-6-in-patna", label: "Class 6" },
              { to: "/class-7-in-patna", label: "Class 7" },
              { to: "/class-8-in-patna", label: "Class 8" },
              { to: "/class-9-in-patna", label: "Class 9" },
              { to: "/class-10-in-patna", label: "Class 10" },
            ]}
          />
          <Dropdown
            to="/study-material"
            label="Resources"
            items={[
              { to: "/study-material", label: "Study Material" },
              { to: "/test-series", label: "Test Series" },
              { to: "/blogs", label: "Blog" },
            ]}
          />
          <NavItem to="/about" label="About" />
          
          {/* Animated Contact Us Button */}
          <motion.li
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="ml-2"
          >
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-gradient-to-r from-[#5B2D7C] to-[#8424bd] text-white rounded-full 
                         shadow-md hover:shadow-lg transition-all flex items-center gap-2 whitespace-nowrap"
            >
              Contact Us
            </Link>
          </motion.li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex items-center justify-center w-10 h-10 bg-purple-50 text-[#5B2D7C] hover:bg-purple-100 rounded-xl focus:outline-none transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
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
              className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />

            {/* Sidebar Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="lg:hidden fixed top-0 right-0 h-full w-[300px] sm:w-[350px] bg-white shadow-2xl z-50 flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <Link to="/" onClick={() => setIsOpen(false)}>
                  <img
                    src={TeamExcellent}
                    alt="Team Excellent Logo"
                    className="h-10 w-auto object-contain"
                  />
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-500 hover:text-purple-700 hover:bg-gray-100 rounded-full transition-colors focus:outline-none"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Navigation List */}
              <div className="flex-1 overflow-y-auto px-3 py-6 space-y-3">
                <NavItemMobile to="/" label="Home" icon={<Home className="w-4.5 h-4.5" />} onClick={() => setIsOpen(false)} />
                
                <DropdownMobile
                  label="IIT JEE"
                  icon={<GraduationCap className="w-4.5 h-4.5 text-purple-600" />}
                  items={[
                    { to: "/iit-jee-coaching-in-patna", label: "All JEE Courses ➔" },
                    { to: "/jee-main-coaching-in-patna", label: "JEE Main Coaching" },
                    { to: "/jee-advanced-coaching-in-patna", label: "JEE Advanced Coaching" },
                    { to: "/jee-coaching-in-patna", label: "JEE Class 12" },
                    { to: "/jee-dropper-coaching-in-patna", label: "JEE Droppers" },
                  ]}
                  onClose={() => setIsOpen(false)}
                />

                <DropdownMobile
                  label="NEET"
                  icon={<GraduationCap className="w-4.5 h-4.5 text-rose-600" />}
                  items={[
                    { to: "/neet-coaching-in-patna", label: "All NEET Courses ➔" },
                    { to: "/neet-class-12-in-patna", label: "NEET Class 12" },
                    { to: "/neet-dropper-coaching-in-patna", label: "NEET Droppers" },
                  ]}
                  onClose={() => setIsOpen(false)}
                />

                <DropdownMobile
                  label="Foundation"
                  icon={<BookOpen className="w-4.5 h-4.5 text-blue-600" />}
                  items={[
                    { to: "/class-6-to-10", label: "All Foundation Courses ➔" },
                    { to: "/class-6-in-patna", label: "Class 6" },
                    { to: "/class-7-in-patna", label: "Class 7" },
                    { to: "/class-8-in-patna", label: "Class 8" },
                    { to: "/class-9-in-patna", label: "Class 9" },
                    { to: "/class-10-in-patna", label: "Class 10" },
                  ]}
                  onClose={() => setIsOpen(false)}
                />

                <DropdownMobile
                  label="Results"
                  icon={<Award className="w-4.5 h-4.5 text-purple-600" />}
                  items={[
                    { to: "/result", label: "All Results ➔" },
                    { to: "/result/jee", label: "JEE Result" },
                    { to: "/result/neet", label: "NEET Result" },
                    { to: "/scholarship", label: "Scholarship" },
                  ]}
                  onClose={() => setIsOpen(false)}
                />
                
                <DropdownMobile
                  label="Resources"
                  icon={<Compass className="w-4.5 h-4.5 text-emerald-600" />}
                  items={[
                    { to: "/study-material", label: "Study Material" },
                    { to: "/test-series", label: "Test Series" },
                    { to: "/blogs", label: "Blog" },
                  ]}
                  onClose={() => setIsOpen(false)}
                />

                <NavItemMobile to="/about" label="About" icon={<Info className="w-4.5 h-4.5" />} onClick={() => setIsOpen(false)} />
              </div>

              {/* Drawer Bottom Info & Contact */}
              <div className="p-4 border-t border-gray-100 bg-gray-50/50 space-y-4">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-[#5B2D7C] to-[#8424bd] hover:from-[#4A2466] hover:to-[#6E1C9F] text-white text-center font-bold rounded-xl shadow-md transition-all duration-200"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="space-y-1 text-[11px] text-gray-500 text-center">
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
function NavItem({ to, label }) {
  return (
    <li>
      <Link to={to} className="hover:text-purple-700 transition-colors">
        {label}
      </Link>
    </li>
  );
}

/* Desktop Dropdown Component */
function Dropdown({ label, items, to }) {
  return (
    <li className="relative group">
      <Link to={to} className="hover:text-purple-700 cursor-pointer inline-block py-1 transition-colors">
        {label} <span className="text-[10px] text-gray-400 group-hover:text-purple-700 transition-colors">▼</span>
      </Link>
      <ul
        className="absolute left-0 top-full min-w-[220px] bg-white border border-gray-100 shadow-xl rounded-2xl 
        opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 text-sm py-2 px-1
        transform translate-y-2 group-hover:translate-y-0 border-t-2 border-t-[#5B2D7C]"
      >
        {items.map((item, idx) => (
          <li key={idx}>
            <Link to={item.to} className="block px-4 py-2.5 rounded-xl hover:bg-purple-50 text-gray-700 hover:text-purple-700 font-medium transition-colors">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

/* Mobile Nav Item Component */
function NavItemMobile({ to, label, icon, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-700 hover:bg-purple-50 hover:text-purple-700 font-semibold text-sm transition-all duration-200 group"
    >
      <span className="p-1.5 bg-gray-50 rounded-lg text-gray-500 group-hover:text-purple-600 transition-colors">
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
        className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-gray-700 hover:bg-gray-50 hover:text-purple-700 font-semibold text-sm transition-all duration-200 focus:outline-none"
      >
        <div className="flex items-center gap-3">
          <span className="p-1.5 bg-gray-50 rounded-lg shrink-0">
            {icon}
          </span>
          <span>{label}</span>
        </div>
        {open ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden pl-11 pr-2 mt-1 space-y-1 border-l-2 border-purple-100 ml-6"
          >
            {items.map((item, idx) => (
              <Link
                key={idx}
                to={item.to}
                onClick={onClose}
                className="block py-2 px-3 rounded-lg text-[13px] text-gray-600 hover:bg-purple-50 hover:text-purple-700 font-medium transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
