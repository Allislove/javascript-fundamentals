//Ejemplo usando el metodo hasOwnProperty
//Tomado de : https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty

//Sintaxis obj.hasOwnProperty(prop)
//prop = el nombre de la propiedad a buscar tipo de dato(string)

//Probemos, creamos ahora un objeto;

var mYcar = new Object();
mYcar.marca = "BMW";
mYcar.color = "Rojo";
// console.log(mYcar);

//Creo ahora una variable, para demostrar el valor que retornara llamar al metodo hasOwnProperty
//Y preguntarle si existe la propiedad marca en el objeto mYcar.
// var existe = mYcar.hasOwnProperty("marca");
// console.log(existe);


const padres = {
    "id1": {
        "name": "Felipa",
        "lastName": "Serna"
    },
    "id2": {
        "name": "Silvio",
        "lastName": "Hurtado"
    },
}

function showProps(obj, objName) {
    var result = ``;
    for (var i in obj) {
      // obj.hasOwnProperty() se usa para filtrar propiedades de la cadena de prototipos del objeto
      if (obj.hasOwnProperty(i)) {
        result += `${objName}.${i} = ${obj[i]}\n`;
        console.log(result);
      }
    }
    return result;
  }

  showProps(mYcar, "marca")






/* padres.name = "Andres Romaña"
function change(){
    padres.apellido = padres.name;
    delete padres.name;
}
console.log(padres.hasOwnProperty("name")); 
change();
console.log(padres.hasOwnProperty("name")); 


var existe2 = padres.hasOwnProperty("id1");
// console.log(existe2); */

