function createNewPerson(name) {
    var obj = {};
    obj.name = name;
    obj.greeting = function() {
      console.log('Hi! I\'m ' + this.name + '.');
    };
    return obj;
}


var salva = createNewPerson('Andres Romaña');
salva.name;
salva.greeting();