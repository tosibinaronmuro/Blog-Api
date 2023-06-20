const authenticationMiddleware=(req,res,next)=>{
res.status(200).send('testing auth')
// next()
}
module.exports=authenticationMiddleware