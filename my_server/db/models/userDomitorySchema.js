const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
    name : {type : String, Default : null},
    studentid : {type : String, Default : null},
    siteid : {type : String, Default : null},
    department : {type : String, Default : null},
    degree : {type : String, Default : null},
    email : {type : String, Default : null},
    phone : {type : String, Default : null},
    current_residence : {type : String, Default : null},
    date : { type: Date, default: Date.now },
});

module.exports = mongoose.model("Students", StudentSchema);
