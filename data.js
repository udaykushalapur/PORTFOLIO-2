// Define globally to ensure access
window.portfolioData = {
  // =====================================================
  // PROJECTS DATA
  // =====================================================
  projects: [
    {
      id: 'coderev',
      title: 'CodeRev — AI-Powered Collaborative Code Editor',
      category: 'Collaborative Code Editor',
      description: 'Real-time collaborative code editor with multi-user cursors, chat, autosave, and AI-assisted code suggestions using Google Gemini.',
      tags: ['Next.js', 'Firebase Realtime DB', 'Monaco Editor', 'Gemini API'],
      image: 'images/coderev.png', // Placeholder, user might need to upload or I use existing
      liveLink: '#',
      githubLink: '#',
      detailsLink: '#'
    },
    {
      id: 'atlas-ai',
      title: 'Atlas AI Assistant — AI-Powered Document Assistant',
      category: 'AI Document Assistant',
      description: 'RAG-based document assistant that transforms PDFs into an intelligent, searchable knowledge base. Features AI-powered chat with source citations.',
      tags: ['React', 'TypeScript', 'Django', 'ChromaDB', 'Ollama', 'Clerk', 'PostgreSQL'],
      image: 'images/atlas-ai.png',
      githubLink: '#',
      detailsLink: '#'
    },
    {
      id: 'krishilog-ai',
      title: 'KrishiLog AI — Agricultural Intelligence Platform',
      category: 'Agricultural Platform',
      description: 'AI-powered agricultural platform that achieved incubation and initial funding opportunity at Code Bharat 2025. Currently paused for strategic pivot.',
      tags: ['Next.js', 'Supabase', 'Whisper', 'Sarvam', 'Twilio'],
      image: 'images/krishilog.png',
      liveLink: '#',
      githubLink: '#',
      detailsLink: '#'
    }
  ],

  // =====================================================
  // SKILLS DATA
  // =====================================================
  skills: [
    {
      id: 'design',
      icon: '🎨',
      title: 'Design',
      items: [
        { name: 'UI/UX Design', level: 95 },
        { name: 'Visual Design', level: 90 },
        { name: 'Prototyping', level: 92 },
        { name: 'Design Systems', level: 88 }
      ]
    },
    {
      id: 'tools',
      icon: '🛠️',
      title: 'Tools',
      items: [
        { name: 'Figma', level: 98 },
        { name: 'Framer', level: 94 },
        { name: 'Adobe Creative Suite', level: 85 },
        { name: 'Sketch', level: 80 }
      ]
    },
  ]
};
