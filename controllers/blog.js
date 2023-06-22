const { StatusCodes } = require("http-status-codes");
const {
  CustomError,
  BadRequest,
  Unauthenticated,
  NotFound,
} = require("../errors");
const Blog = require("../model/blog");

const getAllBlogs = async (req, res, next) => {
  const { title,tag } = req.query;
  const queryObject = {};

   
  if (tag) {
    queryObject.tag = tag;
  }
  if (title) {
    queryObject.title = { $regex: title, $options: 'i' };
  }
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const blogs = await Blog.find(queryObject).sort("createdAt").skip(skip).limit(limit);
  if(blogs.length==0){
    res.status(StatusCodes.OK).json({msg:'there are no blogs'})
  }
  res.status(StatusCodes.OK).json({ totalblogs: blogs.length, blogs: blogs });
};

const getMyBlogs = async (req, res, next) => {
  const { title,tag } = req.query;
  const queryObject = {createdBy: req.user.userId};

   
  if (tag) {
    queryObject.tag = tag;
  }
  if (title) {
    queryObject.title = { $regex: title, $options: 'i' };
  }
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const myBlogs = await Blog.find(queryObject).sort("createdAt").skip(skip).limit(limit);


  if(myBlogs.length==0){
    res.status(StatusCodes.OK).json({msg:`there are no blogs `})
  }
  res
    .status(StatusCodes.OK)
    .json({ totalblogs: myBlogs.length, myBlogs });
};

const createBlog = async (req, res, next) => {
  req.body.createdBy = req.user.userId;
  const blog = await Blog.create({ ...req.body });
  res.status(StatusCodes.CREATED).json({ blog });
};

const getSingleBlog = async (req, res, next) => {
    // set user to blog
  const { id:blogId } = req.params;
  const blog = await Blog.findOne({_id:blogId})
  if (!blog) {
    throw new NotFound(`No job with Id:${blogId}`);
  }
  res.status(StatusCodes.OK).json({blog:blog});

};

const UpdateBlog = async (req, res, next) => {
  const {
    params: { id: blogId },
    user: { userId },
  } = req;
   const blog = await Blog.findOneAndUpdate({_id:blogId, createdBy: userId},{...req.body}, { new: true, runValidators: true })
   res.status(StatusCodes.OK).json({blog:blog});
};

const deleteBlog = async (req, res, next) => {
  const { userId } = req.user;
   const { id:blogId } = req.params;
   const blog = await Blog.findOneAndDelete({_id:blogId, createdBy:userId})
   if (!blog) {
    throw new NotFound(`No blog with Id:${jobId}`);
  }
  res.status(StatusCodes.OK).send();
};

module.exports = {
  deleteBlog,
  createBlog,
  getAllBlogs,
  getMyBlogs,
  getSingleBlog,
  UpdateBlog,
};
