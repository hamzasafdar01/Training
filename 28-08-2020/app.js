const path= require('path');

const express = require('express');
const bodyParser=  require('body-parser');

const productData= require('./routes/admin');
const shop= require('./routes/shop');

const app= express();
app.set('view engine','pug');
app.set('views','views');


app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin', productData.routes);
app.use(shop);

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
    // res.status(404).send('<h1>Page Not Found</h1>')
});

app.listen(3000);