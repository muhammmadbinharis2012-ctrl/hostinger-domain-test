/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { 
  Folder, 
  Upload, 
  Plus, 
  Trash2, 
  Edit3, 
  Settings, 
  BookOpen, 
  Users, 
  Newspaper, 
  MessageSquare, 
  Volume2, 
  Sparkles,
  Search,
  CheckCircle,
  FileText,
  DollarSign,
  Undo2,
  FolderOpen,
  Image as ImageIcon
} from 'lucide-react';
import { Course, Teacher, Blog, Testimonial, Announcement, MediaItem, AdmissionInquiry } from '../types';

interface AdminDashboardProps {
  courses: Course[];
  teachers: Teacher[];
  blogs: Blog[];
  testimonials: Testimonial[];
  announcements: Announcement[];
  media: MediaItem[];
  inquiries: AdmissionInquiry[];
  
  // Custom setter functions passed down from main app state
  setCourses: React.Dispatch<React.SetStateAction<Course[]>>;
  setTeachers: React.Dispatch<React.SetStateAction<Teacher[]>>;
  setBlogs: React.Dispatch<React.SetStateAction<Blog[]>>;
  setTestimonials: React.Dispatch<React.SetStateAction<Testimonial[]>>;
  setAnnouncements: React.Dispatch<React.SetStateAction<Announcement[]>>;
  setMedia: React.Dispatch<React.SetStateAction<MediaItem[]>>;
  onResetAllData: () => void;
}

export default function AdminDashboard({
  courses,
  teachers,
  blogs,
  testimonials,
  announcements,
  media,
  inquiries,
  setCourses,
  setTeachers,
  setBlogs,
  setTestimonials,
  setAnnouncements,
  setMedia,
  onResetAllData
}: AdminDashboardProps) {
  
  const [activeAdminSubTab, setActiveAdminSubTab] = useState<'courses' | 'teachers' | 'blogs' | 'testimonials' | 'announcements' | 'media' | 'inquiries'>('courses');
  
  // Success alerts triggers
  const [bannerAlert, setBannerAlert] = useState<string | null>(null);
  
  // Search state inside CMS
  const [cmsSearch, setCmsSearch] = useState('');

  // Course Form States
  const [editingCourseId, setEditingCourseId] = useState<string | null>(null);
  const [courseForm, setCourseForm] = useState<Omit<Course, 'id'>>({
    title: '',
    category: 'arabic',
    overview: '',
    learningOutcomes: [''],
    duration: '12 Weeks (24 Classes)',
    level: 'Beginner',
    ageGroup: 'All',
    price: '$65 / month',
    isActive: true
  });

  // Teacher Form States
  const [editingTeacherId, setEditingTeacherId] = useState<string | null>(null);
  const [teacherForm, setTeacherForm] = useState<Omit<Teacher, 'id'>>({
    name: '',
    photoUrl: '',
    qualifications: [''],
    experience: '5 Years',
    biography: '',
    specialties: [''],
    isActive: true
  });

  // Blog Form States
  const [editingBlogId, setEditingBlogId] = useState<string | null>(null);
  const [blogForm, setBlogForm] = useState<Omit<Blog, 'id'>>({
    title: '',
    category: 'arabic',
    content: '',
    excerpt: '',
    author: 'Academy Admin Desk',
    date: 'June 16, 2026',
    readTime: '3 min read',
    coverImageUrl: '',
    isActive: true
  });

  // Media Management Form
  const [mediaFolderFilter, setMediaFolderFilter] = useState('All');
  const [newFolderName, setNewFolderName] = useState('');
  const [folders, setFolders] = useState<string[]>(['Teachers', 'Blogs', 'Uncategorized']);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Announcement edit
  const [editingAnnounceId, setEditingAnnounceId] = useState<string | null>(null);
  const [announceForm, setAnnounceForm] = useState<Omit<Announcement, 'id'>>({
    text: '',
    link: '#admissions',
    isActive: true,
    priority: 'normal'
  });

  // Testimonial edit
  const [editingTestimonialId, setEditingTestimonialId] = useState<string | null>(null);
  const [testimonialForm, setTestimonialForm] = useState<Omit<Testimonial, 'id'>>({
    name: '',
    country: 'United Kingdom',
    rating: 5,
    role: 'Student',
    comment: '',
    date: 'June 16, 2026',
    isActive: true
  });

  // Handlers for Custom Alerts
  const triggerAlert = (message: string) => {
    setBannerAlert(message);
    setTimeout(() => {
      setBannerAlert(null);
    }, 3500);
  };

  // 1. Course Actions
  const handleCourseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingCourseId) {
      setCourses(prev => prev.map(c => c.id === editingCourseId ? { ...c, ...courseForm } : c));
      triggerAlert('Course details updated successfully!');
      setEditingCourseId(null);
    } else {
      const newCourse: Course = {
        id: `ar-custom-${Date.now()}`,
        ...courseForm
      };
      setCourses(prev => [newCourse, ...prev]);
      triggerAlert('New course published into the catalog!');
    }
    // reset form
    setCourseForm({
      title: '',
      category: 'arabic',
      overview: '',
      learningOutcomes: [''],
      duration: '12 Weeks (24 Classes)',
      level: 'Beginner',
      ageGroup: 'All',
      price: '$65 / month',
      isActive: true
    });
  };

  const handleEditCourse = (course: Course) => {
    setEditingCourseId(course.id);
    setCourseForm({
      title: course.title,
      category: course.category,
      overview: course.overview,
      learningOutcomes: [...course.learningOutcomes],
      duration: course.duration,
      level: course.level,
      ageGroup: course.ageGroup,
      price: course.price,
      isActive: course.isActive
    });
  };

  const handleDeleteCourse = (id: string) => {
    if (confirm('Are you sure you want to remove this course from catalog?')) {
      setCourses(prev => prev.filter(c => c.id !== id));
      triggerAlert('Course removed.');
    }
  };

  // 2. Teacher Actions
  const handleTeacherSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingTeacherId) {
      setTeachers(prev => prev.map(t => t.id === editingTeacherId ? { ...t, ...teacherForm } : t));
      triggerAlert('Teacher credentials updated!');
      setEditingTeacherId(null);
    } else {
      const newTeacher: Teacher = {
        id: `tc-custom-${Date.now()}`,
        ...teacherForm
      };
      setTeachers(prev => [newTeacher, ...prev]);
      triggerAlert('New instructor profile established!');
    }
    setTeacherForm({
      name: '',
      photoUrl: '',
      qualifications: [''],
      experience: '5 Years',
      biography: '',
      specialties: [''],
      isActive: true
    });
  };

  const handleEditTeacher = (teacher: Teacher) => {
    setEditingTeacherId(teacher.id);
    setTeacherForm({
      name: teacher.name,
      photoUrl: teacher.photoUrl,
      qualifications: [...teacher.qualifications],
      experience: teacher.experience,
      biography: teacher.biography,
      specialties: [...teacher.specialties],
      isActive: teacher.isActive
    });
  };

  const handleDeleteTeacher = (id: string) => {
    if (confirm('Are you sure you want to retire this teacher profile?')) {
      setTeachers(prev => prev.filter(t => t.id !== id));
      triggerAlert('Instructor deleted.');
    }
  };

  // 3. Blog Actions
  const handleBlogSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingBlogId) {
      setBlogs(prev => prev.map(b => b.id === editingBlogId ? { ...b, ...blogForm } : b));
      triggerAlert('Blog post updated fluidly!');
      setEditingBlogId(null);
    } else {
      const newBlog: Blog = {
        id: `bl-custom-${Date.now()}`,
        ...blogForm
      };
      setBlogs(prev => [newBlog, ...prev]);
      triggerAlert('New educational resource published live!');
    }
    setBlogForm({
      title: '',
      category: 'arabic',
      content: '',
      excerpt: '',
      author: 'Academy Admin Desk',
      date: 'June 16, 2026',
      readTime: '3 min read',
      coverImageUrl: '',
      isActive: true
    });
  };

  const handleEditBlog = (blog: Blog) => {
    setEditingBlogId(blog.id);
    setBlogForm({
      title: blog.title,
      category: blog.category,
      content: blog.content,
      excerpt: blog.excerpt,
      author: blog.author,
      date: blog.date,
      readTime: blog.readTime,
      coverImageUrl: blog.coverImageUrl || '',
      isActive: blog.isActive
    });
  };

  const handleDeleteBlog = (id: string) => {
    if (confirm('Delete this blog resource post?')) {
      setBlogs(prev => prev.filter(b => b.id !== id));
      triggerAlert('Article removed.');
    }
  };

  // 4. Media Management & Base64 Converter
  const handleMediaUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const base64Url = reader.result as string;
      const newMediaItem: MediaItem = {
        id: `me-custom-${Date.now()}`,
        name: file.name.substring(0, 30),
        folder: mediaFolderFilter === 'All' ? 'Uncategorized' : mediaFolderFilter,
        type: file.type.includes('video') ? 'video' : 'image',
        url: base64Url,
        size: `${Math.round(file.size / 1024)} KB`,
        dateUploaded: new Date().toISOString().split('T')[0]
      };
      setMedia(prev => [newMediaItem, ...prev]);
      triggerAlert(`File uploaded directly into workspace: ${file.name}`);
    };
    reader.readAsDataURL(file);
  };

  const handleAddNewFolder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFolderName) return;
    if (folders.includes(newFolderName)) {
      alert('Folder already exists!');
      return;
    }
    setFolders(prev => [...prev, newFolderName]);
    setNewFolderName('');
    triggerAlert('New virtual folder added.');
  };

  const handleDeleteMedia = (id: string) => {
    setMedia(prev => prev.filter(m => m.id !== id));
    triggerAlert('Media asset removed.');
  };

  // 5. Announcement Actions
  const handleAnnouncementSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingAnnounceId) {
      setAnnouncements(prev => prev.map(a => a.id === editingAnnounceId ? { ...a, ...announceForm } : a));
      triggerAlert('Header announcement updated!');
      setEditingAnnounceId(null);
    } else {
      const newAnn: Announcement = {
        id: `an-custom-${Date.now()}`,
        ...announceForm
      };
      setAnnouncements(prev => [newAnn, ...prev]);
      triggerAlert('New active highlight pinned!');
    }
    setAnnounceForm({
      text: '',
      link: '#admissions',
      isActive: true,
      priority: 'normal'
    });
  };

  // 6. Testimonial Actions
  const handleTestimonialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingTestimonialId) {
      setTestimonials(prev => prev.map(t => t.id === editingTestimonialId ? { ...t, ...testimonialForm } : t));
      triggerAlert('Student review synchronized!');
      setEditingTestimonialId(null);
    } else {
      const newTest: Testimonial = {
        id: `ts-custom-${Date.now()}`,
        ...testimonialForm
      };
      setTestimonials(prev => [newTest, ...prev]);
      triggerAlert('New student testimonial published!');
    }
    setTestimonialForm({
      name: '',
      country: 'United Kingdom',
      role: 'Student',
      rating: 5,
      comment: '',
      date: 'June 16, 2026',
      isActive: true
    });
  };

  const handleEditTestimonial = (test: Testimonial) => {
    setEditingTestimonialId(test.id);
    setTestimonialForm({
      name: test.name,
      country: test.country,
      rating: test.rating,
      role: test.role,
      comment: test.comment,
      date: test.date,
      isActive: test.isActive
    });
  };

  const handleDeleteTestimonial = (id: string) => {
    if (confirm('Verify testimonial removal?')) {
      setTestimonials(prev => prev.filter(t => t.id !== id));
      triggerAlert('Review removed.');
    }
  };

  const handleEditAnnouncement = (ann: Announcement) => {
    setEditingAnnounceId(ann.id);
    setAnnounceForm({
      text: ann.text,
      link: ann.link || '',
      isActive: ann.isActive,
      priority: ann.priority
    });
  };

  const handleDeleteAnnouncement = (id: string) => {
    if (confirm('Delete this announcement text?')) {
      setAnnouncements(prev => prev.filter(a => a.id !== id));
      triggerAlert('Announcement removed.');
    }
  };

  return (
    <section className="bg-gray-100 min-h-screen py-8 border-t border-gray-200 font-sans" id="admin-management-dashboard">
      
      {/* Absolute Admin Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Alarm notification box */}
        {bannerAlert && (
          <div className="mb-6 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold px-4 py-3 rounded-xl flex items-center gap-2 transform transition-transform animate-pulse shadow-md z-50">
            <CheckCircle className="w-5 h-5 text-emerald-600" />
            <span>{bannerAlert}</span>
          </div>
        )}

        {/* Dashboard Title Panel */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-48 h-48 bg-sky-500/10 rounded-full" />
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] tracking-widest font-mono text-sky-400 uppercase font-semibold">AL JISR ADMIN PANEL</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold mt-1">Academy Content Management System (CMS)</h2>
            <p className="text-xs text-gray-400 mt-1 font-sans">
              Update courses, fees, write blogs, review trial requests, log classroom files, or pin announcement banners.
            </p>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={onResetAllData}
              className="px-4 py-2 bg-slate-800 hover:bg-red-950 hover:text-red-300 text-gray-400 border border-slate-700 hover:border-red-900 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
              title="Reset state indicators to default pre-loaded settings"
            >
              <Undo2 className="w-3.5 h-3.5" />
              Reset All Defaults
            </button>
          </div>
        </div>

        {/* Inner layout wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sideroad Navigation rail (1 Column) */}
          <div className="lg:col-span-1 bg-white border border-gray-200 rounded-2xl p-4 space-y-1 shadow-sm">
            <h3 className="text-[10px] font-mono tracking-widest uppercase text-gray-400 font-extrabold px-3 mb-3">Sections Console</h3>
            
            <button
              onClick={() => { setActiveAdminSubTab('courses'); setCmsSearch(''); }}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-bold flex items-center justify-between transition ${
                activeAdminSubTab === 'courses' ? 'bg-sky-500 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <span className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>Courses Catalog</span>
              </span>
              <span className="font-mono text-[10px] px-1.5 py-0.2 bg-black/10 rounded">{courses.length}</span>
            </button>

            <button
              onClick={() => { setActiveAdminSubTab('teachers'); setCmsSearch(''); }}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-bold flex items-center justify-between transition ${
                activeAdminSubTab === 'teachers' ? 'bg-sky-500 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Manage Teachers</span>
              </span>
              <span className="font-mono text-[10px] px-1.5 py-0.2 bg-black/10 rounded">{teachers.length}</span>
            </button>

            <button
              onClick={() => { setActiveAdminSubTab('blogs'); setCmsSearch(''); }}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-bold flex items-center justify-between transition ${
                activeAdminSubTab === 'blogs' ? 'bg-sky-500 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <span className="flex items-center gap-2">
                <Newspaper className="w-4 h-4" />
                <span>Blog Articles</span>
              </span>
              <span className="font-mono text-[10px] px-1.5 py-0.2 bg-black/10 rounded">{blogs.length}</span>
            </button>

            <button
              onClick={() => { setActiveAdminSubTab('media'); setCmsSearch(''); }}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-bold flex items-center justify-between transition ${
                activeAdminSubTab === 'media' ? 'bg-sky-500 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <span className="flex items-center gap-2">
                <Folder className="w-4 h-4" />
                <span>Media Library</span>
              </span>
              <span className="font-mono text-[10px] px-1.5 py-0.2 bg-black/10 rounded">{media.length}</span>
            </button>

            <button
              onClick={() => { setActiveAdminSubTab('announcements'); setCmsSearch(''); }}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-bold flex items-center justify-between transition ${
                activeAdminSubTab === 'announcements' ? 'bg-sky-500 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <span className="flex items-center gap-2">
                <Volume2 className="w-4 h-4" />
                <span>Header Notices</span>
              </span>
              <span className="font-mono text-[10px] px-1.5 py-0.2 bg-black/10 rounded">{announcements.length}</span>
            </button>

            <button
              onClick={() => { setActiveAdminSubTab('testimonials'); setCmsSearch(''); }}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-bold flex items-center justify-between transition ${
                activeAdminSubTab === 'testimonials' ? 'bg-sky-500 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <span className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                <span>Student Reviews</span>
              </span>
              <span className="font-mono text-[10px] px-1.5 py-0.2 bg-black/10 rounded">{testimonials.length}</span>
            </button>

            <button
              onClick={() => { setActiveAdminSubTab('inquiries'); setCmsSearch(''); }}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-bold flex items-center justify-between transition ${
                activeAdminSubTab === 'inquiries' ? 'bg-sky-500 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <span className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>Admissions Requests</span>
              </span>
              <span className="font-mono text-[10px] px-1.5 py-0.2 bg-black/10 rounded">{inquiries.length}</span>
            </button>

          </div>

          {/* Active Editorial Desk (3 Columns) */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* 1. COURSES CMS PANEL */}
            {activeAdminSubTab === 'courses' && (
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6" id="courses-cms-panel">
                
                {/* Form header */}
                <div className="border-b pb-4">
                  <h3 className="font-bold text-gray-900 text-base">{editingCourseId ? '⚠️ Editing Course details' : '➕ Set up a New Course Program'}</h3>
                  <p className="text-xs text-gray-500">Provide curriculum metrics. The card displays live instantly in catalog.</p>
                </div>

                {/* Course Setup Form */}
                <form onSubmit={handleCourseSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-gray-400 uppercase">Course Title</label>
                      <input
                        type="text"
                        required
                        value={courseForm.title}
                        onChange={(e) => setCourseForm({ ...courseForm, title: e.target.value })}
                        placeholder="e.g. Arabic Grammar Clinics"
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs"
                      />
                    </div>
                    
                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-gray-400 uppercase">Category</label>
                      <select
                        value={courseForm.category}
                        onChange={(e) => setCourseForm({ ...courseForm, category: e.target.value as 'arabic' | 'english' })}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-700 font-semibold"
                      >
                        <option value="arabic">Arabic Specialty</option>
                        <option value="english">English Specialty</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-gray-400 uppercase">Age Group Target</label>
                      <select
                        value={courseForm.ageGroup}
                        onChange={(e) => setCourseForm({ ...courseForm, ageGroup: e.target.value as 'Children' | 'Teenagers' | 'Adults' | 'All' })}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-700 font-semibold"
                      >
                        <option value="All">All Audience</option>
                        <option value="Children">Children</option>
                        <option value="Teenagers">Teenagers</option>
                        <option value="Adults">Adults</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-gray-400 uppercase">Duration Description</label>
                      <input
                        type="text"
                        required
                        value={courseForm.duration}
                        onChange={(e) => setCourseForm({ ...courseForm, duration: e.target.value })}
                        placeholder="e.g. 12 Weeks (24 Classes)"
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-gray-400 uppercase">Syllabus level</label>
                      <input
                        type="text"
                        required
                        value={courseForm.level}
                        onChange={(e) => setCourseForm({ ...courseForm, level: e.target.value })}
                        placeholder="e.g. Beginner (CEFR A1)"
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-gray-400 uppercase">Tuition Fee quote</label>
                      <input
                        type="text"
                        required
                        value={courseForm.price}
                        onChange={(e) => setCourseForm({ ...courseForm, price: e.target.value })}
                        placeholder="e.g. $65 / month"
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[11px] font-bold text-gray-400 uppercase">Program Overview</label>
                    <textarea
                      rows={2}
                      required
                      value={courseForm.overview}
                      onChange={(e) => setCourseForm({ ...courseForm, overview: e.target.value })}
                      placeholder="Write brief description..."
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs"
                    />
                  </div>

                  {/* Outcomes dynamic list */}
                  <div className="space-y-2">
                    <label className="block text-[11px] font-bold text-gray-400 uppercase">Key Learning Outcomes</label>
                    {courseForm.learningOutcomes.map((outcome, idx) => (
                      <div key={idx} className="flex gap-2 items-center">
                        <input
                          type="text"
                          required
                          value={outcome}
                          onChange={(e) => {
                            const updated = [...courseForm.learningOutcomes];
                            updated[idx] = e.target.value;
                            setCourseForm({ ...courseForm, learningOutcomes: updated });
                          }}
                          placeholder="e.g. Pronounce letters with Harakaat accurately."
                          className="flex-1 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs animate-fade-in"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const updated = courseForm.learningOutcomes.filter((_, i) => i !== idx);
                            setCourseForm({ ...courseForm, learningOutcomes: updated });
                          }}
                          className="p-1 px-2.5 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg text-xs font-bold"
                          title="delete outcome line"
                        >
                          X
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => setCourseForm({ ...courseForm, learningOutcomes: [...courseForm.learningOutcomes, ''] })}
                      className="py-1 px-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-[11px] font-bold flex items-center gap-1.5"
                    >
                      <Plus className="w-3.5 h-3.5 text-sky-500" />
                      Add outcome cell
                    </button>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t flex justify-end gap-2">
                    {editingCourseId && (
                      <button
                        type="button"
                        onClick={() => {
                          setEditingCourseId(null);
                          setCourseForm({
                            title: '', category: 'arabic', overview: '', learningOutcomes: [''], duration: '', level: '', ageGroup: 'All', price: '', isActive: true
                          });
                        }}
                        className="px-4 py-2 bg-gray-100 text-gray-500 rounded-lg text-xs font-semibold"
                      >
                        Cancel
                      </button>
                    )}
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-sky-500 text-white rounded-lg text-xs font-bold shadow-md shadow-sky-500/10 cursor-pointer"
                    >
                      {editingCourseId ? 'Save Course config' : 'Publish Course'}
                    </button>
                  </div>

                </form>

                {/* Interactive listing and editing list */}
                <div className="border-t pt-6 space-y-3">
                  <h4 className="text-[11px] font-mono tracking-wider uppercase text-gray-400 font-extrabold mb-2">Live Catalog Programs</h4>
                  <div className="grid grid-cols-1 gap-2" id="cms-courses-loops">
                    {courses.map((course) => (
                      <div key={course.id} className="p-3 bg-gray-50 rounded-xl border border-gray-100 flex justify-between items-center text-xs">
                        <div>
                          <span className="font-extrabold text-gray-900 pr-2">{course.title}</span>
                          <span className={`px-1.5 py-0.2 rounded text-[9px] uppercase tracking-wider font-mono font-bold ${course.category === 'arabic' ? 'bg-sky-100 text-sky-800' : 'bg-slate-100 text-slate-800'}`}>
                            {course.category}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEditCourse(course)}
                            className="p-1.5 bg-sky-50 text-sky-600 rounded-lg hover:bg-sky-100 transition"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDeleteCourse(course.id)}
                            className="p-1.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* 2. TEACHERS CMS PANEL */}
            {activeAdminSubTab === 'teachers' && (
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6" id="teachers-cms-panel">
                
                {/* Panel Header */}
                <div className="border-b pb-4">
                  <h3 className="font-bold text-gray-900 text-base">{editingTeacherId ? '⚠️ Edit Instructor file' : '➕ Authorize New Instructor Profile'}</h3>
                  <p className="text-xs text-gray-500">Provide certified background, experience index terms, and portrait references.</p>
                </div>

                {/* Form configuration */}
                <form onSubmit={handleTeacherSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-gray-400 uppercase">Full Legal Name</label>
                      <input
                        type="text"
                        required
                        value={teacherForm.name}
                        onChange={(e) => setTeacherForm({ ...teacherForm, name: e.target.value })}
                        placeholder="e.g. Ustadh Salim Al-Azhar"
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-gray-400 uppercase">Experience Index</label>
                      <input
                        type="text"
                        required
                        value={teacherForm.experience}
                        onChange={(e) => setTeacherForm({ ...teacherForm, experience: e.target.value })}
                        placeholder="e.g. 10 Years"
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-gray-400 uppercase">Portrait URL Reference</label>
                      <input
                        type="text"
                        value={teacherForm.photoUrl}
                        onChange={(e) => setTeacherForm({ ...teacherForm, photoUrl: e.target.value })}
                        placeholder="Paste URL (or leave blank to assign mock default)"
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs font-mono"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[11px] font-bold text-gray-400 uppercase">Professional Biography</label>
                    <textarea
                      rows={2}
                      required
                      value={teacherForm.biography}
                      onChange={(e) => setTeacherForm({ ...teacherForm, biography: e.target.value })}
                      placeholder="Tell students about teaching methodologies..."
                      className="w-full px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Qualifications loops */}
                    <div className="space-y-2">
                      <label className="block text-[11px] font-bold text-gray-400 uppercase">Certified Credentials</label>
                      {teacherForm.qualifications.map((qual, idx) => (
                        <div key={idx} className="flex gap-2">
                          <input
                            type="text"
                            required
                            value={qual}
                            onChange={(e) => {
                              const updated = [...teacherForm.qualifications];
                              updated[idx] = e.target.value;
                              setTeacherForm({ ...teacherForm, qualifications: updated });
                            }}
                            placeholder="e.g. BA in Applied Linguistics"
                            className="flex-1 px-3 py-1 bg-gray-50 border border-gray-200 rounded-lg text-xs"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              const updated = teacherForm.qualifications.filter((_, i) => i !== idx);
                              setTeacherForm({ ...teacherForm, qualifications: updated });
                            }}
                            className="bg-red-50 text-red-600 px-2 rounded-lg text-xs"
                          >
                            X
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => setTeacherForm({ ...teacherForm, qualifications: [...teacherForm.qualifications, ''] })}
                        className="py-1 px-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-[10px] font-bold flex items-center gap-1"
                      >
                        <Plus className="w-3.5 h-3.5 text-sky-500" />
                        Credentials
                      </button>
                    </div>

                    {/* Specialties loops */}
                    <div className="space-y-2">
                      <label className="block text-[11px] font-bold text-gray-400 uppercase">Teaching Specialties</label>
                      {teacherForm.specialties.map((spec, idx) => (
                        <div key={idx} className="flex gap-2">
                          <input
                            type="text"
                            required
                            value={spec}
                            onChange={(e) => {
                              const updated = [...teacherForm.specialties];
                              updated[idx] = e.target.value;
                              setTeacherForm({ ...teacherForm, specialties: updated });
                            }}
                            placeholder="e.g. Quran Tajweed"
                            className="flex-1 px-3 py-1 bg-gray-50 border border-gray-200 rounded-lg text-xs"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              const updated = teacherForm.specialties.filter((_, i) => i !== idx);
                              setTeacherForm({ ...teacherForm, specialties: updated });
                            }}
                            className="bg-red-50 text-red-600 px-2 rounded-lg text-xs"
                          >
                            X
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => setTeacherForm({ ...teacherForm, specialties: [...teacherForm.specialties, ''] })}
                        className="py-1 px-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-[10px] font-bold flex items-center gap-1"
                      >
                        <Plus className="w-3.5 h-3.5 text-sky-500" />
                        Specialties Tag
                      </button>
                    </div>

                  </div>

                  {/* Submit buttons */}
                  <div className="pt-4 border-t flex justify-end gap-2">
                    {editingTeacherId && (
                      <button
                        type="button"
                        onClick={() => {
                          setEditingTeacherId(null);
                          setTeacherForm({ name: '', photoUrl: '', qualifications: [''], experience: '', biography: '', specialties: [''], isActive: true });
                        }}
                        className="px-4 py-2 bg-gray-100 text-gray-500 rounded-lg text-xs font-semibold"
                      >
                        Cancel
                      </button>
                    )}
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-sky-500 text-white rounded-lg text-xs font-bold shadow-md shadow-sky-500/10 cursor-pointer"
                    >
                      {editingTeacherId ? 'Save Instructor config' : 'Save Profile'}
                    </button>
                  </div>

                </form>

                {/* Teachers profiles edit index */}
                <div className="border-t pt-6 space-y-3">
                  <h4 className="text-[11px] font-mono tracking-wider uppercase text-gray-400 font-extrabold mb-2">Faculty Index Card Registers</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {teachers.map((teacher) => (
                      <div key={teacher.id} className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex gap-4 items-center">
                        <img
                          src={teacher.photoUrl || 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200'}
                          alt={teacher.name}
                          className="w-10 h-10 rounded-full object-cover border"
                          referrerPolicy="no-referrer"
                        />
                        <div className="flex-1 text-xs">
                          <strong className="block text-gray-900 font-semibold">{teacher.name}</strong>
                          <span className="text-gray-400 block font-mono text-[9px] uppercase tracking-wider">{teacher.experience} Experience</span>
                        </div>
                        <div className="flex gap-1.5">
                          <button
                            onClick={() => handleEditTeacher(teacher)}
                            className="p-1.5 bg-sky-50 text-sky-600 rounded-lg hover:bg-sky-100"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDeleteTeacher(teacher.id)}
                            className="p-1.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* 3. BLOG POSTS CMS PANEL */}
            {activeAdminSubTab === 'blogs' && (
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6" id="blogs-cms-panel">
                
                {/* Panel Header */}
                <div className="border-b pb-4">
                  <h3 className="font-bold text-gray-900 text-base">{editingBlogId ? '⚠️ Edit Article config' : '➕ Author an Educational Article / Notice'}</h3>
                  <p className="text-xs text-gray-500">Render rich markdown content or announcement summaries on language loops.</p>
                </div>

                {/* Form Layout */}
                <form onSubmit={handleBlogSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-gray-400 uppercase">Article Title</label>
                      <input
                        type="text"
                        required
                        value={blogForm.title}
                        onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                        placeholder="e.g. Master English Pronouns in 5 mins"
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-gray-400 uppercase">Category Tag</label>
                      <select
                        value={blogForm.category}
                        onChange={(e) => setBlogForm({ ...blogForm, category: e.target.value as 'arabic' | 'english' | 'general' | 'announcement' })}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-700 font-semibold"
                      >
                        <option value="arabic">Arabic Resources</option>
                        <option value="english">English Resources</option>
                        <option value="general">Educational general tips</option>
                        <option value="announcement">Academy Notice / Announcement</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-gray-400 uppercase">Summary Excerpt</label>
                      <input
                        type="text"
                        required
                        value={blogForm.excerpt}
                        onChange={(e) => setBlogForm({ ...blogForm, excerpt: e.target.value })}
                        placeholder="Brief summary sentence displayed in cards previews..."
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-gray-400 uppercase">Cover Image reference URL</label>
                      <input
                        type="text"
                        value={blogForm.coverImageUrl}
                        onChange={(e) => setBlogForm({ ...blogForm, coverImageUrl: e.target.value })}
                        placeholder="Paste URL or leave empty for random placeholder"
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs font-mono"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[11px] font-bold text-gray-400 uppercase">Complete Article Body (Support Double Carriage Returns for Paragraphs)</label>
                    <textarea
                      rows={5}
                      required
                      value={blogForm.content}
                      onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })}
                      placeholder="Write your article. Use ## for heading levels or - for simple list bullets..."
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs font-mono leading-relaxed"
                    />
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t flex justify-end gap-2">
                    {editingBlogId && (
                      <button
                        type="button"
                        onClick={() => {
                          setEditingBlogId(null);
                          setBlogForm({ title: '', category: 'arabic', content: '', excerpt: '', author: 'Academy Admin Desk', date: '', readTime: '', coverImageUrl: '', isActive: true });
                        }}
                        className="px-4 py-2 bg-gray-100 text-gray-500 rounded-lg text-xs font-semibold"
                      >
                        Cancel
                      </button>
                    )}
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-sky-500 text-white rounded-lg text-xs font-bold shadow-md shadow-sky-500/10 cursor-pointer"
                    >
                      {editingBlogId ? 'Sync Article' : 'Publish Article'}
                    </button>
                  </div>

                </form>

                {/* Published lists */}
                <div className="border-t pt-6 space-y-3">
                  <h4 className="text-[11px] font-mono tracking-wider uppercase text-gray-400 font-extrabold mb-2">Published Guides Indexes</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {blogs.map((b) => (
                      <div key={b.id} className="p-3 bg-gray-50 rounded-xl border border-gray-100 flex justify-between items-center text-xs">
                        <div>
                          <strong className="block text-gray-900 font-semibold">{b.title}</strong>
                          <span className="text-gray-400 text-[10px] font-mono font-bold capitalize">{b.category} • {b.date}</span>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEditBlog(b)}
                            className="p-1.5 bg-sky-50 text-sky-600 rounded-lg hover:bg-sky-100"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDeleteBlog(b.id)}
                            className="p-1.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 animate-fade-in"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* 4. MEDIA LIBRARY PANELS */}
            {activeAdminSubTab === 'media' && (
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6 animate-fade-in" id="media-library-panel">
                
                {/* Header */}
                <div className="border-b pb-4 flex justify-between flex-wrap items-center gap-2">
                  <div>
                    <h3 className="font-bold text-gray-900 text-base">Media Library Asset Cabinets</h3>
                    <p className="text-xs text-gray-500">Upload portraits and cover pictures directly. Organized in folders.</p>
                  </div>
                  
                  {/* Base64 uploader button */}
                  <div className="flex gap-2">
                    <button 
                      onClick={() => fileInputRef.current?.click()}
                      className="px-4 py-2.5 bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold rounded-xl flex items-center gap-2 shadow-sm cursor-pointer"
                    >
                      <Upload className="w-4 h-4" />
                      Upload Local File
                    </button>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleMediaUpload}
                      accept="image/*,video/*"
                      className="hidden"
                    />
                  </div>
                </div>

                {/* Create Virtual Folder inside list */}
                <form onSubmit={handleAddNewFolder} className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex gap-2 items-center text-xs">
                  <span className="font-bold text-gray-600 uppercase font-mono">Create Virtual Folder:</span>
                  <input
                    type="text"
                    required
                    value={newFolderName}
                    onChange={(e) => setNewFolderName(e.target.value)}
                    placeholder="e.g. StudentGalleries"
                    className="flex-1 px-3 py-1.5 bg-white border border-gray-200 rounded-lg"
                  />
                  <button type="submit" className="py-1.5 px-3 bg-slate-900 text-white font-bold rounded-lg cursor-pointer">
                    Create
                  </button>
                </form>

                {/* Folders select directory */}
                <div className="flex gap-2 items-center">
                  <span className="text-xs font-bold text-gray-400 uppercase font-mono">Folder Select:</span>
                  <div className="flex gap-1.5 flex-wrap">
                    <button 
                      onClick={() => setMediaFolderFilter('All')}
                      className={`px-3 py-1.5 text-[11px] rounded-lg font-bold transition flex items-center gap-1 cursor-pointer ${mediaFolderFilter === 'All' ? 'bg-sky-100 text-sky-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-150'}`}
                    >
                      <FolderOpen className="w-3.5 h-3.5" />
                      All Cabinets
                    </button>
                    {folders.map(f => (
                      <button
                        key={f}
                        onClick={() => setMediaFolderFilter(f)}
                        className={`px-3 py-1.5 text-[11px] rounded-lg font-bold transition flex items-center gap-1 cursor-pointer ${mediaFolderFilter === f ? 'bg-sky-100 text-sky-700' : 'bg-gray-100 text-gray-600'}`}
                      >
                        <Folder className="w-3.5 h-3.5" />
                        {f}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Display Media Assets Loops */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t">
                  {media
                    .filter(m => mediaFolderFilter === 'All' || m.folder === mediaFolderFilter)
                    .map((item) => (
                      <div key={item.id} className="group bg-gray-50 border rounded-2xl overflow-hidden shadow-sm relative flex flex-col justify-between">
                        
                        {/* Display Asset visual */}
                        <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden border-b flex items-center justify-center">
                          <img
                            src={item.url}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        {/* Description labels */}
                        <div className="p-2.5 text-[10px] space-y-1 bg-white">
                          <strong className="block text-gray-800 font-semibold truncate" title={item.name}>{item.name}</strong>
                          <span className="text-gray-400 font-mono block">{item.size} • folder: {item.folder}</span>
                        </div>

                        {/* Floating actions uploader */}
                        <button
                          onClick={() => handleDeleteMedia(item.id)}
                          className="absolute top-2 right-2 p-1 bg-white/90 rounded-md text-red-600 hover:bg-red-100 hover:text-red-700 transition opacity-0 group-hover:opacity-100"
                          title="Delete media from lists"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                </div>

              </div>
            )}

            {/* 5. ANNOUNCEMENTS CMS PANELS */}
            {activeAdminSubTab === 'announcements' && (
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6" id="notices-cms-panel">
                
                {/* Header info */}
                <div className="border-b pb-4">
                  <h3 className="font-bold text-gray-900 text-base">{editingAnnounceId ? '⚠️ Edit Notice banner' : '➕ Set Up New Top Announcement'}</h3>
                  <p className="text-xs text-gray-500">Pinnacle textual notices broadcasted continuously in the top system navigation bar.</p>
                </div>

                {/* Form layout */}
                <form onSubmit={handleAnnouncementSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-gray-400">Notice Text Line</label>
                      <input
                        type="text"
                        required
                        value={announceForm.text}
                        onChange={(e) => setAnnounceForm({ ...announceForm, text: e.target.value })}
                        placeholder="e.g. Finalize summer intensive registrations today!"
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-gray-400">Target Router Link (Optional hash or tab ID)</label>
                      <input
                        type="text"
                        value={announceForm.link}
                        onChange={(e) => setAnnounceForm({ ...announceForm, link: e.target.value })}
                        placeholder="e.g. #admissions"
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-gray-400">Priority Tier</label>
                      <select
                        value={announceForm.priority}
                        onChange={(e) => setAnnounceForm({ ...announceForm, priority: e.target.value as 'high' | 'normal' })}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs font-semibold"
                      >
                        <option value="normal">Normal notice (White/Gray accent)</option>
                        <option value="high">High Priority highlight card</option>
                      </select>
                    </div>

                    <div className="flex items-center gap-2 pt-6">
                      <input
                        type="checkbox"
                        id="announce-form-active"
                        checked={announceForm.isActive}
                        onChange={(e) => setAnnounceForm({ ...announceForm, isActive: e.target.checked })}
                        className="h-4 w-4 bg-sky-500 border rounded"
                      />
                      <label htmlFor="announce-form-active" className="text-xs text-gray-700 font-bold block">Broadcast into layout immediately</label>
                    </div>
                  </div>

                  {/* Form actions */}
                  <div className="pt-4 border-t flex justify-end gap-2">
                    {editingAnnounceId && (
                      <button
                        type="button"
                        onClick={() => {
                          setEditingAnnounceId(null);
                          setAnnounceForm({ text: '', link: '', isActive: true, priority: 'normal' });
                        }}
                        className="px-4 py-2 bg-gray-100 text-gray-500 rounded-lg text-xs font-semibold"
                      >
                        Cancel
                      </button>
                    )}
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-sky-500 text-white rounded-lg text-xs font-bold shadow-md cursor-pointer"
                    >
                      {editingAnnounceId ? 'Update Notice' : 'Broadcast Notice'}
                    </button>
                  </div>

                </form>

                {/* Display Announcements index listing */}
                <div className="border-t pt-6 space-y-3">
                  <h4 className="text-[11px] font-mono tracking-wider uppercase text-gray-400 font-extrabold mb-2">Notice registers</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {announcements.map((ann) => (
                      <div key={ann.id} className="p-3 bg-gray-50 rounded-xl border border-gray-100 flex justify-between items-center text-xs">
                        <div className="flex items-center gap-2">
                          <span className={`w-2.5 h-2.5 rounded-full ${ann.isActive ? 'bg-emerald-400 animate-pulse' : 'bg-gray-300'}`} />
                          <div>
                            <strong className="block text-gray-900 font-semibold">{ann.text}</strong>
                            <p className="text-[10px] text-gray-400 font-mono">Priority: {ann.priority} • link: {ann.link || 'none'}</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEditAnnouncement(ann)}
                            className="p-1.5 bg-sky-50 text-sky-600 rounded-lg hover:bg-sky-100"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDeleteAnnouncement(ann.id)}
                            className="p-1.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* 6. TESTIMONIALS CMS PANEL */}
            {activeAdminSubTab === 'testimonials' && (
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6" id="testimonials-cms-panel">
                
                {/* Panel Header */}
                <div className="border-b pb-4">
                  <h3 className="font-bold text-gray-900 text-base">{editingTestimonialId ? '⚠️ Edit Testimony' : '➕ Publish New Parent/Student Testimonial'}</h3>
                  <p className="text-xs text-gray-500">Inject verified testimonials from global sources to build trust cards.</p>
                </div>

                {/* Form layout */}
                <form onSubmit={handleTestimonialSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-gray-400 uppercase">Author Name</label>
                      <input
                        type="text"
                        required
                        value={testimonialForm.name}
                        onChange={(e) => setTestimonialForm({ ...testimonialForm, name: e.target.value })}
                        placeholder="e.g. Amina Al-Harith"
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-gray-400 uppercase">Sourced Country</label>
                      <input
                        type="text"
                        required
                        value={testimonialForm.country}
                        onChange={(e) => setTestimonialForm({ ...testimonialForm, country: e.target.value })}
                        placeholder="e.g. United States"
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-gray-400 uppercase">Author Designation / Role</label>
                      <select
                        value={testimonialForm.role}
                        onChange={(e) => setTestimonialForm({ ...testimonialForm, role: e.target.value as 'Student' | 'Parent' })}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-700 font-bold"
                      >
                        <option value="Parent">Parent</option>
                        <option value="Student">Student</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-gray-400 uppercase">Rating Index (1-5 Stars)</label>
                      <select
                        value={testimonialForm.rating}
                        onChange={(e) => setTestimonialForm({ ...testimonialForm, rating: parseInt(e.target.value) })}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs font-bold text-amber-600"
                      >
                        <option value="5">★★★★★ (5 Stars)</option>
                        <option value="4">★★★★☆ (4 Stars)</option>
                        <option value="3">★★★☆☆ (3 Stars)</option>
                        <option value="2">★★☆☆☆ (2 Stars)</option>
                        <option value="1">★☆☆☆☆ (1 Star)</option>
                      </select>
                    </div>

                    <div className="flex items-center gap-2 pt-6">
                      <input
                        type="checkbox"
                        id="testimonial-active"
                        checked={testimonialForm.isActive}
                        onChange={(e) => setTestimonialForm({ ...testimonialForm, isActive: e.target.checked })}
                        className="h-4 w-4 text-sky-500 rounded"
                      />
                      <label htmlFor="testimonial-active" className="text-xs text-gray-700 font-bold block">Display in Carousel reviews</label>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[11px] font-bold text-gray-400 uppercase">Comment Narrative Text</label>
                    <textarea
                      rows={3}
                      required
                      value={testimonialForm.comment}
                      onChange={(e) => setTestimonialForm({ ...testimonialForm, comment: e.target.value })}
                      placeholder="Input direct quote message left by students..."
                      className="w-full px-3 py-1.5 bg-gray-50 border border-gray-200 text-xs"
                    />
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t flex justify-end gap-2">
                    {editingTestimonialId && (
                      <button
                        type="button"
                        onClick={() => {
                          setEditingTestimonialId(null);
                          setTestimonialForm({ name: '', country: 'United Kingdom', rating: 5, role: 'Student', comment: '', date: '', isActive: true });
                        }}
                        className="px-4 py-2 bg-gray-100 text-gray-500 rounded-lg text-xs font-semibold"
                      >
                        Cancel
                      </button>
                    )}
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-sky-500 text-white rounded-lg text-xs font-bold shadow-md cursor-pointer"
                    >
                      {editingTestimonialId ? 'Sync Testimony' : 'Save Testimony'}
                    </button>
                  </div>

                </form>

                {/* Display loops index */}
                <div className="border-t pt-6 space-y-3">
                  <h4 className="text-[11px] font-mono tracking-wider uppercase text-gray-400 font-extrabold mb-2">Live Testimony Catalog Cards</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {testimonials.map((t) => (
                      <div key={t.id} className="p-3 bg-gray-50 rounded-xl border border-gray-100 flex justify-between items-center text-xs">
                        <div>
                          <strong className="block text-gray-900 font-semibold">{t.name} ({t.country})</strong>
                          <p className="text-[10px] text-gray-400 font-mono truncate max-w-lg">{t.comment}</p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEditTestimonial(t)}
                            className="p-1.5 bg-sky-50 text-sky-600 rounded-lg hover:bg-sky-100"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDeleteTestimonial(t.id)}
                            className="p-1.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* 7. ADMISSIONS REQUEST LIST PANELS */}
            {activeAdminSubTab === 'inquiries' && (
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6" id="inquiries-cms-panel">
                
                <div className="border-b pb-4">
                  <h3 className="font-bold text-gray-900 text-base">Inbound Online Registration Requests</h3>
                  <p className="text-xs text-gray-500">Track child/adult live registrations and diagnostics free trial bookings live.</p>
                </div>

                <div className="space-y-4">
                  {inquiries.length > 0 ? (
                    inquiries.map((inq) => (
                      <div key={inq.id} className="p-4 bg-gray-50 rounded-2xl border border-gray-100 space-y-3 text-xs sm:text-sm animate-fade-in">
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="text-[10px] uppercase font-mono tracking-wider text-sky-600 bg-sky-50 px-2 py-0.5 rounded font-bold">
                              {inq.classType} Format
                            </span>
                            <span className="ml-2 text-gray-400 font-mono text-[10px]">{inq.date}</span>
                            <h4 className="font-extrabold text-sm sm:text-base text-gray-900 mt-1">{inq.fullName}</h4>
                          </div>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${inq.status === 'pending' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'}`}>
                            {inq.status}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-white p-3 rounded-xl border border-gray-150/40 text-xs">
                          <div>
                            <span className="text-gray-400 block">Interest:</span>
                            <strong className="text-sky-600 font-bold">{inq.courseInterest || 'General Dual Specialty'}</strong>
                          </div>
                          <div>
                            <span className="text-gray-400 block">Age Target:</span>
                            <span className="font-semibold text-gray-800">{inq.ageGroup}</span>
                          </div>
                          <div>
                            <span className="text-gray-400 block">WhatsApp:</span>
                            <span className="font-mono text-gray-800 font-semibold">{inq.whatsappNumber}</span>
                          </div>
                          <div>
                            <span className="text-gray-400 block">Email Desk:</span>
                            <span className="text-gray-800 font-semibold break-all">{inq.email}</span>
                          </div>
                        </div>

                        {inq.notes && (
                          <div className="p-2.5 bg-sky-50/50 border border-sky-100/30 rounded-lg text-xs italic text-gray-600">
                            <strong>Note:</strong> "{inq.notes}"
                          </div>
                        )}

                        <div className="flex justify-end gap-2 pt-2 border-t border-dashed">
                          <a 
                            href={`https://wa.me/${inq.whatsappNumber.replace(/[^0-9]/g, '')}?text=Hello%20${inq.fullName},%20this%20is%20Al%20Jisr%20Academy%20official%20office...`}
                            target="_blank" 
                            rel="no-referrer"
                            className="px-3.5 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-xs font-bold shadow-sm"
                          >
                            Launch WhatsApp Chat
                          </a>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-12 text-center border border-dashed rounded-xl space-y-2">
                      <p className="text-gray-500 text-xs sm:text-sm font-semibold">No inquiries logged yet</p>
                      <p className="text-gray-400 text-[10px] font-sans">Submit forms from the Admissions page to preview them logged here dynamically.</p>
                    </div>
                  )}
                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
