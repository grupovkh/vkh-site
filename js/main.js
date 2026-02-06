document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".hero-slider .slide");
  const dotsContainer = document.querySelector(".slider-dots");

  let current = 0;
  let interval;
  const delay = 5000;

  // Create dots
  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      goToSlide(i);
      restart();
    });
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll("button");

  function goToSlide(index) {
    slides[current].classList.remove("active");
    dots[current].classList.remove("active");

    current = index;

    slides[current].classList.add("active");
    dots[current].classList.add("active");
  }

  function nextSlide() {
    goToSlide((current + 1) % slides.length);
  }

  function start() {
    interval = setInterval(nextSlide, delay);
  }

  function stop() {
    clearInterval(interval);
  }

  function restart() {
    stop();
    start();
  }

  // Pause on hover
  const slider = document.querySelector(".hero-slider");
  slider.addEventListener("mouseenter", stop);
  slider.addEventListener("mouseleave", start);

  start();
});