const path = require('path');
const express = require('express');
const router= express.Router();
const rootDir = require('../util/path');
const contact = require('../controllers/contact');

router.get('/contact',contact.contactUs);

router.post('/contact',contact.contactPost);

module.exports=router;