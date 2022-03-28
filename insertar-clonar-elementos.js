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
list.children[1].insertAdjacentElementHtml('afterend',"Hola im a text element")

//replace nodes
list.replacechild(newElement,list.children[0])
//
list.children[0].before(newElement)
//
list.prepend(newElement)
//
list.children[1].after(newElement);



//remplazar elementos
document.getElementById('child-to-replace').replaceWith(newElement)


///CLONAR ELEMENTOS

console.log(list.cloneNode(true));
list.after(list.cloneNode(true))///true clona tambien los hijos , false no clonaria los nodos hijos

//Eliminar ELEMENTOS
list.remove() //nos cargamos la lista completamente
list.removeChild(list.children[1]);