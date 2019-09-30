
var modalOpen = document.querySelector(".nav__menu__button--desktop");
var modalOverlay = document.querySelector(".modal-overlay");
var modalWindow = document.querySelector(".modal");
var modalClose = document.querySelector(".modal__close");

modalOpen.addEventListener("click", function(evt){
  evt.preventDefault();
  modalWindow.classList.remove("modal__hidden");
  modalOverlay.classList.remove("modal__hidden");
});

modalClose.addEventListener("click", function (evt){
  modalWindow.classList.add("modal__hidden");
  modalOverlay.classList.add("modal__hidden");
});
