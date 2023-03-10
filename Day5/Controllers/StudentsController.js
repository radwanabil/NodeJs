
let StudentsModel = require("../Models/StudentsModel")
let AddNewStudent = async (req, res) => {
    var newStudentsFromBody = req.body;
    var newStudentsModel = new StudentsModel(newStudentsFromBody);
    await newStudentsModel.save();
    await res.json(newStudentsModel)

}
let DeleteStudentByID = async (req, res) => {
    await StudentsModel.findByIdAndDelete(req.params.id);
    await res.json("Deleted successfully");
}
let getAllStudents = async (req,res) =>{
    let studentsJson =  await StudentsModel.find();
    res.json(studentsJson);
}
let getStudentByID = async (req, res) => {
    let studentJson = await StudentsModel.findById(req.params.id);
    res.json(studentJson);
}
module.exports = {
    AddNewStudent,
    DeleteStudentByID,
    getAllStudents,
    getStudentByID
    
  
    }