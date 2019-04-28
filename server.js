var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
const mongodb = require('mongodb');

const mongoURI = "mongodb://khoa:utdallas20@ds051334.mlab.com:51334/movie-app"

mongodb.MongoClient.connect(mongoURI, function(err, client){
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("Connected successfully.");
    }
});

let db = mongo.connect(, function(err, response){
    
});