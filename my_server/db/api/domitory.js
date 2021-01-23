const express = require("express");
const router = express.Router();

const Student = require("../models/userDomitorySchema");

//정보 다 가져오기
router.get('/', function(req,res){
    Student.find(function(err, students){
        if(err) return res.status(500).send({error: 'database failure'});
        res.json(students);
    })

    //res.send("Domitory Happy");
});

//유저 기숙사 정보 생성
router.post('/', function(req,res){
    const testStudent = new Student({
        name : req.body.name,
        studentid : req.body.studentid,
        siteid : req.body.siteid,
        department : req.body.department,
        degree : req.body.degree,
        email : req.body.email,
        phone : req.body.phone,
        current_residence : req.body.current_residence,
    });

    testStudent
        .save()
        .then(result => {
            console.log(result);
            res.json(testStudent);
        })
        .catch(err => {
            console.log(err);
        });
});


module.exports = router;