


const potencia = function(base, exponente) {
    let resultado = 1;
  //El loop se va acumplir porque cuenta sera menor que el exponente
  //ciclo for: Inicializador, acumulador, aumentador
    for (let cuenta = 0; cuenta < exponente; cuenta++) {
        console.log(`cuenta ${cuenta}`);
        console.log(`resultado ${resultado}`);

        //Entonces, resultado sera igual a el mismo por la base, entonces en cada recorrido del for,
        //resultado se estara igualando y luego multiplicando, hasta que se acabe el loop
        //Es decir, cuando cuenta sea 1, resultado *= base, y resultado ahora tendra valor de 2
        //luego nuevamente cuando resultado sea igual a dos, se va a multiplicar nuevamente por la base
        //y resultado tendra un nuevo valor ahora, asi sucesivamente.

        resultado = resultado * base;
    }
    return resultado;
    };


    potencia(2,5)
    //console.log(potencia(2, 5));