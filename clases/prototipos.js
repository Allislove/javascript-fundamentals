// Funcion constructora / prototipo #Version 1
/* function Animal(nombre, genero) {
    // Atributos
    this.nombre = nombre;
    this.genero = genero;

    // Metodos
    this.sonar = function(){
        console.log('Hago sonidos porque estoy vivo')
    }

    this.saludar = function() {
        console.log('Hola me llamo', this.nombre)
    }
} */

// Lo ideal es que nuestras funciones constructoras solo tengan
// los atributos, y los metodos los saquemos de ella!
/* const snoopy = new Animal("Snoopy", "Macho"),
 lolaBunny = new Animal("Lola Bunny", "Hembra");

 console.log(snoopy);
 console.log(lolaBunny)
 snoopy.saludar();
 lolaBunny.saludar(); */


// Version 2 - Mejor
// Esta version es la idonea para utilizar, debido a que
// no estamos mandando los metodos para cada nuevo objeto que se cre basado en 
// el constructor(prototipo Animal), lo que hacemos es mandar directamente los metodos
// Directamente al prototipo de cada nueva instancia que se haga al momento
// de que creamos un nuevo objeto, basado en dicha instancia(ANimal)
function Animal(nombre, genero) {
  // Atributos
  this.nombre = nombre;
  this.genero = genero;
}

// Metodos
Animal.prototype.sonar = function() {
    console.log('Hago sonidos porque estoy vivo')
}

Animal.prototype.saludar = function() {
    return console.log(`Hola mi nombre es: ${this.nombre}`)
}


const snoopy = new Animal("Snoopy", "Macho"),
  lolaBunny = new Animal("Lola Bunny", "Hembra");

console.log(snoopy);
console.log(lolaBunny);
snoopy.saludar();
lolaBunny.saludar();
snoopy.sonar();
lolaBunny.sonar();