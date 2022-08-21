" use strict";

const showMembers = document.querySelectorAll(".show-members");
const pictures = document.querySelectorAll(".picture");
const overlay = document.querySelector(".overlay");

for (let i = 0; i < showMembers.length; i++) {
  showMembers[i].addEventListener("click", function () {
    pictures[i].classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}
