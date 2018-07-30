# Sheet Slider

> Best slider for images with pure CSS [Demostración](http://zkreations.github.io/SheetSlider/)

[![license][license-img]][license-url]
[![changelog][changelog-img]][changelog-url]

## Instalación

Aloja el archivo `sheetslider.min.css` e incluir arriba de `</head>`:

```html
<link rel="stylesheet" href="sheetslider.min.css"/>
```

Tambien puedes cargar los estilos desde la cdn:

```html
<link rel="stylesheet" href="//cdn.jsdelivr.net/gh/zkreations/SheetSlider@2.2.0/dist/sheetslider.min.css"/>
```

## Modo de uso

Solo hay que seguir el ejemplo del archivo **index.html**. Esta sería la forma mas simple de iniciar el slider sin textos ni botonera:

```html
<div class="sheetSlider sh-default">
   <input id="s1" type="radio" name="slide1" checked/> 
   <input id="s2" type="radio" name="slide1"/>
   <div class="sh__content">
      <div class="sh__item"><img src="img/img01.jpg"/></div>
      <div class="sh__item"><img src="img/img02.jpg"/></div>
   </div>
   <div class="sh__arrows">
      <label for="s1"></label>
      <label for="s2"></label>
   </div>
</div>
```

Para incluir la botonera, duplicar `<div class="sh__arrows">...</div>` y cambiar **sh__arrows** por **sh__btns**

## Relacion de aspecto

| Clase        |  Description | 
| ------------ | ----------------------------------- |
| `sh-21r9`    | Apaisado |
| `sh-16r9`    | Rectangular |
| `sh-4r3`     | Estándar |
| `sh-1r1`     | Cuadrado perfecto |

La clase se establece en la etiqueta principal del slider. Si no se especifica se utiliza "**apaisado**" por defecto. Ejemplo:

```html
<div class="sheetSlider sh-16r9">
```

## Animaciones

| Clase              |  Description | 
| ------------------ | ----------------------------------- |
| `sh-default`       | Animacion por defecto (horizontal) |
| `sh-vertical`      | Pase de imagenes en vertical |
| `sh-fade`          | Desvanecimiento suave |
| `sh-flip`          | Plegado vertical |


La clase se establece en la etiqueta principal del slider y es obligatoria. Ejemplo:

```html
<div class="sheetSlider sh-default">
```

## Auto slide

Aloja el archivo `sheetslider.min.js` e incluyelo en tu proyecto arriba de `</body>` de la siguiente forma:

```html
<script src="dist/sheetslider.min.js"></script>
```

O desde una cdn:

```html
<script src="//cdn.jsdelivr.net/gh/zkreations/SheetSlider@2.2.0/dist/sheetslider.min.js"></script>
```

Incluye la clase `sh-auto` para iniciar la animacion, Ejemplo:

```html
<div class="sheetSlider sh-default sh-auto">
```

Opcionalmente puedes agregar un boton "play/pause" agregando la siguiente etiqueta:

```html
<button class="sh-control"></button>  
```

## Licencia

**Sheet Slider** is licensed under the MIT License.

[changelog-img]: https://img.shields.io/badge/changelog-md-blue.svg?style=flat-square
[changelog-url]: changelog.md
[license-img]: https://img.shields.io/npm/l/normalize.css.svg?style=flat-square
[license-url]: LICENSE