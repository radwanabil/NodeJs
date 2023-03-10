const mongoose = require("mongoose");
var DB_url = "mongodb://127.0.0.1:27017/School";
mongoose.connect(DB_url, { useNewUrlParser:true });
let CourseSchema = new mongoose.Schema({
    courseName: { type: String, required: true},
    hours:{type:Number, required: true},
})
module.exports = mongoose.model("Courses", CourseSchema);