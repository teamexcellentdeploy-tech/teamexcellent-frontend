import React, { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Loader2 } from 'lucide-react'

// Helper HOC to wrap lazy-loaded components with Suspense
const withSuspense = (Component) => {
  const WrappedComponent = (props) => (
    <Suspense fallback={<LoadingFallback />}>
      <Component {...props} />
    </Suspense>
  );
  WrappedComponent.displayName = `withSuspense(${Component.displayName || Component.name || 'Component'})`;
  return WrappedComponent;
};

// Page components loaded lazily to improve initial load performance
const Home = withSuspense(lazy(() => import('./Pages/Home')))
const About = withSuspense(lazy(() => import('./Pages/About')))
const Admission = withSuspense(lazy(() => import('./Pages/Admission')))
const Contact = withSuspense(lazy(() => import('./Pages/Contact')))
const Jee = withSuspense(lazy(() => import('./Pages/Jee')))
const Class6to10 = withSuspense(lazy(() => import('./Pages/Class6to10')))
const Neet = withSuspense(lazy(() => import('./Pages/Neet')))
const Blogs = withSuspense(lazy(() => import('./Pages/Blogs')))
const BlogDetail = withSuspense(lazy(() => import('./Pages/BlogDetail')))
const AdminBlogs = withSuspense(lazy(() => import('./Pages/AdminBlogs')))
const AdminDashboard = withSuspense(lazy(() => import('./Pages/AdminDashboard')))
const AdminEnrollments = withSuspense(lazy(() => import('./Pages/AdminEnrollments')))
const AdminReviews = withSuspense(lazy(() => import('./Pages/AdminReviews')))
const AdminCareers = withSuspense(lazy(() => import('./Pages/AdminCareers')))
const AdminCounseling = withSuspense(lazy(() => import('./Pages/AdminCounseling')))
const Careers = withSuspense(lazy(() => import('./Pages/Careers')))
const CareerDetail = withSuspense(lazy(() => import('./Pages/CareerDetail')))
const BlogEditor = withSuspense(lazy(() => import('./Components/BlogEditor')))
const RankPredictor = withSuspense(lazy(() => import('./Pages/RankPredictor')))
const CollegePredictor = withSuspense(lazy(() => import('./Pages/CollegePredictor')))
const Student = withSuspense(lazy(() => import('./Pages/Student')))
const AdminLogin = withSuspense(lazy(() => import('./Pages/AdminLogin')))
const Result = withSuspense(lazy(() => import('./Pages/Result')))
const JeeResult = withSuspense(lazy(() => import('./Pages/JeeResult')))
const NeetResult = withSuspense(lazy(() => import('./Pages/NeetResult')))
const PrivacyPolicy = withSuspense(lazy(() => import('./Pages/PrivacyPolicy')))
const TermsOfService = withSuspense(lazy(() => import('./Pages/TermsOfService')))

// New page components
const JeeMainCoaching = withSuspense(lazy(() => import('./Pages/JeeMainCoaching')))
const JeeAdvancedCoaching = withSuspense(lazy(() => import('./Pages/JeeAdvancedCoaching')))
const JeeClass11 = withSuspense(lazy(() => import('./Pages/JeeClass11')))
const JeeClass12 = withSuspense(lazy(() => import('./Pages/JeeClass12')))
const JeeDroppers = withSuspense(lazy(() => import('./Pages/JeeDroppers')))

const NeetClass11 = withSuspense(lazy(() => import('./Pages/NeetClass11')))
const NeetClass12 = withSuspense(lazy(() => import('./Pages/NeetClass12')))
const NeetDroppers = withSuspense(lazy(() => import('./Pages/NeetDroppers')))

const Class6 = withSuspense(lazy(() => import('./Pages/Class6')))
const Class7 = withSuspense(lazy(() => import('./Pages/Class7')))
const Class8 = withSuspense(lazy(() => import('./Pages/Class8')))
const Class9 = withSuspense(lazy(() => import('./Pages/Class9')))
const Class10 = withSuspense(lazy(() => import('./Pages/Class10')))

const StudyMaterial = withSuspense(lazy(() => import('./Pages/StudyMaterial')))
const TestSeries = withSuspense(lazy(() => import('./Pages/TestSeries')))
const Scholarship = withSuspense(lazy(() => import('./Pages/Scholarship')))

import WhatsAppButton from './Components/WhatsAppButton'

function LoadingFallback() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-3">
      <Loader2 className="w-10 h-10 animate-spin text-[#522871]" />
      <span className="text-gray-500 font-medium animate-pulse">Loading...</span>
    </div>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [pathname])

  return null
}

import toast from 'react-hot-toast'

function AuthHandler() {
  const navigate = useNavigate()

  useEffect(() => {
    const handleLogout = () => {
      toast.error('Session expired. Please login again.')
      navigate('/admin-login')
    }

    window.addEventListener('forceLogout', handleLogout)
    return () => window.removeEventListener('forceLogout', handleLogout)
  }, [navigate])

  return null
}

export default function App() {
  return (
    <Router>
      <AuthHandler />
      <ScrollToTop />
      <Helmet>
        <title>Team Excellent - Best Coaching in Patna for JEE, NEET & Foundations</title>
        <meta property="og:title" content="Team Excellent - Best Institute in Patna for JEE, NEET & Foundations" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://teamexcellentcareerinstitute.in/" />
        <meta property="og:image" content="https://teamexcellentcareerinstitute.in/Favicon.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Team Excellent - Best Institute in Patna for JEE, NEET & Foundations" />
        <meta name="twitter:image" content="https://teamexcellentcareerinstitute.in/logo192.png" />
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admission" element={<Admission />} />

        {/* Redirect Routes */}
        <Route path="/programs/jee" element={<Navigate to="/iit-jee-coaching-in-patna" replace />} />
        <Route path="/programs/neet" element={<Navigate to="/neet-coaching-in-patna" replace />} />
        <Route path="/best-jee-coaching-in-patna" element={<Navigate to="/iit-jee-coaching-in-patna" replace />} />
        <Route path="/best-neet-coaching-in-patna" element={<Navigate to="/neet-coaching-in-patna" replace />} />
        <Route path="/programs/jee-main-coaching-in-patna" element={<Navigate to="/jee-main-coaching-in-patna" replace />} />
        <Route path="/programs/class-6-to-10" element={<Navigate to="/class-6-to-10" replace />} />
        <Route path="/programs/jee-advanced-coaching-in-patna" element={<Navigate to="/jee-advanced-coaching-in-patna" replace />} />
        <Route path="/programs/jee-class-11-in-patna" element={<Navigate to="/iit-jee-coaching-in-patna" replace />} />
        <Route path="/programs/jee-class-12-in-patna" element={<Navigate to="/jee-coaching-in-patna" replace />} />
        <Route path="/programs/jee-droppers-in-patna" element={<Navigate to="/jee-dropper-coaching-in-patna" replace />} />
        <Route path="/programs/neet-class-11-in-patna" element={<Navigate to="/neet-coaching-in-patna" replace />} />
        <Route path="/programs/neet-class-12-in-patna" element={<Navigate to="/neet-class-12-in-patna" replace />} />
        <Route path="/programs/neet-droppers-in-patna" element={<Navigate to="/neet-dropper-coaching-in-patna" replace />} />
        <Route path="/programs/class-6-in-patna" element={<Navigate to="/class-6-in-patna" replace />} />
        <Route path="/programs/class-7-in-patna" element={<Navigate to="/class-7-in-patna" replace />} />
        <Route path="/programs/class-8-in-patna" element={<Navigate to="/class-8-in-patna" replace />} />
        <Route path="/programs/class-9-in-patna" element={<Navigate to="/class-9-in-patna" replace />} />
        <Route path="/programs/class-10-in-patna" element={<Navigate to="/class-10-in-patna" replace />} />

        {/* Program Routes */}
        <Route path="/jee-coaching-in-patna" element={<JeeClass12 />} />
        <Route path="/iit-jee-coaching-in-patna" element={<JeeClass11 />} />
        <Route path="/class-6-to-10" element={<Class6to10 />} />
        <Route path="/neet-coaching-in-patna" element={<NeetClass11 />} />

        {/* New Program Subroutes */}
        <Route path="/jee-main-coaching-in-patna" element={<JeeMainCoaching />} />
        <Route path="/jee-advanced-coaching-in-patna" element={<JeeAdvancedCoaching />} />
        <Route path="/jee-class-11-in-patna" element={<Navigate to="/iit-jee-coaching-in-patna" replace />} />
        <Route path="/jee-class-12-in-patna" element={<Navigate to="/jee-coaching-in-patna" replace />} />
        <Route path="/jee-dropper-coaching-in-patna" element={<JeeDroppers />} />
        <Route path="/jee-droppers-in-patna" element={<Navigate to="/jee-dropper-coaching-in-patna" replace />} />

        <Route path="/neet-class-11-in-patna" element={<Navigate to="/neet-coaching-in-patna" replace />} />
        <Route path="/neet-class-12-in-patna" element={<NeetClass12 />} />
        <Route path="/neet-dropper-coaching-in-patna" element={<NeetDroppers />} />
        <Route path="/neet-droppers-in-patna" element={<Navigate to="/neet-dropper-coaching-in-patna" replace />} />

        <Route path="/class-6-in-patna" element={<Class6 />} />
        <Route path="/class-7-in-patna" element={<Class7 />} />
        <Route path="/class-8-in-patna" element={<Class8 />} />
        <Route path="/class-9-in-patna" element={<Class9 />} />
        <Route path="/class-10-in-patna" element={<Class10 />} />

        {/* New Resource Routes */}
        <Route path="/study-material" element={<StudyMaterial />} />
        <Route path="/test-series" element={<TestSeries />} />
        <Route path="/scholarship" element={<Scholarship />} />

        {/* Blog Routes */}
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:permalink" element={<BlogDetail />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/blogs" element={<AdminBlogs />} />
        <Route path="/admin/enrollments" element={<AdminEnrollments />} />
        <Route path="/admin/counseling" element={<AdminCounseling />} />
        <Route path="/admin/reviews" element={<AdminReviews />} />
        <Route path="/admin/careers" element={<AdminCareers />} />
        <Route path="/admin/blogs/new" element={<BlogEditor />} />
        <Route path="/admin/blogs/edit/:id" element={<BlogEditor />} />

        {/* Other Routes */}
        <Route path="/rank-predictor" element={<RankPredictor />} />
        <Route path="/college-predictor" element={<CollegePredictor />} />
        <Route path="/student-portal" element={<Student />} />
        <Route path="/result" element={<Result />} />
        <Route path="/result/jee" element={<JeeResult />} />
        <Route path="/result/neet" element={<NeetResult />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/:id" element={<CareerDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="*" element={<ProgramPage title="404 Not Found" />} />
      </Routes>
      <WhatsAppButton />
    </Router>
  )
}

function ProgramPage({ title }) {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">{title}</h1>
        <p className="text-lg text-center">{title} details coming soon...</p>
      </div>
    </div>
  )
}
