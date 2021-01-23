// db.js

var express = require('express');
var router = express.Router();

// mongodb driver
const MongoClient = require("mongodb").MongoClient;

const dbConnectionUrl = "mongodb+srv://admin:admin@cluster0.wcgex.mongodb.net/madcamp_week4?retryWrites=true&w=majority";

function initialize(){

    MongoClient.connect(dbConnectionUrl, function(err, dbInstance) {
        if (err) {
            console.log(`[MongoDB connection] ERROR: ${err}`);
            failureCallback(err); // this should be "caught" by the calling function
        } else {
            //const dbObject = dbInstance.db("sample_restaurants");
            //const dbCollection = dbObject.collection("restaurants");
            console.log("[MongoDB connection] SUCCESS");
            //successCallback(dbCollection);
        }
    });
}

module.exports = {
    initialize
};