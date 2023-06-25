const mongoose = require('mongoose');

const lightSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    brightness:{
        type:Number,
        required:true
    },
    mode:{
        type:String,
        required:true
    }
})

const Light = mongoose.model('Light',lightSchema);
module.exports=Light;