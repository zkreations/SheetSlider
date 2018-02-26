/*!
=> Sheet Slider v2.0.2
=> Copyright: 2018 zkreations
=> URI: https://www.zkreations.com
=> Author: Daniel Abel {Zero}
=> Author URI: https://fb.com/daniei.abel
=> Licensed under MIT | github.com/zkreations/whale.css/blob/master/LICENSE
*/
var auto, slides = document.querySelectorAll(".sh--auto input"), // Todos los input[radio]
    slideTime = 3, // Cantidad de segundos de la animacion
    slideContent = document.querySelector(".sh--auto .sh__content"), // Contenido
    slideBtns = document.querySelectorAll(".sh--auto .sh__btns label"), // Todos los botones
    slideArrows = document.querySelectorAll(".sh--auto .sh__arrows label"); // Todas las flechas

    //Si el puntero esta encima del contenido
    slideContent.onmouseover = function(){clearInterval(auto)};

    //Al retirar el cursor prosigue la animacion
    slideContent.onmouseout = function(){setInput()};

 	for (var i=0; i < slides.length; ++i) {
        if (slideBtns.length != 0){
            slideBtns[i].addEventListener("click", function() {// Pausar si los botones reciben un clic
                clearInterval(auto);            
                setInput()
            });
        }
        slideArrows[i].addEventListener("click", function() {// Pausar si los botones reciben un clic
            clearInterval(auto);            
            setInput()
        });
    }
    setInput()

    // Creamos el interval para marcar los input[radio]
    function setInput(){
        auto = setInterval(autoSlides, slideTime * 1000);
    }

    function autoSlides() {
    // bucle con la cantidad de input[radio] existentes
    for (var i = 0; i < slides.length; ++i)
        if (1 == slides[i].checked) {
            i == slides.length - 1 ? slides[0].checked = !0 : slides[i + 1].checked = !0; // Si el ultimo input[radio] es marcado vuelve al primero
            break
        }
    }