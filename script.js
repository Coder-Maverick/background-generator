var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById('gradient');

color1.addEventListener('input', selector);
color2.addEventListener('input', selector);

function selector(){
    body.style.background="linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ';';
}

//linear-gradient(to right, rgb(13, 217, 253), rgb(203, 6, 105));

// css.innerHTML
// css.createTextNode
// css.textContent