//Selecionar um único elemento
const addUserText = document.getElementById("add-user"); //referência ao elemento (innerText)
const addUserText = document.querySelector("#add-user"); //pega o elemento em si (textContent)//mais usado
const myForm = document.querySelector(".container #my-form");
const item = document.querySelector(".item"); //só retorna o primeiro elemento (chiild)

//Selecionar múltiplos elementos
const allItens = document.querySelectorAll(".item");
console.log(allItens); //-> mostra nodelist (array com todos elementos)

const allItens = document.getElementByClassName(".item");
console.log(allItens); //-> HTMLCollection (não da usar métodos de array nele, não recomendado)
const allItens = document.getElementByTagName("li"); //-> tb gera HTMLCollection
