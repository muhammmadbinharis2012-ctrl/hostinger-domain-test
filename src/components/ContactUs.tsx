/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Clock, 
  CheckCircle2, 
  MessageSquare,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Globe
} from 'lucide-react';

export default function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Consultation');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Kindly fill in all required inputs.');
      return;
    }
    // Simulate send
    setIsSent(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setSubject('General Consultation');
    setMessage('');
    setIsSent(false);
  };

  return (
    <section className="py-16 md:py-24 bg-white" id="contact-us-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 block mb-2 font-mono">
            GET IN TOUCH
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-gray-900 leading-tight">
            We are Always Here to Assist You (24/7)
          </h2>
          <p className="text-gray-500 text-sm mt-3 font-sans">
            Need urgent coordinates or study updates? Message our administrators directly or drop us a styled digital ticket. We guarantee rapid human responses.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-16">
          
          {/* Column 1: Contact channels & Socials (Span 5) */}
          <div className="lg:col-span-5 space-y-8" id="contact-options-pannel">
            
            <div className="space-y-6">
              <h3 className="font-sans font-extrabold text-xl text-gray-900 leading-snug">
                Direct Communication Hubs
              </h3>
              <p className="text-gray-500 text-sm font-sans leading-relaxed">
                Connect via WhatsApp for immediate class scheduling, billing tweaks, or emergency tutor changes.
              </p>
            </div>

            {/* Hub Contacts Loops */}
            <div className="space-y-4">
              
              {/* WhatsApp direct Click-to-chat */}
              <a 
                href="https://wa.me/923322044423?text=Hello%20Al%20Jisr%20Academy" 
                target="_blank" 
                rel="no-referrer"
                className="flex items-center gap-4 p-4 bg-emerald-50 hover:bg-emerald-100 border border-emerald-150 rounded-2xl transition group"
                id="whatsapp-chat-shortcut"
              >
                <div className="p-3 bg-emerald-500 text-white rounded-xl shadow-md group-hover:scale-105 transition">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-emerald-600 block">Click to Chat Live</span>
                  <span className="font-sans font-extrabold text-gray-900 text-sm sm:text-base">+92 3322044423</span>
                </div>
              </a>

              {/* Email Desk */}
              <a 
                href="mailto:aljisracademy@gmail.com" 
                className="flex items-center gap-4 p-4 bg-gray-50 hover:bg-gray-100/80 border rounded-2xl transition group"
                id="email-desk-shortcut"
              >
                <div className="p-3 bg-sky-500 text-white rounded-xl shadow-md group-hover:scale-105 transition">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-sky-600 block">Email Admissions</span>
                  <span className="font-sans font-extrabold text-gray-900 text-sm sm:text-base font-mono">aljisracademy@gmail.com</span>
                </div>
              </a>

              {/* Office hours */}
              <div className="flex items-center gap-4 p-4 bg-gray-50 border rounded-2xl">
                <div className="p-3 bg-slate-800 text-white rounded-xl shadow-md">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-gray-400 block">Academy Hours</span>
                  <p className="font-sans font-semibold text-gray-800 text-xs sm:text-sm">Tutors active 24/7. Office: 08:00 - 20:00 (London Time)</p>
                </div>
              </div>

              {/* WhatsApp QR Code card */}
              <div className="p-5 bg-slate-50 border border-gray-200/80 rounded-2xl flex flex-col sm:flex-row items-center gap-5" id="whatsapp-qr-code-card">
                <div className="bg-white p-2.5 rounded-xl border border-gray-150 shadow-sm flex-shrink-0">
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https%3A%2F%2Fwa.me%2F923322044423%3Ftext%3DHello%2520Al%2520Jisr%2520Academy" 
                    alt="WhatsApp QR Code"
                    className="w-28 h-28"
                    referrerPolicy="no-referrer"
                    id="whatsapp-qr-image"
                  />
                </div>
                <div className="space-y-1.5 text-center sm:text-left">
                  <h4 className="font-sans font-extrabold text-sm text-gray-950">
                    Scan QR to Connect Instantly
                  </h4>
                  <p className="text-xs text-gray-500 font-sans leading-relaxed">
                    Open your mobile camera and scan this code to start a secure WhatsApp chat directly with our Admissions Desk.
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[10px] uppercase font-mono tracking-wider font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    ● Fast Support
                  </span>
                </div>
              </div>

            </div>

            {/* Social Network Links */}
            <div className="space-y-3 pt-4 border-t border-gray-100">
              <h4 className="text-xs uppercase font-mono tracking-widest text-gray-400 font-bold">Follow Our Class Clips & Updates</h4>
              <div className="flex gap-2">
                <a href="#" className="p-2.5 bg-gray-100 hover:bg-sky-50 hover:text-sky-600 text-gray-500 rounded-xl transition border border-gray-150">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="p-2.5 bg-gray-100 hover:bg-sky-50 hover:text-sky-600 text-gray-500 rounded-xl transition border border-gray-150">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="p-2.5 bg-gray-100 hover:bg-sky-50 hover:text-sky-600 text-gray-500 rounded-xl transition border border-gray-150">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="p-2.5 bg-gray-100 hover:bg-sky-50 hover:text-sky-600 text-gray-500 rounded-xl transition border border-gray-150">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Column 2: Digital Contact Form (Span 7) */}
          <div className="lg:col-span-7 bg-white border border-gray-100 rounded-3xl p-6 sm:p-10 shadow-sm" id="digital-ticket-form-column">
            
            {!isSent ? (
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <h3 className="font-sans font-extrabold text-lg text-gray-900 leading-tight">
                    Submit a Client Ticket
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 font-sans">
                    Have feedback, partnership suggestions, or technical portal queries? Deliver them below.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name (e.g. Rachel)"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 transition text-sm"
                    />
                  </div>

                  {/* Email address */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rachel@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 transition text-sm"
                    />
                  </div>
                </div>

                {/* Subject Selection dropdown */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide">
                    Topic Subject
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 transition text-sm font-semibold text-gray-700"
                  >
                    <option value="General Consultation">General Consultation</option>
                    <option value="Technical Support">Student Dashboard / Login Support</option>
                    <option value="School Invoices">Invoices / Corporate Billings</option>
                    <option value="Teacher Application">Join Al Jisr Academy as a Tutor</option>
                  </select>
                </div>

                {/* Main Message box */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide">
                    Message Text *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your request in detail..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 transition text-sm"
                  />
                </div>

                {/* Action button */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-slate-900 hover:bg-black text-white font-extrabold uppercase tracking-wider rounded-xl transition text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Send className="w-4 h-4 text-sky-400" />
                  Transmit Custom Ticket
                </button>

              </form>
            ) : (
              <div className="py-12 text-center space-y-6" id="ticket-success-wrapper">
                <div className="w-16 h-16 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mx-auto shadow-md border border-sky-150 animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-mono tracking-wider font-extrabold text-sky-600 bg-sky-50 px-2 py-0.5 rounded">
                    Ticket Logged
                  </span>
                  <h3 className="text-xl font-sans font-extrabold text-gray-900 leading-tight">
                    Inquiry Securely Dispatched!
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm max-w-sm mx-auto font-sans">
                    Thank you, {name}. Your general consultation code was mapped. Our tech leads will answer shortly.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2 bg-gray-150 text-gray-700 hover:bg-gray-200 rounded-xl text-xs font-bold transition"
                >
                  Post Additional Ticket
                </button>
              </div>
            )}

          </div>

        </div>

        {/* Global Hubs visual SVG Map element */}
        <div className="bg-slate-50 border border-gray-100 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden" id="academy-global-hubs-map">
          <div className="absolute right-0 top-0 w-80 h-80 bg-sky-100 rounded-full blur-3xl opacity-40 -z-10" />
          
          <div className="max-w-2xl mx-auto space-y-3 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600 font-mono flex items-center justify-center gap-1.5 matches-map">
              <Globe className="w-4 h-4 text-sky-500 animate-spin-slow" />
              GLOBAL DATA HUBS
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 leading-snug">Spanning Over 4 timezones</h3>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
              While Al Jisr functions entirely in the cloud to keep costs down, our senior administrators and registrar coordinates operate dynamically from physical hubs.
            </p>
          </div>

          {/* Styled Hub list */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto font-sans text-xs pt-4 border-t border-dashed">
            <div className="bg-white p-4 rounded-2xl border border-gray-200/60 text-center">
              <MapPin className="w-5 h-5 text-sky-500 mx-auto mb-2" />
              <strong className="block font-semibold text-gray-900 text-sm">North America Hub</strong>
              <p className="text-gray-400 mt-1">Toronto, Canada (GMT-4)</p>
            </div>
            
            <div className="bg-white p-4 rounded-2xl border border-gray-200/60 text-center">
              <MapPin className="w-5 h-5 text-sky-500 mx-auto mb-2" />
              <strong className="block font-semibold text-gray-900 text-sm">European Hub</strong>
              <p className="text-gray-400 mt-1">London, United Kingdom (GMT+1)</p>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-gray-200/60 text-center">
              <MapPin className="w-5 h-5 text-sky-500 mx-auto mb-2" />
              <strong className="block font-semibold text-gray-900 text-sm">Middle East Hub</strong>
              <p className="text-gray-400 mt-1">Amman, Jordan (GMT+3)</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
