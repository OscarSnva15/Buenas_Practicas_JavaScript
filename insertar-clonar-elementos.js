const list = document.getElementById('list');
const newElement = document.createElement('li');
newElement.textContent = "I am a new element"


list.insertBefore(newElement, list.children[1])
console.log(list.children);

list.children[0].insertAdjacentElement('beforebegin',newElement)
list.insertAdjacentElement('afterbegin',newElement);
list.insertAdjacentElement('beforeend',newElement);
list.children[0].insertAdjacentElement('aftereend',newElement);


//parent html
list.children[1].insertAdjacentElementHtml('afterend',<h1>Hola im a new title element</h1>)

//parent text
list.children[1].insertAdjacentElementHtml('afterend',<h1>Hola im a new title element</h1>)