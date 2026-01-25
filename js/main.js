// =====================================================
// PORTFOLIO WEBSITE - Single Page Scrolling
// =====================================================

document.addEventListener('DOMContentLoaded', function () {

    // Initialize all modules
    initSmoothScrolling();
    initScrollSpy();
    initHeaderScroll();
    initFormHandling();
    initAnimations();
    initSkillBars();

    // Render dynamic content
    renderProjects();
    renderSkills();

});

// =====================================================
// SMOOTH SCROLLING NAVIGATION
// =====================================================

function initSmoothScrolling() {
    // Get all navigation links with hash
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerHeight = document.querySelector('.header-fixed')?.offsetHeight || 80;
                const targetPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Update active state
                updateActiveNav(targetId);
            }
        });
    });
}

// =====================================================
// SCROLL SPY - Track Active Section
// =====================================================

function initScrollSpy() {
    const sections = document.querySelectorAll('.section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = '#' + entry.target.id;
                updateActiveNav(sectionId);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
}

function updateActiveNav(targetId) {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === targetId) {
            link.classList.add('active');
        }
    });
}

// =====================================================
// HEADER SCROLL EFFECT
// =====================================================

function initHeaderScroll() {
    const header = document.querySelector('.header-fixed');
    if (!header) return;

    let lastScroll = 0;

    window.addEventListener('scroll', throttle(() => {
        const currentScroll = window.pageYOffset;

        // Add/remove scrolled class for compact header
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    }, 100));
}

// =====================================================
// FORM HANDLING
// =====================================================

function initFormHandling() {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);

            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;

            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                // Show success message
                showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');

                // Reset form
                this.reset();

                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
}

// =====================================================
// NOTIFICATIONS
// =====================================================

function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
    <span>${message}</span>
    <button class="notification-close">&times;</button>
  `;

    // Add styles
    notification.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 16px 24px;
    background: ${type === 'success' ? '#10B981' : '#3B82F6'};
    color: white;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    gap: 12px;
    z-index: 1000;
    animation: slideIn 0.3s ease;
  `;

    // Add animation keyframes
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
      @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
      }
    `;
        document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    // Close button handler
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
    background: none;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
    padding: 0;
    margin-left: 8px;
  `;

    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    });

    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// =====================================================
// ANIMATIONS
// =====================================================

function initAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    const animateElements = document.querySelectorAll(
        '.project-card, .skill-category, .profile-card, .brands-card, .social-card, .contact-form-card'
    );

    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.05}s, transform 0.6s ease ${index * 0.05}s`;
        observer.observe(el);
    });

    // Add animation styles
    if (!document.querySelector('#animation-styles')) {
        const style = document.createElement('style');
        style.id = 'animation-styles';
        style.textContent = `
      .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
      }
    `;
        document.head.appendChild(style);
    }
}

// =====================================================
// SKILL BARS ANIMATION
// =====================================================

function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');

    if (skillBars.length === 0) return;

    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.style.width;

                // Reset and animate
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.transition = 'width 1s ease-out';
                    bar.style.width = width;
                }, 100);

                observer.unobserve(bar);
            }
        });
    }, observerOptions);

    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// =====================================================
// UTILITY FUNCTIONS
// =====================================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// =====================================================
// SCROLL TO TOP ON LOGO CLICK
// =====================================================

document.addEventListener('DOMContentLoaded', function () {
    const logo = document.querySelector('.logo');
    if (logo && logo.getAttribute('href') === '#home') {
        logo.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            updateActiveNav('#home');
        });
    }
});

// =====================================================
// DYNAMIC CONTENT RENDERING
// =====================================================

function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');

    // Check if portfolioData is available (try window.portfolioData or simple portfolioData)
    const data = window.portfolioData || ((typeof portfolioData !== 'undefined') ? portfolioData : null);

    console.log('renderProjects called. Data:', data);

    if (!projectsGrid) {
        console.error('Projects grid container not found!');
        return;
    }
    if (!data) {
        console.error('Portfolio data not found. Make sure data.js is loaded.');
        return;
    }

    // Clear existing content
    projectsGrid.innerHTML = '';

    // Render each project from data
    data.projects.forEach(project => {
        const projectCard = document.createElement('a');
        projectCard.className = 'project-card';
        projectCard.href = project.link || '#';
        if (project.link && project.link.startsWith('http')) projectCard.target = '_blank'; // Open external links in new tab

        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="project-content">
                <span class="project-category">${project.category}</span>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">
                    ${project.description}
                </p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;

        projectsGrid.appendChild(projectCard);
    });
}

function renderSkills() {
    const skillsGrid = document.querySelector('.skills-grid');

    // Check if portfolioData is available (try window.portfolioData or simple portfolioData)
    const data = window.portfolioData || ((typeof portfolioData !== 'undefined') ? portfolioData : null);

    if (!skillsGrid) return;
    if (!data) return;


    // Clear existing content
    skillsGrid.innerHTML = '';

    // Render each skill category from data
    data.skills.forEach(category => {
        const skillCategory = document.createElement('div');
        skillCategory.className = 'skill-category';

        const skillItems = category.items.map(item => `
            <div class="skill-item">
                <span class="skill-name">${item.name} <span>${item.level}%</span></span>
                <div class="skill-bar">
                    <div class="skill-progress" style="width: ${item.level}%;"></div>
                </div>
            </div>
        `).join('');

        skillCategory.innerHTML = `
            <div class="skill-icon">${category.icon}</div>
            <h3 class="skill-category-title">${category.title}</h3>
            <div class="skill-list">
                ${skillItems}
            </div>
        `;

        skillsGrid.appendChild(skillCategory);
    });
}
