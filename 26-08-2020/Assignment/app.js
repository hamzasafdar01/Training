const express= require('express');
const path= require('path');

const parser= require('body-parser');

const admin= require('./routes/admin');
const shop= require('./routes/shop');



app= express();
app.use(parser.urlencoded());
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',admin);
app.use(shop);



app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})

app.listen(3000);
