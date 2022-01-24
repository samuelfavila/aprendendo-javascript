//referencia -> MDN Events

const submitButton = document.querySelector("#submit-button");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const myForm = document.querySelector("#my-form");
const items = document.querySelector(".items");
const body = document.querySelector("body");

submitButton.addEventListener("click", function (e) {
	e.preventDefault();
	// console.log(e);

	const nameValue = nameInput.value;
	const emailValue = emailInput.value;

	if (nameValue === "" || emailValue === "") {
		myForm.style.background = "grey";
		return alert("Please fill out all the fields");
	}
	items.children[0].textContent = nameValue;
	items.children[1].textContent = emailValue;
	items.lastElementChild.remove();

	body.style.background = "white";
});
