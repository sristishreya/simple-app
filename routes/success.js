const path = require('path');
const express = require('express');
const router= express.Router();
const rootDir = require('../util/path');
const successController = require('../controllers/success');



router.get('/success',successController.getSuccess);

module.exports=router;