const hobbies = ['badminton','swimming'];

const copiedArray = [hobbies];

const newarray = hobbies.slice();

console.log(copiedArray);

// hobbies.push('reading');
// console.log(copiedArray);
console.log(newarray);


//spread operator ... it takes all the elements of array of object writen after that and put in the brackrt
//or whateven that is before it.it is bascially used to copy 

const cparray = [...hobbies];
console.log(cparray);
hobbies.push('reading');
console.log("again printed" + cparray);

//rest operator it is used to give multiple arguments to a function

const toArray = (...args) => {
    return args
};

console.log(toArray(1,2,3,4,5,6,7));