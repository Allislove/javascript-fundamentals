//Abajo de esta linea podemos ver un array, que contiene además datos de tipo objeto.
const names = [
    {
        "Users": {
            "name": "Andres",
            "lastName": "Romaña",
            "age": 23,
            "estatura": 178,
            "tez": "Negra"
        },
        "Familiares": ["Felipa", "Tatiana", "Silvio", "Chene"]
    },
    "Valor metido en array",
    {
        "ComidasFavoritas": [
            "Pescado", "Pollo", "Pizza", "Hamburguesa", "Perro"
        ]
    },
]

// console.log(names[1]);
// console.log(names[2].ComidasFavoritas);

//El metodo forEach nos sirve para recorrer cada uno de los elementos de un array una vez
//Entonces con ello, podemos mostrar todos los elementos del array names
//Tomado de: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
names.forEach((element) => {
    console.log(element);
})