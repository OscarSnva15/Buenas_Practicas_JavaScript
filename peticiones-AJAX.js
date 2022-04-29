/**
 * XMLHttpRequest, también referida como XMLHTTP, es una interfaz empleada para realizar peticiones HTTP y HTTPS a servidores Web.
 *  Para los datos transferidos se usa cualquier codificación basada en texto,
 *  incluyendo: texto plano, XML, JSON, HTML y codificaciones particularesespecíficas
 */

//localizamos the button
const button = document.getElementById('button')
//Add event listener to the var button
button.addEventListener('click',() => { //lanzamos una funcion que mostrara nuestros datos contenidos en nuestra apiRest ALO CUALES QUEREMOS SOLICITAR
    let xhr
    if(window.XMLHttpRequest) //EVENTO xMTLHpRequest
    xhr = new XMLHttpRequest()
    else
    xhr = new ActiveXObject('Microsoft.XMLHTTP')
    
    //xhr.open tiene dos parametros:Metodo , Url
    xhr.open('GET','https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/INDICATOR/1002000001/es/00/false/BISE/2.0/5a885848-04f9-4a7b-8925-589b80829e22?type=json')

    //token : 5a885848-04f9-4a7b-8925-589b80829e22

    //Here must decode the funtion tha it'll execute on time th get all data
    xhr.addEventListener('load' , (data) =>{
        //atributo data , forma parte de atributos llamados de datos moficables 
        /**
         * console.log(data.target.responsive)
         */
        
        //hasta aqui tenemos los datos pero en forma de string,entonces debemos hacer lo siguiente  JSON.parse(data.target.response) // 
        
        //guardamos en una variable para una mejor manipulacion de nuestros datos contenidos 
        const dataJSON = JSON.parse(data.target.response)
        //NOTACION DE OBJETOS JAVA SCRIPT = JSON
        const list = document.getElementById('list')
        for(const userInfo of dataJSON){
            const listItem = document.createElement('LI')
            listItem.textContent =`${userInfo.id} - ${userInfo.name}`
            list.appendChild(listItem);
        }
    })

    xhr.send()
})