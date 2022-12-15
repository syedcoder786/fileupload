const express = require('express');
const mongoose = require('mongoose');
const app = express();

//Mongodb connection
mongoose
    // .connect('mongodb://localhost/fileupload',{ useNewUrlParser: true ,useCreateIndex:true})
    .connect('mongodb+srv://John123:john123@cluster0-o4usg.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true ,useCreateIndex:true})
    .then( console.log('Connected to Mongoose') )
    .catch(err=> console.log(err))


//routes
app.use('/upload',require('./routes/addimage'));
app.use('/fetch',require('./routes/fetchimage'));

app.listen(5000);