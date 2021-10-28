//Primero seleccionamos el elemento con el que 
//Deseamos interactuar


var textoGamers = document.querySelector(".prueba");

//Selecionamos el nodo, y ademas el metodo recibira un nuevo texto
function selectingTheNode(text) {
    textoFirst = textoGamers;
    //Le indicamos ahora que este firstChild.nodevalue
    // va a contener un nuevo texto
    textoFirst.firstChild.nodeValue = text;
}

//Creo una funcion que sera el escuchador de el evento
// que en este caso es "click"


function enviandoEvento() {
    //Vuelvo y selecciono la caja con la que vamos a interactuar
    var el = textoGamers;
    //le mando el evento que queremos hacer
    el.addEventListener("click", function() {
        selectingTheNode("HTTPS://GAMERSHERE.COM")
    }, false)
}


document.addEventListener("DOMContentLoaded", enviandoEvento, false)