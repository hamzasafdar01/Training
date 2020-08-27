const express= require('express');
const path= require('path');

const rootDir= require('../utils/paths');

const router= express.Router();


router.get('/',(req, res, next)=>{

    //another way
    res.sendFile(path.join(rootDir,'views','shop.html'));
    // res.sendFile(path.join(__dirname,'../','views','shop.html'));

    // console.log("In a root middle ware /");
    // res.send('<h1>The root middleware /</h1>');

});


module.exports= router;