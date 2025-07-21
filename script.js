document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Adjusted for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active link highlighting on scroll
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 80) {
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').substring(1) === current) {
                a.classList.add('active');
            }
        });
    });

    // Contact Form Submission with Formspree
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.createElement('p');
    contactForm.appendChild(formStatus);

    async function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        fetch(event.target.action, {
            method: contactForm.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                formStatus.textContent = 'Thanks for your submission!';
                formStatus.style.color = 'green';
                contactForm.reset();
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        formStatus.textContent = data['errors'].map(error => error['message']).join(', ');
                    } else {
                        formStatus.textContent = 'Oops! There was a problem submitting your form';
                    }
                    formStatus.style.color = 'red';
                });
            }
        }).catch(error => {
            formStatus.textContent = 'Oops! There was a problem submitting your form';
            formStatus.style.color = 'red';
        });
    }

    contactForm.addEventListener('submit', handleSubmit);
});