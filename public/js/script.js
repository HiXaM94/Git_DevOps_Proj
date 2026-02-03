// ============================================
// DOM ELEMENTS
// ============================================
const navbar = document.querySelector('.navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const helloBtn = document.getElementById('helloBtn');
const apiBtn = document.getElementById('apiBtn');
const modal = document.getElementById('apiModal');
const modalClose = document.getElementById('modalClose');
const apiResponse = document.getElementById('apiResponse');
const contactForm = document.getElementById('contactForm');
const particles = document.getElementById('particles');

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ============================================
// MOBILE MENU TOGGLE
// ============================================
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ============================================
// ACTIVE NAV LINK ON SCROLL
// ============================================
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// ============================================
// API CALL - HELLO WORLD
// ============================================
async function fetchHelloWorld() {
    try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        return data;
    } catch (error) {
        return { error: 'Failed to fetch API', message: error.message };
    }
}

async function showApiResponse() {
    modal.classList.add('active');
    apiResponse.textContent = 'Loading...';
    
    const data = await fetchHelloWorld();
    apiResponse.textContent = JSON.stringify(data, null, 2);
}

// Button event listeners
helloBtn.addEventListener('click', showApiResponse);
apiBtn.addEventListener('click', showApiResponse);

// Close modal
modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// Close with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
    }
});

// ============================================
// CONTACT FORM
// ============================================
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simple validation feedback
    alert(`Thank you ${name}! Your message has been received.\n\nWe'll contact you at ${email} soon.`);
    
    // Reset form
    contactForm.reset();
});

// ============================================
// ANIMATED STATS COUNTER
// ============================================
const statNumbers = document.querySelectorAll('.stat-number');

const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
        current += step;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
};

// Intersection Observer for stats animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            statNumbers.forEach(stat => animateCounter(stat));
            statsObserver.disconnect();
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// ============================================
// PARTICLES ANIMATION
// ============================================
function createParticles() {
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random positioning
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random animation delay
        particle.style.animationDelay = Math.random() * 6 + 's';
        
        // Random size
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        particles.appendChild(particle);
    }
}

createParticles();

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// CODE WINDOW TYPING EFFECT (OPTIONAL)
// ============================================
const codeLines = document.querySelectorAll('.code-content code');
codeLines.forEach((code, index) => {
    code.style.opacity = '0';
    code.style.animation = `fadeIn 0.5s ease forwards ${index * 0.1 + 0.5}s`;
});

// Add fadeIn animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);

// ============================================
// CONSOLE WELCOME MESSAGE
// ============================================
console.log(`
%c🚀 FullStack Project
%cWelcome to the console!
%cAPI Endpoint: /api/hello

`, 
'font-size: 24px; font-weight: bold; color: #7c3aed;',
'font-size: 14px; color: #888;',
'font-size: 12px; color: #00d4aa;'
);
