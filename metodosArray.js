let letters = ['a','t,','c','d']
let numbers=[1,8,9,34,100]
//let word='Hola mundo'
/*console.log(word) //esta seria unacedan en la primera posicion de el array(index0)
console.log(Array.from(word));//El metodo Fom ah divididi mi cadena asigando posiciones de cada letra , en un indice
console.log(word.split(' '));//al encontrar lo que le indiquemos, separa el array
//si le pasamos un arrays vacio,lo separa en diferentews posiciones
*/
console.log(letters.sort())//-Ordena los elementos de un array automaticamentes,
//Esta funcion debe recibir un algoritmo para que de esa 
//forma ordene los elementos
console.log(numbers.sort((a,b)=>a-b))//el algorimos b-a ,nos ayuda  tener el array ordenado de mayor a menor, 
//ya que el segundo numero es mayor a 0, seria un numero mayor, o viceversa
//proceso:

/**
 * funtion menorMAyor(a,b){
 * if (a-b<0) return 0
 * if(a-b>0) return 1
 * if(a==b) return 0
 * }
 */
/**
 * funtion mayorMenor(a,b){
 * if (b-a<0) return -1
 * if(b-a>0) return 1
 * if(a==b) return 0
 * }
 */
//forEach(())
const number=[12,23,45,2,45]
 number.forEach((number, index)=>//opcional-->(console.log(number))
 //o puede ser mostrado de esta manera
 console.log(`${number} esta en la posicion ${index}`))
 //some calbacks
 const words=['HTML','CSS','JavaScript','PHP']
 console.log(words.some(word=> word.length>10));
 console.log(words.every(word=>word.length>2));
//Acontinuacion todos lo metodos sirve epara recorer un array
//map(CAllback)
const datos=[1,4,5,2]
const datos2=[1,4,5,2]
datos.map(number=> console.log(number*2)) //podemos hacer un tipo de operacion u accion con caad numero guaraddo en cada posicion
//el cual podremos utilizar par generar otro arrays
//filter()
const numbers2 = datos2.filter(number=> number > 3)//devuelve un array creado con los elemnetos que cumplen la condicion
console.log(numbers2)
//reviews un ejemlpo de un array de objetos de usuarios
const users=[
    {
        name:'user 1',
        online: true

    },
    {
        name:'user 2',
        online: true

    },
    {
        name:'user 3',
        online: false

    },
    {
        name:'user 4',
        online: true

    },
    {
        name:'user 5',
        online: false

    },
    {
        name:'user 6',
        online: true

    }

]
//el numero de usuarios conectados los debemos guardar en un lado
const userOnline =users.reduce((cont,user)=>{
    if(user.online) cont++
    return cont
},0)//Nan es not anumber,con la coma podemos inicializar el valor de conts a 0
console.log(`Hay ${userOnline} usuarios conectados`);

//Spread Operator
/**
 * principalemente es expandir el contenido de un arrar
 * ejemplo
 */

const numerosDos=[1,2,5,8]
console.log(...numerosDos)
const addNumbers = (a ,b ,c)=>{
    console.log(a+b+3)
}

//pero que pasa si queremos esumar valor de una funcion de dierente tamaño
//para poder enviar los elementos de un array,solo debemos poner tres puntos por delante
addNumbers(...numbersToadd)

let usuarios = ['javier','david','rosa','juan','mercedes']
let newUsuarios=['marta','jaime','laura']

usuarios.push(...newUsuarios)//con esto hemos conseguido que introducir elementos a un array el numero de veces que sea
//es como un bucle ,que pasa los elementos juntos del array


//como copiar arrasy
let array1=[1,3,4,5]
let array2=array1
//si qisieramos meter el contenido de un arrayas a otro podemos hacerlo
let arr2=[...array1]//lo expandimos

//como concatenamos arrays
let arrayConcat=arra1.concat(array2)
console.log(arrayConcat)
//
let arrayConcat2=[...array1,...arr2]
console.log(arrayConcat)


