var express = require('express');
var router = express.Router();
var db = require('./db');

const MongoClient = db.MongoClient;
const dbConnectionUrl  = db.dbConnectionUrl;

/* RestApi Test. */
router.get('/restaurants', function(req, res, next) {

    MongoClient.connect(dbConnectionUrl, function(err, dbInstance) {
        if (err) {
            console.log(`[MongoDB connection] ERROR: ${err}`);
            failureCallback(err); // this should be "caught" by the calling function
        } else {
            const dbObject = dbInstance.db("sample_restaurants");
            const dbCollection = dbObject.collection("restaurants");
            //sql 문 실행
            
            console.log("[MongoDB connection] SUCCESS");
            //successCallback(dbCollection);
        }
    });

    res.json(dbCollection);
  });
  
  router.delete('/', function(req, res, next){
      res.send("Hello delete");
  })
  
  module.exports = router;