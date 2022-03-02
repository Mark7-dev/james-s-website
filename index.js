//var emotionaldamage = true

//while (emotionaldamage = true) {
//  alert("you suck")
//}


function myFunction() {
  alert("You suck You suck You suck You suck You suck You suck You suck You suck You suck You suck You suck You suck You suck You suck You suck You suck You suck You suck You suck You suck You suck You suck You suck You suck You suck You suck You suck You suck You suck You suck You suck You suck You suck You suck You suck ");
}




var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

           
var el_up = document.getElementById("GFG_UP");

var el_down = document.getElementById("GFG_DOWN");

el_up.innerHTML = str;

function changeColor(color) {

    document.body.style.background = color;
}

function gfg_Run() {

    changeColor('#121212');

}

document.addEventListener("DOMContentLoaded", function(event) {

document.getELementById('day-night').style.backgroundColor=window.localStorage['backgroundColor'];

});

localStorage.colorSetting = '#121212';

localStorage['colorSetting'] = '#121212';

localStorage.setItem('colorSetting', '#121212');


window.onload = function() {
  document.getElementById("my_audio").play();
}
