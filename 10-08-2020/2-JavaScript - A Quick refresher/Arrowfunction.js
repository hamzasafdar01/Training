const name ="Max";
let age =29;
const hashobbies =true;

age =30;
//two ways of this
//1
const summarizeUser = function (userName,userAge,userHasHobby){
    return ('Name is ' +
     userName + 
     ', age is ' + 
     userAge + 
     ', and user has hobbies '+ 
     userHasHobby);    
}

// console.log(summarizeUser(name,age,hashobbies));

//2nd way of arrow function
 const summarize = (userName,userAge,userHasHobby)=>{
    return ('Name is ' +
     userName + 
     ', age is ' + 
     userAge + 
     ', and user has hobbies '+ 
     userHasHobby); 
 };

 //arrow function one way
//  const percentage = (totalMarks,obtainedMarks)=>{
//      return((obtainedMarks *100)/totalMarks);
//  }

//if you have only one line and that is return only
const percentage = (totalMarks, obtainedMarks) =>(obtainedMarks*100)/totalMarks;

//if in arror function there is no argument then we have to specify with () this

const addRandom = () => 1+2;


 console.log(percentage(1050,910));
 console.log(addRandom());
//  console.log(summarize(name,age,hashobbies));