document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Clear previous status
            formStatus.textContent = '';
            formStatus.className = 'form-status';

            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Basic Validation
            if (!name || !email || !message) {
                showStatus('Please fill in all fields.', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                showStatus('Please enter a valid email address.', 'error');
                return;
            }

            // If valid, simulate submission
            showStatus('Sending message...', '');
            
            // Simulate a delay for the "sending" process
            setTimeout(() => {
                showStatus('Thank you! Your message has been sent successfully.', 'success');
                contactForm.reset();
            }, 1500);
        });
    }

    /**
     * Reveal on Scroll logic
     */
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entries.length > 0 && entry.isIntersecting) {
                entry.target.classList.add('active');
                // observer.unobserve(entry.target); // Optional: stop observing once revealed
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    /**
     * Helper to show status messages
     * @param {string} message 
     * @param {string} type 
     */
    function showStatus(message, type) {
        formStatus.textContent = message;
        formStatus.className = `form-status ${type}`;
    }

    /**
     * Simple email regex validation
     * @param {string} email 
     * @returns {boolean}
     */
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
