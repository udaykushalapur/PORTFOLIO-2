// Define globally to ensure access
window.portfolioData = {
    // =====================================================
    // PROJECTS DATA
    // =====================================================
    projects: [
        {
            id: 'smart-attendance-system',
            title: 'Smart Attendance System',
            category: 'System Design',
            description: 'A comprehensive smart attendance system featuring facial recognition, real-time processing, and a centralized dashboard for tracking student attendance.',
            tags: ['IoT', 'Face Recognition', 'MongoDB', 'System Design'],
            image: 'images/attendance_system.jpg',
            // liveLink: 'https://example.com', // Add link if available
            color: '#fff'
        },

    ],

    // =====================================================
    // SKILLS DATA
    // =====================================================
    skills: [
        { name: 'JavaScript', icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" style="color: #F7DF1E;"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm5 0h-2V8h2v8z" opacity=".3"/><path d="M6 20h12V4H6v16zm5-13h2v10h-2V7zm-2.5 7h-2v3h2v-3zm3.5-7h2v10h-2V7z"/><path d="M3 3h18v18H3z" fill="#F7DF1E"/><path d="M0 0h24v24H0z" fill="none"/><path d="M6 16.5l2.5-.5V19h-2c-1.1 0-2-.9-2-2v-3h2v3.5zm2.5-3.5h-2c-1.1 0-2 .9-2 2V13h2v2h2v-2.5zm6.5-2.5v7h2c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2h-2zm2 5h-2v-3h2v3z"/></svg>' },
        { name: 'TypeScript', icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" style="color: #3178C6;"><path d="M2.5 2.5h19v19h-19z" fill="white"/><path d="M0 0h24v24H0z" fill="#3178C6"/><path d="M13.5 16h1.2v-7h-1.2v7zm-5-1.1c.5.5 1.2.9 2.1.9 1 0 1.5-.5 1.5-1.2 0-.8-.7-1.1-1.7-1.4-1.4-.4-2.2-.9-2.2-2.3 0-1.6 1.4-2.4 2.8-2.4 1 0 1.8.3 2.3.8l-.8 1.1c-.4-.4-1-.7-1.6-.7-.9 0-1.2.5-1.2 1 0 .8.8 1.1 1.8 1.4 1.5.5 2.1 1.2 2.1 2.3 0 1.6-1.4 2.5-2.9 2.5-1.1 0-2.1-.4-2.7-1l.7-1z" fill="white"/></svg>' },
        { name: 'React', icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" style="color: #61DAFB;"><circle cx="12" cy="12" r="2" fill="#61DAFB"/><g stroke="#61DAFB" stroke-width="1" fill="none"><ellipse cx="12" cy="12" rx="11" ry="4"/><ellipse cx="12" cy="12" rx="11" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="11" ry="4" transform="rotate(120 12 12)"/></g></svg>' },
        { name: 'Next.js', icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" style="color: #000000;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.7 14.3L13 10.5V16h-2V8h2.1l4.7 5.8v-5.8h2v8h-2.1zM9 16H7V8h2v8z"/></svg>' },
        { name: 'Tailwind', icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" style="color: #06B6D4;"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/></svg>' },
        { name: 'Node.js', icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" style="color: #339933;"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.2l8 4v8.6l-8 4-8-4V8.2l8-4zm1 11.8h-2v-4h2v4zm0-6h-2V6h2v4z"/></svg>' },
        { name: 'Express', icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" style="color: #000000;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4-4h8v2H8v-2zm-1-4h10v2H7v-2zm0-4h7v2H7V8z"/></svg>' },
        { name: 'MongoDB', icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" style="color: #47A248;"><path d="M12 2s-6 7.5-6 12a6 6 0 0012 0c0-4.5-6-12-6-12zm0 16a2 2 0 110-4 2 2 0 010 4z"/></svg>' },
        { name: 'Python', icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" style="color: #3776AB;"><path d="M12 2c-3 0-5.5 1-5.5 3h4c1 0 1.5.5 1.5 1.5V9H10c-3 0-4 1-4 4v3c0 2 2 2 2 2h2v-2h-1c-1 0-1-.5-1-1v-2h3c2 0 3-1 3-3V6c0-2-2-4-4-4zm-2 12v3c0 2-2 4-4 4s-4-2-4-4v-3c0-2 1-3 3-3h3v3zM16 11c-2 0-3 1-3 3v3c0 1.5.5 2.5 2.5 2.5h2v-2h-1c-1 0-1-.5-1-1v-2h3c2 0 3-1 3-3v-3c0-2-2-4-4-4h-4v2h4c1 0 1.5.5 1.5 1.5V11z"/><circle cx="9" cy="4.5" r="1.2" fill="white"/><circle cx="15" cy="19.5" r="1.2" fill="white"/></svg>' },
        { name: 'SQL', icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" style="color: #00758F;"><path d="M18 17c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4zm-4-6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zM6 5h12v2H6V5zm0 4h12v2H6V9z"/></svg>' },
        { name: 'Git', icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" style="color: #F05032;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.1 11.1l-2.4 2.4c-.4.4-1 .4-1.4 0l-2.4-2.4c-.4-.4-.4-1 0-1.4l2.4-2.4c.4-.4 1-.4 1.4 0l2.4 2.4c.4.4.4 1 0 1.4z"/></svg>' },
        { name: 'AWS', icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" style="color: #232F3E;"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.2l8 4v8.6l-8 4-8-4V8.2l8-4zm-4 4h8v2H8V8.2zM8 12.2h8v2H8v-2zm0 4h5v2H8v-2z"/></svg>' }
    ]
};
