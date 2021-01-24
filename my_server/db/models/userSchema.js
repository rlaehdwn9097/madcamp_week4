const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');

const UserSchema = mongoose.Schema({
    userid : {type : String, Default : null},
    password : {type : String, Default : null},
    token: { type: String },
    tokenExp: { type: Number },
    date : { type: Date, default: Date.now },
});

UserSchema.methods.generateToken = function (cb) {
    var user = this;
    console.log(user.userid);
    console.log("Start to generate Token");
    //jsonwebtoken을 이용해서 토큰을 생성하기
    var token = jwt.sign({ userid: user.userid }, "secretToken");
    console.log(token);

    user.token = token;
    console.log("Start to save token");
    user.save(function (err, user) {
        if (err) return cb(err);
        cb(null, user);
    });
  };

module.exports = mongoose.model("Users", UserSchema);
