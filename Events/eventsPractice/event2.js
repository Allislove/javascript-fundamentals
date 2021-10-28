



var divconidnew = document.querySelector(".new");

function newDivText(text){
    var textoCaja = divconidnew;
    textoCaja.firstChild.nodeValue = text;
}

function changingTheText() {
    var el = document.querySelector(".new");
    el.addEventListener("click", function() {
        newDivText("ESTAMOS MOSTRANDO UN NUEVO TEXTO!");
    }, false)
}



document.addEventListener("DOMContentLoaded", changingTheText, false)