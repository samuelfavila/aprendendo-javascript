const items = document.querySelector(".items");
const button = document.querySelector("#submit-button");

items.remove();

items.firstElementChild.remove();
items.lastElementChild.remove();

items.children[0].textContent = "Item Um";

items.lastElementChild.innerHTML = "<h1>Hello world!</h1>";

button.style.background = "red";
button.style.color = "blue";
