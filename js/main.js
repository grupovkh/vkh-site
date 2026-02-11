document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const dotsContainer = document.querySelector(".slider-dots");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let current = 0;
  let interval;

  /* --- CREATE DOTS --- */
  slides.forEach((_, i) => {
    const btn = document.createElement("button");
    if (i === 0) btn.classList.add("active");

    btn.addEventListener("click", () => {
      showSlide(i);
      resetAuto();
    });

    dotsContainer.appendChild(btn);
  });

  const dots = dotsContainer.querySelectorAll("button");

  /* --- SLIDE LOGIC --- */
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });

    current = index;
  }

  function nextSlide() {
    showSlide((current + 1) % slides.length);
  }

  function prevSlide() {
    showSlide((current - 1 + slides.length) % slides.length);
  }

  function startAuto() {
    interval = setInterval(nextSlide, 6000);
  }

  function resetAuto() {
    clearInterval(interval);
    startAuto();
  }

  /* --- CONTROLS --- */
  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAuto();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAuto();
  });

  startAuto();
});