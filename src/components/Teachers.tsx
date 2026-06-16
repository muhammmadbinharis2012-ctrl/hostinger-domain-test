/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Award, Briefcase, Sparkles, BookOpen, User, BookOpenCheck } from 'lucide-react';
import { Teacher } from '../types';

interface TeachersProps {
  teachers: Teacher[];
}

export default function Teachers({ teachers }: TeachersProps) {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('All');

  // Derive unique specialties list
  const allSpecialties = Array.from(
    new Set(teachers.flatMap((t) => t.specialties))
  );

  const activeTeachers = teachers.filter(t => t.isActive);

  const filteredTeachers = activeTeachers.filter((teacher) => {
    return selectedSpecialty === 'All' || teacher.specialties.includes(selectedSpecialty);
  });

  return (
    <section className="py-16 md:py-24 bg-white" id="teachers-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 block mb-2 font-mono">
            OUR FACULTY
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-gray-900 leading-tight">
            Meet Our World-Class Educators
          </h2>
          <p className="text-gray-500 text-sm mt-3 font-sans">
            Our faculty consists of native-speaking Arabic linguists and highly certified English pedagogy experts, each background-checked and trained in virtual instruction safety.
          </p>
        </div>

        {/* Filter Badges line */}
        <div className="flex flex-wrap gap-2 justify-center mb-10" id="teachers-specialties-bar">
          <button
            onClick={() => setSelectedSpecialty('All')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition cursor-pointer ${
              selectedSpecialty === 'All'
                ? 'bg-sky-500 text-white shadow-sm'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            All Specialists
          </button>
          
          {allSpecialties.map((spec) => (
            <button
              key={spec}
              onClick={() => setSelectedSpecialty(spec)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition cursor-pointer ${
                selectedSpecialty === spec
                  ? 'bg-sky-500 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {spec}
            </button>
          ))}
        </div>

        {/* Teachers Cards Grid */}
        {filteredTeachers.length === 0 ? (
          <div className="text-center py-16 px-4 bg-slate-50 rounded-3xl border border-dashed border-slate-200 max-w-md mx-auto" id="teachers-empty-placeholder">
            <BookOpenCheck className="w-12 h-12 text-slate-300 mx-auto mb-3 animate-pulse" />
            <h3 className="font-sans font-bold text-gray-700 text-sm">No Active Profiles</h3>
            <p className="text-xs text-gray-400 mt-1 max-w-xs mx-auto">
              All faculty database items have been cleared. Administrators can add new certified educators via the Secure Portal.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="teachers-profile-grid">
            {filteredTeachers.map((teacher) => (
              <div 
                key={teacher.id} 
                id={`teacher-profile-card-${teacher.id}`}
                className="bg-white border border-gray-100 p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-6 sm:gap-8 items-start relative overflow-hidden"
              >
                {/* Highlight background strip */}
                <div className="absolute top-0 left-0 w-2 h-full bg-sky-500/80" />

                {/* Key teacher copy */}
                <div className="flex-1 space-y-4 w-full">
                  
                  {/* Meta Header */}
                  <div className="text-center md:text-left">
                    <h3 className="font-sans font-extrabold text-xl text-gray-900 leading-none">
                      {teacher.name}
                    </h3>
                    <span className="inline-flex items-center gap-1 mt-1.5 px-2 py-0.5 bg-gray-50 text-gray-500 rounded border-gray-100 text-[10px] font-mono uppercase tracking-wider font-bold">
                      <Briefcase className="w-3 h-3 text-sky-500" />
                      Experience: {teacher.experience}
                    </span>
                  </div>

                  {/* Biography */}
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-sans font-medium hover:line-clamp-none line-clamp-3 transition-all duration-300">
                    {teacher.biography}
                  </p>

                  {/* Qualifications List */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold font-mono uppercase text-gray-400 tracking-wider flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-sky-500" /> Key Credentials
                    </span>
                    <ul className="space-y-1">
                      {teacher.qualifications.map((qual, idx) => (
                        <li key={idx} className="text-xs text-gray-700 flex items-start gap-1 font-medium font-sans">
                          <span className="text-sky-500 font-bold mr-1">•</span>
                          <span className="leading-tight">{qual}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Specialties Tag loops */}
                  <div className="pt-2">
                    <span className="text-[10px] font-bold font-mono uppercase text-gray-400 tracking-wider block mb-2">Teaching Specialties</span>
                    <div className="flex flex-wrap gap-1.5">
                      {teacher.specialties.map((spec, idx) => (
                        <span 
                          key={idx} 
                          className="px-2 py-1 bg-sky-50 text-sky-700 rounded-lg text-[10px] sm:text-xs font-bold border border-sky-100"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
