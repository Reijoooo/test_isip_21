"use strict";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Working...");
});

const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  effect: "fade",
  allowTouchMove: false,
  slideToClickedSlide: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function toggleDropdown(event) {
  event.preventDefault();
  const dropdownMenu = event.target.nextElementSibling;

  if (dropdownMenu) {
    dropdownMenu.classList.toggle("show");
  } else {
    console.error("Dropdown menu not found");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const heroSwiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    effect: "fade",
    allowTouchMove: false,
    slideToClickedSlide: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const swiper2Config = {
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: ".recepies-button-next",
      prevEl: ".recepies-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 5,
      },
    },
  };

  const _swiper2 = new Swiper(".swiper-recepies", swiper2Config);
});

function toggleDropdownMenu(event) {
  event.preventDefault();
  const dropdownMenu = event.target.nextElementSibling;

  if (dropdownMenu) {
    dropdownMenu.classList.toggle("show");
  } else {
    console.error("Dropdown menu not found");
  }
}
