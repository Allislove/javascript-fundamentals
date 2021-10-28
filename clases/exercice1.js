// Aplicando todos los conceptos en un primer ejercicio!


class Animal {
    // Generamos el constructor para poder crear atributos
    constructor(nombre, color, especie) {
        this.nombre = nombre;
        this.color = color;
        this.especie = especie;
    }

    // Creo un metodo de entrada para saludar;
    saludo() {
        return console.log(`Hola soy de la especie: ${this.especie}`);
    }

    // Ahora hagamos un metodo estatico!

    static kindOfClass() {
        return console.log("STATIC: Esta clase pertenece a todo el tipo de animales del mundo!");
    }

}


const gato = new Animal("Sky", "Blanco", "Mamífero1");
console.log(gato)
gato.saludo();

// Llamamos el metodo estatico para probar su funcionamiento,
// vemos que no depende de que creemos un nuevo objeto a partir de Animal para que funcione!

Animal.kindOfClass();


// Ahora vamos a aplicar la herencia, vamos a crear una nueva clase Perro
// Que extienda de Animal y le vamos a crear una nueva propiedad tamano!

class Perro extends Animal {
    constructor(nombre, color, especie, tamano){
        // Llamamos su metodo super para que herede todo del padre(Animal)
        super(nombre, color, especie);
        // Le creamos una nueva propiedad
        this.tamano = tamano;
        // probemso ahora los get y set
        this.edad = null;
    }

    // Probamos que podemos crear su propio metodo de saludo() 
    // y este no va a converger con el de la clase padre!

    saludo() {
        return console.log(`Hola soy de la especie: ${this.especie}`);
    }

    get getEdad() {
        return this.edad;
    }

    set setEdad(edad) {
        this.edad = edad;
        return this.edad;
    }

}

const perro = new Perro("Poseidon", "Macho", "Mamifero2", "Grande");
console.log(perro)
perro.saludo();


// Probamos ahora el get y setter
console.log(perro.getEdad) // Aqui marcara 0 porque no esta definida con el setter
perro.setEdad = 1 // Aqui ya le declaramos una edad!
perro.getEdad;
console.log(perro.getEdad)








