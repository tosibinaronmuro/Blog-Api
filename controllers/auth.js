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
  const user = await User.create({ ...req.body });
  res
    .status(StatusCodes.OK)
    .json({ user: { name: user.name }, token: user.createJWT() });
};



const login = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password){
        throw new BadRequest('please provide name, email and password')
    }
    const user=await User.findOne({email})
    if(!user){
        throw new Unauthenticated('user does not exist')
    }
    const token =user.createJWT()
    const isPasswordCorrect=await user.comparePasswords(password)
    if(!isPasswordCorrect){
        throw new Unauthenticated('invalid password')
    }
    res.status(StatusCodes.OK).json({user:{name:user.name},token})
};

module.exports = { register, login };
