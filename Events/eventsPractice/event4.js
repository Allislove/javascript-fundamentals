var caja4 = document.querySelector(".prueba2");


function newText(text){
    nuevoText = caja4;
    nuevoText.firstChild.nodeValue = text;

}


function clickToChangeTheText() {
    el = caja4;
    el.addEventListener("click", function() {
        //llamamos la funcion que cambiara el texto de la caja4
        newText("HTTPS://ANDRESROMANA.COM")
    }, false)
}


document.addEventListener("DOMContentLoaded", clickToChangeTheText, false)