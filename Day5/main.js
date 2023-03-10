//#region Config
const express = require("express");
const app = express();

const PORT  = process.env.PORT || 7005;
const path = require("path");
const bodyParser = require("body-parser");


const StudentsRoutes = require("./Routes/StudentsRoutes");
const CoursesRoutes = require("./Routes/CoursesRoutes");
//#endregion

//#region MiddleWares
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());//Recive Data From Client [json]
//#endregion

//#region Students
app.use("/api/students", StudentsRoutes);
//#endregion

//#region End-Points [Courses]
app.use("/api/courses", CoursesRoutes);
//#endregion



app.listen(PORT,()=>{console.log("http://localhost:"+PORT)});