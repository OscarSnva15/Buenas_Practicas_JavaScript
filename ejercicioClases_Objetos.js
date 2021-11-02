class Book{ //crear un clase libro
    constructor(title,author,year,gender){//la clase tendra titulo,autor y genero (4 propiedades o ragumentos)
        this.title=title
        this.author=author
        this.year=year
        this.gender=gender
    }
    bookInfo(){ //un metodo ,ya que forma parte de la clase
       return`Information book\n${this.title}\n${this.author}\n${this.year}\n${this.gender}`
    }
}
const validateFieldsBook=(attribute1,attribute2,attribute4)=> {
    if((attribute1 === "") || (attribute2 === "") || (attribute4 === "")) return false
}
const validatePublicationBook=(attribute3)=>{
    if((isNaN(attribute3)==false) || (attribute3.lenght!=4)) return false
}
const validateGenderBook=(attribute4)=>{
    if((attribute4!=='AVENTURE') && (attribute4 !=='SCARY') && (attribute4!=='FANTASY')) return false
}
let books=[],opc=''//El arreglo para guaradr mis libros
do{ //pensar posibles problemas en caso de que suceda un error con un acmpo, o un do while para preguntarle
    let title=prompt('title of book').toUpperCase//es por eso que utilizamos el bucle while..
    let author=prompt('Author of book').toUpperCase//..para ahooranos mucho trabajo
    let year=prompt('Year publication')
    let gender=prompt('Gender of book').toUpperCase//ya obtenidas las variables validamos los campos
    let filterText=validateFieldsBook(title,author,gender)
    let filterYear=validatePublicationBook(year)
    let filterGender=validateGenderBook(gender)
    console.log(filterText)
    console.log(filterYear)
    console.log(filterGender)
    if(filterText==true && filterYear==true && filterGender==true)
    {
        books.push(new Book(title,author,year,gender))//Declaracion de un objeto
    }else
    {
        alert('Book unsucesfull,Something went wrong')
    }
    opc=prompt('¿Are you to wish add any book? [S/N]')
}while(opc!= 'n' || opc!= 'N')
console.log(books)//books ,mi arreglo puede crearse un objeto en un determinado indice, O.o caray!