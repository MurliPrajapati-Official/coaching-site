/* ============================================================
   PURUSHOTTAM CLASSES — Course Data
   ============================================================ */

const COURSES_DATA = [
  {
    id: 'foundation',
    title: 'Foundation',
    grades: 'Class 1 – 5',
    icon: '📚',
    description: 'Building strong academic roots through engaging, activity-based learning that sparks curiosity and builds confidence in young learners.',
    subjects: ['Mathematics', 'English', 'Hindi', 'Marathi', 'EVS / Science'],
    boards: ['CBSE', 'ICSE', 'State Board'],
    method: [
      'Activity-based and visual learning techniques',
      'Concept building through real-world examples',
      'Worksheet practice and interactive exercises',
      'Regular parent-teacher communication',
      'Focus on reading, writing, and arithmetic mastery'
    ],
    outcomes: [
      'Strong mathematical and language fundamentals',
      'Exam confidence and reduced test anxiety',
      'Curiosity-driven love for learning',
      'Consistent academic performance',
      'Smooth transition to middle school'
    ]
  },
  {
    id: 'middle-school',
    title: 'Middle School',
    grades: 'Class 6 – 8',
    icon: '🔬',
    description: 'Strengthening analytical thinking and problem-solving skills as students navigate more complex academic challenges across subjects.',
    subjects: ['Mathematics', 'Science', 'English', 'Hindi', 'Sanskrit', 'French', 'Marathi'],
    boards: ['CBSE', 'ICSE', 'IGCSE', 'State Board'],
    method: [
      'Conceptual teaching with visual aids',
      'Problem-solving drills and logical reasoning practice',
      'Regular assessments and progress tracking',
      'Group discussions and collaborative learning',
      'Bridge courses for board transitions'
    ],
    outcomes: [
      'Board transition readiness',
      'Analytical and critical thinking development',
      'Consistent grades across all subjects',
      'Independent study habits',
      'Strong foundation for competitive exams'
    ]
  },
  {
    id: 'board-prep',
    title: 'Board Preparation',
    grades: 'Class 9 – 10',
    icon: '🎯',
    description: 'Intensive, board-focused preparation designed to maximize scores with strategic exam practice, concept mastery, and time management skills.',
    subjects: ['Mathematics', 'Physics', 'Science', 'English', 'French', 'Hindi', 'Sanskrit', 'Marathi'],
    boards: ['CBSE', 'ICSE', 'IGCSE', 'NIOS', 'State Board'],
    method: [
      'Board-specific curriculum alignment',
      'Previous year paper analysis and practice',
      'Mock tests with detailed performance reports',
      'One-on-one doubt resolution sessions',
      'Time management and exam strategy coaching'
    ],
    outcomes: [
      'High board examination scores',
      'Competitive exam readiness',
      'Complete subject mastery',
      'Stress-free exam preparation',
      'Strong academic record for college applications'
    ]
  },
  {
    id: 'senior-secondary',
    title: 'Senior Secondary',
    grades: 'Class 11 – 12',
    icon: '🎓',
    description: 'Advanced subject coaching and entrance exam preparation to bridge school education with higher academic and career goals.',
    subjects: ['Mathematics', 'Physics', 'English'],
    boards: ['CBSE', 'ICSE', 'IGCSE', 'NIOS', 'State Board'],
    method: [
      'Advanced concept building and application',
      'Entrance exam integrated preparation',
      'Practical problem-solving and case studies',
      'Career guidance and subject selection support',
      'Intensive revision and test series'
    ],
    outcomes: [
      'University and entrance exam readiness',
      'Deep subject understanding',
      'Competitive academic edge',
      'Career clarity and confidence',
      'Strong foundation for professional courses'
    ]
  }
];

const PROGRAMS_OVERVIEW = [
  {
    id: 'school-coaching',
    title: 'School Coaching',
    subtitle: 'Class 1 – 12, All Boards',
    description: 'Comprehensive academic coaching covering CBSE, ICSE, IGCSE, NIOS, and State Board curricula with personalized attention.',
    icon: '🏫',
    link: '#courses'
  },
  {
    id: 'home-tuition',
    title: 'Home Tuition',
    subtitle: 'One-on-One, Flexible',
    description: 'Expert tutors at your doorstep. Customized learning plans, flexible scheduling, and personalized academic support.',
    icon: '🏠',
    link: '#tuition'
  },
  {
    id: 'competitive-exams',
    title: 'Competitive Exams',
    subtitle: 'NDA, CAT, CET, Railway',
    description: 'Focused preparation programs for national and state competitive examinations with experienced faculty.',
    icon: '🏆',
    link: '#exams'
  },
  {
    id: 'language-training',
    title: 'Language Training',
    subtitle: 'French, Hindi, Sanskrit, Marathi',
    description: 'Build language proficiency with structured programs designed for both academic requirements and conversational fluency.',
    icon: '🌐',
    link: '#courses'
  },
  {
    id: 'higher-education',
    title: 'Higher Education',
    subtitle: 'B.Ed & M.Ed Support',
    description: 'Academic guidance and preparation support for Bachelor and Master of Education programs.',
    icon: '📖',
    link: '#courses'
  }
];
