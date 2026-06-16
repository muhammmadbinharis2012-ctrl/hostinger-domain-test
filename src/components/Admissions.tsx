/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Check, 
  HelpCircle, 
  Sparkles, 
  ChevronRight, 
  CalendarDays,
  CreditCard,
  Building,
  GraduationCap
} from 'lucide-react';
import { FASE_INFO, FAQS } from '../data';
import { Course } from '../types';

interface AdmissionsProps {
  courses: Course[];
  prefilledCourseTitle?: string | null;
  onSubmitInquiry: (data: {
    fullName: string;
    email: string;
    whatsappNumber: string;
    ageGroup: 'Children' | 'Teenagers' | 'Adults';
    courseInterest: string;
    classType: '1-on-1' | 'Small Group';
    notes?: string;
  }) => void;
}

export default function Admissions({ courses, prefilledCourseTitle, onSubmitInquiry }: AdmissionsProps) {
  // Registration Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [ageGroup, setAgeGroup] = useState<'Children' | 'Teenagers' | 'Adults'>('Children');
  const [courseInterest, setCourseInterest] = useState(prefilledCourseTitle || '');
  const [classType, setClassType] = useState<'1-on-1' | 'Small Group'>('1-on-1');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const activeCourses = courses.filter(c => c.isActive);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !whatsappNumber) {
      alert('Please fill out all required fields.');
      return;
    }
    
    // Trigger submission
    onSubmitInquiry({
      fullName,
      email,
      whatsappNumber,
      ageGroup,
      courseInterest,
      classType,
      notes
    });

    setIsSubmitted(true);
  };

  const handleResetForm = () => {
    setFullName('');
    setEmail('');
    setWhatsappNumber('');
    setAgeGroup('Children');
    setCourseInterest('');
    setClassType('1-on-1');
    setNotes('');
    setIsSubmitted(false);
  };

  return (
    <section className="py-16 md:py-24 bg-white" id="admissions-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 block mb-2 font-mono">
            ADMISSIONS OFFICE
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-gray-900 leading-tight">
            Initiate Your Language Skills Journey Today
          </h2>
          <p className="text-gray-500 text-sm mt-3 font-sans">
            Submit our simple registration card to activate enrollment, request fee quotes, or lock in your 100% free level diagnostics trial class.
          </p>
        </div>

        {/* Dynamic Dual columns layout: Registration & Pricing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-20">
          
          {/* Column 1: Multi-Form Registration (Span 7) */}
          <div className="lg:col-span-7 bg-white border border-gray-100 rounded-3xl p-6 sm:p-10 shadow-sm" id="registration-form-column">
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-gray-100 pb-4 mb-4">
                  <h3 className="text-lg font-extrabold text-gray-900 flex items-center gap-2">
                    <CalendarDays className="w-5 h-5 text-sky-500" />
                    Online Registration & Free Trial Request Form
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Fill in these identifiers. Our global registrar office will reach out via WhatsApp/Email within 12 hours.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Connor"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 transition text-sm"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 transition text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* WhatsApp/Phone Number */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide">
                      WhatsApp/Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +1 (123) 456-7890"
                      value={whatsappNumber}
                      onChange={(e) => setWhatsappNumber(e.target.value)}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 transition text-sm font-mono"
                    />
                  </div>

                  {/* Age Group */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide">
                      Student Age Group
                    </label>
                    <select
                      value={ageGroup}
                      onChange={(e) => setAgeGroup(e.target.value as 'Children' | 'Teenagers' | 'Adults')}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 transition text-sm font-semibold"
                    >
                      <option value="Children">Children (Age 5 - 12)</option>
                      <option value="Teenagers">Teenagers (Age 13 - 17)</option>
                      <option value="Adults">Adults (Age 18+)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Course Selection Dropdown */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide">
                      Course Interest
                    </label>
                    <select
                      value={courseInterest}
                      onChange={(e) => setCourseInterest(e.target.value)}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 transition text-sm font-semibold"
                    >
                      <option value="">Select a Course Program...</option>
                      <option value="Arabic & English Complete Package">Arabic & English Dual Package</option>
                      {activeCourses.map((c) => (
                        <option key={c.id} value={c.title}>
                          [{c.category === 'arabic' ? 'AR' : 'EN'}] {c.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Class Layout type */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide">
                      Preferred Class Format
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setClassType('1-on-1')}
                        className={`py-2 px-3 text-xs font-bold border rounded-lg transition text-center cursor-pointer ${
                          classType === '1-on-1'
                            ? 'bg-sky-50 border-sky-500 text-sky-700 font-extrabold shadow-sm'
                            : 'bg-white border-gray-200 text-gray-500 hover:bg-gray-50'
                        }`}
                      >
                        1-on-1 Private
                      </button>
                      <button
                        type="button"
                        onClick={() => setClassType('Small Group')}
                        className={`py-2 px-3 text-xs font-bold border rounded-lg transition text-center cursor-pointer ${
                          classType === 'Small Group'
                            ? 'bg-sky-50 border-sky-500 text-sky-700 font-extrabold shadow-sm'
                            : 'bg-white border-gray-200 text-gray-500 hover:bg-gray-50'
                        }`}
                      >
                        Micro Study Group
                      </button>
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide">
                    Additional requirements or timeline preferences
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. My child is a complete beginner, we prefer weekends slots, or I need focus on Quran tajweed..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 transition text-sm"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full py-4 bg-sky-500 hover:bg-sky-600 text-white font-extrabold uppercase tracking-wider rounded-xl transition shadow-lg shadow-sky-500/20 text-xs sm:text-sm cursor-pointer"
                  id="registration-submit-button"
                >
                  Confirm Registration & Book Trial Class
                </button>

                <p className="text-center text-[10px] text-gray-400 font-sans">
                  By submitting, you agree to receive safe diagnostic class coordinates on WhatsApp. We never spam.
                </p>

              </form>
            ) : (
              <div className="py-12 px-6 text-center space-y-6" id="registration-success-overlay">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center mx-auto shadow-md animate-bounce">
                  <Check className="w-8 h-8" />
                </div>
                
                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-bold">
                    Transmission Secure
                  </span>
                  <h3 className="font-extrabold text-2xl text-gray-900 leading-tight">
                    Thank You, {fullName.split(' ')[0]}!
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm max-w-md mx-auto font-sans leading-relaxed">
                    Al Jisr admissions office has received your registration for <strong className="text-sky-600">{courseInterest || 'Live Language Specialty'}</strong>.
                  </p>
                </div>

                <div className="bg-gray-50 border rounded-2xl p-4 sm:p-6 text-left max-w-md mx-auto space-y-3" id="success-next-steps">
                  <h4 className="text-xs font-bold tracking-wider text-slate-800 uppercase font-mono">WHAT HAPPENS NEXT?</h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-sky-500 font-bold">1.</span>
                      <span>An admissions coordinate will message you on <strong className="font-mono text-gray-900">{whatsappNumber}</strong> to select your exact calendar slot.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sky-500 font-bold">2.</span>
                      <span>We will email safe browser links to launch your virtual interaction room. No logins or installs needed.</span>
                    </li>
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={handleResetForm}
                  className="px-6 py-2.5 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-xl text-xs font-bold transition cursor-pointer"
                >
                  Submit Another Inquiry Form
                </button>
              </div>
            )}

          </div>

          {/* Column 2: Fee Information (Span 5) */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-6" id="fee-breakdown-info-column">
            
            {/* Quick Header */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-6 border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute right-0 bottom-0 w-32 h-32 bg-sky-500/10 rounded-full" />
              
              <div className="space-y-2">
                <span className="text-[10px] tracking-widest text-sky-400 uppercase font-mono font-bold block">
                  TUITION FEES
                </span>
                <h3 className="font-extrabold text-lg sm:text-xl leading-tight">Our Honest, Flat Pricing Plans</h3>
                <p className="text-xs text-gray-400 font-sans leading-relaxed">
                  High quality, certified live language education without complex licensing, hidden costs, or rigid contracts. Rest easy.
                </p>
              </div>

              {/* Loop pricing models */}
              <div className="space-y-4">
                {FASE_INFO.pricingModels.map((plan, idx) => (
                  <div 
                    key={idx} 
                    className={`p-4 rounded-2xl border transition-all ${
                      plan.isPopular 
                        ? 'bg-sky-500/10 border-sky-400 text-white' 
                        : 'bg-slate-800/40 border-slate-700 text-gray-300'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <h4 className="font-bold text-xs sm:text-sm text-white">{plan.title}</h4>
                          {plan.isPopular && (
                            <span className="bg-sky-400 text-slate-950 font-extrabold text-[8px] uppercase px-1.5 py-0.5 rounded tracking-wide">
                              Most Popular
                            </span>
                          )}
                        </div>
                        <p className="text-[10px] text-gray-400 font-sans font-semibold mt-1">{plan.classes}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-base sm:text-lg font-extrabold text-white font-mono">${plan.price}</span>
                        <span className="text-[9px] text-gray-400 block font-light font-mono">/ {plan.frequency}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Quick highlights */}
              <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-4 text-[10px] text-gray-400 font-medium">
                <span>✓ Cancel subscription anytime</span>
                <span>✓ 7-Day Money Back Guarantee</span>
                <span>✓ Multiple Family Discounts</span>
                <span>✓ Live Classroom materials included</span>
              </div>

            </div>

            {/* Quick trust metric card */}
            <div className="bg-sky-50 border border-sky-100 p-6 rounded-3xl" id="family-discounts">
              <h4 className="text-xs font-bold text-sky-800 uppercase tracking-widest font-mono mb-1.5">Family Group Discounts</h4>
              <p className="text-sky-900/80 text-xs sm:text-sm leading-relaxed font-semibold">
                Enrolling 2 or more children? Speak with the admissions director today to obtain automated <strong>10% to 15% flat family package reductions</strong> applied to your monthly billings.
              </p>
            </div>

          </div>

        </div>

        {/* Dynamic FAQ Section Accordion */}
        <div className="mt-20 border-t border-gray-100 pt-16" id="academy-faqs-catalog">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600 block mb-2 font-mono">
              COMMON INQUIRIES
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-gray-900 leading-tight">
              Frequently Asked Questions (FAQ)
            </h2>
            <p className="text-gray-500 text-sm mt-3 font-sans">
              Have specific questions about browser requirements, teacher assignment, or homework patterns? Review quick immediate answers below.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4" id="faqs-accordion-list">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-gray-50 border border-gray-100/80 rounded-2xl overflow-hidden transition-all duration-200"
                  id={`faq-accordion-${idx}`}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center bg-gray-50 focus:outline-none focus:bg-gray-100/50 cursor-pointer"
                  >
                    <span className="font-sans font-extrabold text-sm sm:text-base text-gray-900 pr-4">
                      {faq.q}
                    </span>
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center transition-all bg-sky-100 border text-sky-600 font-bold ${isOpen ? 'rotate-180 bg-slate-900 text-white' : ''}`}>
                      ↓
                    </span>
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-600 font-sans border-t border-gray-100/50 leading-relaxed bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
