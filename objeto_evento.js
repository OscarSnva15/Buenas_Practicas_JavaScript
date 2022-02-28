const input = document.getElementById('input')
input.addEventListener('keyup', (eventoParametro)=> {
    console.log(eventoParametro.explicitOriginalTarget.type);//por rutas con puntos vas navegand
    //
})

/*addEventListener('click',(eventoParametro)=>{
    console.log(eventoParametro);
})*/

// const button = document.getElementById('button');

// button.addEventListener('click', (eventoParametro)=>{
//     console.log(eventoParametro.target)
// })

const container = document.getElementById('container')

container.addEventListener('click',(eventoParametro) => {
    console.log(eventoParametro.target.textContent)
    eventoParametro.target.classList.add('classItemColor');
})
Form.addEventListener