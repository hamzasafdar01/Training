const path= require('path');

const express = require('express');
const bodyParser=  require('body-parser');
const expresshbs= require('express-handlebars');


const productData= require('./routes/admin');
const shop= require('./routes/shop');


const app= express();

//for handlebars first register this template engine
app.engine('hbs', expresshbs());
app.set('view engine', 'hbs');


//for pug
// app.set('view engine','pug');
app.set('views','views');


app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin', productData.routes);
app.use(shop);

app.use((req, res, next)=>{
    res.status(404).render('404',{pageTitle: 'Page Not Found'});
    // res.status(404).sendFile(path.join(__dirname,'views','404.html'));
    // res.status(404).send('<h1>Page Not Found</h1>')
});

app.listen(3000);