/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Course, Teacher, Blog, Testimonial, Announcement, MediaItem } from './types';

export const DEFAULT_COURSES: Course[] = [
  // Arabic Courses
  {
    id: 'ar-01',
    title: 'Arabic for Beginners',
    category: 'arabic',
    overview: 'An introductory course designed for students with zero prior knowledge of Arabic. Learn the alphabet, core vocabulary, and standard simple conversational phrases.',
    learningOutcomes: [
      'Master the Arabic alphabet and pronunciation of all letters.',
      'Construct simple everyday sentences in Arabic.',
      'Understand basic greeting protocols and greetings.',
      'Count numbers, list colors, and use simple daily vocabulary.'
    ],
    duration: '12 Months',
    level: 'Beginner (A1)',
    ageGroup: 'All',
    price: '$65 / month',
    isActive: true
  },
  {
    id: 'ar-02',
    title: 'Quranic Arabic',
    category: 'arabic',
    overview: 'Understand the language of the Noble Quran. This course focuses on classical vocabulary, structural phrasing, and understanding Quranic contexts directly from the source text.',
    learningOutcomes: [
      'Translate common Quranic verses and phrases.',
      'Appreciate Quranic word roots and linguistic depth.',
      'Identify critical grammatical structures specific to Classical Arabic.',
      'Read and recite Quranic verses with direct semantic understanding.'
    ],
    duration: '12 Months',
    level: 'Intermediate (B1)',
    ageGroup: 'All',
    price: '$75 / month',
    isActive: true
  },
  {
    id: 'ar-03',
    title: 'Arabic Reading & Writing',
    category: 'arabic',
    overview: 'Develop precise literacy skills in Modern Standard Arabic (MSA). Learn the rules of script joining, cursive styles, reading with diacritics (Harakaat), and writing long forms.',
    learningOutcomes: [
      'Write sentences fluidly in clear Naskh script.',
      'Read Arabic text with or without vowel markers.',
      'Spell complex sounds, including hamzas and weak letters accurately.',
      'Draft formal letters and direct short paragraphs.'
    ],
    duration: '6 Months',
    level: 'Beginner to Intermediate',
    ageGroup: 'Children',
    price: '$60 / month',
    isActive: true
  },
  {
    id: 'ar-04',
    title: 'Spoken Arabic (Modern Standard)',
    category: 'arabic',
    overview: 'Focuses strictly on verbal communication. Build absolute confidence in expressing opinion, answering real-life questions, and speaking in multiple scenarios.',
    learningOutcomes: [
      'Hold a 15-minute standard conversation with a native speaker.',
      'Express opinions, feelings, and plan descriptions.',
      'Master proper stress, intonation, and native rhythms.',
      'Order food, book flights, and navigate Arab cities confidently.'
    ],
    duration: '12 Months',
    level: 'Intermediate (B1-B2)',
    ageGroup: 'Adults',
    price: '$70 / month',
    isActive: true
  },
  {
    id: 'ar-05',
    title: 'Arabic Grammar (Nahw & Sarf)',
    category: 'arabic',
    overview: 'Delve into the core rules of Arabic sentence construction (Nahw) and Arabic word morphing (Sarf). Essential for anyone seeking ultimate academic mastery of the tongue.',
    learningOutcomes: [
      'Analyze the grammatical state (I\'rab) of any basic word in a sentence.',
      'Derive nouns and verbs from their three-letter root forms (Abwab).',
      'Construct complex phrases with conditional and emphasis formulas.',
      'Prevent common logical mistakes in formal speaking.'
    ],
    duration: '12 Months',
    level: 'Advanced (C1)',
    ageGroup: 'Teenagers',
    price: '$80 / month',
    isActive: true
  },
  {
    id: 'ar-06',
    title: 'Arabic for Kids & Juniors',
    category: 'arabic',
    overview: 'An engaging, gamified curriculum with rich interactive visuals, custom drawings, and modern songs to make Arabic fun, accessible, and delightful for children.',
    learningOutcomes: [
      'Recognize and write basic letters with correct vowels.',
      'Form simple sentences about family, animals, and school.',
      'Count up to 100 and identify common household elements.',
      'Build positive psychological associations with Arabic education.'
    ],
    duration: '6 Months',
    level: 'Beginner (A1)',
    ageGroup: 'Children',
    price: '$55 / month',
    isActive: true
  },
  {
    id: 'ar-07',
    title: 'Conversational Levantine Arabic',
    category: 'arabic',
    overview: 'Learn the beautiful, warm dialect spoken in Syria, Lebanon, Jordan, and Palestine. Excellent for social interaction, deep cultural connection, and travel.',
    learningOutcomes: [
      'Understand and use casual colloquial phrases.',
      'Negotiate and converse in standard day-to-day settings.',
      'Appreciate culturally specific jokes, proverbs, and idioms.',
      'Bridge the gap between Modern Standard Arabic and daily slang.'
    ],
    duration: '12 Months',
    level: 'All Levels',
    ageGroup: 'Adults',
    price: '$65 / month',
    isActive: true
  },
  {
    id: 'ar-08',
    title: 'Arabic for Non-Native Speakers',
    category: 'arabic',
    overview: 'A rigorous academic curriculum structured after prestigious global universities. Focuses on the integration of all four skills: Listening, Speaking, Reading, and Writing.',
    learningOutcomes: [
      'Successfully express yourself both orally and in writing.',
      'Synthesize and summarize medium-length newspaper articles.',
      'Differentiate between active and passive forms at high speeds.',
      'Prepare for standard global Arabic tests.'
    ],
    duration: '12 Months',
    level: 'Beginner to Advanced',
    ageGroup: 'All',
    price: '$85 / month',
    isActive: true
  },

  // English Courses
  {
    id: 'en-01',
    title: 'Beginner English (CEFR A1)',
    category: 'english',
    overview: 'Launches your journey in English. Learn the fundamental vocabulary, basic greetings, present tense structures, and simple sentence making.',
    learningOutcomes: [
      'Introduce yourself, your family and your hobbies clearly.',
      'Understand and write simple descriptive sentences.',
      'Develop correct pronunciation of high-frequency English words.',
      'Listen to and comprehend slow, deliberate native speech.'
    ],
    duration: '6 Months',
    level: 'Beginner (A1)',
    ageGroup: 'All',
    price: '$65 / month',
    isActive: true
  },
  {
    id: 'en-02',
    title: 'Intermediate English (CEFR B1-B2)',
    category: 'english',
    overview: 'Transition from passive understanding to natural speaking. Learn complex tenses, passive voices, and conversational transitions.',
    learningOutcomes: [
      'Describe experiences, goals, and speak about conditional futures.',
      'Engage effortlessly in discussions about social and academic topics.',
      'Write clear, cohesive paragraphs and letters.',
      'Correct common grammar errors dynamically during conversations.'
    ],
    duration: '6 Months',
    level: 'Intermediate (B1-B2)',
    ageGroup: 'Teenagers',
    price: '$70 / month',
    isActive: true
  },
  {
    id: 'en-03',
    title: 'Spoken English & Fluency',
    category: 'english',
    overview: 'Boost your verbal flexibility and lose the fear of speaking. Develop native idioms, natural fillers, contractions, and direct speaking tactics.',
    learningOutcomes: [
      'Examine pronunciation and eliminate physical accent blockages.',
      'Navigate real-time interviews, presentations, and client discussions.',
      'Apply standard English idioms to sound natural.',
      'Formulate fast responses without translating mentally.'
    ],
    duration: '6 Months',
    level: 'Intermediate to Advanced',
    ageGroup: 'Adults',
    price: '$75 / month',
    isActive: true
  },
  {
    id: 'en-04',
    title: 'Advanced English & Rhetoric',
    category: 'english',
    overview: 'Refine your English to a native standard. Focus on professional presentations, stylistic written expressions, and advanced vocabulary.',
    learningOutcomes: [
      'Understand complex professional texts and classic literature.',
      'Employ persuasive language patterns and structured metaphors.',
      'Participate in fast-paced debates on political or scientific grounds.',
      'Draft highly professional emails and reports with nuanced tones.'
    ],
    duration: '6 Months',
    level: 'Advanced (C1-C2)',
    ageGroup: 'Adults',
    price: '$80 / month',
    isActive: true
  },
  {
    id: 'en-05',
    title: 'English Academy for Kids',
    category: 'english',
    overview: 'A vibrant interactive course targeting children from age 5 to 11. Built on stories, games, phonics, and cooperative conversations.',
    learningOutcomes: [
      'Master correct phonics and clear vocabulary.',
      'Speak politely and make complete requests.',
      'Express creative thoughts and tell simple bedtime stories.',
      'Prepare for English primary school curricula.'
    ],
    duration: '6 Months',
    level: 'Beginner (A1-A2)',
    ageGroup: 'Children',
    price: '$55 / month',
    isActive: true
  },
  {
    id: 'en-06',
    title: 'Public Speaking & Communication',
    category: 'english',
    overview: 'Overcome stages of performance anxiety. Master vocal modulation, body language, and slide structure for international presentations.',
    learningOutcomes: [
      'Deliver an impactful speech with absolute poise.',
      'Use the power of storytelling to hook any audience.',
      'Respond to unexpected Q&A challenges with calm confidence.',
      'Control micro-gestures and body posture to project leadership.'
    ],
    duration: '6 Months',
    level: 'Advanced',
    ageGroup: 'All',
    price: '$85 / month',
    isActive: true
  }
];

export const DEFAULT_TEACHERS: Teacher[] = [
  {
    id: 'teacher-01',
    name: 'Muhammad Abdul Waheed Haris',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    qualifications: [
      'Masters In English Linguistics Literature.',
      'Masters in Islamic studies',
      'Experienced Professional Language Learning Instructor'
    ],
    experience: '19 Years',
    biography: 'This distinguished education professional with nearly two decades of experience in language instruction. Through a learner-centered philosophy and a commitment to educational excellence, he equips students with the linguistic proficiency, confidence, and critical thinking skills needed to excel academically and beyond.',
    specialties: ['Classical Arabic', 'Modern Standard Arabic', 'English Grammar', 'Public Speaking & Debate'],
    isActive: true
  },
  {
    id: 'teacher-02',
    name: 'Sadia Sheikh',
    photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
    qualifications: [
      'Masters in Islamic Studies & Arabic',
      'Expertise in Early Childhood language Acquisition'
    ],
    experience: '10 Years',
    biography: 'An esteemed educator with a decade of expertise, Teacher Sadia Sheikh blends traditional scholastic eloquence with modern digital methods. She excels in teaching Arabic dialogue, classical eloquence, and guiding students in precise Quranic Tajweed rules.',
    specialties: ['Quranic Arabic', 'Tajweed Rules', 'Arabic Conversation', 'Arabic for Women & Children'],
    isActive: true
  },
  {
    id: 'teacher-06',
    name: 'Humaira Hussain',
    photoUrl: '',
    qualifications: [
      'Masters in Islamic Studies & Arabic',
      'Expertise in Early Childhood language Acquisition'
    ],
    experience: '5 Years',
    biography: 'Teacher Humaira Hussain is an accomplished educator specializing in Arabic study and early childhood linguistic mentorship. With five years of dedicated experience, she blends master-level academic insights with highly active, family-friendly methods to support every learner’s journey.',
    specialties: ['Islamic Studies', 'Arabic Grammar', 'Bilingual Education', 'Early Language Acquisition'],
    isActive: true
  },
  {
    id: 'teacher-03',
    name: 'Ama Tul Momin Mominah',
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    qualifications: [
      'Masters in Islamic Studies & Arabic',
      'Qualified Arabic and Islamic Studies Teacher',
      'Expertise in Early Childhood language Acquisition'
    ],
    experience: '3 Years',
    biography: 'Teacher Ama Tul Momin Mominah is a highly vibrant Arabic and Quranic tutor known for active learning games, custom interactive visuals, and kid-friendly phonics. She works closely with children and absolute beginners to make learning fun and rewarding.',
    specialties: ['Arabic for Beginners', 'Arabic Reading & Writing', 'Arabic for Children', 'Phonics & Speech'],
    isActive: true
  },
  {
    id: 'teacher-04',
    name: 'Umer Abdullah Ahmed',
    photoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400',
    qualifications: [
      'BA in Islamic Jurisprudence & Arabic Studies',
      'Certified Digital Classroom Specialist',
      'Professional Diploma in Arabic Rhetoric'
    ],
    experience: '2.5 Years',
    biography: 'Teacher Umer Abdullah Ahmed specializes in high-engagement conversation clinics, grammar patterns, and standard spoken Arabic. His structured, highly supportive tutoring approach helps teenagers and young adults build strong vocabulary roots fast.',
    specialties: ['Arabic for Teens', 'Standard Spoken Arabic', 'Arabic Grammar (Nahw)', 'Vocabulary Integration'],
    isActive: true
  },
  {
    id: 'teacher-05',
    name: 'Muhammad Abdul Fattah',
    photoUrl: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&q=80&w=400',
    qualifications: [
      'B.A in Islamic Studies and Arabic'
    ],
    experience: '1 Year',
    biography: 'Bringing fresh perspective and dynamic modern teaching methodologies, Teacher Muhammad Abdul Fattah supports bilingual reading and conversational fluency in both English and Arabic. His classes utilize custom worksheets and creative visual slides.',
    specialties: ['Beginner Arabic', 'Conversational English', 'Linguistic Literacy', 'Interactive Worksheets'],
    isActive: true
  }
];

export const DEFAULT_BLOGS: Blog[] = [
  {
    id: 'bl-01',
    title: '5 Crucial Secrets to Read Arabic Fluently (Without Vowel Marks)',
    category: 'arabic',
    excerpt: 'Reading Arabic script without Harakaat (diacritics) might look intimidating. Here are five simple rules based on grammar and word shapes to help you crack it.',
    content: `## Demystifying Arabic Reading

To the untrained eye, reading Arabic without vowel markings (Harakaat) feels like magic. However, once you learn the structure of the language, you realize that Arabic reading is 90% logic patterns. Here are 5 practical tips to start reading MSA fluently.

### 1. Master the Multi-Consonant Root System
Almost 99% of Arabic verbs and nouns derive from a **three-letter root (Triliteral Root)**. By recognizing the root (e.g., K-T-B which refers to writing), you can easily guess the word's base meaning:
- **KaTaBa** (to write)
- **KiTaB** (book)
- **MaKTaB** (desk/office)

### 2. Learn the Arabic Noun Scales (Awzan)
Because vocabulary relies on standard mathematical scales, a scale automatically indicates context. For example, any word looking like **Fa'il** represents the "doer" of an action (e.g., **Katib** = writer, **Sami** = listener).

### 3. Contextualize with Prepositions
In Arabic sentences, particles like *fi* (in), *ala* (on), or *min* (from) enforce a genitive state (*Kasra*) on the noun following them. Identifying prepositions lets you determine the ending vowels of adjacent words.

### 4. Practice Daily Sight Reading
Pick short news headlines or simple children scripts. The more you familiarize your eye with word silhouettes, the faster your brain matches them without manual phoneme parsing.

### 5. Study Basic Arabic Syntax (Nahw)
Studying grammar isn't just about passing tests—it provides you with the skeletal frame to read flawlessly. Knowing whether a word is the subject (*Marfoo'*) or object (*Mansoob*) determines the pronunciation immediately.

Join our team of native coaches at Al Jisr Academy to master these techniques in interactive, real-life lectures!`,
    author: 'Dr. Ahmad Al-Mansoor',
    date: 'June 05, 2026',
    readTime: '5 min read',
    coverImageUrl: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&q=80&w=800',
    isActive: true
  },
  {
    id: 'bl-02',
    title: 'Eliminating the Speaking Fear: From Passive English Learner to Active Communicator',
    category: 'english',
    excerpt: 'Many global students can document perfect English scores, yet choke during simple phone calls. Discover actionable steps to wire your brain for immediate spoken output.',
    content: `## Overcoming the Language Barrier

Do you freeze when ordering coffee or introducing yourself in professional meetings? You are not alone. This is the "Passive Vocabulary Trap"—your brain recognizes millions of English terms but lacks the structural channels to recall them on demand.

### The Psychology of Verbal Performance
Our main mistake is trying to be **flawless**. When you translation-parse each sentence in your head, you run out of memory space, causing pauses and physical stuttering.

### 4 Exercises to Accelerate Fluency:
1. **Self-Talk Monologues**: Spend 3 minutes every morning describing your schedule out loud in an empty room. No dictionary, no pauses. Just keep the sound stream running.
2. **Embody the Stress Patterns**: English is a *stress-timed* language, unlike syllable-timed languages. Push power to content words (nouns, action verbs) and slide over auxiliary cells.
3. **Imitation and Shadowing**: Take a 30-second audio clip of a native speaker. Record yourself speaking *over* them at the exact same rhythm. It rewires tongue muscle memory.
4. **Use Connectors**: Memorize reliable phrases like "Well, as a matter of fact...", "What I was trying to say is..." to buy your brain valuable seconds to plan its next point.

At Al Jisr Academy, we host dedicated **one-to-one conversational safe spaces** designed to let you build fluency with premium native tutors without any judgement or fear.`,
    author: 'Sarah Jenkins, MA',
    date: 'May 28, 2026',
    readTime: '4 min read',
    coverImageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
    isActive: true
  },
  {
    id: 'bl-03',
    title: 'Announcing Al Jisr Academy Summer Language Intensive Programs 2026',
    category: 'announcement',
    excerpt: 'Registration is officially open for our highly anticipated summer camps! Intensive speaking courses for school kids, teens, and professional career transitions with live interaction.',
    content: `## Elevate Your Skills This Summer!

Al Jisr Academy is thrilled to present our **2026 Summer Language Intensive Programs**. Starting July 1st, these dedicated courses are calibrated to fast-track your proficiency in English or Arabic in record time.

### Why Choose Our Intensive Programs?
- **High Frequency**: Daily active live lectures (4 days per week) with individual homework corrections.
- **Micro-Groups**: Maximum 4 coordinates per class to guarantee absolute speaking time.
- **Project-Based Learning**: Students construct live presentations, publish family essays, or conduct debates rather than taking boring passive multiple-choice exams.

### Specialized Camps Available:
- *Arabic Phonics Camp* (Age 6-12)
- *English Leadership & Rhetoric* (Age 13-18)
- *Conversational Business Pitching* (Adult Career Pivot)

Register early to secure up to **20% Early Bird Discounts**! Navigate to our admissions desk or speak to our representatives via WhatsApp.`,
    author: 'Academy Executive Board',
    date: 'June 12, 2026',
    readTime: '3 min read',
    coverImageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
    isActive: true
  }
];

export const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    id: 'ts-01',
    name: 'Yousef Mohammed',
    country: 'United Kingdom',
    rating: 5,
    role: 'Parent',
    comment: 'Al Jisr Academy has transformed my children\'s relationship with the Arabic language. Ustadh Tareq is incredibly creative, wrapping vocabulary in simple stories. My 7-year-old now looks forward to every Sunday class!',
    date: 'May 10, 2026',
    isActive: true
  },
  {
    id: 'ts-02',
    name: 'Amina Al-Farsi',
    country: 'Canada',
    rating: 5,
    role: 'Student',
    comment: 'Understanding Quranic Arabic was my lifetime goal. Thanks to the highly structured grammar modules structured by Dr. Ahmad, the language is finally opening up. I can now understand many surahs directly without looking up translations.',
    date: 'April 22, 2026',
    isActive: true
  },
  {
    id: 'ts-03',
    name: 'James Harrison',
    country: 'USA',
    rating: 5,
    role: 'Student',
    comment: 'The advanced communication course coached by Sarah Jenkins was phenomenal. As a technology lead, conveying complex requirements in simple English is critical. Her training in narrative voice and slide pacing has been a career game-changer.',
    date: 'June 01, 2026',
    isActive: true
  },
  {
    id: 'ts-04',
    name: 'Fatima Zahra',
    country: 'Saudi Arabia',
    rating: 5,
    role: 'Parent',
    comment: 'Excellent customer support, perfect software execution, and professional global tutors. My teenagers are taking both the Spoken English and Creative Writing courses, and the progress tracking dashboards keep me fully aware of their improvements.',
    date: 'May 30, 2026',
    isActive: true
  }
];

export const DEFAULT_ANNOUNCEMENTS: Announcement[] = [
  {
    id: 'an-01',
    text: 'Summer Intensive enrollment is open! Act early to save 20% using code SUMMER20.',
    link: '#admissions',
    isActive: true,
    priority: 'high'
  },
  {
    id: 'an-02',
    text: 'Web-based interactive Arabic quiz platform launching next week for all students.',
    isActive: true,
    priority: 'normal'
  }
];

export const DEFAULT_MEDIA: MediaItem[] = [
  {
    id: 'me-01',
    name: 'Ahmad Al-Mansoor Portrait',
    folder: 'Teachers',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
    size: '42 KB',
    dateUploaded: '2026-03-12'
  },
  {
    id: 'me-02',
    name: 'Sarah Jenkins Portrait',
    folder: 'Teachers',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    size: '45 KB',
    dateUploaded: '2026-03-14'
  },
  {
    id: 'me-03',
    name: 'Reading Arabic Cover',
    folder: 'Blogs',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&q=80&w=800',
    size: '124 KB',
    dateUploaded: '2026-05-01'
  },
  {
    id: 'me-04',
    name: 'English Fluency Cover',
    folder: 'Blogs',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
    size: '112 KB',
    dateUploaded: '2026-05-05'
  }
];

export const FASE_INFO = {
  currency: 'USD',
  pricingModels: [
    {
      title: 'Group Class',
      price: '10',
      frequency: 'hour',
      classes: 'Learn collaboratively with peers',
      idealFor: 'Designed for student interaction and collective practice.',
      features: [
        'Interactive live classes',
        'Customized digital workbook',
        'Interactive homework access',
        'Regular progress milestones'
      ],
      color: 'sky',
      isPopular: true
    },
    {
      title: 'One-to-One Class',
      price: '15',
      frequency: 'hour',
      classes: 'Private 1-on-1 tutoring',
      idealFor: 'Custom speed and personalized attention with professional mentors.',
      features: [
        'Dedicated 1-on-1 mentor matching',
        'Custom curriculum pacing',
        'Priority schedule flexibility',
        'Monthly live speaking evaluation'
      ],
      color: 'slate'
    }
  ]
};

export const FAQS = [
  {
    q: 'How do live online classes work?',
    a: 'Classes are held over safe high-definition web conferencing channels (like Google Meet or Zoom) integrated directly inside our parent-student dashboards. All you need is a laptop/tablet and a stable internet connection.'
  },
  {
    q: 'Can I choose my own schedule?',
    a: 'Absolutely! Our international network of teachers provides classes around the clock, accommodating all timezones (USA, UK, Canada, UAE, Australia, etc.). You can finalize timings that fit your routines.'
  },
  {
    q: 'What is the standard size of group classes?',
    a: 'We keep our groups intentionally small—averaging between 3 to 5 students per class. This guarantees every child, teenager, or adult gets sufficient speaking time and personalized tutor feedback.'
  },
  {
    q: 'Can we book a trial class?',
    a: 'Yes, we provide a 100% free, 30-minute individual trial class. Our expert teacher will assess your current levels, understand your goals, and structure a custom learning outline for you.'
  },
  {
    q: 'How do I track my child\'s educational progress?',
    a: 'Parents receive monthly progress cards documenting vocabulary growth, oral reading metrics, spelling accuracy, and attendance statistics, along with video messages from their coach.'
  },
  {
    q: 'What qualifications do Al Jisr teachers possess?',
    a: 'All our Arabic and Quranic teachers hold official degrees from prestigious universities (such as Al-Azhar, Amman University, University of Jordan) and have verified pedagogical experience. Our English teachers are TEFL/CELTA certified native speakers.'
  }
];
