// Importing all the modules
const express = require('express');
const bodyParser = require('bodyParser');
// const bcrypt = require('bcrypt');
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongooes')
var url = "mongodb://localhost:27017/";
var app = express();
app.use(bodyParser, urlencoded({ // Used to parse the URl for POST HTTP methods
    extended:true
}))

// Creatting a Database for user registrations using MongoDB (I don't know mysql)
MongoClient.connect(url,function(err,db){
    if(err){
        throw err;
    }
    else{
        var dbo = db.db("PVL");
        dbo.createCollection("User_Registrations", function(err,res){
            if(err){
                throw err;
            }
            else{
                console.log("Database Created")
            }
        })
    }
}).listen(8080);
// console.log("Server is up and running or port number 8080");

// API for user registration

app.use(bodyParser().json());
// const users = [];
app.post('/register', function(req,res){
    const user_regis = {username:req.body.username, password:req.body.password};
    dbo.collection("User_Registrations").insertOne(user_regis, function(err,res){ // Inserting the record into the database
        if(err){
            throw err;
        }
        else{
            console.log("User registration queried to the database");
        }
    })
    res.writeHead(200,{'Content-Type':'text/html'});
}).listen(8080);
// console.log("Server is up and running or port number 8080");

// API for Login 
const app = express();
app.use(bodyParser.json());
app.post('/login', (req, res) => {

    const User = mongoose.model("user", userSchema) // Establishing a connection and accessing data in the form of objects using 'userSchema'

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) 
    {
         return res.status(404).json({ message: "User not found" });
         res.writeHead(404,{'Content-Type':'text/html'});
    }
      
}).listen(8080);
// console.log("Server is up and running or port number 8080");

// Checking the post of the user and returning it
const app = express();
app.use(express.json());
app.get('/posts', function(req,res){
    const User = mongoose("User", userSchema);
    const {post, email} = req.body;

    const user = await User.findOne({post});
    if(!user){
        return res.send(404,json({message: "Post by the user not found!!"}));
        res.writeHead(404, {'Content-Type':'text/html'});
    }
}).listen(8080);

