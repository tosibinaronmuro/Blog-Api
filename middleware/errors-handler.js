const CustomError=require('../errors/index')
const {StatusCodes}=require('http-status-codes')


const errorHandler =async (err,req,res,next)=>{
    if(err instanceof CustomError){
        return res.status(err.statusCode).json({msg: err.message})
    }

    return res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message }||'Something went wrong, try again later')

}

module.exports=errorHandler