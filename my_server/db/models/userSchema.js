const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    userid : {type : String, Default : null},
    password : {type : String, Default : null},
    date : { type: Date, default: Date.now },
});

module.exports = mongoose.model("Users", UserSchema);
