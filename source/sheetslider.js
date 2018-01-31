/*!
=> Sheet Slider v2.0.0
=> Copyright: 2018 zkreations
=> URI: https://www.zkreations.com
=> Author: Daniel Abel {Zero}
=> Author URI: https://fb.com/daniei.abel
=> Licensed under MIT | github.com/zkreations/whale.css/blob/master/LICENSE
*/
var autoslide, slides = document.querySelectorAll(".sh--auto input"), // Todos los input[radio]
    sh__time = 3, // Cantidad de segundos de la animacion
    sh__content = document.querySelector(".sh--auto .sh__content"), // Contenido
    sh__btns = document.querySelectorAll(".sh--auto .sh__btns label"), // Todos los botones
    sh__arrows = document.querySelectorAll(".sh--auto .sh__arrows label"); // Todas las flechas

    //Si el puntero esta encima del contenido
    sh__content.onmouseover = function(){clearInterval(autoslide)};

    //Al retirar el cursor prosigue la animacion
    sh__content.onmouseout = function(){setInput()};

 	for (var i=0; i < slides.length; ++i) sh__btns[i].onclick = function() {// Pausar si los botones reciben un clic
        clearInterval(autoslide);
        setInput()
    }, sh__arrows[i].onclick = function() {// Pausar si las flechas reciben un clic
        clearInterval(autoslide);
        setInput()
    };

    setInput()

    // Creamos el interval para marcar los input[radio]
    function setInput(){
        autoslide = setInterval(autoslides, sh__time * 1000);
    }

    function autoslides() {
    // bucle con la cantidad de input[radio] existentes
    for (var i = 0; i < slides.length; ++i)
        if (1 == slides[i].checked) {
            i == slides.length - 1 ? slides[0].checked = !0 : slides[i + 1].checked = !0; // Si el ultimo input[radio] es marcado vuelve al primero
            break
        }
    }