var iconUp1 = document.querySelector(".up-icon--1");
var iconDown1 = document.querySelector(".down-icon--1");
var textHidden1 = document.querySelector(".payment__content--1");
var button1 = document.querySelector(".icon__wrapper--1");

button1.addEventListener("click", function (evt){
  evt.preventDefault();
  iconDown1.classList.toggle("icon-hidden");
  iconUp1.classList.toggle("icon-hidden");
  textHidden1.classList.toggle("payment__content--hidden");
});

var iconUp2 = document.querySelector(".up-icon--2");
var iconDown2 = document.querySelector(".down-icon--2");
var textHidden2 = document.querySelector(".payment__content--2");
var button2 = document.querySelector(".icon__wrapper--2");

button2.addEventListener("click", function (evt){
  evt.preventDefault();
  iconDown2.classList.toggle("icon-hidden");
  iconUp2.classList.toggle("icon-hidden");
  textHidden2.classList.toggle("payment__content--hidden");
});

var iconUp3 = document.querySelector(".up-icon--3");
var iconDown3 = document.querySelector(".down-icon--3");
var textHidden3 = document.querySelector(".payment__content--3");
var button3 = document.querySelector(".icon__wrapper--3");

button3.addEventListener("click", function (evt){
  evt.preventDefault();
  iconDown3.classList.toggle("icon-hidden");
  iconUp3.classList.toggle("icon-hidden");
  textHidden3.classList.toggle("payment__content--hidden");
});

var iconUp4 = document.querySelector(".up-icon--4");
var iconDown4 = document.querySelector(".down-icon--4");
var textHidden4 = document.querySelector(".payment__content--4");
var button4 = document.querySelector(".icon__wrapper--4");

button4.addEventListener("click", function (evt){
  evt.preventDefault();
  iconDown4.classList.toggle("icon-hidden");
  iconUp4.classList.toggle("icon-hidden");
  textHidden4.classList.toggle("payment__content--hidden");
});

var iconUp5 = document.querySelector(".up-icon--5");
var iconDown5 = document.querySelector(".down-icon--5");
var textHidden5 = document.querySelector(".payment__content--5");
var button5 = document.querySelector(".icon__wrapper--5");

button5.addEventListener("click", function (evt){
  evt.preventDefault();
  iconDown5.classList.toggle("icon-hidden");
  iconUp5.classList.toggle("icon-hidden");
  textHidden5.classList.toggle("payment__content--hidden");
});
