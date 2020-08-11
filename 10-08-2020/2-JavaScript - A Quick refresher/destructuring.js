const person = {
    name: "Max",
    age: 29,
    greet(){
        console.log("Hi my name is ", this.name);
    }
};

const printName = ({name, age}) =>{
    console.log(name);
    console.log(age);
}

printName(person);

//destructruing can also be done outside the function

const {name,age} = person;

console.log(name, age);

//we can also destructure arrays
const hobbies = ['badminton','swimming'];
const [hoby1,hoby2] = hobbies;
console.log(hoby1);