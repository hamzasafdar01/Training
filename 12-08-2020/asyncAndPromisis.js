const fetchData = (callback)=>{
    setTimeout(()=>
    {
        callback('Hi');
    },1500);
};



setTimeout(() =>{
    console.log("Timer is done");
    fetchData(textt=>{
        console.log(textt);
    });
}, 2000);

console.log("hello");