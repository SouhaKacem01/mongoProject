const express = require('express');
const mongoose = require('mongoose');
const app= express();
const ejs = require('ejs');

app.set('view engine','ejs');

mongoose.connect('mongodb+srv://souhakacem:Mina2018@scluster.rxhbzeu.mongodb.net/moviesDB?retryWrites=true&w=majority');

const moviesSchema={
    title : String,
    genre : String,
    year : String
}

const Movie =mongoose.model('Movie',moviesSchema);

app.get('/',(req,res)=>{
    Movie.find({}).then (function( movies){
        res.render ('index',{
            moviesList : movies
        })
    })
    
    /*let name = 'Souha';

    res.render('index', {
        userName : name
    })*/
})

app.listen(4000, function(){
    console.log('server is running');
})