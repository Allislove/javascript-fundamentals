function imprimirInventarioGranja(vacas, pollos) {
    let stringVaca = String(vacas);
    console.log(stringVaca.length);
    while (stringVaca.length < 3) {
        stringVaca = "0" + stringVaca;
    }
    console.log(`${stringVaca} Vacas`);
    let stringPollos = String(pollos);
    while (stringPollos.length < 3) {
        stringPollos = "0" + stringPollos;
    }
    console.log(`${stringPollos} Pollos`);
}


function alcocharConCeros(numero, amplitud) {
    let string = String(numero);
    console.log('STRING**', string);
    //let amplitudAA = String(amplitud)
    //console.log('AMPLITUD***', amplitudAA.length);
    while (string.length < amplitud) {
    string = "0" + string;
    }
    return string;
}


function imprimirInventarioGranja(vacas, pollos, cerdos) {
    console.log(`${alcocharConCeros(vacas, 3)} Vacas`);
    console.log(`${alcocharConCeros(pollos, 3)} Pollos`);
    console.log(`${alcocharConCeros(cerdos, 3)} Cerdos`);
}

imprimirInventarioGranja(7, 11, 5);