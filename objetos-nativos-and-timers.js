//Obtenemos el elemento del documento
const button = document.getElementById('button')

/*Objeto window -Es el objeto global, de el decienden todos los objetos
*alert()
*promt()
*confirm()
*/
//windows.alert('Hola')//siempre que no pongamos el window,el navegador siempre interpreta que ahi comienza

/*window.document*/

/**objeto console- Es el objeto que contiene la consola del navegador
 * console.log()
 * console.dir()
 * console.error()
 * console.table()
 */

addEventListener('click', (e)=> {
    console.log(e);
})

//buscar un elemento de la carga de la pagina
addEventListener('load', (e)=> {
    console.log(e);
})

//saber cuadno el ususario ha realizado scrool
addEventListener('scroll', (e)=> {
    console.log(e);
})

//Una linea de texto para poder escribir
//let entrada_name = prompt('question');
//console.log(entrada_name)

//
//if(confirm('Acepta?')){
//    console.log('El usuario acepto');
//}else{
//    console.log('El ususario no acepto');
//}

//objeto console.Este es el objeto que contiene la consola del navegador
console.log(button);
//objeto dir .Desgloza la info de el objeto que contiene la consola del navegador
console.dir(button);
//imprime los indices y el contenido de la inforamacion que le estemo pasando
//ojo ,it's method is relationship with console of each navegator 
console.table(1,2,3,4);



/**Objeto location.- Es el que contiene la barra de direcciones
 * location.href
 * location.protocol
 * location.host
 * location.pathname
 * location hash
 * location.reload()
 */


//localtion href
console.log(location.href) //direccion de la pafina actual
//localtion protocol
console.log(location.protocol) //para saber si la pagina es hhtp o https of ftp
//localtion host
console.log(location.host) //dominio principal que estamos visualizando
//location.pathname
console.log(location.pathname) //Obtenemos el reto de la loc, sin el dominio princiapl es decir ver los subdirecciones en el que estamos metidos
//location.hash
console.log(location.hash)  //pasar parametro, en funcion de esta informacion se cargaba la informacion 
//location.load

//location.href = "https://google.com"
const person = {
    nombre : 'Oscar',
    age: 22,
    email: "oscar@gmail.com"
}

const date = new Date()
console.log(date)
//TIMMERS
//Con los timmer podemos hacer que una funcion se ejecute cuando se lee una funcion desde que se ejecute
//

button.addEventListener('click', ()=>{
    setTimeout(saludar,3000)
})

const saludar = ()=> {
    console.log('hola')
}

//cuando se va temporizar una funcion externa, 
button.addEventListener('click', ()=>{
    setTimeout(() => {
            console.log('ADIOS');
    },4000)
})

//INTERVAL.-Ejecutar interval es lo mimso que timesetout pero en milisengundos


//const interval = setInterval(saludar, 3000)

//ejemplo mas practivo

let cont =0;
setInterval(()=>{
    console.log(cont)
    cont++
},1000)

//para frenar los tiempos
const interval = setInterval(()=>{
    console.log(cont)
    cont++
},1000)

button.addEventListener('click',()=>{
    clearInterval(interval)
})
