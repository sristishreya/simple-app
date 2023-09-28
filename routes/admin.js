// const express = require('express');
// const router= express.Router();

// router.get('/add-product',(req,res,next)=>{
//     res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Submit</button></form>');
// });

// router.post('/add-product',(req,res,next)=>{
//     console.log(req.body);
//     res.redirect('/shop');
// });
// module.exports= router;
const path = require('path');

const express= require('express');
const router = express.Router();

const rootDir = require('../util/path');

router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'));

});

router.post('/add-product',(req,res,next)=>{
    console.log('hi');
    res.redirect('/shop');
});

module.exports=router;