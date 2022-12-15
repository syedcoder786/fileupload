const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Image Schema
const ImageSchema = new Schema({
    image:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = Image = mongoose.model('image', ImageSchema);
