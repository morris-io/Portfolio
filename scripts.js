document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const prev = document.querySelector('.carousel-button--prev');
    const next = document.querySelector('.carousel-button--next');
    const itemWidth = track.querySelector('.project').offsetWidth;
    let index = 0;
    prev.addEventListener('click', () => {
      index = Math.max(0, index - 1);
      track.style.transform = `translateX(-${index * itemWidth}px)`;
    });
    next.addEventListener('click', () => {
      index = Math.min(track.children.length - 1, index + 1);
      track.style.transform = `translateX(-${index * itemWidth}px)`;
    });
  });
  