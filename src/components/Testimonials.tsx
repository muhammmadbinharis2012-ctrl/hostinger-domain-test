/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Star, MessageSquareCode, Quote, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const activeTestimonials = testimonials.filter(t => t.isActive);
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % activeTestimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + activeTestimonials.length) % activeTestimonials.length);
  };

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

        {/* Highlighted Testimonial Carousel */}
        {activeTestimonials.length > 0 && (
          <div className="max-w-4xl mx-auto relative mb-16" id="testimonial-carousel-player">
            <div className="bg-white border rounded-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden">
              <Quote className="absolute right-8 top-8 text-sky-100 w-24 h-24 pointer-events-none -scale-y-100" />
              
              <div className="flex flex-col space-y-6 relative z-10">
                {/* Stars Indicator */}
                <div className="flex gap-1">
                  {Array.from({ length: activeTestimonials[activeIndex].rating }).map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Comment Text */}
                <blockquote className="text-lg sm:text-xl text-gray-700 font-sans font-medium italic leading-relaxed">
                  "{activeTestimonials[activeIndex].comment}"
                </blockquote>

                {/* Student Credits */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div>
                    <span className="block text-base font-extrabold text-gray-900 leading-snug">
                      {activeTestimonials[activeIndex].name}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold font-mono block mt-0.5">
                      {activeTestimonials[activeIndex].role} • {activeTestimonials[activeIndex].country}
                    </span>
                  </div>

                  {/* Manual Carousel Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={prevTestimonial}
                      aria-label="Previous Testimonial"
                      className="p-2 sm:p-3 hover:bg-sky-50 text-gray-600 hover:text-sky-600 border border-gray-200 hover:border-sky-200 rounded-xl transition cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      aria-label="Next Testimonial"
                      className="p-2 sm:p-3 hover:bg-sky-50 text-gray-600 hover:text-sky-600 border border-gray-200 hover:border-sky-200 rounded-xl transition cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick dot indicator ticks */}
            <div className="flex justify-center gap-1.5 mt-6">
              {activeTestimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    idx === activeIndex ? 'bg-sky-500 w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        )}

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
