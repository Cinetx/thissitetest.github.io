
var burgerIcon = document.querySelector(".nav__bar__icon--burger");
var closeIcon = document.querySelector(".nav__bar__icon--close");
var navMenu = document.querySelector(".nav__menu__wrapper");

burgerIcon.addEventListener("click", function (evt)
{
  evt.preventDefault();
  closeIcon.classList.toggle("nav__bar__icon--none");
  burgerIcon.classList.toggle("nav__bar__icon--none");
  navMenu.classList.remove("nav__menu--close");
});

closeIcon.addEventListener("click", function (evt)
{
  evt.preventDefault();
  burgerIcon.classList.toggle("nav__bar__icon--none");
  closeIcon.classList.toggle("nav__bar__icon--none");
  navMenu.classList.add("nav__menu--close");
});
