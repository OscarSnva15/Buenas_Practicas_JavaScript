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
    getAuthor(){ //hacemos un metodo que nos envie el author
        return this.author
    }
    getGender(){
        return this.gender
    }
}
const showAllBooks=()=>{
    console.log(books)
}
const showAuthors=()=>{
    let authors=[]//utilizamos un arrayy,para ordenar los authores de A-z
    for(const book of books){ 
        authors.push(book.getAuthor()) //Tenemos Dos opciones podemos sacarlo del arrays,
        //... o´ sacarlo de la clase libro
    }
    console.log(authors.sort());
}
const showGender=()=>{
    const gender = prompt('Introduce el genero a buscar')
    for(const book of books ){
        if(book.getGender() == gender){
            console.log(book.bookInfo())
        }
    }
}
let books=[]//El arreglo para guaradr mis libros
while(books.length<2){ //pensar posibles problemas en caso de que suceda un error con un acmpo, o un do while para preguntarle
    let title=prompt('title of book')//es por eso que utilizamos el bucle while..
    let author=prompt('Author of book')//..para ahooranos mucho trabajo
    let year=prompt('Year publication')
    let gender=prompt('Gender of book').toLowerCase()//ya obtenidas las variables validamos los campos
    if(title !='' && author !='' && !isNaN(year)&&
    year.length==4 &&
    (gender=='aventura' || gender== 'scary' || gender=='fantasy')){
        books.push(new Book(title,author,year,gender)) //CREAR UN OBJETO EN UN ARRAY
    }
}
//showAllBooks();//books ,mi arreglo puede crearse un objeto en un determinado indice, O.o caray!
//showAuthors();
showGender();