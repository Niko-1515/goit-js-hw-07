"use strict";
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const color = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

changeColorBtn.addEventListener("click", () => {
  let newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  color.textContent = `${newColor}`;
});
