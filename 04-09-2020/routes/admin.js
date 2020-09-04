const path = require('path');

const express = require('express');

const controller= require('../controllers/products');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', controller.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', controller.postAddProduct);

module.exports= router;
