document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const slidesContainer = document.querySelector(".slides");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prevBtn");
  const nextBtn = document.querySelector(".nextBtn");

  let currentIndex = 0;
  const slideWidth = slides[0].clientWidth;

  function showSlide(index) {
    slidesContainer.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }
  nextBtn.addEventListener("click", function () {
    nextSlide();
    clearInterval(interval);
    interval = setInterval(nextSlide, 10000);
  });

  prevBtn.addEventListener("click", function () {
    prevSlide();
    clearInterval(interval);
    interval = setInterval(nextSlide, 10000);
  });
  interval = setInterval(nextSlide, 5000);
});
