let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");
menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList;
};
window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  if (window.scrolly > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};
window.onload = () => {
  if (window.scrolly > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
}; // for feature section
var swiper = new swiper(".home-slider", {
  spaceBetween: 20,
  effect: "fade",
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
});
var swiper = new swiper(".feature-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  centeredslides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

// for blogs section
var swiper = new swiper(".blogs-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  centeredslides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
