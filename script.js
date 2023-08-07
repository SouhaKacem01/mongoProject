const express = require("express");
const mongoose = require("mongoose");
const Posts = require("./posts")

const app = express();

const uri =
"mongodb+srv://souhakacem:Mina2018@scluster.rxhbzeu.mongodb.net/blog?retryWrites=true&w=majority"

async function connect() {
    try {
      await mongoose.connect(uri);
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error(error);
    }
  }
  

  connect();
  
  app.listen(8000, () => {
    console.log("Server started on port 8000");
  });
//1
//  const post = new Posts({nom: "Jaouadi", prenom:"Maher", likes:3})
//  post.save().then(()=>console.log("Post saved"))

//2
//run()
//async function run () {
//  const post = new Posts({nom: "Jaouadi", prenom:"Maher", likes:4});
//  post.save();
//  console.log("Post saved");

//}

//3
//run()
//async function run () {
//  const post = await Posts.create({nom: "Kacem", prenom:"Souha", likes:50});
//  post.nom = "KACEM";
//  post.save();
//  console.log("Post saved");

//}

