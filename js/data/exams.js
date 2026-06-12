/* ============================================================
   PURUSHOTTAM CLASSES — Exam Program Data
   ============================================================ */

const EXAMS_DATA = [
  {
    id: 'nda',
    title: 'NDA',
    fullName: 'National Defence Academy',
    icon: 'medal',
    overview: 'Comprehensive preparation for the UPSC-conducted NDA & NA examination — the gateway to Indian Army, Navy, and Air Force officer training at the prestigious National Defence Academy, Khadakwasla, Pune.',
    eligibility: 'Class 12 pass or appearing (age 16.5–19.5)',
    examPattern: 'Paper I: Mathematics (300 marks) | Paper II: GAT (600 marks) | SSB Interview',
    features: [
      'Complete Mathematics syllabus coverage',
      'General Ability Test preparation (English, GK, Physics, Chemistry, Geography, History)',
      'Weekly mock tests matching NDA exam pattern',
      'Previous 10 years question paper analysis',
      'SSB interview guidance and personality development',
      'Physical fitness awareness and preparation tips'
    ],
    strategy: [
      'Foundation phase: Core concept building in Mathematics and Science',
      'Practice phase: Intensive problem-solving with timed tests',
      'Revision phase: Quick revision modules and formula sheets',
      'Mock test phase: Full-length tests with detailed analysis',
      'Interview prep: Group discussions, current affairs, personality grooming'
    ],
    faculty: 'Experienced defence exam coaches with proven track record of NDA selections. Faculty includes ex-defence personnel who understand the examination philosophy.',
    duration: '6–12 months',
    batchSize: 'Maximum 15 students'
  },
  {
    id: 'cat',
    title: 'CAT',
    fullName: 'Common Admission Test',
    icon: 'analytics',
    overview: 'Strategic preparation for India\'s premier MBA entrance examination. Our structured program covers all three sections with a focus on building speed, accuracy, and analytical thinking.',
    eligibility: 'Graduation in any discipline',
    examPattern: 'VARC (Verbal Ability & Reading Comprehension) | DILR (Data Interpretation & Logical Reasoning) | QA (Quantitative Ability)',
    features: [
      'Section-wise concept building and strategy',
      'Timed sectional and full-length mock tests',
      'Reading comprehension speed-building exercises',
      'Logical reasoning and data interpretation drills',
      'Quantitative ability — shortcuts and advanced techniques',
      'IIM-specific preparation and interview guidance'
    ],
    strategy: [
      'Diagnostic test to identify strengths and weak areas',
      'Concept phase: Build foundations across all three sections',
      'Speed phase: Timed practice sets with increasing difficulty',
      'Mock phase: 20+ full-length mocks with percentile tracking',
      'Final phase: Weak area targeting and last-mile revision'
    ],
    faculty: 'Management entrance specialists with IIM alumni network. Faculty brings real exam experience and mentoring expertise.',
    duration: '6–10 months',
    batchSize: 'Maximum 15 students'
  },
  {
    id: 'cet',
    title: 'CET',
    fullName: 'Common Entrance Test',
    icon: 'edit',
    overview: 'Focused preparation for Maharashtra\'s Common Entrance Test — the primary gateway for admission to engineering, pharmacy, and professional degree programs across Maharashtra state colleges.',
    eligibility: 'Class 12 pass with PCM/PCB',
    examPattern: 'Physics | Chemistry | Mathematics/Biology | Based on Class 11-12 syllabus',
    features: [
      'Complete Maharashtra State Board and CBSE syllabus coverage',
      'Chapter-wise concept clarity with solved examples',
      'Topic-wise test series aligned with CET pattern',
      'Previous year CET paper analysis and practice',
      'College counselling and admission guidance',
      'Doubt clearing sessions and revision workshops'
    ],
    strategy: [
      'Syllabus mapping: Align preparation with CET weightage analysis',
      'Concept phase: Deep-dive into high-weightage chapters',
      'Practice phase: 500+ MCQs per subject with solutions',
      'Test phase: 15+ full-length CET mock tests',
      'Revision phase: Formula books, quick-reference guides, crash courses'
    ],
    faculty: 'CET subject experts with deep understanding of Maharashtra board patterns. Faculty specializes in PCM with years of CET coaching experience.',
    duration: '4–8 months',
    batchSize: 'Maximum 15 students'
  },
  {
    id: 'railway',
    title: 'Railway Exams',
    fullName: 'RRB NTPC, Group D, RPF',
    icon: 'train',
    overview: 'Complete preparation for Indian Railway recruitment examinations including RRB NTPC, Group D, and RPF. Our program covers all stages from CBT to physical and document verification.',
    eligibility: 'Class 10 / Class 12 / Graduation (varies by post)',
    examPattern: 'CBT Stage 1 & 2: General Awareness, Mathematics, Reasoning | Typing/Physical Tests',
    features: [
      'General Awareness and Current Affairs modules',
      'Mathematical reasoning shortcuts and tricks',
      'Logical and analytical reasoning practice sets',
      'English language and comprehension drills',
      'Computer-based test simulation practice',
      'Previous year RRB paper analysis'
    ],
    strategy: [
      'Assessment phase: Identify target post and exam pattern',
      'Foundation phase: Build core competency in Maths, Reasoning, GK',
      'Practice phase: Daily practice sets with time tracking',
      'Mock phase: CBT simulation tests under exam conditions',
      'Current affairs: Daily updates and monthly compilations'
    ],
    faculty: 'Government exam preparation specialists with extensive experience in coaching for RRB, SSC, and state-level exams.',
    duration: '3–6 months',
    batchSize: 'Maximum 15 students'
  }
];
