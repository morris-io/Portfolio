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