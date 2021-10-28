// Ejemplo de clases en JS, tambien se pueden hacer de la manera que lo explicamos en prototipos


class Animal {
    constructor(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
    }

    saludo() {
        return console.log(`Hola como estas, soy: ${this.nombre}`);

    }

    sonar() {
        return console.log(`Soy un ser vivo y hago sonidoos`);
    }

}

const gato = new Animal("Nea", 'Hembra');
const gato1 = new Animal("Zeús", 'Macho');

console.log(gato);
console.log(gato1);
gato.saludo();
gato.sonar();

// Herencia... De esta forma hacemos la herencia
// Ejemplo vamos a crear una nueva clase Perro que extienda
// DE la clase Animal, y le vamos a agregar un nuevo parametro, tamano


class Perro extends Animal {
    constructor(nombre, genero, tamano) {
        // Llamamos el metodo constructor de la clase padre, gracias a super()
        super(nombre, genero);
        this.tamano = tamano;  // Se define la nueva propiedad para la clase perro, se confirma!      
        this.raza = null; // Ejemplo para los getters y setters 
    }

    saludo() {
        return console.log(`Hola este metodo pertenece
        a la clase Perro que extiende de Animal!`);
    }

    ladrar() {
        return console.log(`Hola mi nombre es: ${this.nombre} y estou ladrando!`)
    }

    static ladrando() {
        return console.log(`Hola estoy ladrando desde un METODO ESTATICO`)

    }

    //getter
    get getRaza() {
        return this.raza;
    }
    //setter
    // y el que permite que sea modificable
    set setRaza(raza) {
        this.raza = raza;
    }

}

// Creamos un instancia de la clase Perro(este sera un objeto ahora!)
// La ventaja de la herencia tambien es, que podemos sobreescribir metodos para cada clase que extienda de alguna!
// Y estos no van a afectar en los anteriores.
// En la consola podemos verificar, las herencias, en este caso perro hereda de Animal
// Pero ANimal, hereda de object(js)

const newPerro = new Perro("Labrador", "hembra", "pequeña");
console.log(newPerro);
newPerro.saludo();



// Métodos  estáticos

// Un método estatico se pueden ejecutar 
//sin necesidad de instanciar(crear un nuevo objeto a partir de la clase) la clase

Perro.ladrando();

// getters y setters

/* 
Los setters y getters son métodos especiales que nos permiten 
establecer y obtener los valores de atributos de nuestra clase

*/
// y se trata como si fuera un atributo no un metodo sin los ()
newPerro.getRaza;
console.log(newPerro.getRaza)// Aqui raza sera null, porque no la hemos definido
newPerro.setRaza = "Grán Danés"; // Aqui ya raza tiene un nombre
console.log(newPerro.getRaza) 