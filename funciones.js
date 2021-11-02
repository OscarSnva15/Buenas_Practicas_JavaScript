/**
 * Haciendo uso de funciones, para llamarlas se les dice invocar
 * EXisten 2 tipos de sintaxis en java script ,para declarar funciones.
 * 
 */
function saludo(){ //esta es la sisntaxis normal de como se declara una fucnion
    console.log('Hola');
}
saludo()//ESta es la manera en la que invocamos una funcion para que se ejcute,s
//es importante poner los parentrsis para indicar que se esta invocando una funcion


const saludoUser =(user)=> console.log(`HOLA ${user}`);//esta es la sintaxis para el 2do tipo de funcion que se debe declarar
//si lla funcion solo cuenta con una sola linea de codigo ,no es necesario
//colocar las llaves en las "arrow flechas"

//una ves que se obtiene el parametro podemos utilizarlo dentro de la funcion
//al no enviar un parametro a la funcion no hara nada la funcion por
//que esta esperando un parametro
saludoUser('pepe') //  aqui le enviaremos un nombre ,es el parametro que recivira la funcion para hacer uso de este en su condigo-.
//otro ejemplo de como utilizar una funcion
const sumaTres=(num1,num2)=>{
    if(num1==2){
        return num1+num2 //OJO DENTRO DE LA FUNCION EL PROGRAMA DEJARA DE EJECUTARSE HASTA QUE ENCUENTRE
        //UN "RETUNR" es decir se rompe la ejecucion y regresa el valor
    } //hasta que no se encuentre una return ,
    //la funcion no hara nada.
console.log('ESto no se va ejecutar si entra en el if');
return num1
}
console.log(sumaTres(2,3)); //aqui se ve que datos nos mostrara por que si entra un 
//numero 
const suma=(num1,num2)=> num1+num2;
let result=suma(3,6);
console.log(result);
