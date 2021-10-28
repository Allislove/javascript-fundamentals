

const users = [
    {
        "name": "Andres",
        "active": true,
        "age": 23
    },
    {
        "name": "Felipe",
        "active": false,
        "age": 23
    }
]


/*  
* Sintax del for in: var (key - Que sera el identificador)
* in (objeto sobre el que va a iterar) :
** Ejemplo : for (const id in users )
* Con el for in, podemos recorrer objetos y sus propiedades, donde key es la llave(valor) de un dato
* y users, viene siendo todo el objeto, que estamos iterando
*
*/

for (const key in users) {
    //console.log(key, users[key].age);
    //console.log(users);
    console.log(key);
}