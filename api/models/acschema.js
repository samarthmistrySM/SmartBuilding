const mongoose = require('mongoose');

const AcSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
        },
    location:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    temperature:{
        type: Number,
        required: true
    },
    mode:{
        type: String,
        required: true
    },
    speed:{
        type:String,
        required: true
    }
})

const Ac = mongoose.model('Ac',AcSchema);
module.exports=Ac;