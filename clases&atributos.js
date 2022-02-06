/*atributos
const title = document.getElementById('title');
const nombre = document.getElementById('nombre');
*/

/*Clases 
Element.classList.add('class','class')
Element.classList.remove('class','class')
Element.classList.contains('class')
Element.classList.replace('oldclass','newclass')

Element.classList.toggle('class',['force'])
*/

/* atributos directos
id 
value 
*/


// probamos classList.add('clase','clase')
const title= document.getElementById('title')
title.classList.add('classOnePrueba','classTwoPrueba','classThreePrueba',
'classForPrueba','classTwoPrueba')
console.log(title)
//Probamos classList.remove('clase')
title.classList.remove('classOnePrueba')
console.log(title)


// probamos el containst
title.classList.add('classOnePrueba')
        if(title.classList.contains('classOnePrueba')) console.log('title tiene la clase classOnePrueba')
            title.classList.add('classAddPrueba')
console.log(title)

//probamos el replace
title.classList.replace('classAddPrueba','classFivePrueba')
console.log(title)

//atributos directos
console.log(title.innerHTML) //recoger las eqtiquetas html dentro del texto
console.log(title.textContent)//recoge solo el texto plano

console.log(nombre.value)