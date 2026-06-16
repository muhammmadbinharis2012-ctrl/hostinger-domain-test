/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BookOpen, Award, Globe, ShieldCheck, Users, Calendar, ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (tab: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white py-12 md:py-20 lg:py-24" id="home-hero-section">
      {/* Decorative subtle background highlights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40 -z-10" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-sky-200/50 rounded-full blur-3xl opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          
          {/* Column 1: Copy, Headlines & CTA (Centered layout) */}
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 text-center">
            
            {/* Value Accent Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-100 rounded-full text-xs font-semibold text-sky-700 mx-auto">
              <Globe className="w-4 h-4 text-sky-500 animate-spin-slow" />
              <span>International Online Language Academy</span>
            </div>

            {/* Main Premium Headlines */}
            <h1 className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl text-gray-900 leading-tight tracking-tight">
              Master Arabic & English <br />
              <span className="text-sky-500 relative inline-block animate-pulse-slow">
                With Expert Teachers
                <span className="absolute bottom-1.5 left-0 w-full h-2 bg-sky-100 -z-10" />
              </span>
            </h1>

            {/* Subheading */}
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 leading-relaxed font-sans">
              Interactive live online classes tailored for children, teenagers, and adults globally. Connect 1-on-1 or in micro-groups with Certified Native Instructors who instill academic depth and core values.
            </p>

            {/* Dynamic Interactive Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 py-4 border-t border-b border-gray-100 max-w-2xl mx-auto" id="hero-quick-stats">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <div className="p-2.5 bg-sky-50 rounded-lg text-sky-500">
                  <Users className="w-5 h-5" />
                </div>
                <div className="text-center sm:text-left">
                  <span className="block text-lg font-bold text-gray-900">5,000+</span>
                  <span className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold font-mono">Students</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <div className="p-2.5 bg-sky-50 rounded-lg text-sky-500">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-center sm:text-left">
                  <span className="block text-lg font-bold text-gray-900">100%</span>
                  <span className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold font-mono">Certified Tutors</span>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex flex-col sm:flex-row items-center justify-center gap-3">
                <div className="p-2.5 bg-sky-50 rounded-lg text-sky-500">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-center sm:text-left">
                  <span className="block text-lg font-bold text-gray-900">Live</span>
                  <span className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold font-mono">1-on-1 Classes</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4" id="hero-buttons">
              <button
                onClick={() => onNavigate('admissions')}
                className="w-full sm:w-auto px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-xl shadow-lg shadow-sky-500/25 transition-all text-sm flex items-center justify-center gap-2 cursor-pointer"
                id="hero-enroll-btn"
              >
                Enroll Now
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('admissions')}
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 font-bold rounded-xl shadow-sm transition text-sm flex items-center justify-center gap-2 cursor-pointer"
                id="hero-trial-btn"
              >
                <Calendar className="w-4 h-4 text-sky-500" />
                Book Free Trial Class
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-2 text-xs text-gray-400 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-medium">
              <span>✓ Certified Curriculum</span>
              <span>✓ Flexible Weekly Slots</span>
              <span>✓ Native Arab & Western Educators</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
