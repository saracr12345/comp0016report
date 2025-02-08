// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Example: Toggle navigation menu for mobile view
    const navToggle = document.querySelector('#nav-toggle');
    const navMenu = document.querySelector('nav ul');
  
    if (navToggle) {
      navToggle.addEventListener('click', function () {
        // Toggle a class that shows or hides the nav menu
        navMenu.classList.toggle('active');
      });
    }
    
    // You can add more interactive functionalities here
    console.log('DOM fully loaded and parsed. JavaScript is running!');
  });
  