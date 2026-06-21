/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Users, 
  Layers, 
  Clock, 
  TrendingUp, 
  Award, 
  Smartphone, 
  HelpCircle,
  Gem,
  Sparkles,
  BookMarked
} from 'lucide-react';

interface AboutUsProps {
  onNavigate: (tab: string) => void;
}

export default function AboutUs({ onNavigate }: AboutUsProps) {
  const USP_ITEMS = [
    {
      icon: Award,
      title: 'Qualified Teachers',
      desc: 'Skilled Arabic linguists and experienced English language professionals dedicated to delivering high-quality language and communication services.'
    },
    {
      icon: Users,
      title: 'Small Interactive Classes',
      desc: 'Average of 3 to 5 students per group to guarantee optimal speaking time, active feedback, and personal growth.'
    },
    {
      icon: Layers,
      title: 'One-to-One Learning',
      desc: 'Completely customized 1-on-1 programs designed around the student\'s micro-goals and language pacing.'
    },
    {
      icon: Clock,
      title: 'Flexible Timings',
      desc: 'Classes are scheduled 24/7. Reschedule easily or coordinate hours perfectly fitting school and office schedules.'
    },
    {
      icon: BookMarked,
      title: 'International Curriculum',
      desc: 'Textbooks, interactive slide collections, and exercises aligned with the Common European Framework (CEFR).'
    },
    {
      icon: TrendingUp,
      title: 'Progress Tracking',
      desc: 'Systematic monthly progress reports presenting diagnostic assessment results, vocabulary development trajectories, and individualized pedagogical recommendations to support targeted instruction and measurable learner growth.'
    },
    {
      icon: Gem,
      title: 'Affordable Rates',
      desc: 'High academic standards delivered through flexible, accessible modular subscription plans for every household budget.'
    },
    {
      icon: Sparkles,
      title: 'Personalized Plans',
      desc: 'Individual worksheets, flashcard reviews, and exercises configured for kids, teenagers, and adult professionals.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white" id="about-us-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Details Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20" id="about-mission-block">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600 block mb-2 font-mono">
              WHO WE ARE
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-gray-900 leading-tight mb-6">
              Bridging Eastern Heritage & International Academic Standards
            </h2>
            <div className="space-y-4 text-gray-600 font-sans text-sm sm:text-base leading-relaxed">
              <p>
                Founded on the pillars of depth, authenticity, and digital elegance, <strong>Al Jisr Academy</strong> ("The Bridge") was built to solve a crucial global problem: finding elite Arabic and English linguistic education that respects cultural values while meeting world-class pedagogical systems.
              </p>
              <p>
                We recognize that modern children and busy professionals cannot be expected to thrive in passive, boring prerecorded lectures. Language requires active, synchronous dialogue.
              </p>
              <p>
                Our platform brings together expert language mentors, interactive live sessions, personalized learning support, and research-based curricula that transform language learning into an engaging and effective experience.
              </p>
              <p className="border-l-2 border-sky-500 pl-4 py-1.5 italic bg-sky-50/50 rounded-r-lg text-gray-700">
                "Our mission is to enable global students to speak Arabic with elegant pronunciation and master English with ultimate clarity—all from a foundation of mutual trust and academic rigor."
              </p>
            </div>
          </div>

          <div className="relative" id="about-visual-canvas">
            <div className="aspect-video sm:aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 shadow-2xl relative border border-slate-800">
              <div className="absolute inset-0 bg-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white text-center sm:text-left">
                <p className="text-xs font-bold tracking-widest uppercase text-sky-400 font-mono">ESTABLISHED 2025</p>
                <h3 className="font-extrabold text-lg sm:text-xl mt-1 leading-tight text-white/95">Live synchronized education connecting learners across the globe.</h3>
              </div>
            </div>
            
            {/* Float Badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-slate-900 text-white rounded-2xl p-4 shadow-xl border border-slate-800 text-center hidden sm:block">
              <span className="block text-2xl font-extrabold text-sky-400">98%</span>
              <span className="text-[10px] uppercase font-mono tracking-wider text-gray-400">Parent Satisfaction</span>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div id="usp-benefits-grid-block">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600 block mb-2 font-mono">
              THE AL JISR DIFFERENCE
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-gray-900 leading-tight">
              Why Parents and Professionals Choose Our Academy
            </h2>
            <p className="text-gray-500 text-sm mt-3 font-sans">
              We are committed to excellence through interactive learning experiences, dedicated language professionals, and structured performance tracking—providing a world-class online education that matches the quality of top-tier academic institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" id="usp-cards-grid">
            {USP_ITEMS.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-gray-50 border border-gray-100/80 rounded-2xl p-6 hover:shadow-xl hover:shadow-sky-500/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                  id={`usp-card-${idx}`}
                >
                  <div>
                    <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center mb-5 shadow-sm">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="font-sans font-bold text-base text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Block */}
        <div className="mt-20 bg-sky-500 text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-xl" id="about-bottom-cta">
          <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full pointer-events-none" />
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 max-w-2xl mx-auto">
            Ready to experience Al Jisr live standard classrooms?
          </h3>
          <p className="text-sky-100 text-xs sm:text-sm mb-8 max-w-xl mx-auto font-sans">
            Secure a free 30-minute level diagnostic trial with our top educators. No commitment or payment cards required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('admissions')}
              className="px-8 py-3 bg-white text-sky-600 font-bold hover:bg-gray-50 transition rounded-xl text-xs cursor-pointer"
            >
              Book Free Trial Session
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3 bg-sky-600 text-white border border-sky-400 font-bold hover:bg-sky-700 transition rounded-xl text-xs cursor-pointer"
            >
              Speak to Admissions
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
