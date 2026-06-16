/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Calendar, User, Clock, ArrowRight, BadgeAlert, Library, X } from 'lucide-react';
import { Blog } from '../types';

interface BlogProps {
  blogs: Blog[];
}

export default function BlogList({ blogs }: BlogProps) {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'arabic' | 'english' | 'general' | 'announcement'>('all');
  const [readingBlog, setReadingBlog] = useState<Blog | null>(null);

  const activeBlogs = blogs.filter(b => b.isActive);

  const filteredBlogs = activeBlogs.filter((blog) => {
    return selectedFilter === 'all' || blog.category === selectedFilter;
  });

  const filterTabs: { id: 'all' | 'arabic' | 'english' | 'general' | 'announcement'; label: string }[] = [
    { id: 'all', label: 'All Articles' },
    { id: 'arabic', label: 'Arabic Resources' },
    { id: 'english', label: 'English Resources' },
    { id: 'general', label: 'Educational Tips' },
    { id: 'announcement', label: 'Announcements' }
  ];

  return (
    <section className="py-16 md:py-24 bg-white" id="blog-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 block mb-2 font-mono">
            ACADEMIC LOGS & RESOURCES
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-gray-900 leading-tight">
            Latest Educational Guides & Resources
          </h2>
          <p className="text-gray-500 text-sm mt-3 font-sans">
            Read professional insights, daily memorization hacks, speaking rules, and official news announcements written by our direct senior educators.
          </p>
        </div>

        {/* Filter Navigation list */}
        <div className="flex flex-wrap gap-2 justify-center mb-10 border-b border-gray-100 pb-6" id="blog-filters-bar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-4 py-2 text-xs font-bold transition rounded-xl cursor-pointer ${
                selectedFilter === tab.id
                  ? 'bg-sky-500 text-white shadow-sm'
                  : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Blog Post Cards Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="blog-posts-grid">
            {filteredBlogs.map((blog) => (
              <article 
                key={blog.id} 
                id={`blog-card-${blog.id}`}
                className="bg-white border rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Blog Header Band */}
                <div className="p-4 bg-sky-50/50 border-b relative flex items-center justify-between">
                  <span className="inline-block px-2.5 py-1 bg-sky-100 text-sky-700 text-[9px] font-extrabold uppercase tracking-widest rounded-lg font-mono">
                    {blog.category}
                  </span>
                  <Library className="w-4 h-4 text-sky-400" />
                </div>

                {/* Card Content body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Date and author line */}
                    <div className="flex items-center gap-3 text-xs text-gray-400 font-medium mb-3 font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-sky-500" />
                        {blog.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-sky-500" />
                        {blog.readTime}
                      </span>
                    </div>

                    <h3 className="font-sans font-extrabold text-base sm:text-lg text-gray-900 leading-snug hover:text-sky-600 transition cursor-pointer mb-2 line-clamp-2" onClick={() => setReadingBlog(blog)}>
                      {blog.title}
                    </h3>
                    
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6 font-sans line-clamp-3">
                      {blog.excerpt}
                    </p>
                  </div>

                  {/* Read More Section details */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-gray-700 flex items-center gap-1.5 font-mono">
                      <User className="w-3.5 h-3.5 text-sky-500" />
                      {blog.author}
                    </span>
                    <button
                      onClick={() => setReadingBlog(blog)}
                      className="text-xs font-bold text-sky-500 hover:text-sky-600 flex items-center gap-1 cursor-pointer font-sans"
                    >
                      Read Guide
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-dashed rounded-3xl p-16 text-center max-w-lg mx-auto" id="blogs-empty-alert">
            <BadgeAlert className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-1">No guides published yet</h3>
            <p className="text-gray-500 text-xs sm:text-sm font-sans">
              No articles are currently available in this filter. Check back shortly for fresh announcements or learning sheets!
            </p>
          </div>
        )}

        {/* Dynamic Reader View Overlay Dialog */}
        {readingBlog && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in" id="blog-reader-modal">
            <div className="bg-white rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl border flex flex-col max-h-[92vh]">
              
              {/* Cover image header banner */}
              <div className="p-6 bg-slate-900 relative">
                
                {/* Overlay actions */}
                <button
                  onClick={() => setReadingBlog(null)}
                  className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white bg-slate-800 rounded-full transition shadow cursor-pointer border border-slate-700"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="text-white mt-4">
                  <span className="px-2 py-0.5 bg-sky-500 text-white font-mono text-[9px] font-bold uppercase tracking-widest rounded">
                    {readingBlog.category}
                  </span>
                  <p className="text-xs text-gray-300 mt-1.5 font-mono">{readingBlog.date} • {readingBlog.readTime} • Written by {readingBlog.author}</p>
                </div>
              </div>

              {/* Reader Scroll Container */}
              <div className="p-6 sm:p-8 overflow-y-auto font-sans text-sm sm:text-base text-gray-700 leading-relaxed space-y-6 flex-1 bg-white">
                <h1 className="font-extrabold text-xl sm:text-2xl text-gray-900 leading-snug tracking-tight">
                  {readingBlog.title}
                </h1>

                {/* Styled Markdown content block */}
                <div className="prose max-w-none text-gray-600 prose-sm prose-sky" id="rendered-blog-content">
                  {readingBlog.content.split('\n\n').map((paragraph, index) => {
                    if (paragraph.startsWith('## ')) {
                      return <h2 key={index} className="text-lg font-extrabold text-gray-900 mt-6 mb-3">{paragraph.replace('## ', '')}</h2>;
                    }
                    if (paragraph.startsWith('### ')) {
                      return <h3 key={index} className="text-base font-bold text-slate-800 mt-4 mb-2">{paragraph.replace('### ', '')}</h3>;
                    }
                    if (paragraph.startsWith('- ')) {
                      return (
                        <ul key={index} className="list-disc pl-5 my-3 space-y-1 text-xs sm:text-sm">
                          {paragraph.split('\n').map((item, id) => (
                            <li key={id}>{item.replace('- ', '')}</li>
                          ))}
                        </ul>
                      );
                    }
                    return <p key={index} className="mb-4 text-xs sm:text-sm">{paragraph}</p>;
                  })}
                </div>
              </div>

              {/* Reader Footer action */}
              <div className="p-4 sm:p-5 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-400">Share with family or colleagues to study together</span>
                <button
                  onClick={() => setReadingBlog(null)}
                  className="px-6 py-2 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-xl text-xs shadow"
                >
                  Close Reader
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
