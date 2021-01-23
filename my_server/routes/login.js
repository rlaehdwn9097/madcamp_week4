var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;

    

});

module.exports = router;