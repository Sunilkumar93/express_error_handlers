const express = require("express");
const { connection } = require("./configs/db");
const { errorMiddleware } = require("./middleware/error.middleware.js");
const { userRouter } = require("./routes/user.routes");
const app = express();

//logic goes here

app.use(express.json());

app.use("/user", userRouter);

app.listen(4000, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }
  console.log("server is running on port 4000");
});

app.use(errorMiddleware);
