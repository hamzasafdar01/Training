const name ="Max";
let age =29;
const hashobbies =true;

age =30;
        
function summarizeUser(userName, userAge, userHasHobby) {
    return ('Name is ' +
     userName + 
     ', age is ' + 
     userAge + 
     ', and user has hobbies '+ 
     userHasHobby);
}

console.log(summarizeUser(name,age,hashobbies));