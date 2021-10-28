
var a = 10;
var b = 210;
var result = a +b;

const suma = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(result);
        }, 2000)
    })
}

suma(6).then((resultadoSUma) => console.log(resultadoSUma))