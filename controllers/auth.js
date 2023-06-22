const jwt = require("jsonwebtoken");
const {
  CustomError,
  BadRequest,
  Unauthenticated,
  NotFound,
} = require("../errors");
const User = require("../model/user");
const { StatusCodes } = require("http-status-codes");

const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequest("please provide name, email and password");
  }
  const emailAlreadyExists = await User.findOne({ email });
  if (emailAlreadyExists) {
    throw new BadRequest("Email already exists");
  }
  const user = await User.create({ ...req.body });
  const token = user.createJWT();
  const oneDay = 1000 * 60 * 60 * 24;

  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    // secure: process.env.NODE_ENV === 'production',
    signed: true,
  });
  res.status(StatusCodes.OK).json({ user: { name: user.name }, token: token });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequest("please provide name, email and password");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new Unauthenticated("user does not exist");
  }
  const token = user.createJWT();
  const oneDay = 1000 * 60 * 60 * 24;

  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    // secure: process.env.NODE_ENV === 'production',
    signed: true,
  });
  const isPasswordCorrect = await user.comparePasswords(password);
  if (!isPasswordCorrect) {
    throw new Unauthenticated("invalid password");
  }
  res.status(StatusCodes.OK).json({ user: { name: user.name }, token });
};

const logout = async (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now() + 1000),
  });
  res.status(StatusCodes.OK).json({ msg: "user logged out!" });
};

module.exports = { register, login, logout };
