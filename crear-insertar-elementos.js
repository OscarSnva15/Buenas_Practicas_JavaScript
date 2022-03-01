//Create a element
const days = ['Lunes', 'Martes', 'miercoles','viernes', 'sabado' , 'domingo']
const title = document.getElementById('title')
const dayList = document.getElementById('dayList')
const daysSelect = document.getElementById('daysSelect')

const fragment = document.createDocumentFragment()

/*for (let day of days){
    const itemList = document.createElement('LI')
    itemList.textContent=day
    fragment.appendChild(itemList)
}

dayList.appendChild(fragment)*/


for(const day of days){
    const selecItem = document.createElement('OPTION')
    selecItem.textContent=day
    selecItem.setAttribute('value', day.toLowerCase)
    fragment.appendChild(selecItem)
}
daysSelect.appendChild(fragment)