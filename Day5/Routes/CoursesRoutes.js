const express = require("express");
let router = express.Router();
const CoursesController = require("../Controllers/CoursesController");

router.get("/all",CoursesController.GetAllCourses);
router.post("/create",CoursesController.AddNewCourse);
router.delete("/:id",CoursesController.DeleteCourseByID);
module.exports = router;