document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const prev = document.querySelector('.carousel-button--left');
  const next = document.querySelector('.carousel-button--right');
  
  if (track && prev && next) {
      
      prev.style.display = 'none';

      next.addEventListener('click', () => {
          track.classList.add('slide-2');
          prev.style.display = 'flex';
          next.style.display = 'none';
      });

      prev.addEventListener('click', () => {
          track.classList.remove('slide-2'); 
          prev.style.display = 'none'; 
          next.style.display = 'flex'; 
      });
  }

  // --- NIGHT MODE SCRIPT ADDED HERE ---
  const nightModeToggle = document.getElementById('night-mode-toggle');
  const body = document.body;

  if (nightModeToggle) {
    nightModeToggle.addEventListener('click', () => {
      body.classList.toggle('night-mode');
      
      // Change icon based on mode
      if (body.classList.contains('night-mode')) {
        nightModeToggle.innerHTML = '☀️'; // Sun icon for light mode
        nightModeToggle.setAttribute('aria-label', 'Toggle light mode');
      } else {
        nightModeToggle.innerHTML = '🌙'; // Moon icon for night mode
        nightModeToggle.setAttribute('aria-label', 'Toggle night mode');
      }
    });
  }
  // --- END OF NIGHT MODE SCRIPT ---

});

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle');
  const nav    = document.getElementById('nav-links');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
});