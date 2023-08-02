const express= require ("express");
const app = express();
const mongoose = require("mongoose");
const allowMethods = require('allow-methods');
const bodyParser =require("body-parser")

app.use(bodyParser.urlencoded({extended: true})) 
app.use(allowMethods(['get', 'head', 'post']));

const uri =
"mongodb+srv://souhakacem:Mina2018@scluster.rxhbzeu.mongodb.net/notesDB"

// , {useNewUrlParser: true}, {useUnifiedTopology: true}
//  "mongodb+srv://<username>:<password>@<cluster-name>.frbqx.mongodb.net/<database-name>?retryWrites=true&w=majority";

async function connect() {
  try {
    await mongoose.connect(uri); 
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

connect();


/*
app.get('/',(req,res) =>{
    res.send('Express is running');
})


app.get('/api/courses',(req,res) =>{
    res.send([1, 2, 3]);
})

app.get('/api/posts/:year/:month',(req,res) =>{
    res.send(req.params.year);
    
})
*/

const notesSchema={
    title : String,
    content : String
}

const Note = mongoose.model("Note", notesSchema);

app.get( "/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})
    


app.post("/", async(req,res) =>{
    let newNote = new Note ({
        title : req.body.title,
        content : req.body.content
    })
    newNote.save();
    console.log('posted');
    res.redirect('/');
})

const port = process.env.PORT || 3000;

app.listen(port,()=>console.log(`listening on the port ${port}...`));

