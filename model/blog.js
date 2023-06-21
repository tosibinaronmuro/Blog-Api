const mongoose=require('mongoose')
const { model, Schema } = require("mongoose");

const BlogSchema = new Schema({
  title: {
    type: String,
    required:[true, "please provide a title"],
  
  },
  content:{
    type:String,
    required:[true, "please provide a title"]
  },
  tag:{
    type:String,
    enum:['general','health','tech','sports','gaming','movie'],
    default:'general'
  },
  image:{
    type:String,
  },
  createdBy:{
    type:mongoose.Types.ObjectId,
    ref:'User',
    // required:[true,'please provide a User'],
}
},{timestamps:true});


module.exports=model('Blog',BlogSchema)