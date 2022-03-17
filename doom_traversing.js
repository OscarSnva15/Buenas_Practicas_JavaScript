//hay que obtener primero, el id del elemento

const parent = document.getElementById('parent');
//navegar atraves del doom "padrees" :
//1.- parenNode
//2.- parentElement
console.log(parent.parentNode)
//podemos navegar por nodos es decir por niveles ,de la siguiente forma
console.log(parent.parentElement.parentElement.parentElement)

//navegar atraves del doom "Hijos" :
//1.- childNOdes
//2.- childrens
//3.- firstChild
//4.- lasChild
//5.- fisrtCHild
//6.- lastElementCHild
//7.- laschildNodes

//devolver todos los nodos hijos
console.log('este devuelve un hijo unico seleccionado especificamenete')
console.log(parent.childNodes);
console.log('este devuelve un hijo unico seleccionado especificamenete')
console.log(parent.children[2]);
console.log('Devuelve el primer hijo')
console.log(parent.firthsChild);
console.log(parent.lastchild);
console.log(parent.lastElementchild);
console.log(laschild);
//podemos navegar por nodos es decir por niveles ,de la siguiente forma
console.log(parent.parentElement.parentElement.parentElement)
console.log("este devuelve tru si el elenetyo tiene un hijo")
console.log(parent.hasChildNodes());
console.log("ESte devuelve si existe uin hijo, ")
console.log(parent.hasChildNodes());