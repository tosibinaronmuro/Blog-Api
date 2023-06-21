require("dotenv").config();
const express= require("express")
const app=express()
require("express-async-errors");

const AuthRouter=require('./routes/auth')
const BlogRouter=require('./routes/blog')
const notFoundHandler=require('./middleware/not-found')
const errorHandler=require('./middleware/errors-handler');
const connectDB = require("./connect/connectdb");

app.use(express.json())
// routes
app.use( '/api/v1/auth',AuthRouter)
app.use( '/api/v1/blog',BlogRouter)


// middlewares
app.use(notFoundHandler)
app.use(errorHandler)

app.get('/',(req,res)=>{
    res.send('Tosirons blog Api')
  }) 


const port= process.env.PORT || 5000 

const start=async ()=>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log(`app is listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()