const express = require("express");

const app = express();

class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message), (this.statusCode = statusCode);
  }
}

app.get("/", (req, res, next) => {
  let user = true;

  if (user) {
    return next(new ErrorHandler("somethig is  fishy",400));
  }

  res.status(200).json({ error: false, message: "ok" });
});

app.use((err, req, res, next) => {
  err.message = err.message || "Inernal Server Error";
  err.statusCode = err.statusCode || 500;
  res.status(err.statusCode).json({ error: true, message: err.message });
});

app.listen(4000, () => {
  console.log("serveris running on port 4000");
});
