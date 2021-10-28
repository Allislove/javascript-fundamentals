let contador = 0;

while(contador < 10) {
    contador++;
    console.log(contador);
}


//La diferencia radica en que el do while, ejecutara su inicio, siempre una primera vez,
//Y luego comprobara con la condicion que le hemos indicado, asi sabra donde tenerse.
//Es algo como decir, hazme esto, que esta debajo del do, y luego volverle a decir
//Hasta que este dato o variable sea igual o menor a esto!
do{
    console.log(contador)
    contador++;
}while(contador<10);

