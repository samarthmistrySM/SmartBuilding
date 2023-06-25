const mongoose = require('mongoose');

const SecuritySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    camera:{
        type:String,
        required:true
    },
    mode:{
        type:String,
        required:true
    },
    alarm:{
        type:String,
        required:true
    }
})

const Security = mongoose.model('Security',SecuritySchema);
module.exports=Security;