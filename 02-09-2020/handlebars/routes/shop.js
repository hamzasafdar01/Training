const express= require('express');
const path= require('path');

const rootDir= require('../utils/paths');
const productData= require('./admin');

const router= express.Router();


router.get('/',(req, res, next)=>{

    res.render('shop', {prods: productData.products, docTitle: 'Shop', hasProduct: productData.products.length>0});
    //another way
    // console.log(productData.products);
    // res.sendFile(path.join(rootDir,'views','shop.html'));
    // res.sendFile(path.join(__dirname,'../','views','shop.html'));

    // console.log("In a root middle ware /");
    // res.send('<h1>The root middleware /</h1>');

});


module.exports= router;