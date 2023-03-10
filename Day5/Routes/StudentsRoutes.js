const express = require("express");
let router = express.Router();
let studentsModel = require("../Models/StudentsModel")
const StudentsController = require("../Controllers/StudentsController");

router.post("/create", StudentsController.AddNewStudent );
router.get("/all", StudentsController.getAllStudents);
router.get("/:id",StudentsController.getStudentByID);
router.delete("/:id", StudentsController.DeleteStudentByID);

module.exports = router;