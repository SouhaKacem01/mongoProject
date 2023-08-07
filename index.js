const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require('path');
const ejs = require('ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

const uri = "mongodb+srv://souhakacem:Mina2018@scluster.rxhbzeu.mongodb.net/notesDB"
//  "mongodb+srv://<username>:<password>@<cluster-name>.frbqx.mongodb.net/<database-name>?retryWrites=true&w=majority";

async function connect() {
    try {
        await mongoose.connect(uri, { useNewUrlParser: true }, { useUnifiedTopology: true });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error);
    }
}

connect();
/*
app.get('/',(req,res) =>{
    res.send('Hello World');
})

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);
})

app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.params.year);

})
*/
const notesSchema = {
    title: String,
    content: String
}

const Note = mongoose.model("myNote", notesSchema);

app.get('/',(req,res)=>{
    Note.find({}).then (function( notes){
        res.render ('index',{
            NotesList : notes
        })
    })
    
    /*let name = 'Souha';

    res.render('index', {
        userName : name
    })*/
})


/*
app.get("/", function (req, res) {
    //res.sendFile(__dirname + "/index.html");
    
    Note.find({}).then (function(notes) {
        res.render('index', {
        NoteList : notes 
    });
})

})

*/
app.post("/", function (req, res) {
    let newNote = new Note({
        title: req.body.title,
        content: req.body.content
    });
    newNote.save();
    res.redirect('/');
})


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on the port ${port}...`));