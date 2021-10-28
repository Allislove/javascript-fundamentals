

// Funcion Constructora prototipo
function Persona(nombre, sexo) {
    // Atributos
    this.nombre = nombre;
    this.sexo = sexo;

}


// Metodos,los hacemos a fuera para que cada instancia que creemos de Person, tenga sus metodos propios.
// Cada instancia de Person sera un objeto.

// Nombre de la funcion / prototype, y / nombre para el metodo
Persona.prototype.Gender = function() {
    console.log(`Hello mi genero es: ${this.sexo}`)
}


Persona.prototype.Greeting = function() {
    var nombre = this.nombre;
    console.log('Hola como estas, mucho gusto mi nombre es: ', nombre)
}

// Creo un objeto basado en el constructor/prototipo persona
const Alumno1 = new Persona("Andrés", "Masculino");
console.log(Alumno1);
// Mando a llamar al metodo que deseo para imprimirlo, o hacer lo que el haga!
Alumno1.Gender();
Alumno1.Greeting();


const Alumno2 = new Persona("Maria", "femenino");
Alumno2.Greeting();





