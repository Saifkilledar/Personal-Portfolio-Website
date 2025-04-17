// Smooth scrolling for nav links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile nav after click
            document.getElementById('navLinks').classList.remove('open');
        }
    });
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinksContainer = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
    navLinksContainer.classList.toggle('open');
});

// Section reveal animation on scroll
const sections = document.querySelectorAll('.section');
const revealSection = () => {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add('visible');
        }
    });
};
window.addEventListener('scroll', revealSection);
window.addEventListener('load', revealSection);

// (Optional) Contact form basic validation (no backend)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! (Form submission demo)');
    this.reset();
});
