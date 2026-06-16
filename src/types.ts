/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Course {
  id: string;
  title: string;
  category: 'arabic' | 'english';
  overview: string;
  learningOutcomes: string[];
  duration: string;
  level: string;
  ageGroup: 'Children' | 'Teenagers' | 'Adults' | 'All';
  price: string;
  isActive: boolean;
}

export interface Teacher {
  id: string;
  name: string;
  photoUrl: string;
  qualifications: string[];
  experience: string; // e.g. "8 Years"
  biography: string;
  specialties: string[];
  isActive: boolean;
}

export interface Blog {
  id: string;
  title: string;
  category: 'arabic' | 'english' | 'general' | 'announcement';
  content: string; // Markdown supported
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  coverImageUrl: string;
  isActive: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  rating: number; // 1-5
  role: 'Student' | 'Parent';
  comment: string;
  date: string;
  isActive: boolean;
}

export interface Announcement {
  id: string;
  text: string;
  link?: string;
  isActive: boolean;
  priority: 'high' | 'normal';
}

export interface MediaItem {
  id: string;
  name: string;
  folder: string; // e.g. "Teachers", "Blogs", "Uncategorized"
  type: 'image' | 'video';
  url: string; // Base64 or CDN / URL
  size: string;
  dateUploaded: string;
}

export interface AdmissionInquiry {
  id: string;
  fullName: string;
  email: string;
  whatsappNumber: string;
  ageGroup: 'Children' | 'Teenagers' | 'Adults';
  courseInterest: string;
  classType: '1-on-1' | 'Small Group';
  notes?: string;
  status: 'pending' | 'reviewed' | 'contacted';
  date: string;
}
