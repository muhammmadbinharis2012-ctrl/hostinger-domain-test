/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Lock } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenAdmin: () => void;
}

export default function Footer({ onNavigate, onOpenAdmin }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-slate-800 lg:gap-8 justify-between">
          
          {/* Column 1: Al Jisr Branding (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')} id="footer-logo">
              <div className="bg-sky-500 text-white p-2 rounded-lg mr-3 shadow-md">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="font-sans font-extrabold text-lg sm:text-xl tracking-tight text-white block leading-none">
                  AL JISR<span className="text-sky-400"> ACADEMY</span>
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] font-mono text-sky-400 font-semibold mt-0.5 block">
                  Bridge to Excellence
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed font-sans font-medium">
              A premium, world-class online language academy offering live synchronous Arabic and English lessons for kids, teens, and ambitious global clients since 2021.
            </p>

            {/* Social Network tags */}
            <div className="flex gap-2">
              <a href="#" className="p-2 bg-slate-800 hover:bg-sky-500 hover:text-white text-gray-400 rounded-lg transition" aria-label="Facebook Link">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-slate-800 hover:bg-sky-500 hover:text-white text-gray-400 rounded-lg transition" aria-label="Twitter Link">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-slate-800 hover:bg-sky-500 hover:text-white text-gray-400 rounded-lg transition" aria-label="Instagram Link">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-slate-800 hover:bg-sky-500 hover:text-white text-gray-400 rounded-lg transition" aria-label="Youtube Link">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Course categories (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400">Core Programs</h4>
            <ul className="space-y-2 text-xs text-gray-400 font-medium">
              <li>
                <button onClick={() => onNavigate('arabic')} className="hover:text-sky-400 transition cursor-pointer">
                  Arabic for Beginners (A1-A2)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('arabic')} className="hover:text-sky-400 transition cursor-pointer">
                  Quranic & Classical Arabic
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('arabic')} className="hover:text-sky-400 transition cursor-pointer">
                  Tajweed Recitation Rules
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('english')} className="hover:text-sky-400 transition cursor-pointer">
                  Practical Spoken English
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('english')} className="hover:text-sky-400 transition cursor-pointer">
                  Rhetoric & Public Speaking
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('admissions')} className="hover:text-sky-400 transition cursor-pointer text-sky-400 block font-semibold pt-1">
                  Book Free Diagnostics Class &rarr;
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick routing links (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400">Quick Links</h4>
            <ul className="space-y-2 text-xs text-gray-400 font-medium">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-sky-400 transition cursor-pointer">Home Hub</button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-sky-400 transition cursor-pointer">About Us</button>
              </li>
              <li>
                <button onClick={() => onNavigate('teachers')} className="hover:text-sky-400 transition cursor-pointer">Our Faculty</button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-sky-400 transition cursor-pointer">Academy Logs</button>
              </li>
              <li>
                <button onClick={() => onNavigate('testimonials')} className="hover:text-sky-400 transition cursor-pointer">Student Reviews</button>
              </li>
              <li>
                <button onClick={() => onNavigate('admissions')} className="hover:text-sky-400 transition cursor-pointer font-bold text-gray-300">Enrollment Portal</button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact index (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400">Hub Office</h4>
            <ul className="space-y-3 text-xs text-gray-400 font-medium">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>London Office: High Holborn Road, London, WC1V 7EG, United Kingdom</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span className="font-mono text-gray-300">+92 3322044423</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span className="font-mono text-gray-300">harismawh@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Utility Agreement Row */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-gray-500">
          
          <div className="flex flex-wrap gap-4 items-center justify-center sm:justify-start">
            <span>Copyright &copy; {currentYear} Al Jisr Academy Ltd. All rights reserved.</span>
            <span>•</span>
            <button onClick={() => alert('Our Privacy policy ensures all student virtual class recording files are strictly encrypted and never shared. Classroom metadata is preserved in adherence to COPPA.')} className="hover:text-gray-300 transition cursor-pointer">Privacy Policy</button>
            <span>•</span>
            <button onClick={() => alert('Subscription cancelations will take effect starting next billing cycle. Safe interaction codes cannot be transferred.')} className="hover:text-gray-300 transition cursor-pointer">Terms & Conditions</button>
          </div>

          {/* Siderail Admin login key icon */}
          <button 
            onClick={onOpenAdmin}
            className="flex items-center gap-1.5 p-1.5 px-3 bg-slate-800 hover:bg-slate-700 hover:text-white text-gray-400 transition rounded-lg text-[10px] uppercase tracking-wide font-mono"
            aria-label="CMS Login Shortcut"
          >
            <Lock className="w-3.5 h-3.5 text-sky-500" />
            <span>Portal Access</span>
          </button>

        </div>

      </div>
    </footer>
  );
}
