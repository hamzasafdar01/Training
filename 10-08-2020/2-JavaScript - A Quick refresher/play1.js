var name ="Max";
var age =29;
var hashobbies =true;

function summarizeUser(userName, userAge, userHasHobby) {
    return ('Name is ' +
     userName + 
     ', age is ' + 
     userAge + 
     ', and user has hobbies '+ 
     userHasHobby);
}

console.log(summarizeUser(name,age,hashobbies));