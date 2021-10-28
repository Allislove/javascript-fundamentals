(() => {
    console.log('It"s Working!')
})();



// Renombrando todas las clases de elementos li con clase = frutas
var frutas = document.querySelectorAll('li.frutas');
for (var i = 0; i < frutas.length; i++) {
    frutas[i].className = "frutasMaduras"
}

// Este no va a funcionar porque arriba ya hay una orden referente a estos selectores!
/* var frutas2 = document.querySelectorAll('li.frutas');
if(frutas2.length > 0) {
    for (var i = 0; i <  frutas2.length; i++) {
        frutas2[i].className = "Esmayora0";
    }
} */

// obtengo un elemento con id one
/*var id = document.getElementById('one'); // pregunto si ese elemento tiene un atributo id. 

if(id.hasAttribute('id')) { 
    // si lo tiene pues quitalo!
    id.removeAttribute('id'); 
}*/


var startItemUl = document.getElementsByTagName('ul')[0];
var firstItem = startItemUl.firstChild;
var lastItem = startItemUl.lastChild;


var one = document.getElementById('one');
one.firstChild.nextSibling;
console.log(one)
var oneContentIs = one.nodeValue;
console.log(oneContentIs);


var two = document.getElementById('two');
var showTwoTextContent = two.textContent;
var showInnerText = two.innerText;
console.log(showTwoTextContent)
console.log(showInnerText)
document.writeln(showInnerText)

two.innerHTML = '<a href=\"https://andresromana.com\">' + showInnerText + '</a>'; 

// creao el nuevo elemento li
var nuevoElemento = document.createElement('li');
// Creo un nuevo nodo de texto!
var nuevoTexto = document.createTextNode('Uvas');
// Le agrego el texto al elemento que creamos inicialmente
nuevoElemento.appendChild(nuevoTexto);
// busco la posición donde sera añadida el nuevo elemento
// En este caso quiero que sea en el primer element node de ul > ul[0]
var posicion = document.getElementsByTagName('ul')[0];
posicion.appendChild(nuevoElemento);



// Removiendo un elemento del arbol DOM

var removeEl = document.getElementsByTagName('li')[4];
var containerEl = removeEl.parentNode;
containerEl.removeChild(removeEl);
