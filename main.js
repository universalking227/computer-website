const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,

  origin: "left", 

  scale: 1.1,
  opacity: 0,
  easing: "ease-in-out",
  rotate: {
    x: 0,
    y: 0,
    z: 0
  }
  
});

ScrollReveal().reveal(".order__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".event__content", {
  duration: 1000,
});

ScrollReveal().reveal(".footer__content", {
  duration: 1000, 
  delay: 500,
  interval: 300,
  origin: "top",
  distance: "30px",
  reset: true,
  viewFactor: 0.2,
  scale: 0.9,
  easing: "ease-in-out",
  opacity: 0,
  rotate: {
    x: 0,
    y: 0,
    z: 0
  }
});
ScrollReveal().reveal(".footer__socials i", {
  duration: 1000,
  delay: 500,
  interval: 300,
  origin: "top",
  distance: "30px",
  reset: true,
  viewFactor: 0.2,
  scale: 0.9,
  easing: "ease-in-out",
  opacity: 0,
  rotate: {
    x: 0,
    y: 0,
    z: 0
  }
});

// Initialize Swiper for the testimonials section
const swiper = new Swiper(".testimonials__swiper", {  
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});