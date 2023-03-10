const mongoose = require("mongoose");
var DB_url = "mongodb://127.0.0.1:27017/School";
mongoose.connect(DB_url, { useNewUrlParser:true });
let studentSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3 },
    age:{type:Number, minimum:15,maximum:50},
    dept:{type:String, enum:["SD","UI","SWA"], minLength:2, maxLength:3}
})
module.exports = mongoose.model("Students", studentSchema);