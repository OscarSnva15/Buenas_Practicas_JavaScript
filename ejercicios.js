/** Aqui se vieron bases importantes con respecto a java script
 * 
 */
console.log("Desarrollando de Nuevo");
let opc;
opc=prompt('numero de ejercicio');
let opcInt=parseInt(opc);
switch(opcInt){
    case 1:
         /**Solicita un nombre, la edad y muestra por consola el mensaje "Hola"
         * _____,tienes____ años y el año que viene tendras___años"
         * REALIZA EL EJERCICICIO CON PROMPT(MENSAJE) Y HAZ USO DE
         * TEMPLATE STRING
         */
        let nombre,edad;
        nombre=prompt('Ingresa tu Nombre:');
        edad=prompt('Ingresa tu edad');
        let edadInt=parseInt(edad);
        console.log(`Hola ${nombre}, tienes ${edadInt}\n
        el proximo año tendras ${edadInt+1}`);
        break;
    case 2:
         /**Escribe un programa que pueda calcular el area de tres figuras
         * trinagulo
         * rectangulo
         * circulo
         * EN PRIMER LUGAR PREGUNTAR DE CUAL FIGURA DESEA CALCULAR EL AREA
         * ,DESPUES SOLICITAR LOS DATOS QUE NECESITEMOS PARA CALCULARLO
         * considerar las sig. formls para el calulo de area
         * Tringulo=(base*altura)/2;
         * rectangulo=base*altura
         * circulo pi*r2
         * */
        let opcionUno,opcionUnoMays;
        opcionUno=prompt('Escoga una opcion\nA-Triangulo\nB-Rectangulo\nC-Circulo');
        opcionUnoMays=opcionUno.toUpperCase();
        switch(opcionUnoMays){
            case 'A':
                let base,altura;
                base=prompt('Ingresa la base');
                let baseInt=parseFloat(base);
                altura=prompt('Ingresa la altura');
                let alturaInt=parseFloat(altura);
                console.log(`El area del triangulo es ${(baseInt*alturaInt)/2}`);
            break;
            case 'B':
                let baseDos,alturaDos;
                baseDos=prompt('Ingresa la base');
                let baseIntDos=parseFloat(baseDos);
                alturaDos=prompt('Ingresa la altura');
                let alturaIntDos=parseFloat(alturaDos);
                console.log(`El area del rectangulo es ${(baseIntDos*alturaIntDos)/2}`);
            break;
            case 'C':
                const digamosPi=3.14;
                let radio;
                radio=prompt('Ingresa el radio');
                let radioInt=parseFloat(radio);
                radioCuadrado=Math.pow(radio,2);
                console.log(`El area del circulo es: ${digamosPi*radioCuadrado}`);
            break;
            default:
                console.log("Figura no declarada");
        }
        break;
    case 3:
         /**Solicita un numero que imprime todos los numeros pares e impares desde
         * el uno hasta ese numero,con el mesanje de es par e impar
         * EJEMPLO INGRESAN EL NUMERO 5
         * 1.-es impar
         * 2.-es par
         * 3.-es impár
         * 4.-es par
         * 5.-es impar
         */
        let numero;
        numero=prompt('Ingrese solo un numero, cual sea');
        for(let i=1;i<=numero;i++){
            if(i%2){
                console.log(`${i}.- es impar`);
            }else
            console.log(`${i}.- es par`);
        }
        break;
    case 4:
         /**Escribir un programa que pida un numero entero mayo que cero e imprima si el numero es primo o no
         * Un numero primo es aquel que solo es divisible entre el mismo y la unidad.
         * 17 numero primo
         * 27 numero no primo
         */
        let numeroDos=prompt('Ingrese un numero mayor a 0');
        let numeroDosInt=parseInt(numeroDos);
        let bandera=0;
        for(let i=2; i<numeroDosInt; i++){
            if((numeroDosInt%i==0) && (((1/i)*numeroDosInt)%i)==0){
                console.log(`${numeroDosInt} Numero no primo`);
                bandera=1;
                break;
            }
        }
        if(bandera==0){
            console.log(`${numeroDosInt} Numero primo`);
        }
        break;
    case 5:
         /*Escriba un programa que pida un número entero mayor que cero y calcule su factorial.
         *El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.
         *!5 = 5*4*3*2*1 =120
         */
        let numeroTres=prompt('Ingresa un numero para calcular su factorial');
        let numeroTresInt=parseInt(numeroTres);
        let i=numeroTresInt-1;
        do{ 
            console.log(`${numeroTresInt}*${i}=${numeroTresInt*i}`);
            numeroTresInt=numeroTresInt*i;
            i--;
        }while(i>0);
        console.log(`\n!${numeroTres}=${numeroTresInt}`);
        break;
    case 6:
        /**Escribe un programa que permita ir introduciendo una serie indeterminadade números mientras su suma no supere 50,
         * Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos números se han introducido.
        */
        let arrayUno=[];
        let contador=0,suma=0,banderaDos=0;
        do{
        let valores=prompt('Ingresa un numero');
        let valoresInt=parseInt(valores);
        arrayUno.push(valoresInt);
        suma=suma+valoresInt;
        contador++;
        if(suma>50){
            banderaDos=1;
            break;
        }
        }while(banderaDos!=1);
        console.log(`${arrayUno}\nvalores ingresados:${contador}\nsumatoria total :${suma}`);
        break;
    case 7:
        /**Crea 3 arrays. El primero tendra 5 números y el segundo se llamará pares y el tercero impares, ambos estarán vacíos. 
         * Después multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10, 
         * si el resultado es par guarda ese número en el array de pares y si es impar en el array de impares.
         * Muestra por consola:-la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6
         * - el array de pares e impares
        */
        let arrayDos=[1,2,3,4,5],arrayTres=[],arrayCuatro=[];
        for(let k=0; k<arrayDos.length ; k++){
            let randValor=(Math.round(Math.random() * (10 - 1)+1));
            let resultadoMult=arrayDos[k]*randValor;
            if(resultadoMult%2==0){
                console.log(`valor par;\n${arrayDos[k]}*${randValor} = ${resultadoMult}`);
                arrayTres.push(resultadoMult);
            }
            else if(resultadoMult%2!=0){
                console.log(`valor impar:\n${arrayDos[k]}*${randValor} = ${resultadoMult}`);
                arrayCuatro.push(resultadoMult);
            }
        }        
        console.log(`valores pares: ${arrayTres.join('-')}\nvalores impares: ${arrayCuatro.join('-')}`);
    break;
    case 8:
        /**Dado un array de letras, solicita un número de DNI(00523821F) y calcula que letra le corresponde.
         * El número no puede ser negativo ni tener más de 8 dígitos.
         * La posición de la letra es el resultado del módulo del número introducido entre 23 const 
         * letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
        */ 
    break;
    case 9:
        /**
         * Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra.
         * vocales A E I O U
         * consonantes B, C, D, F, G, H, J, K, L, M, N, Ñ, P, Q, R, S, T, V, X, Z, W ,Y
         */
         let letras = prompt('Ingrese una palabra');
         let letraMayus=letras.toUpperCase();
         let arraySeis = letraMayus.split('');
         let consonantes=0,vocales=0;
        for(let m=0; m<=arraySeis.length ;m++){
            if(arraySeis[m] == 'A' || arraySeis[m] =='E' || arraySeis[m] =='I' || arraySeis[m] =='O' || arraySeis[m] =='U')
                vocales++;
            else if(arraySeis[m]=='B' || arraySeis[m]=='C'||arraySeis[m]== 'D' ||arraySeis[m]== 'F'||arraySeis[m]== 'G'||
            arraySeis[m]=='H'||arraySeis[m]=='J'||arraySeis[m]=='K'||arraySeis[m]=='L' || arraySeis[m]=='M'||arraySeis[m]=='N' || arraySeis[m]=='Ñ'
            ||arraySeis[m]== 'P'|| arraySeis[m]=='Q' || arraySeis[m]=='R' || arraySeis[m]=='S'||arraySeis[m]== 'T'||arraySeis[m]== 'V'||arraySeis[m]== 'X'||arraySeis[m]== 'Z'|| arraySeis[m]=='W' ||arraySeis[m]=='Y')
                consonantes++;
        }
        console.log(`palabra ${letras} \nvocales: ${vocales}\nconsonates: ${consonantes}\nlongitud palabra: ${arraySeis.length}`);
    break;
    case 10:
        /**10 - Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"]  
         * determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.
        */
       let arrayCinco=['azul','amarillo','rojo','verde','rosa'];
       let color=[prompt('color')];
       let banderaTres=0;
       for(let l=0; l<arrayCinco.length; l++)
       {
           if(arrayCinco[l]==color[0])
           {
            console.log(`${color} color dentro del array \nposicion [${l}]\n${arrayCinco}`);
            banderaTres=1;
           }
       }
       if(banderaTres==0){
        console.log(`${color} ,sin concidencias dentro del array\n${arrayCinco}`);
       }
        break;
    default:
        console.log('No se encuentra esa opcion');
}