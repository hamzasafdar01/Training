const path= require('path');

const express = require('express');
const bodyParser=  require('body-parser');

const admin= require('./routes/admin');
const shop= require('./routes/shop');

const app= express();


app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',admin);
app.use(shop);

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
    // res.status(404).send('<h1>Page Not Found</h1>')
});

app.listen(3000);