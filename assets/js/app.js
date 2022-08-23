/*
======================
    nav-menu(mobile)
======================
 */

const navBtn = document.querySelector(".nav__btn");
const navMenu = document.querySelector(".nav-menu");

let navOpen = false;
navBtn.addEventListener("click", function () {
  if (navOpen) {
    navBtn.classList.remove("nav__btn--open");
    navMenu.classList.remove("nav-menu--open");

    navOpen = false;
  } else {
    navBtn.classList.add("nav__btn--open");
    navMenu.classList.add("nav-menu--open");
    navOpen = true;
  }
});

/*
================
    accordion
================
 */
const items = document.querySelectorAll(".accordion__answer");
const faPlus = document.querySelectorAll(".fa-plus");
const faMinus = document.querySelectorAll(".fa-minus");

let activeItem;
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", (event) => {
    const current = event.currentTarget;

    activeItem = current;
    current.classList.toggle("accordion__answer--open");

    faPlus[i].classList.toggle("fa-plus--open");
    faMinus[i].classList.toggle("fa-minus--open");
  });
}
