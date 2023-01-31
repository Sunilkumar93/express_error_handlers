const express = require("express");
const { getUser, registerUser } = require("../controllers/user.controller");

const userRouter = express.Router();

userRouter.get("/", getUser);
userRouter.post("/register", registerUser);

module.exports = { userRouter };
