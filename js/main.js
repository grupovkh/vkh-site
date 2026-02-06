document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const hero = document.querySelector('.hero');
  const dotsContainer = document.querySelector('.slider-dots');

  if (!slides.length || !hero || !dotsContainer) return;

  let current = 0;
  let interval = null;
  const SLIDE_INTERVAL = 6000;

  // --- Create dots
  slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.addEventListener('click', () => {
      goToSlide(index);
      restartInterval();
    });
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('button');

  function goToSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[index].classList.add('active');
    dots[index].classList.add('active');

    current = index;
  }

  function nextSlide() {
    const next = (current + 1) % slides.length;
    goToSlide(next);
  }

  function startInterval() {
    interval = setInterval(nextSlide, SLIDE_INTERVAL);
  }

  function stopInterval() {
    clearInterval(interval);
  }

  function restartInterval() {
    stopInterval();
    startInterval();
  }

  // Pause on hover
  hero.addEventListener('mouseenter', stopInterval);
  hero.addEventListener('mouseleave', startInterval);

  // Init
  goToSlide(0);
  startInterval();
});