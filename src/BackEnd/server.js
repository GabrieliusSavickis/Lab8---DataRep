const express = require('express')
const app = express()
const port = 4000

const cors = require('cors');

// Allows us to parse the body of the htp request
var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// Allows anyone to access the data
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// Opens a connection to the  test database on our locally running instance of mongodb
const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.zjhhtox.mongodb.net/?retryWrites=true&w=majority');
    // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}
// Initiate a Scheme. Get a reference and define our object
const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    cover: String
});
// Compile Schema into a Model
const bookModel = mongoose.model('My Books', bookSchema);

// Listening for a htp request that returns an argument from url path
app.get('/', (req, res) => {
    res.send('Hello World')
})

//Listening for a post request
app.post('/api/books', (req, res) => {
    console.log(req.body);
    bookModel.create({
        // Creates a request to retreive the details in body
        title: req.body.title,
        cover: req.body.URL,
        author: req.body.author
    })
    res.send('Data Received');
})
// Adds a route point that will return json data
app.get('/api/books', (req, res) => {
    bookModel.find((error, data) => {
        res.json(data);
    })
})

app.get('/api/book/:id', (req, res) => {
    console.log(req.params.id);

    bookModel.findById(req.params.id, (error, data) => {
        res.json(data);
    })
    res.send('Data');
})

// Listening for a put htp request
app.put('/api/book/:id', (req,res)=>{
    console.log('Update: ' +req.params.id)
    // finds book by id in the database and updates it
    bookModel.findByIdAndUpdate(req.params.id, req.body, {new:true}, 
        (error,data)=>{
            res.send(data);
        })
})

// Listening for the URL
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})