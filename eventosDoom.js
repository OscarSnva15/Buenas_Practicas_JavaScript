// Evento click
const button = document.getElementById('button')

button.addEventListener('click',
()=>{
    console.log('Ha echo click')
})
// Evento double click
button.addEventListener('dblclick',()=>{
    console.log('ha hecho double click')
})
// Eventos de raton/mouse

/*Evento mouseenter : detecta cuando el mouse a entrado a la
zona del elemento ,es decir, lo esta tocando*/

const container=document.getElementById('container')

container.addEventListener('mouseenter',()=>{
    container.classList.replace('green','red')
})
/*Evento mouseleave : detecta cuando el mouse a entrado a la
zona del elemento ,es decir, lo esta tocando*/
container.addEventListener('mouseleave',()=>{
    container.classList.replace('red','green')
})

/*Evento mousemove : detecta cuando el mouse se esta moviendo en la zona del elemento ,es decir, lo esta tocando*/
container.addEventListener('mousemove',()=>{
    console.log('ESta moviendo el raton sobre el elemento')
})

/*Evento mousedown : detecta cuando el mouse se esta clickeando en la zona del elemento ,es decir, lo esta tocando*/
container.addEventListener('mousedown',()=>{
    console.log('clickeo en sobre el elemento')
})

/*Evento mousedown : detecta cuando el mouse se esta clickeando sin interupcion hasta soltarse el click, todo esto en la zona del elemento ,es decir, esta arastrando el clik*/
container.addEventListener('mouseup',()=>{
    console.log('usted estuvo clikeando y ha soltado el click,todo esto sobre/sosteniendo el elemento')
})

