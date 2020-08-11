const person = {
    name: "Max",
    age: 29,
    greet (){ //fucntion in object
        console.log("Hi i am " + this.name); //this keyword to refer name of this scope
    }

};
let name = "hamza";
person.greet();
