const mongoose = require ("mongoose");

const postsSchema = new mongoose.Schema({
    nom : String,
    prenom : String,
    likes : Number,
    dateCcreation : Date,
    dateMaj : Date,
    reponseA : mongoose.SchemaTypes.ObjectId,
    sujet : [String],
    flags :{
        flagA : String,
        flagB : String
    }

})

module.exports = mongoose.model("posts", postsSchema)