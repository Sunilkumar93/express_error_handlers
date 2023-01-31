const { catchAsyncError } = require("../middleware/catchAsyncError");
const { UserModel } = require("../models/user.model");
const { ErrorHandler } = require("../utils/ErrorHandler");

const getUser = async (req, res, next) => {
  try {
    const user = await UserModel.find();

    res.status(200).send({ error: false, data: user });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
};

const registerUser = catchAsyncError(async (req, res, next) => {
  const userCreated = await UserModel(req.body);
  const user = await userCreated.save();
  res.status(201).send({ error: false, message: "user Created", data: user });
});
module.exports = { getUser, registerUser };
