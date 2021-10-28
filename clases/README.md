# Clases y Prototipos


- Podemos definir funciones constructorias y tambien clases, que viene siendo o suigiendo el mismo patron, la diferencia en las clases es, que no reciben parametros, los parametros los recibe su constructor(){...} y que sus metodos son declarados directamente, luego de la definicion del constructor, afuera de ella!.
    * Es decir un metodo instanciado como una funcion sin indicarle que es una funcion saludo() { ... }

    * Las clases nos facilitan la escritura, por eso se le suele decir azucar sintactica porque sigue siendo un prototype

- Métodos estáticos
    * Los metodos estaticos dan o habilitan la capacidad de ejecutar un metodo de una clase, sin la necesidad de instanciar la clase, es decir, sin necesidad de crear un nuevo objeto a partir de dicha clase, simplemente llamano la clase con un punto(.) y el metodo. Ejemplo tengo una clase Perro y dentro de esa clase tengo un metodo estatico, static saludar(){...}
    solo la llamaria asi, Perro.saludar();

- getters y setters
