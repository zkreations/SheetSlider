# Sheet Slider

> Best slider for images with pure CSS [Demostración](http://zkreations.github.io/SheetSlider/)

[![license][license-img]][license-url]
[![changelog][changelog-img]][changelog-url]

## Instalación

Aloja el archivo `sheetslider.min.css` e incluir arriba de `</head>` el codigo css.

```html
<link rel="stylesheet" href="dist/sheetslider.min.css"/>
```

Si no puedes alojar, prueba cargando los estilos desde la cdn de rawgit:

```html
<link rel="stylesheet" href="https://cdn.rawgit.com/zkreations/SheetSlider/master/dist/sheetslider.min.css"/>
```

## Modo de uso

Solo hay que seguir el ejemplo del archivo **index.html**. Esta sería la forma mas simple de iniciar el slider sin textos ni botonera:

```html
<div class="sheetSlider sh--default">
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
Para incluir la botonera; duplicar `<div class="sh__arrows">...</div>` y cambiar **sh__arrows** por **sh__btns**

## Animaciones

La clase `sh--default` es obligatoria y establece la animación por defecto. Cambia `default` por `vertical` o `fade` para cambiar el efecto de transición:

```html
<div class="sheetSlider sh--vertical">
<div class="sheetSlider sh--fade">
```

## Auto slide

Aloja el archivo `sheetslider.min.js` e incluyelo en tu proyecto arriba de `</body>` de la siguiente forma:

```html
<script src="dist/sheetslider.min.js"></script>
```

O desde una cdn con rawgit:

```html
<script src="https://cdn.rawgit.com/zkreations/SheetSlider/master/dist/sheetslider.min.js"></script>
```

Para iniciar la animacion en el slider, incluye la clase `sh--auto` de esta forma:

```html
<div class="sheetSlider sh--default sh--auto">
```

## Licencia

**Sheet Slider** is licensed under the MIT License.

[changelog-img]: https://img.shields.io/badge/changelog-md-blue.svg?style=flat-square
[changelog-url]: changelog.md
[license-img]: https://img.shields.io/npm/l/normalize.css.svg?style=flat-square
[license-url]: LICENSE