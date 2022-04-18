//localizamos the button
const button = document.getElementById('button')
//Add event listener to the var button
button.addEventListener('click',() => { //lanzamos una funcion que mostrara nuestros datos contenidos en nuestra apiRest ALO CUALES QUEREMOS SOLICITAR
    let xhr
    if(window.XMLHttpRequest)
    xhr = new XMLHttpRequest()
    else
    xhr = new ActiveXObject('Microsoft.XMLHTTP')
    
    //xhr.open tiene dos parametros:Metodo , Url
    xhr.open('GET','https://jsonplaceholder.typicode.com/users')

    

    //Here must decode the funtion tha it'll execute on time th get all data
    xhr.addEventListener('load' , (data) =>{
        /**
         * console.log(data.target.responsive)
         */
        
        //hasta aqui tenemos los datos pero en forma de string,entonces debemos hacer lo siguiente  JSON.parse(data.target.response) // 

        //guardamos en una variable para una mejor manipulacion de nuestros datos contenidos 
        const dataJSON = JSON.parse(data.target.response)

        const list = document.getElementById('list')
        for(const userInfo of dataJSON){
            const listItem = document.createElement('LI')
            listItem.textContent =`${userInfo.id} - ${userInfo.name}`
            list.appendChild(listItem);
        }
    })

    xhr.send()
})