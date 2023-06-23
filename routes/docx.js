const express=require("express")
const router=express.Router()
const {documentation}=require('../utils/helper')

router.route('/').get(documentation)

module.exports=router