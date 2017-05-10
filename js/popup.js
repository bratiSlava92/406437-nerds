var link = document.querySelector(".btn-write");
var popup = document.querySelector(".pop-up");
var close = document.querySelector(".close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=name]");
var mail = popup.querySelector("[name=e-mail]");
var text = popup.querySelector("[name=text-form]");
var loginStorage = localStorage.getItem("login");
var mailStorage = localStorage.getItem("mail");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("pop-up-show");
  if (loginStorage) {
    login.value = loginStorage;
    if (mailStorage) {
      mail.value = mailStorage;
      text.focus();
    } else {
      mail.focus();
      } 
  } else {
    login.focus();
  }
});
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("pop-up-show");
  popup.classList.remove("modal-error");
});
form.addEventListener("submit", function (evt) {
  if (!login.value || !mail.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("login", login.value);
  }
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("pop-up-show")) {
      popup.classList.remove("pop-up-show");
      popup.classList.remove("modal-error");
    }
  }
});