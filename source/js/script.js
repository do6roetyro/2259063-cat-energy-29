let menu = document.querySelector(".main-nav__list");
let button = document.querySelector(".main-nav__toggle");
let nojs = document.querySelector(".menu-nojs");
let nav = document.querySelector("nav");
let  map = document.querySelectorAll("iframe")

nav.classList.remove("menu-nojs");
map.classList.remove("contacts__location")

button.onclick = function () {
  menu.classList.toggle("main-nav__list--close");
  button.classList.toggle("main-nav__toggle--opened");
}
