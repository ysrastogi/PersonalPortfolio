// Skills tags for the portfolio
export const SKILLS = [
  { name: 'Generative AI', bgColor: 'bg-purple-100', textColor: 'text-primary', icon: 'robot' },
  { name: 'LLMs', bgColor: 'bg-blue-100', textColor: 'text-blue-800', icon: 'brain' },
  { name: 'Data Science', bgColor: 'bg-green-100', textColor: 'text-green-800', icon: 'chart-bar' },
  { name: 'NLP', bgColor: 'bg-teal-100', textColor: 'text-teal-800', icon: 'language' },
  { name: 'Machine Learning', bgColor: 'bg-indigo-100', textColor: 'text-indigo-800', icon: 'code-branch' },
  { name: 'LangChain', bgColor: 'bg-rose-100', textColor: 'text-rose-800', icon: 'link' },
  { name: 'Vector DB', bgColor: 'bg-yellow-100', textColor: 'text-yellow-800', icon: 'database' },
  { name: 'Python', bgColor: 'bg-blue-100', textColor: 'text-blue-800', icon: 'python' },
];

// Services offered
export const SERVICES = [
  {
    title: 'Generative AI Development',
    description: 'Custom generative AI solutions that transform your business processes and improve efficiency. From text generation to creative content production.',
    technologies: 'GPT-4, Mistral, Llama2, Stable Diffusion',
    icon: 'robot',
    iconColor: 'text-primary',
    bgColor: 'bg-purple-100'
  },
  {
    title: 'Data Science & Analytics',
    description: 'Turn raw data into clear, actionable insights that help businesses make smarter decisions. From automated dashboards to predictive modeling that gives you a competitive edge.',
    technologies: 'Python, TensorFlow, PyTorch, Pandas, NumPy, SQL',
    icon: 'chart-line',
    iconColor: 'text-teal-600',
    bgColor: 'bg-teal-100'
  },
  {
    title: 'AI Integration & Deployment',
    description: 'Seamless integration of AI models into your existing systems with optimized deployment strategies for performance and cost-efficiency.',
    technologies: 'Docker, Kubernetes, AWS, Azure, GCP',
    icon: 'brain',
    iconColor: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    title: 'AI Security & Governance',
    description: 'Implement robust security measures and governance frameworks for your AI systems, ensuring compliance with regulations and best practices.',
    technologies: 'AI Risk Assessment, Privacy Protection, Ethical AI',
    icon: 'shield-alt',
    iconColor: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    title: 'Data Engineering for AI',
    description: 'Build robust data pipelines and vector databases to power your AI applications with high-quality, reliable data.',
    technologies: 'Vector DB, PostgreSQL, MongoDB, ETL Pipelines',
    icon: 'database',
    iconColor: 'text-indigo-600',
    bgColor: 'bg-indigo-100'
  },
  {
    title: 'AI Consulting & Strategy',
    description: 'Strategic guidance on implementing AI in your organization, from opportunity assessment to roadmap development.',
    technologies: 'ROI Assessment, Technology Selection, Implementation Planning',
    icon: 'lightbulb',
    iconColor: 'text-yellow-600',
    bgColor: 'bg-yellow-100'
  }
];

// Projects showcase
export const PROJECTS = [
  {
    title: 'Business Intelligence Dashboard Suite',
    description: 'Developed automated data analytics dashboards that transform raw business data into clear insights, enabling smarter decision-making across departments. The solution includes predictive modeling to forecast business trends.',
    features: [
      'Automated data collection and processing',
      'Interactive visualization dashboards',
      'Predictive analytics with ML models',
      'Real-time performance monitoring'
    ],
    technologies: [
      { name: 'Python', bgColor: 'bg-blue-100', textColor: 'text-blue-800' },
      { name: 'Pandas/NumPy', bgColor: 'bg-teal-100', textColor: 'text-teal-800' },
      { name: 'TensorFlow', bgColor: 'bg-orange-100', textColor: 'text-orange-800' },
      { name: 'SQL', bgColor: 'bg-indigo-100', textColor: 'text-indigo-800' }
    ],
    icon: 'chart-line',
    gradient: 'from-teal-500 to-blue-500',
    projectTitle: 'Data Analytics'
  },
  {
    title: 'AI Security and Governance Framework',
    description: 'Developed comprehensive security measures and governance frameworks for enterprise AI systems, ensuring compliance with regulations while protecting sensitive data.',
    features: [
      'Rigorous testing of AI models',
      'Continuous monitoring systems',
      'Data protection protocols'
    ],
    technologies: [
      { name: 'Security Frameworks', bgColor: 'bg-purple-100', textColor: 'text-purple-800' },
      { name: 'Governance Tools', bgColor: 'bg-blue-100', textColor: 'text-blue-800' },
      { name: 'Compliance Systems', bgColor: 'bg-green-100', textColor: 'text-green-800' }
    ],
    icon: 'shield-alt',
    gradient: 'from-primary to-indigo-700',
    projectTitle: 'AI Security'
  },
  {
    title: 'Soil Health Monitoring System',
    description: 'Designed and developed an optochemical sensor-based machine learning solution to monitor soil health. This product determines the macro nutrient content (N, P, K) of the soil for more efficient agricultural practices.',
    features: [
      'Real-time nutrient monitoring',
      'Predictive analytics for soil health',
      'Mobile-friendly data reporting'
    ],
    technologies: [
      { name: 'Machine Learning', bgColor: 'bg-purple-100', textColor: 'text-purple-800' },
      { name: 'Sensor Technology', bgColor: 'bg-yellow-100', textColor: 'text-yellow-800' },
      { name: 'Data Analysis', bgColor: 'bg-green-100', textColor: 'text-green-800' }
    ],
    icon: 'seedling',
    gradient: 'from-blue-600 to-cyan-500',
    projectTitle: 'AgriTech'
  },
  {
    title: 'SORA AI Research and Analysis',
    description: 'Conducted in-depth research on OpenAI\'s SORA model, exploring its technical capabilities, limitations, and potential applications for video generation and creative content production.',
    features: [
      'Technical architecture analysis',
      'Use case exploration',
      'Published comprehensive report'
    ],
    technologies: [
      { name: 'Video Generation', bgColor: 'bg-purple-100', textColor: 'text-purple-800' },
      { name: 'Diffusion Models', bgColor: 'bg-blue-100', textColor: 'text-blue-800' },
      { name: 'AI Capabilities', bgColor: 'bg-green-100', textColor: 'text-green-800' }
    ],
    icon: 'robot',
    gradient: 'from-amber-500 to-orange-600',
    projectTitle: 'LLM Research'
  }
];

// Work experience data
export const WORK_EXPERIENCE = [
  {
    title: 'Software Engineer (SDE 1)',
    company: 'Wealthy',
    period: 'Jun 2024 - Present · 11 months',
    location: 'Bengaluru, Karnataka, India · On-site',
    type: 'Full-time',
    skills: ['Data Engineering', 'Data Pipelines'],
    logo: 'https://images.unsplash.com/photo-1592772874383-d08932d29db7?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
  },
  {
    title: 'Machine Learning Engineer',
    company: 'Wealthy',
    period: 'Oct 2023 - May 2024 · 8 months',
    location: '',
    type: 'Internship',
    skills: [],
    logo: 'https://images.unsplash.com/photo-1592772874383-d08932d29db7?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
  },
  {
    title: 'Placement Coordinator',
    company: 'Centre of Training & Placement, NIT Jalandhar',
    period: 'Apr 2023 - May 2024 · 1 yr 2 mos',
    location: '',
    type: 'Part-time',
    skills: [],
    logo: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
  }
];

// Education data
export const EDUCATION = [
  {
    degree: 'Bachelor\'s degree, Instrumentation and Control Engineering',
    institution: 'Dr B R Ambedkar National Institute of Technology, Jalandhar',
    period: '2020 - 2024',
    activities: 'Activities and societies: Member of \'We Can Club\', Member of \'Kalakaar\' team',
    skills: ['Keras', 'Linear Algebra'],
    logo: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
  }
];

// Certifications data
export const CERTIFICATIONS = [
  {
    title: 'Deep Learning with Keras and TensorFlow',
    issuer: 'IBM',
    date: 'Issued Apr 2025',
    logo: 'ibm',
    bgColor: 'bg-blue-100',
    logoColor: 'text-blue-700'
  },
  {
    title: 'Introduction to Deep Learning & Neural Networks with Keras',
    issuer: 'IBM',
    date: 'Issued Mar 2025',
    logo: 'ibm',
    bgColor: 'bg-blue-100',
    logoColor: 'text-blue-700'
  },
  {
    title: 'AI Security and Governance',
    issuer: 'Securiti',
    date: 'Issued Jun 2024',
    logo: 'shield-alt',
    bgColor: 'bg-cyan-100',
    logoColor: 'text-cyan-700'
  },
  {
    title: 'Data Science Professional Certificate',
    issuer: 'IBM',
    date: 'Issued Feb 2025',
    logo: 'ibm',
    bgColor: 'bg-blue-100',
    logoColor: 'text-blue-700'
  },
  {
    title: 'Machine Learning Specialization',
    issuer: 'Stanford University (Coursera)',
    date: 'Issued Mar 2024',
    logo: 'graduation-cap',
    bgColor: 'bg-red-100',
    logoColor: 'text-red-700'
  },
  {
    title: 'SQL for Data Science',
    issuer: 'University of California, Davis',
    date: 'Issued Jan 2024',
    logo: 'database',
    bgColor: 'bg-green-100',
    logoColor: 'text-green-700'
  }
];

// Analytics data
export const ANALYTICS = [
  {
    number: '247',
    label: 'profile views',
    description: 'Discover who\'s viewed your profile.',
    icon: 'users',
    bgColor: 'bg-primary/10',
    iconColor: 'text-primary'
  },
  {
    number: '72',
    label: 'post impressions',
    description: 'Check out who\'s engaging with your posts. Past 7 days',
    icon: 'chart-bar',
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    number: '49',
    label: 'search appearances',
    description: 'See how often you appear in search results.',
    icon: 'search',
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600'
  }
];

// Navigation links
export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Research', href: '#research' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' }
];

// Social links
export const SOCIAL_LINKS = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/yash-rastogi-7233a31a5', icon: 'linkedin-in' },
  { name: 'GitHub', href: 'https://github.com/yashrastogi', icon: 'github' },
  { name: 'Email', href: 'mailto:ysrastogi19@gmail.com', icon: 'envelope' }
];
