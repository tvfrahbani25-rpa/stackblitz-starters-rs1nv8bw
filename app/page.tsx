'use client';
import React, { useState, useMemo } from 'react';
import { useForm } from '@formspree/react';
import { 
  BookOpen, 
  GraduationCap, 
  Calculator, 
  Award, 
  CheckCircle2, 
  Clock, 
  Users, 
  Calendar, 
  MessageSquare, 
  ChevronDown, 
  Star, 
  Sparkles, 
  Video, 
  Phone, 
  Mail, 
  ArrowRight, 
  Check, 
  ShieldCheck, 
  Zap,
  Brain,
  Atom,
  Languages,
  PenTool,
  Monitor,
  Laptop,
  Download,
  Share2,
  Lock,
  PlayCircle,
  Globe,
  Sparkle
} from 'lucide-react';
export default function App() {
  const [formState, handleFormspreeSubmit] = useForm("mzeelzqr");
  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Subject filtering state
  const [activeCategory, setActiveCategory] = useState('All');

  // Calculator State
  const [selectedGrade, setSelectedGrade] = useState('high_school');
  const [selectedSubject, setSelectedSubject] = useState('Mathematics');
  const [sessionDuration, setSessionDuration] = useState(60); // 45, 60, 90 mins
  const [sessionsPerWeek, setSessionsPerWeek] = useState(2);
  const [submittedBooking, setSubmittedBooking] = useState(false);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Data Definitions
  const categories = ['All', 'STEM & Music', 'AP & Test Prep', 'Language & Writing', 'Executive Functioning'];

  const subjects = [
    {
      id: 1,
      title: 'Advanced Mathematics',
      category: 'STEM & Coding',
      icon: Calculator,
      description: 'Algebra, Geometry, Pre-Calculus, Calculus AB/BC, and Interactive Graphing.',
      grades: 'Grades 6–12 & College',
      badge: 'Popular',
      color: 'from-indigo-500 to-blue-600'
    },
    {
      id: 2,
      title: 'Physics & Chemistry Labs',
      category: 'STEM & Coding',
      icon: Atom,
      description: 'Simulated digital labs, AP Physics, Honors Chemistry, and problem sets.',
      grades: 'Grades 9–12',
      badge: 'Virtual Labs',
      color: 'from-cyan-500 to-teal-600'
    },
    {
      id: 3,
      title: 'SAT, ACT & Digital PSAT',
      category: 'AP & Test Prep',
      icon: GraduationCap,
      description: 'Digital testing strategies, timed drills, and online score analytics.',
      grades: 'Grades 10–12',
      badge: '+160 Avg Gain',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      id: 4,
      title: 'Music and Music Thoery',
      category: 'STEM & Coding',
      icon: Laptop,
      description: 'Live voice, piano, guitar or music thoery lessons available now.',
      grades: 'Grades k-college',
      badge: 'Tech Special',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      id: 5,
      title: 'Essay Writing & Literature',
      category: 'Language & Writing',
      icon: PenTool,
      description: 'Real-time collaborative editing, AP English prep, and college admissions essays.',
      grades: 'Grades 6–12',
      badge: 'Live Editing',
      color: 'from-amber-500 to-orange-600'
    },
    {
      id: 6,
      title: 'Time Mgmt & Study Systems',
      category: 'Executive Functioning',
      icon: Brain,
      description: 'Organization frameworks, Notion/digital planner setups, and exam discipline.',
      grades: 'All Grades',
      badge: 'High Impact',
      color: 'from-pink-500 to-rose-600'
    }
  ];

  const platformFeatures = [
    {
      icon: Monitor,
      title: 'Multi-User Digital Whiteboard',
      desc: 'Draw equations, annotate diagrams, and work on problems together in real-time.'
    },
    {
      icon: PlayCircle,
      title: 'HD Sessions',
      desc: 'Every lesson is at least 1080p so students can clearly see their lessons.'
    },
    {
      icon: Download,
      title: 'Instant Notes',
      desc: 'Feel free to ask for a copy of notes or take a screenshot at the end of class to have access to all notes.'
    },
    {
      icon: Globe,
      title: 'Zero Commute Convenience',
      desc: 'Learn from home, the library, or while traveling—all you need is Wi-Fi.'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Rebecca Vance',
      role: 'Parent of 10th Grader',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
      text: 'Having 100% online tutoring fit seamlessly into our busy sports schedule. The whiteboard sessions allowed my daughter to review right before her Physics midterm!',
      rating: 5,
      achievement: 'Physics AP: B- ➔ A'
    },
    {
      name: 'Marcus Chen',
      role: 'Music Student',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
      text: 'The digital whiteboard and screen-share test drills felt way more efficient than sitting in a learning/tutoring center. My class grade improved by 20%!',
      rating: 5,
      achievement: '+20% Music Thoery'
    },
    {
      name: 'Sarah Miller',
      role: 'Parent of 7th Grader',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
      text: 'We love that we can have personalized reports after every session. It keeps us completely in the loop on our son’s math progress.',
      rating: 5,
      achievement: 'Math Confidence 10/10'
    }
  ];

  const faqs = [
    {
      q: 'What software or equipment does my student need?',
      a: 'All you need is a laptop or tablet with a webcam, microphone, and a stable internet connection. Our interactive classroom runs entirely in any web browser—no heavy software downloads required!'
    },
    {
      q: 'How do virtual whiteboard sessions work?',
      a: 'Both student and tutor write, type, and solve problems on a shared interactive screen simultaneously. Tutors can upload school worksheets, PDFs, or graph functions live.'
    },
    {
      q: 'Can session recordings be watched again later?',
      a: 'Yes! Every online session is securely saved in your student dashboard. Students can replay step-by-step explanations anytime before big exams or finals.'
    },
    {
      q: 'How is student engagement maintained online?',
      a: 'Our tutors use interactive tools, quick check-ins, gamified practice sets, and camera-on engagement to keep lessons active and dynamic—never passive listening.'
    },
    {
      q: 'What if we need to reschedule a virtual class?',
      a: 'Our online portal allows effortless 1-click rescheduling up to 12 hours before your session time.'
    }
  ];

  // Dynamic price calculation
  const calculatedPricing = useMemo(() => {
    let baseRatePerHour = 45; // Base hourly rate
    
    if (selectedGrade === 'elementary') baseRatePerHour = 25;
    if (selectedGrade === 'middle_school') baseRatePerHour = 35;
    if (selectedGrade === 'high_school') baseRatePerHour = 45;
    if (selectedGrade === 'college_prep') baseRatePerHour = 55;

    // Duration ratio
    const sessionCost = (baseRatePerHour * (sessionDuration / 60));
    const weeklyTotal = sessionCost * sessionsPerWeek;
    const monthlyEstimate = Math.round(weeklyTotal * 4 * 0.9); // 10% monthly bundle discount

    return {
      hourlyRate: baseRatePerHour,
      perSession: Math.round(sessionCost),
      weeklyTotal: Math.round(weeklyTotal),
      monthlyDiscounted: monthlyEstimate
    };
  }, [selectedGrade, sessionDuration, sessionsPerWeek]);

  const filteredSubjects = useMemo(() => {
    if (activeCategory === 'All') return subjects;
    return subjects.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setSubmittedBooking(true);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Dynamic Top Announcement Bar */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 text-white text-xs sm:text-sm font-semibold py-2 px-4 text-center flex items-center justify-center gap-2">
        <Sparkles className="w-4 h-4 text-cyan-200" />
        <span>100% Online & Interactive — Try your first 15-minute diagnostic call free!</span>
        <a href="#booking" className="underline font-bold hover:text-cyan-200 transition-colors hidden sm:inline">Claim Free Call</a>
      </div>

      {/* Dynamic Navbar */}
      <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
              <Monitor className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-extrabold bg-gradient-to-r from-white via-cyan-100 to-indigo-200 bg-clip-text text-transparent">
                R Plus Academy
              </span>
              <span className="block text-[10px] font-bold tracking-widest text-cyan-400 uppercase">
                100% Virtual Learning
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#why-online" className="hover:text-cyan-400 transition-colors">Why Online?</a>
            <a href="#subjects" className="hover:text-cyan-400 transition-colors">Virtual Subjects</a>
            <a href="#classroom" className="hover:text-cyan-400 transition-colors">Digital Classroom</a>
            <a href="#calculator" className="hover:text-cyan-400 transition-colors">Rates & Estimator</a>
            <a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ</a>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:18005550199" className="text-sm font-semibold text-slate-300 hover:text-cyan-400 flex items-center gap-2">
              <Phone className="w-4 h-4 text-cyan-400" />
              rplusacademy00@outlook.com
            </a>
            <a 
              href="#booking" 
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-sm hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/20 transition-all transform hover:-translate-y-0.5"
            >
              Book Free Trial Call
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
            <a href="#why-online" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-slate-300 font-medium hover:text-cyan-400">Why Online?</a>
            <a href="#subjects" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-slate-300 font-medium hover:text-cyan-400">Virtual Subjects</a>
            <a href="#classroom" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-slate-300 font-medium hover:text-cyan-400">Digital Classroom Features</a>
            <a href="#calculator" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-slate-300 font-medium hover:text-cyan-400">Rates & Calculator</a>
            <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-slate-300 font-medium hover:text-cyan-400">FAQ</a>
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <a href="tel:18005550199" className="text-center text-slate-300 font-semibold py-2">Call Us: (800) 555-0199</a>
              <a 
                href="#booking" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold shadow-md"
              >
                Book Free Trial Call
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-24 lg:pb-32 bg-slate-950">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-indigo-600/20 to-cyan-500/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                <Globe className="w-4 h-4 text-cyan-400" />
                100% Virtual • Learn Anywhere, Anytime
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                Top 1% Tutors, Delivered <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Directly to Your Screen</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Zero commute. Instant whiteboard collaboration. Experience 1-on-1 online tutoring engineered for real academic breakthroughs. Prices are negotiable!*
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <a 
                  href="#booking" 
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold text-base hover:from-cyan-400 hover:to-indigo-500 shadow-xl shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 group"
                >
                  Book Free 15-Min Strategy Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#subjects" 
                  className="px-8 py-4 rounded-xl bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-base hover:bg-slate-700 transition-all flex items-center justify-center"
                >
                  Explore Virtual Subjects
                </a>
              </div>

              {/* Trust Badges */}
              <div className="pt-8 border-t border-slate-800 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 text-left">
                <div>
                  <div className="text-2xl font-extrabold text-white">500+</div>
                  <div className="text-xs text-slate-400 font-medium">Active Online Students</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-cyan-400">98%</div>
                  <div className="text-xs text-slate-400 font-medium">Show Grade Increase</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-indigo-400">1-on-1</div>
                  <div className="text-xs text-slate-400 font-medium">Interactive Whiteboard</div>
                </div>
              </div>
            </div>

            {/* Right Interactive Virtual Platform Preview Graphic */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Virtual Classroom Window Frame */}
                <div className="relative bg-slate-800/90 rounded-2xl p-4 sm:p-5 shadow-2xl border border-slate-700 backdrop-blur-xl">
                  
                  {/* Browser / Classroom Top Bar */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-700/80">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                      <span className="ml-2 text-xs text-slate-400 font-mono flex items-center gap-1">
                        <Lock className="w-3 h-3 text-emerald-400" /> r-plus-classroom.live
                      </span>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      LIVE SESSION
                    </span>
                  </div>

                  {/* Mock Classroom Image & Digital Whiteboard Overlay */}
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-950 border border-slate-800">
                    <img 
                      src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80&w=800" 
                      alt="Student engaged in online tutoring session" 
                      className="w-full h-full object-cover opacity-85"
                    />
                    
                    {/* Simulated Live Whiteboard Widget */}
                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-slate-900/90 backdrop-blur border border-slate-700/80 text-white flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-md bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
                          <Monitor className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">Digital Whiteboard Active</div>
                          <div className="text-[10px] text-slate-400">Replay & PDF Export Enabled</div>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-cyan-400 animate-pulse">● Rec</span>
                    </div>
                  </div>

                  {/* Feature Pill Tags under preview */}
                  <div className="grid grid-cols-2 gap-2 mt-4 text-xs font-medium text-slate-300">
                    <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-700/50 flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyan-400" /> Screen & File Sharing
                    </div>
                    <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-700/50 flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyan-400" /> Live Notes & Lectures
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Online Learning Works (Interactive Pillars) */}
      <section id="why-online" className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-cyan-400 font-bold text-xs tracking-widest uppercase">Built for Modern Students</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              Why 100% Online Tutoring Outperforms In-Person
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mt-3">
              Combining world-class educators with dynamic virtual whiteboards delivers faster learning and total scheduling freedom.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platformFeatures.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div key={idx} className="bg-slate-800/60 border border-slate-700/70 hover:border-cyan-500/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 text-cyan-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech-Powered Platform Demo Showcase */}
      <section id="classroom" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-cyan-400 font-bold text-xs tracking-widest uppercase">The Virtual Advantage</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                An Online Classroom Designed for Deep Focus
              </h2>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                No distracting centers or travel fatigue. Students work 1-on-1 with specialized tutors inside an intuitive digital portal optimized for retention.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0 mt-1">
                    <Share2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Real-Time Homework Upload</h4>
                    <p className="text-slate-400 text-xs sm:text-sm mt-0.5">Snap a photo of school homework or AP worksheets and upload instantly onto the screen.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0 mt-1">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">24/7 Access to Session Vault</h4>
                    <p className="text-slate-400 text-xs sm:text-sm mt-0.5">Review saved video replays and downloaded whiteboard notes whenever studying for midterms.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 shrink-0 mt-1">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Safeguarded Digital Environment</h4>
                    <p className="text-slate-400 text-xs sm:text-sm mt-0.5">Encrypted 1-on-1 rooms, background-checked instructors, and full parental transparency.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Graphic Frame */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 p-2 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800" 
                  alt="Student using laptop for online learning" 
                  className="rounded-2xl object-cover w-full h-80 sm:h-96"
                />
                <div className="p-6 bg-slate-900 text-white space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wide">Included with Every Account</span>
                    <span className="text-xs text-slate-400">Compatible with Mac, PC & iPad</span>
                  </div>
                  <p className="text-sm text-slate-300">
                    "The ability to rewatch step-by-step math solutions saved my grade during finals week!"
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Virtual Subject Explorer */}
      <section id="subjects" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-cyan-400 font-bold text-xs tracking-widest uppercase">Comprehensive Virtual Curriculum</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              Virtual Subjects Offered
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mt-3">
              Tailored 1-on-1 tutoring customized to your school’s exact syllabus and AP standards.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/20'
                    : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Subject Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSubjects.map((subject) => {
              const IconComponent = subject.icon;
              return (
                <div 
                  key={subject.id} 
                  className="group relative bg-slate-800/80 hover:bg-slate-800 rounded-2xl p-7 border border-slate-700/80 hover:border-cyan-500/60 shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${subject.color} text-white flex items-center justify-center shadow-md`}>
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                        {subject.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {subject.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-400 mt-1 uppercase tracking-wider">
                      {subject.grades}
                    </p>
                    <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                      {subject.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs font-bold text-cyan-400">
                    <span>100% Online • Interactive</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Online Session Estimator / Calculator */}
      <section id="calculator" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-cyan-400 font-bold text-xs tracking-widest uppercase">Transparent Online Rates</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              Virtual Session Rate Estimator
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mt-3">
              Calculate your online learning plan with transparent hourly rates and built-in monthly bundle discounts.
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 overflow-hidden grid lg:grid-cols-12">
            
            {/* Left Calculator Controls */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-8 border-b lg:border-b-0 lg:border-r border-slate-800">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Calculator className="w-5 h-5 text-cyan-400" />
                Customize Your Virtual Plan
              </h3>

              {/* Grade Level Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Grade Level</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'elementary', label: 'Elementary', sub: 'Grades K–5' },
                    { id: 'middle_school', label: 'Middle', sub: 'Grades 6–8' },
                    { id: 'high_school', label: 'High School', sub: 'Grades 9–12' },
                    { id: 'college_prep', label: 'AP / College', sub: 'Advanced' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSelectedGrade(item.id)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        selectedGrade === item.id
                          ? 'border-cyan-500 bg-cyan-950/60 text-white ring-1 ring-cyan-500'
                          : 'border-slate-800 hover:border-slate-700 bg-slate-950 text-slate-300'
                      }`}
                    >
                      <div className="font-bold text-xs sm:text-sm">{item.label}</div>
                      <div className="text-[10px] text-slate-400">{item.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Session Duration Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Session Length</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { mins: 45, label: '45 Minutes', note: 'Focused Review' },
                    { mins: 60, label: '60 Minutes', note: 'Standard / Recommended' },
                    { mins: 90, label: '90 Minutes', note: 'Deep Intensive' }
                  ].map((dur) => (
                    <button
                      key={dur.mins}
                      type="button"
                      onClick={() => setSessionDuration(dur.mins)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        sessionDuration === dur.mins
                          ? 'border-indigo-500 bg-indigo-950/60 text-white ring-1 ring-indigo-500'
                          : 'border-slate-800 hover:border-slate-700 bg-slate-950 text-slate-300'
                      }`}
                    >
                      <div className="font-bold text-xs sm:text-sm">{dur.label}</div>
                      <div className="text-[10px] text-slate-400">{dur.note}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Weekly Frequency Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Weekly Frequency</label>
                  <span className="text-xs font-bold text-cyan-400">{sessionsPerWeek} Sessions / Week</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="5" 
                  step="1" 
                  value={sessionsPerWeek} 
                  onChange={(e) => setSessionsPerWeek(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-2">
                  <span>1 session/wk</span>
                  <span>2-3 sessions/wk (Popular)</span>
                  <span>4+ sessions/wk</span>
                </div>
              </div>

              {/* Price Breakdown Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] text-slate-400 uppercase font-semibold">Estimated Online Rate</span>
                  <div className="text-3xl font-extrabold text-white mt-1">
                    ${calculatedPricing.perSession} <span className="text-xs font-normal text-slate-400">/ session ({sessionDuration} mins)</span>
                  </div>
                  <p className="text-xs text-cyan-300 mt-1">
                    Est. Monthly: <span className="font-bold text-white">${calculatedPricing.monthlyDiscounted}</span> (includes 10% bundle savings)
                  </p>
                </div>
                <div className="shrink-0">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Satisfaction Guarantee
                  </span>
                </div>
              </div>
            </div>

            {/* Right Booking Form Panel */}
            <div id="booking" className="lg:col-span-5 p-6 sm:p-10 bg-slate-900/60 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white mb-1">
                Book Free 15-Min Virtual Strategy Call
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Meet an academic advisor over video to discuss student goals and test whiteboards.
              </p>

              {formState.succeeded ? (
                <div>
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-emerald-400" />
                </div>
                <h4 className="font-bold text-white text-lg">Strategy Call Requested!</h4>
                <p className="text-xs text-emerald-200 leading-relaxed">
                  We have received your request! We will be in contact with you shortly. We may ask for more information to be sent via email prior to your Stradegy Call.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormspreeSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Parent or Student Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required 
                      placeholder="e.g. Eleanor Vance" 
                      className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required 
                      placeholder="eleanor@example.com" 
                      className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required 
                      placeholder="(555) 000-0000" 
                      className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Subject Needed</label>
                    <input 
                      type="text" 
                      name="subject"
                      placeholder="e.g. AP Calculus AB, SAT Math, Physics" 
                      className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-cyan-500/20 transition-all"
                  >
                    Confirm & Reserve Free Strategy Call
                  </button>

                  <p className="text-[11px] text-slate-500 text-center">
                    🔒 No credit card required for 15-min consultation. Customers who have not negotiated prices will be prioritized*
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Student Success & Testimonials */}
      <section className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-cyan-400 font-bold text-xs tracking-widest uppercase">Verified Results</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              Loved by Students & Busy Families
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mt-3">
              Read how 100% online tutoring eliminates stress and elevates grades.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-7 flex flex-col justify-between hover:border-cyan-500/40 transition-all"
              >
                <div>
                  <div className="flex gap-1 text-amber-400 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed italic">
                    "{item.text}"
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-700/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-10 h-10 rounded-full object-cover border border-cyan-500/40"
                    />
                    <div>
                      <h4 className="font-bold text-white text-sm">{item.name}</h4>
                      <p className="text-xs text-slate-400">{item.role}</p>
                    </div>
                  </div>

                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    {item.achievement}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section id="faq" className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-cyan-400 font-bold text-xs tracking-widest uppercase">Online Tutoring FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              Everything You Need to Know
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index} 
                  className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 hover:bg-slate-850 transition-colors"
                  >
                    <span className="font-bold text-white text-base sm:text-lg">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-cyan-400' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-slate-300 text-sm leading-relaxed border-t border-slate-800/60 bg-slate-900/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Brand Intro */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-bold">
                  <Monitor className="w-5 h-5" />
                </div>
                <span className="text-xl font-extrabold text-white">R Plus Academy</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                100% online 1-on-1 tutoring equipped with digital whiteboards, session replays, and world-class educators.
              </p>
              <div className="text-xs text-slate-500 pt-2">
                © {new Date().getFullYear()} R Plus Acadmey LLC. All rights reserved.
              </div>
            </div>

            {/* Virtual Subjects */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Subjects</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#subjects" className="hover:text-cyan-400 transition-colors">Mathematics & AP Calculus</a></li>
                <li><a href="#subjects" className="hover:text-cyan-400 transition-colors">Physics & Chemistry</a></li>
                <li><a href="#subjects" className="hover:text-cyan-400 transition-colors">Digital SAT & ACT Prep</a></li>
                <li><a href="#subjects" className="hover:text-cyan-400 transition-colors">Music and Music Thoery</a></li>
                <li><a href="#subjects" className="hover:text-cyan-400 transition-colors">Essay & AP Writing</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#why-online" className="hover:text-cyan-400 transition-colors">Why Online?</a></li>
                <li><a href="#classroom" className="hover:text-cyan-400 transition-colors">Digital Whiteboard</a></li>
                <li><a href="#calculator" className="hover:text-cyan-400 transition-colors">Rate Estimator</a></li>
                <li><a href="#faq" className="hover:text-cyan-400 transition-colors">Virtual FAQ</a></li>
              </ul>
            </div>

            {/* Contact Details */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Support & Hours</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>(832)4456530</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>rplusacademy00@outlook.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <span>Available Worldwide</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>7 Days / Week Flexible Booking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}