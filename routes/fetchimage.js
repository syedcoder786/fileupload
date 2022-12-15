const express = require('express');
const router = express.Router();
// const path=require('path');
const Image = require('../models/Image');


//fetch images
router.get('/',(req,res)=>{
    Image.find()
        .sort({ date:-1 })
        .then(images => {
            return res.json( images )
        })
})

module.exports = router;