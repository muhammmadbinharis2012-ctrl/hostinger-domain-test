/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Testimonial } from '../types';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const activeTestimonials = testimonials.filter(t => t.isActive);

  return (
    <section className="py-16 md:py-24 bg-gray-50/50" id="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 block mb-2 font-mono">
            TRUST & CREDIBILITY
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-gray-900 leading-tight">
            Loved By Parents & Students Worldwide
          </h2>
          <p className="text-gray-500 text-sm mt-3 font-sans">
            Read stories of how our interactive teaching rooms have sparked confidence and real speaking breakthroughs in students from the USA, Canada, and Europe.
          </p>
        </div>

        {/* Highlighted Testimonial Carousel removed as requested */}

        {/* Global Impact Summary banner */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 text-center" id="testimonials-stats-board">
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400 mb-2">Our Global Impact</p>
          <h3 className="text-2xl sm:text-3xl font-extrabold max-w-xl mx-auto leading-snug">Where Al Jisr Academy coordinates speak from</h3>
          
          <div className="flex justify-center mt-10">
            <div>
              <span className="block text-3xl sm:text-4xl font-extrabold text-white font-mono uppercase">GLOBAL WORLD</span>
              <span className="text-[11px] uppercase tracking-wider text-gray-400 mt-1 font-semibold block">100% of Students</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
