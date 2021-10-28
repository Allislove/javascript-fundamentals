//1. Algoritmo de ordenar de burbujas
//Compare arrays[j] con arrays[j + 1]
// Si arrays[j] > arrays[j+1] se intercambian
function ordernarNumeros(entrada) {
    for(var i=0; i<entrada.length -1; i++){
         //console.log(i);
        var isSwap = false;
        for(var j = 0; j<entrada.length -i -1; j++) {
            console.log(j);

            //Intercambiar
            if(entrada[j] > entrada[j+1]) {
                var flag = entrada[j];
                entrada[j] = entrada[j + 1];
                entrada[j+1] = flag;
                isSwap = true;
            }
        }
        if(!isSwap) // Sin intercambio, asi que deja de ordenar
        {
            break;
        }
    }
}

var scores = [90, 70, 50, 80, 60, 85];
ordernarNumeros(scores);
console.log(scores);
// for(var i=0; i<scores.length; i++) {
//     document.write(scores[i]+ ",");
// }


module.exports = [
    ordernarNumeros
]
