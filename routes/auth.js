const express= require('express')
const router=express.Router()
const {StatusCodes}=require('http-status-codes')
const {register,login}=require('../controllers/auth')

router.route('/register').post(register)
router.route('/login').post(login)
 

module.exports=router