/*!
=> Sheet Slider v2.2.0
=> Copyright: 2018 zkreations
=> Licensed under MIT | github.com/zkreations/SheetSlider/blob/master/LICENSE
*/

var sheetSlider = (function(){

var animateDelay = 4000,
    autoplayHoverPause = false,
    auto, slides = document.querySelectorAll(".sh-auto input"),
    sliderContent = document.querySelector(".sh-auto .sh__content"), 
    sliderButtons = document.querySelectorAll(".sh-auto .sh__btns label"),
    sliderArrows = document.querySelectorAll(".sh-auto .sh__arrows label"),
    sliderControl = document.querySelector(".sh-control"), sliderStoped = false;

// Pausar la animacion si el puntero esta sobre el contenido
if (autoplayHoverPause) {    
  sliderContent.addEventListener("mouseover", pauseSlider);
  sliderContent.addEventListener("mouseout", playSlider);
}

if(sliderControl) sliderControl.addEventListener("click", playPauseButton);

// Marcar los input[radio]
function setInput(){
  auto = setInterval(autoSlides, animateDelay);
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
  if (sliderArrows.length){
  // Pausar si las flechas reciben un clic
  sliderArrows[i].addEventListener("click", function() {
      pauseSlider();
      playSlider();
  });
  }
}
    
window.addEventListener("load",function(){
  setInput();
});
                        
})();