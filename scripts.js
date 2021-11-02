/**Tenemos tres funciones 
 * document.getElementByid('id')-Aceder a un elemento a través de su id
 * 
 * ducument.querySelector('selectorCSS')--Accede al primer elemento que
 * coincidan con el selector CSS.
 * 
 * ducument.querySelectorAll('selectorCSS')--Accede al todos los elementos que
 * coincidan con el selector CSS.Devuelve un nodeList
 */ 
const title = document.getElementById('title')
console.log(title); //Obtiene los datos del la etiqueta titlle medinate su id, especificao

title.textContent='DOMM ACCEDIENDO A NODOS' // =con esta propiedad text context, igualda puede editar la propiedad
const paragraph = document.querySelector('.paragraph')
const paragraph = document.querySelector('.paragraph')//le passsamos como parametro como string un selector CSS
//cuando usamos un query selected debemos pasar un selector CSS, para hacer uso de esto hacemos uso del '.' punto
console.log(paragraph); //debemos psarle a la funcion un selector de css,e inclusive selectore seudocss

