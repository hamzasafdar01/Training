const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const controller= require('../controllers/products');

const router = express.Router();

router.get('/', controller.getProduct);

module.exports = router;
