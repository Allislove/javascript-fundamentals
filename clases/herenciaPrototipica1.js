function Animal(nombre, genero) {
  // Atributos
  this.nombre = nombre;
  this.genero = genero;
}

// Metodos
Animal.prototype.sonar = function () {
  console.log("Hago sonidos porque estoy vivo");
};

Animal.prototype.saludar = function () {
  return console.log(`Hola mi nombre es: ${this.nombre}`);
};

// Herencia prototipica
function Perro(nombre, genero, tamano) {
  this.super = Animal;
  this.super(nombre, genero);
  this.tamano = tamano;
}

// Perro esta heredando de animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;
Perro.prototype.sonar = function () {
  console.log("Soy un perro y mi sonido es Wuau Wuau");
};

Perro.prototype.ladrar = function () {
  console.log("Estoy ladrando: Wuau Wuau");
};


const perro = new Perro("Zeús", "Macho", "Grande");
console.log(perro);
perro.saludar();
perro.sonar();
perro.ladrar();

const snoopy = new Animal("Snoopy", "Macho"),
  lolaBunny = new Animal("Lola Bunny", "Hembra");

console.log(snoopy);
//console.log(lolaBunny);
snoopy.saludar();
lolaBunny.saludar();
snoopy.sonar();
lolaBunny.sonar();
