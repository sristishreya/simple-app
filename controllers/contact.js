const path = require('path');
const rootDir = require('../util/path');
exports.contactUs=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact.html'));
 }

 exports.contactPost=(req,res,next)=>{
    res.redirect('/success');
}