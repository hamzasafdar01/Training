const http= require('http');

const express= require('express');

const app= express();

app.use('/addUser', (req, res, next) =>{
    console.log("In an another middleware!");
    res.send("<h1>Hello from User Page</h1>")
});


app.use('/', (req, res, next) =>{
    console.log("In an another middleware!");
    res.send("<h1>Hello from express</h1>")
});


app.listen(3000) // same as below line via express

// const server = http.createServer(app);

// server.listen(3000);