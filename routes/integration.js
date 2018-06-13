const Express = require("express");
const Router = Express.Router();
const LoginController = require("../controllers/loginController");
const UserModel = require("../models/usersModel");

Router.get("/",(req,res,next)=>{
    res.status(200).json("Integración");
})

Router.get("/login",(req,res,next)=>{
    let loginController = new LoginController(req,res,next);
    loginController.index();
})

Router.post("/login",(req,res,next)=>{
    let loginController = new LoginController(req,res,next);
    loginController.login();
})

module.exports = Router;