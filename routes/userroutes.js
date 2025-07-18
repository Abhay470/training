




const express=require("express");
const { usersignin } = require("../day14/backened/controller/controller");
const userroutes=express.Router();

userroutes.post("/signin",usersignin);
// userroutes.post("/login",userlogin);
module.exports={userroutes}