const express = require("express");
const userrouter = express.Router();
const User = require("../model/User")
const userController = require("../controllers/user-controller");


userrouter.get("/",userController.getAllUsers);
userrouter.post("/",userController.addUser);
userrouter.get("/:id",userController.getUserById);
userrouter.put("/:id",userController.updateUser);
userrouter.delete("/:id",userController.deleteUser);


module.exports = userrouter;

