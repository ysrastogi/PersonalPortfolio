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
    "title": "Zenith AI Assistant",
    "description": "A smart conversational AI that answers questions by reading and understanding content from PDFs and web documents, providing accurate, context-aware responses from complex sources in real time.",
    "features": [
      "Interactive chat interface with multi-model support",
      "Document processing and information extraction",
      "Web page content analysis", 
      "Conversation history and context awareness",
      "Multilingual interface support"
    ],
    "technologies": [
      {"name": "Python", "bgColor": "bg-blue-100", "textColor": "text-blue-800"},
      { "name": "Chainlit", "bgColor": "bg-grey-100", "textColor": "text-blue-800" },
      {"name": "Vector DB", "bgColor": "bg-yellow-100", "textColor": "text-yellow-800"},
      { "name": "LangChain", "bgColor": "bg-green-100", "textColor": "text-green-800" },
      { "name": "PyTorch", "bgColor": "bg-orange-100", "textColor": "text-orange-800" },
      { "name": "OpenAI/Anthropic", "bgColor": "bg-purple-100", "textColor": "text-purple-800" }
    ],
    "icon": "robot",
    "gradient": "from-blue-500 to-purple-500",
    "projectTitle": "Zenith AI",
    "url": "https://huggingface.co/spaces/hello-yaaash25/zenith"
  },
  {
  "title": "Modular GenAI Flow",
  "description": "A plug-and-play dual-mode GenAI system designed for both SMBs and enterprises, offering lightning-fast deployment, scalable AI orchestration, and modular adaptability across channels like WhatsApp, Email, and Voice.",
  "features": [
    "Dual-mode architecture (SMB and Enterprise stacks)",
    "Agent orchestrator with model selection and prompt engineering",
    "Modular channel adapter for WhatsApp, Email, Voice, and more",
    "Memory management with Redis, Pinecone, SQLite support",
    "End-to-end analytics via Prometheus, Grafana, and JSON logs"
  ],
  "technologies": [
    { "name": "FastAPI", "bgColor": "bg-blue-100", "textColor": "text-blue-800" },
    { "name": "Docker", "bgColor": "bg-yellow-100", "textColor": "text-yellow-800" },
    { "name": "Kubernetes", "bgColor": "bg-green-100", "textColor": "text-green-800" },
    { "name": "MLflow", "bgColor": "bg-orange-100", "textColor": "text-orange-800" },
    { "name": "Redis", "bgColor": "bg-red-100", "textColor": "text-red-800" },
    { "name": "Pinecone", "bgColor": "bg-purple-100", "textColor": "text-purple-800" },
    { "name": "SQLite", "bgColor": "bg-gray-100", "textColor": "text-gray-800" },
    { "name": "Prometheus", "bgColor": "bg-pink-100", "textColor": "text-pink-800" },
    { "name": "Grafana", "bgColor": "bg-indigo-100", "textColor": "text-indigo-800" }
  ],
  "icon": "puzzle",
  "gradient": "from-green-500 to-yellow-500",
  "projectTitle": "Modular GenAI Flow",
  "url": "/modular-genai-architecture.html"
  },
  {
  "title": "Lead Scoring & Intent Detection",
  "description": "An NLP-powered pipeline integrating intent classification, sentiment analysis, and lead scoring to help sales teams prioritize leads in real-time and improve conversion rates through automated CRM integration.",
  "features": [
    "Intent detection using BERT (e.g., Purchase, Demo Request)",
    "Sentiment analysis with VADER for tone-based routing",
    "XGBoost-based scoring model for lead prioritization",
    "REST API & Webhook integration with CRMs like Salesforce & HubSpot",
    "Real-time lead enrichment and workflow automation"
  ],
  "technologies": [
    { "name": "Python", "bgColor": "bg-blue-100", "textColor": "text-blue-800" },
    { "name": "BERT", "bgColor": "bg-purple-100", "textColor": "text-purple-800" },
    { "name": "VADER", "bgColor": "bg-yellow-100", "textColor": "text-yellow-800" },
    { "name": "XGBoost", "bgColor": "bg-green-100", "textColor": "text-green-800" },
    { "name": "FastAPI", "bgColor": "bg-teal-100", "textColor": "text-teal-800" },
    { "name": "Salesforce", "bgColor": "bg-indigo-100", "textColor": "text-indigo-800" },
    { "name": "HubSpot", "bgColor": "bg-orange-100", "textColor": "text-orange-800" }
  ],
  "icon": "activity",
  "gradient": "from-pink-500 to-yellow-500",
  "projectTitle": "Lead Scoring AI",
  "url": "/lead-scoring-and-intent-detection.html"
  },
  {
  "title": "Unified AI Layer for CRM & Support",
  "description": "An AI-driven integration layer that automates lead syncing, support triage, and smart meeting scheduling via FastAPI + LangChain, enhancing agent productivity and accelerating customer response times across HubSpot, Intercom, and Google Calendar.",
  "features": [
    "Real-time lead sync to HubSpot via WhatsApp or Web",
    "Intent-based support ticket routing in Intercom",
    "Automated meeting booking via Google Calendar",
    "LangChain-powered agent with LLM-based decision-making",
    "Context-aware chat integration across mobile, web, and CRM tools"
  ],
  "technologies": [
    { "name": "FastAPI", "bgColor": "bg-blue-100", "textColor": "text-blue-800" },
    { "name": "LangChain", "bgColor": "bg-green-100", "textColor": "text-green-800" },
    { "name": "Redis", "bgColor": "bg-red-100", "textColor": "text-red-800" },
    { "name": "PostgreSQL", "bgColor": "bg-yellow-100", "textColor": "text-yellow-800" },
    { "name": "RabbitMQ", "bgColor": "bg-purple-100", "textColor": "text-purple-800" },
    { "name": "HubSpot", "bgColor": "bg-orange-100", "textColor": "text-orange-800" },
    { "name": "Intercom", "bgColor": "bg-pink-100", "textColor": "text-pink-800" },
    { "name": "Google Calendar", "bgColor": "bg-indigo-100", "textColor": "text-indigo-800" }
  ],
  "icon": "calendar-check",
  "gradient": "from-indigo-500 to-orange-500",
  "projectTitle": "CRM Support AI Layer",
  "url": "/crm-support-scaling.html"
  },
  {
  "title": "Multi-Channel AI Assistant",
  "description": "A unified AI system that delivers seamless, memory-driven conversations across WhatsApp, Email, Voice, and SMS. Designed for true omni-channel engagement with real-time CRM sync and context-aware LLM responses.",
  "features": [
    "Omni-channel support (WhatsApp, SMS, Email, Voice)",
    "Router for unified message handling across platforms",
    "LLM engine with dual-layer memory (Redis + FAISS)",
    "Semantic search for customer history and support documents",
    "Real-time CRM sync with Salesforce and HubSpot"
  ],
  "technologies": [
    { "name": "FastAPI", "bgColor": "bg-blue-100", "textColor": "text-blue-800" },
    { "name": "OpenAI / Claude / GGUF", "bgColor": "bg-purple-100", "textColor": "text-purple-800" },
    { "name": "Redis", "bgColor": "bg-red-100", "textColor": "text-red-800" },
    { "name": "FAISS", "bgColor": "bg-yellow-100", "textColor": "text-yellow-800" },
    { "name": "Twilio", "bgColor": "bg-pink-100", "textColor": "text-pink-800" },
    { "name": "Meta", "bgColor": "bg-green-100", "textColor": "text-green-800" },
    { "name": "HubSpot", "bgColor": "bg-orange-100", "textColor": "text-orange-800" },
    { "name": "Salesforce", "bgColor": "bg-indigo-100", "textColor": "text-indigo-800" }
  ],
  "icon": "message-circle",
  "gradient": "from-purple-500 to-pink-500",
  "projectTitle": "Multi-Channel AI",
  "url": "/multi-channel-ai-assistant.html"
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
    title: 'CyberPhysical System Developer',
    company: '@Awadh-IITiHub - AWaDH @ IIT Ropar',
    period: 'Mar 2023 - Dec 2023 · 10 months',
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
    title: 'Advanced Deep Learning Specialist',
    issuer: 'IBM',
    date: 'Issued Apr 2025',
    logo: 'ibm',
    bgColor: 'bg-blue-100',
    logoColor: 'text-blue-700',
    certification_url: 'https://www.credly.com/badges/e8a8cbeb-3399-495d-9ddc-e86e6bb1019a/public_url'
  },
  {
    title: 'Generative AI and LLMs: Architecture and Data Preparation',
    issuer: 'IBM',
    date: 'Issued Mar 2025',
    logo: 'ibm',
    bgColor: 'bg-blue-100',
    logoColor: 'text-blue-700',
    certification_url: 'https://www.credly.com/badges/fa5df8bf-fade-48b1-b9ce-c693e77a4390/public_url'
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
//   {
//     number: '247',
//     label: 'profile views',
//     description: 'Discover who\'s viewed your profile.',
//     icon: 'users',
//     bgColor: 'bg-primary/10',
//     iconColor: 'text-primary'
//   },
//   {
//     number: '72',
//     label: 'post impressions',
//     description: 'Check out who\'s engaging with your posts. Past 7 days',
//     icon: 'chart-bar',
//     bgColor: 'bg-blue-100',
//     iconColor: 'text-blue-600'
//   },
//   {
//     number: '49',
//     label: 'search appearances',
//     description: 'See how often you appear in search results.',
//     icon: 'search',
//     bgColor: 'bg-green-100',
//     iconColor: 'text-green-600'
//   }
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
