const mongoose=require('mongoose')
const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
    required:[true, "please provide name"],
    minLength: 3,
    maxLength: 50,
  },
  email: {
    type: String,
    required: [true, "please provide email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "please provide a valid email",
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "please provide password"],
  },
});


module.exports=model('User',UserSchema)