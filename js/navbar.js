window.addEventListener("scroll", function () {
  const logo = document.getElementById("logo");
  const scrollPosition = window.scrollY;
  if (scrollPosition < 200) {
    logo.style.padding = "20px 0";
  } else {
    logo.style.padding = "0";
  }
});
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function () {
  this.classList.toggle("active");
  navLinks.classList.toggle("active");
});
