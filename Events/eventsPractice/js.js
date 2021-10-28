padre = document.querySelector(".container");

function modifyText(newText) {
    var t2 = padre;
    t2.firstChild.nodeValue = newText;
}

function load() {
    var el = document.querySelector(".container");
    el.addEventListener("dblclick", function(){
        modifyText("Llamo una funcion anonima")
    }, false);
    console.log(el);
}



//Tomare el contenido que tiene el contendor son
son = document.querySelector(".son");

function newSonText(text) {
    var caja1 = son;
    caja1.firstChild.nodeValue = text;
}

function changeSonText() {
    //Selecciono el contendor son
    var el = document.querySelector(".son");
    console.log(el);
    //Luego le paso un evento al contenedor son
    el.addEventListener("click", function() {
        newSonText("Se ha modificado el nuevo texto!")
    }, false)
}





document.addEventListener("DOMContentLoaded", changeSonText, false);
document.addEventListener("DOMContentLoaded", load, false);


