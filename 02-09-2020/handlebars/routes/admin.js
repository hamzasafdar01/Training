const express= require('express');
const path= require('path');

const rootDir= require('../utils/paths');
const products=[];

const router= express.Router();
// this route is equal to /admin/add-product because /admin added in the main app.use()
router.get('/add-product',(req, res, next)=>{
    res.render('add-product', {pageTitle: "Add Product"});
    //anotherway
    // res.sendFile(path.join(rootDir,'views','add-product.pug'));


    // res.sendFile(path.join(__dirname,'../','views','add-product.html'));

    // res.send("<form action='/admin/add-product' method='POST'> <input type='text' name='title'> <button type='submit'>Add Product</button></form>")
});

router.post('/add-product',(req, res, next)=>{
    products.push({title: req.body.title, price: req.body.price, des: req.body.des});
    // console.log(req.body);
    res.redirect('/');
});



exports.routes= router;
exports.products= products;