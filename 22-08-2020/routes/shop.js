const express= require('express');

const router= express.Router();


router.get('/',(req, res, next)=>{
    console.log("In a root middle ware /");
    res.send('<h1>The root middleware /</h1>')
});


module.exports= router;