// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation toggle
    const navToggle = document.getElementById('nav-toggle');
    const navbarLinks = document.querySelector('.navbar-links');
  
    if (navToggle) {
      navToggle.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
      });
    }
  
    // (Optional) Add more interactivity here—for example, smooth scrolling for TOC links
    const tocLinks = document.querySelectorAll('.sidebar a');
    tocLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 60, // adjust for fixed header height if needed
            behavior: 'smooth'
          });
        }
      });
    });
  });
  