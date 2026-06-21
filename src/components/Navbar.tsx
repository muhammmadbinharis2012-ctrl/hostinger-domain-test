/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, Phone, Mail, GraduationCap, Lock, LayoutDashboard } from 'lucide-react';
import { Announcement } from '../types';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  announcements: Announcement[];
  isAdminLoggedIn: boolean;
  onAdminLogout: () => void;
  onOpenAdminModal: () => void;
}

export default function Navbar({
  activeTab,
  setActiveTab,
  announcements,
  isAdminLoggedIn,
  onAdminLogout,
  onOpenAdminModal
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAnnounce, setShowAnnounce] = useState(true);

  // Filter high priority first, or just first active
  const activeAnnounces = announcements.filter(a => a.isActive);
  const primaryAnnounce = activeAnnounces[0];

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'arabic', label: 'Arabic Courses' },
    { id: 'english', label: 'English Courses' },
    { id: 'teachers', label: 'Teachers' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'blog', label: 'Blog' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full relative z-50 bg-white" id="main-header">
      {/* 1. Announcement Bar */}
      {showAnnounce && primaryAnnounce && (
        <div 
          className="bg-slate-900 text-white text-xs py-2 px-4 flex justify-between items-center transition-all duration-300 border-b border-slate-800"
          id="system-announcement-bar"
        >
          <div className="flex-1 text-center font-medium flex items-center justify-center gap-2">
            <span className="inline-flex items-center rounded-sm bg-sky-500/20 px-1.5 py-0.5 text-[10px] font-bold text-sky-400 uppercase tracking-widest animate-pulse">
              Update
            </span>
            <span>{primaryAnnounce.text}</span>
            {primaryAnnounce.link && (
              <button
                onClick={() => handleNavClick('admissions')}
                className="underline text-sky-300 hover:text-sky-200 ml-1 font-semibold transition"
              >
                Learn More &rarr;
              </button>
            )}
          </div>
          <button 
            onClick={() => setShowAnnounce(false)}
            className="text-gray-400 hover:text-white p-1"
            aria-label="Dismiss Announcement"
          >
            <X className="w-3 px-0 h-3" />
          </button>
        </div>
      )}

      {/* 2. Top Utility Line */}
      <div className="bg-gray-50 border-b border-gray-100 py-1.5 px-4 sm:px-6 lg:px-8 text-xs text-gray-500 flex justify-between items-center" id="utility-bar">
        <div className="flex items-center gap-4">
          <a href="https://wa.me/923322044423" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-sky-600 transition" id="util-link-whatsapp">
            <Phone className="w-3 h-3 text-sky-500" />
            <span className="hidden sm:inline font-medium">WhatsApp Support:</span> <span className="font-mono text-gray-700 font-semibold">+92 3322044423</span>
          </a>
          <a href="mailto:aljisracademy@gmail.com" className="flex items-center gap-1 hover:text-sky-600 transition" id="util-link-mail">
            <Mail className="w-3 h-3 text-sky-500" />
            <span className="hidden sm:inline font-medium">Email Desk:</span> <span className="font-mono text-gray-700">aljisracademy@gmail.com</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:inline font-mono text-gray-400">Class Standard: Live 1-on-1 & Micro-Groups</span>
          
          {isAdminLoggedIn ? (
            <div className="flex items-center gap-2 bg-sky-50 px-2 py-0.5 rounded text-sky-700 font-medium">
              <LayoutDashboard className="w-3 h-3" />
              <span>Admin Mode</span>
              <button 
                onClick={() => handleNavClick('admin')} 
                className="underline text-sky-800 hover:text-sky-900 cursor-pointer ml-1"
              >
                Console
              </button>
              <button 
                onClick={onAdminLogout}
                className="text-red-500 hover:text-red-700 font-bold ml-1.5 text-[10px] uppercase tracking-wider"
              >
                [Exit]
              </button>
            </div>
          ) : (
            <button 
              onClick={onOpenAdminModal}
              className="flex items-center gap-1 hover:text-sky-600 text-gray-500 transition cursor-pointer font-medium"
              id="admin-terminal-button"
            >
              <Lock className="w-3 h-3 text-gray-400" />
              <span>Portal Login</span>
            </button>
          )}
        </div>
      </div>

      {/* 3. Main Header Bar */}
      <div className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100" id="main-nav-bar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('home')} id="landing-logo-container">
              <div className="bg-sky-500 text-white p-2.5 rounded-lg mr-3 shadow-md shadow-sky-500/20 flex items-center justify-center">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <span className="font-sans font-extrabold text-xl sm:text-2xl tracking-tight text-gray-900 block leading-none">
                  AL JISR<span className="text-sky-500"> ACADEMY</span>
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] font-mono text-sky-600 font-semibold mt-0.5 block">
                  Bridge to Excellence
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1" id="desktop-routing-links">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 rounded-md text-[13px] font-semibold transition duration-150 tracking-wide cursor-pointer ${
                    activeTab === item.id
                      ? 'bg-sky-500 text-white shadow-sm shadow-sky-500/10'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3" id="desktop-action-ctas">
              <button
                onClick={() => handleNavClick('admissions')}
                className="px-4 py-2 border border-gray-200 text-gray-700 bg-white hover:bg-gray-50 rounded-lg text-xs font-bold transition shadow-sm cursor-pointer"
                id="cta-trial-nav"
              >
                Free Trial Class
              </button>
              <button
                onClick={() => handleNavClick('admissions')}
                className="px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg text-xs font-bold shadow-md shadow-sky-500/15 transition hover:shadow-sky-500/25 cursor-pointer"
                id="cta-enroll-nav"
              >
                Enroll Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2" id="mobile-menu-toggle-wrapper">
              <button
                onClick={() => handleNavClick('admissions')}
                className="px-3 py-1.5 bg-sky-500 text-white text-[11px] font-bold rounded shadow-sm hover:bg-sky-600 transition"
              >
                Trial
              </button>
              
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md focus:outline-none"
                id="hamburger-toggle"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white shadow-inner animate-fade-in" id="mobile-routing-dropdown">
            <div className="px-2 pt-2 pb-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`mobile-nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-md text-sm font-semibold transition uppercase tracking-wider ${
                    activeTab === item.id
                      ? 'bg-sky-500 text-white'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-black font-semibold'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 pb-2 px-4 space-y-2 border-t border-gray-100">
                <button
                  onClick={() => handleNavClick('admissions')}
                  className="block w-full text-center py-2.5 bg-white border border-gray-200 text-gray-700 font-bold rounded-lg text-xs"
                >
                  Book Free Trial
                </button>
                <button
                  onClick={() => handleNavClick('admissions')}
                  className="block w-full text-center py-2.5 bg-sky-500 text-white font-bold rounded-lg text-xs shadow-md"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
