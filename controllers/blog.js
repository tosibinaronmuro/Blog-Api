const { StatusCodes } = require("http-status-codes");
const {
  CustomError,
  BadRequest,
  Unauthenticated,
  NotFound,
} = require("../errors");
const Blog = require("../model/blog");

const getAllBlogs = async (req, res, next) => {
    
  const blogs = await Blog.find({}).sort("createdAt");
  res.status(StatusCodes.OK).json({ totalblogs: blogs.length, blogs: blogs });
};

const getMyBlogs = async (req, res, next) => {
  res.send("get My blogs");
};

const createBlog = async (req, res, next) => {
  const { title, content, tag, image } = req.body;
  //   createdBy: user id
  const blog = await Blog.create({ ...req.body });
  res.status(StatusCodes.CREATED).json({ blog });
};

const getSingleBlog = async (req, res, next) => {
    // set user to blog
  const { id:blogId } = req.params;
  const blog = await Blog.findOne({_id:blogId})
  res.status(StatusCodes.OK).json({blog:blog});

};

const UpdateBlog = async (req, res, next) => {
   // set user to blog
   const { id:blogId } = req.params;
   const blog = await Blog.findOneAndUpdate({_id:blogId},{...req.body}, { new: true, runValidators: true })
   res.status(StatusCodes.OK).json({blog:blog});
};

const deleteBlog = async (req, res, next) => {
   // set user to blog
   const { id:blogId } = req.params;
   const blog = await Blog.findOneAndDelete({_id:blogId})
   res.status(StatusCodes.OK).json({blog:blog});
};

module.exports = {
  deleteBlog,
  createBlog,
  getAllBlogs,
  getMyBlogs,
  getSingleBlog,
  UpdateBlog,
};
