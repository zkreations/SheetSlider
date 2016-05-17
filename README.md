# Sheet Slider

[Demostración](http://zkreations.github.io/SheetSlider/)

## Version 

# Sheet Slider 1.01

* Mejora de compatibilidad con flex

## Instalación

[Descargar](https://github.com/zkreations/SheetSlider/archive/master.zip) e incluir arriba de `</head>` el codigo css.

```html
<link rel="stylesheet" href="sheet-slider.min.css"/>
```

### Utilizar Sheet Slider

Básicamente solo hay que seguir el ejemplo del archivo index.html. Esta sería la forma mas simple de hacerlo sin textos ni botonera:

```html
<div class="sheet-slider">
   <input id="s1" type="radio" name="slide1" checked/>
   <input id="s2" type="radio" name="slide1"/>
   <input id="s3" type="radio" name="slide1"/>
   <ul>
      <li class="tab"><img src="img/slide-img01.jpg" /></li>
      <li class="tab"><img src="img/slide-img02.jpg"/></li>
      <li class="tab"><img src="img/slide-img03.jpg"/></li>
   </ul>
   <!--flechas-->
   <div class="sh-arrows">
      <label for="s1"></label>
      <label for="s2"></label>
      <label for="s3"></label>
   </div>
</div>
```
Para incluir la botonera; duplicar `<div class="sh-arrows">...</div>` y cambiar **sh-arrow** por **sh-btns**

## Color y tema

Despues de incluir `sheet-slider.min.css` agregar el siguiente codigo.
```html
<link rel="stylesheet" href="dist/theme/darken.css"/>
<link rel="stylesheet" href="dist/color/cyan.css"/>
```

## Limitaciones

* Solo puede haber un slider por página, ya que se basa en la **id** del **input** y esta no puede repetirse.
* El slider solo puede contener hasta un máximo de 8 imágenes.