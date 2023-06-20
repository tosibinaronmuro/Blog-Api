


const register=async (req,res,next)=>{
    res.send('register new account')
}
const login=async (req,res,next)=>{
    res.send('login account')
}


module.exports={register,login}