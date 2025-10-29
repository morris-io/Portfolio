// === NEW CAROUSEL SCRIPT ===
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const prev = document.querySelector('.carousel-button--left');
  const next = document.querySelector('.carousel-button--right');
  
  // Check if these elements exist on the page
  if (track && prev && next) {
      
      // Hide prev button to start
      prev.style.display = 'none';

      next.addEventListener('click', () => {
          track.classList.add('slide-2'); // Move to slide 2
          prev.style.display = 'flex';   // Show prev button
          next.style.display = 'none';    // Hide next button
      });

      prev.addEventListener('click', () => {
          track.classList.remove('slide-2'); // Move back to slide 1
          prev.style.display = 'none';     // Hide prev button
          next.style.display = 'flex';    // Show next button
      });
  }
});

// === YOUR EXISTING MOBILE MENU SCRIPT ===
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle');
  const nav    = document.getElementById('nav-links');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
});