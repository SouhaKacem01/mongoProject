const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    title : {
        type : String,
        required: true
    },
    content : {
        type: String,
        required: true  //,
        //unique: true
    },
    //gender : String,
    status : String
})

const Notedb = mongoose.model('Mynotes', schema);

module.exports = Notedb;