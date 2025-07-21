document.addEventListener("DOMContentLoaded", () => {
  const HEADER_OFFSET = 70; // Height of the fixed header

  // Function for smooth scrolling
  const setupSmoothScrolling = () => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - HEADER_OFFSET,
            behavior: "smooth",
          });
        }
      });
    });
  };

  // Function for active link highlighting on scroll
  const setupActiveLinkHighlighting = () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    const highlightActiveLink = () => {
      let currentActiveSectionId = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        // Adjust scroll position by header offset for accurate highlighting
        if (window.pageYOffset >= sectionTop - HEADER_OFFSET - 10) {
          // Added a small buffer
          currentActiveSectionId = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === currentActiveSectionId) {
          link.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", highlightActiveLink);
    highlightActiveLink(); // Call on load to set initial active link
  };

  // Function for contact form submission
  const setupContactForm = () => {
    const contactForm = document.getElementById("contact-form");
    if (!contactForm) return;

    const formStatus = document.createElement("p");
    contactForm.appendChild(formStatus);

    const handleSubmit = async (event) => {
      event.preventDefault();
      const data = new FormData(event.target);

      try {
        const response = await fetch(event.target.action, {
          method: contactForm.method,
          body: data,
          headers: {
            Accept: "application/json",
          },
        });

        if (response.ok) {
          formStatus.textContent = "Thanks for your submission!";
          formStatus.style.color = "green";
          contactForm.reset();
        } else {
          const errorData = await response.json();
          if (errorData && errorData.errors) {
            formStatus.textContent = errorData.errors
              .map((error) => error.message)
              .join(", ");
          } else {
            formStatus.textContent =
              "Oops! There was a problem submitting your form.";
          }
          formStatus.style.color = "red";
        }
      } catch (error) {
        formStatus.textContent =
          "Oops! There was a problem submitting your form.";
        formStatus.style.color = "red";
        console.error("Form submission error:", error);
      }
    };

    contactForm.addEventListener("submit", handleSubmit);
  };

  // Initialize all functionalities
  setupSmoothScrolling();
  setupActiveLinkHighlighting();
  setupContactForm();
});
