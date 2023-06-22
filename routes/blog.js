const express=require("express")
const router=express.Router()
const {deleteBlog,createBlog,getAllBlogs,getMyBlogs,getSingleBlog,UpdateBlog}=require('../controllers/blog')
const authMiddleware=require('../middleware/auth')


router.route('/').get(getAllBlogs)
router.route('/').post(authMiddleware, createBlog) 
// router.route('/myBlogs').get( getMyBlogs)
router.route('/myBlogs').get(authMiddleware, getMyBlogs)
router.route('/:id').get(getSingleBlog)
// router.route('/:id').patch(UpdateBlog).delete(deleteBlog)
router.route('/:id').patch(authMiddleware, UpdateBlog).delete(authMiddleware, deleteBlog)


module.exports=router 