class Persona{ //clase mopldeadora para crear o trabajar con nuestros objetis
    //Constructor
    constructor(nombre, apellido ,edad){//declaramos nuestro constructor
        this.nombre=nombre //declaramos nuestros objetos
        this.apellido=apellido //argunmetos
        this.edad=edad
        this.datos=`Me llamo ${nombre} ${apellido} y tengo ${edad} años`//es lo que tenemos guardato en datos
    }//una vez terminado el constriuctor ,creamos la clase 
    //Metodos
    saludar(){//declaracion de un metodo
        //contruimos lo que vaya a realizar este metodo
        return `Hola me llamo ${this.nombre} ${this.apellido} ${this.edad} años`
    }
}
//objetos
const juan = new Persona('Juan','gracia',20) //instanceamos un Obtejo,es decir lo mandamos a llamar
const oscar = new Persona('Oscar','Suarez',21)//instanceamos otro obtejo para la clase persona

console.log(juan.saludar()); 
console.log(oscar.saludar());
/*con una sola clase ,tenemos el molde para crear todas la personas
que nosostros queramos */