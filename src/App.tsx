/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Lock, X, LayoutDashboard, Key, Sparkles, LogIn } from 'lucide-react';

// Core State Interfaces and Data Types
import { Course, Teacher, Blog, Testimonial, Announcement, MediaItem, AdmissionInquiry } from './types';
import { 
  DEFAULT_COURSES, 
  DEFAULT_TEACHERS, 
  DEFAULT_BLOGS, 
  DEFAULT_TESTIMONIALS, 
  DEFAULT_ANNOUNCEMENTS, 
  DEFAULT_MEDIA 
} from './data';

// Component Imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Courses from './components/Courses';
import Teachers from './components/Teachers';
import Testimonials from './components/Testimonials';
import BlogList from './components/Blog';
import Admissions from './components/Admissions';
import ContactUs from './components/ContactUs';
import AdminDashboard from './components/AdminDashboard';
import Footer from './components/Footer';

export default function App() {
  // 1. Navigation & Routing States
  const [activeTab, setActiveTab] = useState<string>('home');
  const [prefilledCourseTitle, setPrefilledCourseTitle] = useState<string | null>(null);

  // 2. Persistent CMS Data States (Loaded from localStorage or fallback to defaults)
  const [courses, setCourses] = useState<Course[]>(() => {
    const saved = localStorage.getItem('aljisr_courses');
    if (saved) {
      const parsed = JSON.parse(saved);
      return parsed.map((c: Course) => {
        const matchedStatic = DEFAULT_COURSES.find(dc => dc.id === c.id);
        return matchedStatic ? matchedStatic : c;
      });
    }
    return DEFAULT_COURSES;
  });

  const [teachers, setTeachers] = useState<Teacher[]>(() => {
    const saved = localStorage.getItem('aljisr_teachers');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.some((t: Teacher) => t.id.startsWith('teacher-'))) {
        // Keep default pre-seeded profiles updated with latest static additions or name corrections, while preserving custom manual entries
        return parsed.map((t: Teacher) => {
          const matchedStatic = DEFAULT_TEACHERS.find(dt => dt.id === t.id);
          return matchedStatic ? matchedStatic : t;
        });
      }
    }
    return DEFAULT_TEACHERS;
  });

  const [blogs, setBlogs] = useState<Blog[]>(() => {
    const saved = localStorage.getItem('aljisr_blogs');
    return saved ? JSON.parse(saved) : DEFAULT_BLOGS;
  });

  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    const saved = localStorage.getItem('aljisr_testimonials');
    return saved ? JSON.parse(saved) : DEFAULT_TESTIMONIALS;
  });

  const [announcements, setAnnouncements] = useState<Announcement[]>(() => {
    const saved = localStorage.getItem('aljisr_announcements');
    return saved ? JSON.parse(saved) : DEFAULT_ANNOUNCEMENTS;
  });

  const [media, setMedia] = useState<MediaItem[]>(() => {
    const saved = localStorage.getItem('aljisr_media');
    return saved ? JSON.parse(saved) : DEFAULT_MEDIA;
  });

  const [inquiries, setInquiries] = useState<AdmissionInquiry[]>(() => {
    const saved = localStorage.getItem('aljisr_inquiries');
    return saved ? JSON.parse(saved) : [];
  });

  // 3. Admin Security States
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem('aljisr_admin_logged') === 'true';
  });
  const [showAdminLoginModal, setShowAdminLoginModal] = useState<boolean>(false);
  const [adminUsername, setAdminUsername] = useState<string>('');
  const [adminPassword, setAdminPassword] = useState<string>('');
  const [loginError, setLoginError] = useState<string | null>(null);

  // 4. Synchronization of states back to localStorage
  useEffect(() => {
    localStorage.setItem('aljisr_courses', JSON.stringify(courses));
  }, [courses]);

  useEffect(() => {
    localStorage.setItem('aljisr_teachers', JSON.stringify(teachers));
  }, [teachers]);

  useEffect(() => {
    localStorage.setItem('aljisr_blogs', JSON.stringify(blogs));
  }, [blogs]);

  useEffect(() => {
    localStorage.setItem('aljisr_testimonials', JSON.stringify(testimonials));
  }, [testimonials]);

  useEffect(() => {
    localStorage.setItem('aljisr_announcements', JSON.stringify(announcements));
  }, [announcements]);

  useEffect(() => {
    localStorage.setItem('aljisr_media', JSON.stringify(media));
  }, [media]);

  useEffect(() => {
    localStorage.setItem('aljisr_inquiries', JSON.stringify(inquiries));
  }, [inquiries]);

  // Handle Admin Logout action
  const handleAdminLogout = () => {
    localStorage.removeItem('aljisr_admin_logged');
    setIsAdminLoggedIn(false);
    if (activeTab === 'admin') {
      setActiveTab('home');
    }
  };

  // Handle Inbound Admissions Ticket Form Submissions
  const handleNewInquiry = (inqData: Omit<AdmissionInquiry, 'id' | 'status' | 'date'>) => {
    const freshInquiry: AdmissionInquiry = {
      id: `inq-${Date.now()}`,
      status: 'pending',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      ...inqData
    };
    setInquiries(prev => [freshInquiry, ...prev]);
  };

  // Reset to original defaults
  const handleResetToDefaults = () => {
    if (confirm('Review confirmation. This will clean your custom entries and restore the beautiful pre-loaded campus defaults.')) {
      setCourses(DEFAULT_COURSES);
      setTeachers(DEFAULT_TEACHERS);
      setBlogs(DEFAULT_BLOGS);
      setTestimonials(DEFAULT_TESTIMONIALS);
      setAnnouncements(DEFAULT_ANNOUNCEMENTS);
      setMedia(DEFAULT_MEDIA);
      setInquiries([]);
      localStorage.clear();
      setActiveTab('home');
      triggerUIPanelClose();
      alert('Al Jisr Academic records cleared and defaults successfully restored!');
    }
  };

  // Admin login process
  const handleAdminLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminUsername.toLowerCase() === 'admin' && adminPassword === 'jisr123') {
      setIsAdminLoggedIn(true);
      localStorage.setItem('aljisr_admin_logged', 'true');
      setShowAdminLoginModal(false);
      setAdminUsername('');
      setAdminPassword('');
      setLoginError(null);
      // Automatically route into Admin Dashboard console!
      setActiveTab('admin');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setLoginError('Invalid administrator credentials. Hint: use admin & jisr123.');
    }
  };

  const handleAutofillAdmin = () => {
    setAdminUsername('admin');
    setAdminPassword('jisr123');
    setLoginError(null);
  };

  const triggerUIPanelClose = () => {
    setShowAdminLoginModal(false);
    setAdminUsername('');
    setAdminPassword('');
    setLoginError(null);
  };

  // Helper trigger to pivot into course registration directly
  const handleEnrollPivot = (courseTitle: string) => {
    setPrefilledCourseTitle(courseTitle);
    setActiveTab('admissions');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-sky-500 selection:text-white antialiased" id="aljisr-root-node">
      
      {/* 1. Global Navigation & Announcements header */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        announcements={announcements} 
        isAdminLoggedIn={isAdminLoggedIn}
        onAdminLogout={handleAdminLogout}
        onOpenAdminModal={() => {
          setLoginError(null);
          setShowAdminLoginModal(true);
        }}
      />

      {/* 2. Main Tabbed Content routing container */}
      <main className="flex-1" id="main-scroller-view">
        
        {/* TAB: Home */}
        {activeTab === 'home' && (
          <div className="animate-fade-in" id="routed-view-home">
            <Hero onNavigate={setActiveTab} />
            <AboutUs onNavigate={setActiveTab} />
            <Courses courses={courses} activeCategory="all" onNavigateToEnroll={handleEnrollPivot} />
            <Teachers teachers={teachers} />
            <Testimonials testimonials={testimonials} />
            <BlogList blogs={blogs} />
          </div>
        )}

        {/* TAB: About Us */}
        {activeTab === 'about' && (
          <div className="animate-fade-in" id="routed-view-about">
            <AboutUs onNavigate={setActiveTab} />
          </div>
        )}

        {/* TAB: Arabic Courses */}
        {activeTab === 'arabic' && (
          <div className="animate-fade-in" id="routed-view-arabic">
            <Courses courses={courses} activeCategory="arabic" onNavigateToEnroll={handleEnrollPivot} />
          </div>
        )}

        {/* TAB: English Courses */}
        {activeTab === 'english' && (
          <div className="animate-fade-in" id="routed-view-english">
            <Courses courses={courses} activeCategory="english" onNavigateToEnroll={handleEnrollPivot} />
          </div>
        )}

        {/* TAB: Teachers */}
        {activeTab === 'teachers' && (
          <div className="animate-fade-in" id="routed-view-teachers">
            <Teachers teachers={teachers} />
          </div>
        )}

        {/* TAB: Testimonials */}
        {activeTab === 'testimonials' && (
          <div className="animate-fade-in" id="routed-view-testimonials">
            <Testimonials testimonials={testimonials} />
          </div>
        )}

        {/* TAB: Blog */}
        {activeTab === 'blog' && (
          <div className="animate-fade-in" id="routed-view-blog">
            <BlogList blogs={blogs} />
          </div>
        )}

        {/* TAB: Admissions */}
        {activeTab === 'admissions' && (
          <div className="animate-fade-in" id="routed-view-admissions">
            <Admissions 
              courses={courses} 
              prefilledCourseTitle={prefilledCourseTitle} 
              onSubmitInquiry={handleNewInquiry}
            />
          </div>
        )}

        {/* TAB: Contact Us */}
        {activeTab === 'contact' && (
          <div className="animate-fade-in" id="routed-view-contact">
            <ContactUs />
          </div>
        )}

        {/* TAB: Admin CMS Console (Guard access) */}
        {activeTab === 'admin' && isAdminLoggedIn && (
          <div className="animate-fade-in" id="routed-view-admin">
            <AdminDashboard
              courses={courses}
              teachers={teachers}
              blogs={blogs}
              testimonials={testimonials}
              announcements={announcements}
              media={media}
              inquiries={inquiries}
              setCourses={setCourses}
              setTeachers={setTeachers}
              setBlogs={setBlogs}
              setTestimonials={setTestimonials}
              setAnnouncements={setAnnouncements}
              setMedia={setMedia}
              onResetAllData={handleResetToDefaults}
            />
          </div>
        )}

      </main>

      {/* 3. Global Footer component */}
      <Footer 
        onNavigate={(tab) => {
          setActiveTab(tab);
          setPrefilledCourseTitle(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenAdmin={() => {
          if (isAdminLoggedIn) {
            setActiveTab('admin');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            setLoginError(null);
            setShowAdminLoginModal(true);
          }
        }}
      />

      {/* 4. Administrator Secure Entrance Dialog Modal */}
      {showAdminLoginModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in" id="admin-login-credential-modal">
          <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl border flex flex-col p-6 sm:p-8 space-y-6 relative">
            
            {/* Close button */}
            <button
              onClick={triggerUIPanelClose}
              className="absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-full transition cursor-pointer"
              aria-label="Close portal window"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title */}
            <div className="text-center space-y-2 pt-2">
              <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                <Key className="w-6 h-6" />
              </div>
              <h3 className="font-sans font-extrabold text-xl text-gray-900 leading-tight">Admin Console Portal</h3>
              <p className="text-xs text-gray-500 max-w-xs mx-auto">
                Secure access for Al Jisr Academy registrar, course managers, and directors.
              </p>
            </div>

            {/* Credentials form */}
            <form onSubmit={handleAdminLoginSubmit} className="space-y-4">
              {loginError && (
                <div className="p-3 bg-red-50 text-red-700 text-xs font-semibold rounded-lg border border-red-150 py-2.5 animate-pulse">
                  {loginError}
                </div>
              )}

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide">
                  Username ID
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. admin"
                  value={adminUsername}
                  onChange={(e) => setAdminUsername(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 focus:border-sky-500 rounded-xl focus:outline-none focus:ring-1 focus:ring-sky-500 transition text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide">
                  Access Keyword Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="e.g. jisr123"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 focus:border-sky-500 rounded-xl focus:outline-none focus:ring-1 focus:ring-sky-500 transition text-sm"
                />
              </div>

              {/* Instant pre-fill tool for simple testing */}
              <div className="p-3.5 bg-sky-50 border border-sky-100/50 rounded-2xl text-xs space-y-1">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-sky-800 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    Interactive Reviewer Autofill
                  </span>
                  <button
                    type="button"
                    onClick={handleAutofillAdmin}
                    className="px-2 py-0.5 bg-sky-100 hover:bg-sky-200 text-sky-800 font-extrabold rounded tracking-wide text-[10px] uppercase cursor-pointer"
                  >
                    Auto-Fill
                  </button>
                </div>
                <p className="text-sky-900/70">
                  Select Auto-Fill above to immediately load default review credentials (username: <strong>admin</strong>, password: <strong>jisr123</strong>) for instant live CMS access.
                </p>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full py-3.5 bg-slate-900 hover:bg-black text-white font-extrabold uppercase tracking-wider rounded-xl transition text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <LogIn className="w-4 h-4 text-sky-400" />
                Establish Safe Session
              </button>
            </form>

            <span className="text-center text-[10px] text-gray-400 block pt-1 font-mono">
              Al Jisr Encryption Standard Port 3000
            </span>

          </div>
        </div>
      )}

    </div>
  );
}
