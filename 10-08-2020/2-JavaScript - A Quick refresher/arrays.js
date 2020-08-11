const ary= ["hello","world",1,true]; //you could have any type of type in a array
console.log(ary);

for (let i =0;i<ary.length;i++) {
    console.log(ary[i]);
};

const hobbies = ['badminton','swimming'];
console.log(hobbies);

for (let hobby of hobbies) {
    console.log(hobby);
}

//map function
console.log(hobbies.map(hobby=>'Hobby '+ hobby));