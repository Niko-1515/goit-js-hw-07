"use strict";

const input = document.querySelector(".task-3-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  let userName = event.target.value;
  if (userName.trim() == "") {
    span.textContent = "Anonymous";
  } else span.textContent = userName.trim();
});
