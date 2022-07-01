const express = require('express');
const { getUsers } = require('./users.service');
const userRouter = express.Router();

userRouter.get("/users",getUsers);
userRouter.post("/users", (req,res) =>{
    return res.send("hi saya dari userRouter");
});
userRouter.get("/users/:userId", (req,res) =>{
    return res.send("hi saya dari userRouter");
});
userRouter.put("/users/:userId", (req,res) =>{
    return res.send("hi saya dari userRouter");
});
userRouter.delete("/users/:userId", (req,res) =>{
    return res.send("hi saya dari userRouter");
});

module.exports = userRouter;