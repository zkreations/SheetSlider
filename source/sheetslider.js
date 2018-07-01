/*!
=> Sheet Slider v2.1.0
=> Copyright: 2018 zkreations
=> Licensed under MIT | github.com/zkreations/SheetSlider/blob/master/LICENSE
*/

var sheetSlider = (function(){

var sliderTime = 3, // Cantidad de segundos de la animacion
    auto, slides = document.querySelectorAll(".sh-auto input"),
    sliderContent = document.querySelector(".sh-auto .sh__content"), 
    sliderButtons = document.querySelectorAll(".sh-auto .sh__btns label"),
    sliderArrows = document.querySelectorAll(".sh-auto .sh__arrows label"),
    sliderControl = document.querySelector(".sh-control"), sliderStoped = false;

// Pausar la animacion si el puntero esta sobre el contenido,
// continuar cuando se retire
sliderContent.addEventListener("mouseover", pauseSlider);
sliderContent.addEventListener("mouseout", playSlider);

if(sliderControl) sliderControl.addEventListener("click", playPauseButton);

// Creamos el interval para marcar los input[radio]
function setInput(){
  auto = setInterval(autoSlides, sliderTime * 1000);
}

function autoSlides() {
for (var i = 0; i < slides.length; i++)
  if (slides[i].checked) {
      if(i === slides.length - 1) slides[0].checked = true;
      else slides[i + 1].checked = true;
      break;
  }
}

function pauseSlider(){
  clearInterval(auto);
}

function playSlider(){
  if(!sliderStoped) setInput();
}

function playPauseButton(){
  sliderStoped = !sliderStoped;
  pauseSlider();
  sliderControl.classList.add('is-active');
  if(!sliderStoped){
    autoSlides();
    playSlider();
    sliderControl.classList.remove('is-active');
  }
}

for (var i = 0; i < slides.length; i++) {
  if (sliderButtons.length){
      // Pausar si los botones reciben un clic
      sliderButtons[i].addEventListener("click", function() {
          pauseSlider();
          playSlider();
      });
  }
  // Pausar si las flechas reciben un clic
  sliderArrows[i].addEventListener("click", function() {
      pauseSlider();
      playSlider();
  });
}

setInput();

})();