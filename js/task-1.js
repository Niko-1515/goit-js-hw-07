"use strict";
const categories = document.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}`);
for (let i = 0; i < categories.length; i++) {
  const title = categories[i].querySelector(".task-1-item-title");
  const listItem = categories[i].querySelectorAll(".task-1-list-item");
  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${listItem.length}`);
}
