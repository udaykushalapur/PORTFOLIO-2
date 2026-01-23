// Define globally to ensure access
window.portfolioData = {
  // =====================================================
  // PROJECTS DATA
  // =====================================================
  projects: [
    {
      id: 'SecurePass',
      title: 'SecurePass - Password Manager',
      category: 'Web App Design',
      description: 'A password manager that helps you store and manage your passwords securely.',
      tags: ['UI/UX', 'Web App', 'Security'],
      image: 'images/securepass.png',
      link: 'https://securepass-zeta.vercel.app/login',
      color: '#fff'
    },
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
