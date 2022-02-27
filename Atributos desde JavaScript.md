# Atributos desde JavaScript

## Trabajar con atributos desde el doom ,tenemos un primer metodo.

Atributos; primero se deben obtner y almacenar en una constante, Con el **'getAttribute'** el primer metodo se obtiene el valor del atributo con id al que haces referencia.

```javascript
const title = document.getElementById('title')
const nombre = document.getElementById('nombre')
```

veamos elementos de los cuales hacemos refeerncia en un html

```html
<body>
    <h1 id="title" class="title">Atributos y clases</h1>
    <label for="nombre">Nombre</label>
    <form action="">
        <input type="text" id="nombre"/>
    </form>
    <script src="clases&atributos.js"></script>
</body>
```

Atributos primero se deben obtner y almacenar en una constante, Con el **'setAttribute'** el segundo metodo cambia el valor del atributo por el parametro que le pasemos.

```javascript
nombre.setAttribute('type','date');
```


