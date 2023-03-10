const express = require("express");
let userController = require("../Controllers/UsersController");
let router = express.Router();

//   /api/users
//Add New User
router.post("/",userController.AddNewUser)

module.exports = router;