/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BookOpen, Clock, Layers, Users, BadgeAlert, Sparkles, Search, SlidersHorizontal, Check, X } from 'lucide-react';
import { Course } from '../types';

interface CoursesProps {
  courses: Course[];
  activeCategory: 'arabic' | 'english' | 'all';
  onNavigateToEnroll: (courseTitle: string) => void;
}

export default function Courses({ courses, activeCategory, onNavigateToEnroll }: CoursesProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'arabic' | 'english'>(
    activeCategory === 'all' ? 'all' : activeCategory
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAge, setSelectedAge] = useState<string>('All');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  
  // Selected single course for detail popup
  const [modalCourse, setModalCourse] = useState<Course | null>(null);

  // Filter logic
  const filteredCourses = courses.filter((course) => {
    if (!course.isActive) return false;
    
    // Category match
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    
    // Search query match
    const matchesQuery = 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.overview.toLowerCase().includes(searchQuery.toLowerCase());
      
    // Age Group match
    const matchesAge = selectedAge === 'All' || course.ageGroup === 'All' || course.ageGroup === selectedAge;
    
    // Level match (simplistic search match)
    const matchesLevel = 
      selectedLevel === 'All' || 
      course.level.toLowerCase().includes(selectedLevel.toLowerCase());

    return matchesCategory && matchesQuery && matchesAge && matchesLevel;
  });

  const ageFilterOptions = ['All', 'Children', 'Teenagers', 'Adults'];
  const levelFilterOptions = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  return (
    <section className="py-16 md:py-24 bg-gray-50/50" id="courses-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 block mb-2 font-mono">
            ACADEMIC CATALOG
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-gray-900 leading-tight">
            Our Premium Live Online Courses
          </h2>
          <p className="text-gray-500 text-sm mt-3 font-sans">
            Choose your language specialty. All courses feature synchronized curriculum designs matching global universities and elite public schools.
          </p>
        </div>

        {/* Filters and Search Bar Container */}
        <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm mb-10 space-y-4" id="catalog-controls-container">
          
          {/* Row 1: Search & Language Switcher */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search courses (e.g. Grammar, Beginners, Kids)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 hover:bg-gray-100/55 focus:bg-white text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 transition font-sans"
              />
            </div>

            {/* Language Segmented Control */}
            <div className="md:col-span-7 flex justify-end gap-1.5 flex-wrap">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wide transition cursor-pointer ${
                  selectedCategory === 'all'
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                All Languages
              </button>
              <button
                onClick={() => setSelectedCategory('arabic')}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wide transition cursor-pointer ${
                  selectedCategory === 'arabic'
                    ? 'bg-sky-500 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Arabic Programs
              </button>
              <button
                onClick={() => setSelectedCategory('english')}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wide transition cursor-pointer ${
                  selectedCategory === 'english'
                    ? 'bg-sky-500 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                English Programs
              </button>
            </div>

          </div>

          {/* Row 2: Secondary Metadata Selectors */}
          <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4">
              
              {/* Age Group Filter */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-gray-400 font-mono tracking-wider uppercase">Age Group:</span>
                <div className="flex rounded-lg bg-gray-100 p-0.5">
                  {ageFilterOptions.map((age) => (
                    <button
                      key={age}
                      onClick={() => setSelectedAge(age)}
                      className={`px-3 py-1 text-[11px] font-bold rounded-md transition cursor-pointer ${
                        selectedAge === age
                          ? 'bg-white text-gray-900 shadow-sm'
                          : 'text-gray-500 hover:text-gray-900'
                      }`}
                    >
                      {age}
                    </button>
                  ))}
                </div>
              </div>

              {/* Level Filter */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-gray-400 font-mono tracking-wider uppercase">Level:</span>
                <div className="flex rounded-lg bg-gray-100 p-0.5">
                  {levelFilterOptions.map((level) => (
                    <button
                      key={level}
                      onClick={() => setSelectedLevel(level)}
                      className={`px-3 py-1 text-[11px] font-bold rounded-md transition cursor-pointer ${
                        selectedLevel === level
                          ? 'bg-white text-gray-900 shadow-sm'
                          : 'text-gray-500 hover:text-gray-900'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Total count badge */}
            <span className="text-xs text-gray-400 font-mono">
              Found {filteredCourses.length} active programs
            </span>
          </div>

        </div>

        {/* Catalog Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="courses-cards-grid">
            {filteredCourses.map((course) => (
              <div 
                key={course.id}
                id={`course-card-${course.id}`}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Category Header Band */}
                <div className={`p-4 ${course.category === 'arabic' ? 'bg-sky-50 text-sky-700' : 'bg-slate-50 text-slate-700'} border-b border-gray-100 flex justify-between items-center`}>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse" />
                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase">
                      {course.category === 'arabic' ? 'ARABIC SPECIALTY' : 'ENGLISH ACADEMY'}
                    </span>
                  </div>
                  <span className="px-2 py-0.5 bg-white text-gray-800 rounded font-bold text-[10px] uppercase tracking-wider border text-right">
                    {course.ageGroup === 'All' ? 'For Kids & Adults' : `For ${course.ageGroup}`}
                  </span>
                </div>

                {/* Main Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-sans font-extrabold text-lg text-gray-900 mb-2 leading-snug hover:text-sky-600 transition cursor-pointer" onClick={() => setModalCourse(course)}>
                      {course.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6 font-sans line-clamp-3">
                      {course.overview}
                    </p>
                  </div>

                  {/* Course Details List */}
                  <div className="space-y-2 border-t border-dashed border-gray-100 pt-4 mb-6">
                    <div className="flex items-center justify-between text-xs font-sans">
                      <span className="text-gray-400 flex items-center gap-1.5 font-medium">
                        <Clock className="w-3.5 h-3.5 text-sky-500" />
                        Duration:
                      </span>
                      <span className="text-gray-700 font-bold font-mono text-[11px]">{course.duration}</span>
                    </div>

                    <div className="flex items-center justify-between text-xs font-sans">
                      <span className="text-gray-400 flex items-center gap-1.5 font-medium">
                        <Layers className="w-3.5 h-3.5 text-sky-500" />
                        Level:
                      </span>
                      <span className="text-gray-700 font-bold">{course.level}</span>
                    </div>

                    <div className="flex items-center justify-between text-xs font-sans">
                      <span className="text-gray-400 flex items-center gap-1.5 font-medium">
                        <Users className="w-3.5 h-3.5 text-sky-500" />
                        Ages:
                      </span>
                      <span className="text-gray-700 font-bold">{course.ageGroup}</span>
                    </div>
                  </div>

                  {/* Pricing and Action Row */}
                  <div className="flex items-center justify-between bg-gray-50 px-3.5 py-2.5 rounded-xl border border-gray-100">
                    <div>
                      <span className="text-[10px] text-gray-400 block uppercase font-mono tracking-wider">Tuition Fees</span>
                      <span className="text-sm font-extrabold text-sky-600 font-mono">{course.price}</span>
                    </div>
                    <div className="flex gap-1.5">
                      <button
                        onClick={() => setModalCourse(course)}
                        className="px-3 py-1.5 text-[10px] font-bold text-gray-700 border border-gray-200 bg-white hover:bg-gray-50 rounded-lg transition cursor-pointer"
                      >
                        Outcomes
                      </button>
                      <button
                        onClick={() => onNavigateToEnroll(course.title)}
                        className="px-3.5 py-1.5 text-[11px] font-bold text-white bg-sky-500 hover:bg-sky-600 rounded-lg transition shadow-sm cursor-pointer"
                      >
                        Enroll
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-dashed rounded-3xl p-16 text-center max-w-lg mx-auto" id="courses-empty-alert">
            <BadgeAlert className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-1">No matching programs found</h3>
            <p className="text-gray-500 text-xs sm:text-sm font-sans">
              Try readjusting your language selection, age filter, or general search string. Or speak directly with our registrar team.
            </p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedAge('All'); setSelectedLevel('All'); setSelectedCategory('all'); }} 
              className="mt-4 px-4 py-2 bg-sky-500 text-white rounded-lg text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Dynamic Detail Dialog Drawer */}
        {modalCourse && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in" id="course-details-modal">
            <div className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl border flex flex-col max-h-[90vh]">
              
              {/* Modal Header */}
              <div className="p-6 bg-slate-900 text-white flex justify-between items-center relative">
                <div>
                  <span className="px-2 py-0.5 bg-sky-500/20 text-sky-400 text-[9px] font-mono tracking-widest uppercase font-bold rounded">
                    {modalCourse.category === 'arabic' ? 'Arabic Program outcomes' : 'English Academy outcomes'}
                  </span>
                  <h3 className="font-extrabold text-xl mt-1 leading-snug">{modalCourse.title}</h3>
                </div>
                <button
                  onClick={() => setModalCourse(null)}
                  className="p-1 text-gray-400 hover:text-white bg-slate-800 rounded-full transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Scrollable Content */}
              <div className="p-6 overflow-y-auto space-y-6 flex-1">
                <div>
                  <h4 className="text-xs font-bold font-mono tracking-wider uppercase text-gray-400 mb-2">Program Overview</h4>
                  <p className="text-gray-600 text-sm leading-relaxed font-sans">{modalCourse.overview}</p>
                </div>

                {/* Metadata Badge Board */}
                <div className="grid grid-cols-3 gap-2 bg-gray-50 p-3 rounded-2xl border border-gray-100 text-center text-xs">
                  <div>
                    <span className="text-gray-400 block pb-0.5">Duration</span>
                    <span className="font-bold text-gray-800 font-mono text-[11px]">{modalCourse.duration}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block pb-0.5">CEFR Level</span>
                    <span className="font-bold text-gray-800">{modalCourse.level}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block pb-0.5">Age Group</span>
                    <span className="font-bold text-gray-800">{modalCourse.ageGroup}</span>
                  </div>
                </div>

                {/* Precise Outcomes List */}
                <div>
                  <h4 className="text-xs font-bold font-mono tracking-wider uppercase text-gray-400 mb-3 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-sky-500" />
                    Key Learning Outcomes (Target Skills)
                  </h4>
                  <ul className="space-y-2.5">
                    {modalCourse.learningOutcomes.map((outcome, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start text-xs sm:text-sm text-gray-600">
                        <span className="p-0.5 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-100 flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3" />
                        </span>
                        <span className="leading-relaxed font-sans">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Footer actions */}
              <div className="p-6 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-gray-400 block uppercase font-mono">FLAT MONTHLY RATE</span>
                  <span className="text-lg font-extrabold text-sky-600 font-mono">{modalCourse.price}</span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setModalCourse(null)}
                    className="px-4 py-2 text-xs font-bold text-gray-500 hover:bg-gray-100 rounded-xl transition"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      onNavigateToEnroll(modalCourse.title);
                      setModalCourse(null);
                    }}
                    className="px-6 py-2.5 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-xl text-xs transition shadow-md shadow-sky-500/10 cursor-pointer"
                  >
                    Book Free Trial
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
