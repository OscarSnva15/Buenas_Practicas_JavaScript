# Probando el DOOM Scripting

## Trabajando con clases

Metodos con sentencias mas comunes a la hora de trabajar con clases.

```javascript
Element.classList.add('class','class')
Element.classList.remove('class','class')
Element.classList.contains('class')
Element.classList.replace('oldclass','newclass')
```

Trabajando con el evento **add**

```javascript
const title= document.getElementById('title')
title.classList.add('classOnePrueba','classTwoPrueba','classThreePrueba',
'classForPrueba','classTwoPrueba')
console.log(title)
```

Obtendremos la salida en el inspector de consola como , **salida: class="classOnePrueba','classTwoPrueba','classThreePrueba',
'classForPrueba','classTwoPrueba"**

---

Trabajando con el evento **remove**

```javascript
title.classList.remove('classOnePrueba')
console.log(title)
```

obtendremos la salida en el inspector de consola como salida, **class="classTwoPrueba','classThreePrueba',
'classForPrueba','classTwoPrueba"**

---

Trabajando con el evento **contains**

```javascript
title.classList.add('classOnePrueba')
        if(title.classList.contains('classOnePrueba')) console.log('title tiene la clase classOnePrueba')
            title.classList.add('classAddPrueba')
console.log(title)
```

En el codigo anterior podemos observar que sin la clases 'classOnePrueba' existe ., pues arrojara un TRUE y proseguira a hacer una agregación de otra clase interpretando que ha entrado en el bloque de codigo perteneciente al if.

---

Trabajando con el evento **replace**

```javascript
title.classList.replace('classAddPrueba','classFivePrueba')
console.log(title)
```

Con lo anterior podremos pasar dos parametros el cual es parecido a aplicar el remove  y add pero en un solo metodo, es decir ,este remplazará la clase que señales en el primeri parametro por  la clase que señales en el segundo parametro.

---

## Atributos directos

```javascript
console.log(title.innerHTML) //recoger las eqtiquetas html dentro del texto
console.log(title.textContent)//recoge solo el texto plano
```

```javascript
console.log(nombre.value)//obtiene el valir del la clase que estemos citando como
nombre
```
