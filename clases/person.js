class Person {
    constructor(name, lastName) {
        this.$name = name;
        this.$lastName = lastName;
    }

    get name(){
        return this.$name;
    }

    set name(newName){
        this.$name = newName;
    }


    get lastName() {
        return this.$lastName
    }

    set lastName(newLastName) {
        this.$lastName = newLastName;
    }
}


let person = new Person("Andrés", "Romaña");
console.log(person.name);
console.log(person.lastName)