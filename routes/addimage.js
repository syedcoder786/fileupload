const express = require('express');
const router = express.Router();
const multer = require('multer');
const path=require('path');
const Image = require('../models/Image');

// set storage engine
const storage=multer.diskStorage({
    destination:'./client/public/uploads/',
    filename:(req,file,cb)=>{
        cb(null,file.originalname+'-'+Date.now()+path.extname(file.originalname));
    }
});


//init upload
const upload=multer({
    storage:storage,
    limits:{fileSize:1000000000000000000000},
    fileFilter:(req,file,cb)=>{
        checkFileType(file,cb);
    }
}).single('myImage');

//Check file type
function checkFileType(file,cb){
    //allowed ext
    const filetypes=/jpeg|jpg|png|gif/;
    //check extname
    const extname=filetypes.test(path.extname(file.originalname).toLowerCase());
    //check mime
    const mimetype=filetypes.test(file.mimetype);
    if(extname && mimetype){
        return cb(null,true);
    }
    else{
        cb('Images only');
    }
}

//post image
router.post('/',(req,res)=>{
    upload(req,res,(err)=>{
        if(err) {
            return res.status(400).json({ msg:err })
        }
        else if(!req.file) {
            console.log('no file was there')
        }
        else {const newImage = new Image({ image:req.file.filename });
        //Save Image in database
        newImage.save()
            .then(image =>{
                return res.json({ image })
            })
        }
    })
})

module.exports = router;