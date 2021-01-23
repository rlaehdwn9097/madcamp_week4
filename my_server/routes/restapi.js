var express = require('express');
var router = express.Router();

const users = [
  {
    id:"asdajsd",
    name:"Google",
    email:"Google@gmail.com"
  },
  {
    id:"asdajsd123123",
    name:"Google123123",
    email:"Google123123@gmail.com"
  }
]

/* RestApi Test. */
router.get('/', function(req, res, next) {
  res.json(users);
});

router.delete('/', function(req, res, next){
    res.send("Hello delete");
});

module.exports = router;