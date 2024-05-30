`use strict`;

// getting acess to the menu btn

const openBtn = document.getElementById(`open-btn`);
const closeBtn = document.getElementById(`close-btn`);
const navLink = document.querySelector(`.nav-links`);

// ***********************************
// ***********************************

// Adding event listener to the open btn

openBtn.addEventListener(`click`, function (e) {
  openBtn.classList.add(`hidden`);
  closeBtn.classList.remove(`hidden`);
  navLink.classList.remove(`hidden`);
});

// ********************************
// ********************************

// Adding event listener to the  close btn

closeBtn.addEventListener(`click`, function (e) {
  openBtn.classList.remove(`hidden`);
  closeBtn.classList.add(`hidden`);
  navLink.classList.add(`hidden`);
});
