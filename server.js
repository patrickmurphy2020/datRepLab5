const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.send('Welcome to Data Representation & Querying')
})

//gets the users anem and returns it
app.get('/hello/:name', (req, res)=> {
    console.log(req.params.name);
    res.send('Hello ' + req.params.name);
})

//displays the movies api when the user goes to the movies url
app.get('/api/movies', (req, res)=> {
    const myMovies = [
        {
        "Title": "Avengers: Infinity War",
        "Year": "2018",
        "imdbID": "tt4154756",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
        "Title": "Captain America: Civil War",
        "Year": "2016",
        "imdbID": "tt3498820",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
    ];
        
    res.json({movies:myMovies});
})

//gets data from index.html
app.get('/test', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
})

//reads in the names enetered on the page and returns them
app.get('/name', (req, res)=> {
    res.send('Hello ' + req.query.fname + ' ' + req.query.lname)
})

//reads in the name after its been through the post method
app.post('/name', (req,res)=>{
    res.send('Hello ' + req.body.fname + ' ' + req.body.lname)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
