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
    console.log(req.body);
    const user = await User.findOne({ userid: req.body.userid, password: req.body.password });
    if (!user) return res.status(404).json({ message: 'Users Not Found!' });
    else {
        try{
        //비밀번호까지 맞다면 토큰을 생성하기.
        user.generateToken((err, user) => {
            if (err) return res.status(500).send(err);

            res.status(200).json({
                userid: user.userid,
                token: user.token,
            }); //리턴 값이 lofinSuccess true와 userid 임
        });
        
        //return res.status(200).json({ data: user });
    }catch (error) {
        res.status(500).json({
          loginSuccess: false,
          message: error,
        });
      }
    }
});



module.exports = router;