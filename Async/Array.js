/* let frutas = ["Manzana", "Pera", "Limón"];
console.log(frutas);

let primero = frutas[0]
console.log(primero);
 */

/* console.log("----ESPECIFICANDO LA CANTIDAD DE ELEMENTOS QUE CONTIENE EL ARRAY----");
//De esta forma podemos conocer cual es la capicidad maxima del array
let ultimo = frutas.length -1;
console.log(ultimo);

console.log("----ESPECIFICANDO EL NOMBRE DEL ULTIMO ELEMENTO QUE CONTIENE EL ARRAY----");
let especificandoUltimo = frutas[frutas.length -1];
console.log(especificandoUltimo);
 */

let series = ["Wanda Vision", "See", "Ragnarok", "The 100's", {
    "valor": "Datos insertados en un objeto"
}];
series.push("Mujer Maravilla")
/* console.log(series);
let ultimaSerie = series[series.length -1];
console.log("-------");
console.log(ultimaSerie);
console.log(series[2]); */
/* series.forEach(function(name, idx, array){
    console.log(name);
}) */

// Arrow function
//Tomado de: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#syntax
//Usando forEach en Arrow functions
series.forEach((element, idx) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(series)
            return console.log(element);
        }, 1500);
    })

})

//Definiendo un tamño de el vector
/* var i = 10;
var tamano = [i]
console.log(tamano[tamano.length]); */

