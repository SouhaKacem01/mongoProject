const express  = require("express");
const mongoose = require("mongoose");
const uri = "mongodb+srv://souhakacem:Mina2018@scluster.rxhbzeu.mongodb.net/?retryWrites=true&w=majority";
const app = express();

async function connect() {
  try {
    await mongoose.connect(uri);
    const db = mongoose.db('sample_mflix');
    console.log("connected to mongodb");
  }catch(error){
    console.error(error);
  }
}
connect();

app.listen(8000,() =>{
    console.log("server started on 8000");
});