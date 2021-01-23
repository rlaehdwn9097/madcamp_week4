const express = require("express");
const router = express.Router();
const User = require('../models/userSchema');
const jwt = require('jsonwebtoken');

//유저 생성
router.post('/', function(req,res){

    const testUser = new User({
        userid : req.body.userid,
        password : req.body.password,
    });

    testUser
        .save()
        .then(result => {
            console.log(result);
            res.json(testUser);
        })
        .catch(err => {
            console.log(err);
        });
});

router.post('/login', async (req, res) => {
    let user = await User.findOne({ userid: req.body.userid, password: req.body.password });
    if (!user) return res.status(404).json({ message: 'Users Not Found!' });
    else {

        const id = user.userid;
        const token = jwt.sign({id}, "jwtSecret",{
            expiresIn:300,
        })
        
        return res.status(200).json({ data: user });
    }
});



module.exports = router;