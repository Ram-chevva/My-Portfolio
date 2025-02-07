// Wait for the DOM to fully load before executing scripts
document.addEventListener('DOMContentLoaded', function () {

    // Smooth scrolling for anchor links
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').slice(1);
            const targetElement = document.getElementById(targetId);

            // Smooth scroll to the target section
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Toggle visibility of the "back to top" button based on scroll position
    const backToTopBtn = document.getElementById('backToTop');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    // Back to Top Button Click Event
    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Handle form submission for contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form input values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Example: Alert the user with the form input (replace with actual submission logic)
            alert(`Message sent!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

            // Reset form after submission
            contactForm.reset();
        });
    }

});
