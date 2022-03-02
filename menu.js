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

