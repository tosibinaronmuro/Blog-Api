const {StatusCodes}=require('http-status-codes')
const { CustomError, BadRequest, Unauthenticated, NotFound }=require('../errors')


const getAllBlogs=async (req,res,next)=>{
    res.send('get all blogs')
}


const getMyBlogs=async (req,res,next)=>{
    res.send('get My blogs')
}



const createBlog=async (req,res,next)=>{
    res.send('create blog')
}



const getSingleBlog=async (req,res,next)=>{
    res.send('get single blog')
}



const UpdateBlog=async (req,res,next)=>{
    res.send('update blogs')
}



const deleteBlog=async (req,res,next)=>{
    res.send('delete blog')
}



module.exports={deleteBlog,createBlog,getAllBlogs,getMyBlogs,getSingleBlog,UpdateBlog}