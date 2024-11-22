(function() {
    emailjs.init("BJL3Y8p2u-hBepb9v");
})();

document.addEventListener('DOMContentLoaded', (event) => {
    // Mobile menu toggle
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // Close mobile menu when a link is clicked
    navLinks.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            navLinks.classList.remove('show');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading indicator
        const btn = form.querySelector('button[type="submit"]');
        const originalBtnText = btn.textContent;
        btn.textContent = 'Sending...';
        btn.disabled = true;

        // Generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        
        // Send the email using EmailJS
        emailjs.sendForm('service_v00m7y7', 'template_fr6mvjs', this)
            .then(function() {
                console.log('SUCCESS!');
                formStatus.textContent = 'Thank you for your message! I will get back to you soon.';
                form.reset();
            }, function(error) {
                console.log('FAILED...', error);
                formStatus.textContent = 'Sorry, there was an error sending your message. Please try again later.';
            })
            .finally(function() {
                btn.textContent = originalBtnText;
                btn.disabled = false;
            });
    });

    // CV download tracking
    const cvDownloadButton = document.querySelector('.download-button');
    cvDownloadButton.addEventListener('click', function() {
        console.log('CV downloaded');
    });

    // Add animation to skills icons
    const skillIcons = document.querySelectorAll('#skills li');
    skillIcons.forEach((icon, index) => {
        icon.style.animationDelay = `${index * 0.1}s`;
        icon.classList.add('animate-in');
    });

    // Intersection Observer for fade-in effect
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
});

