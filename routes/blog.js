const express=require("express")
const router=express.Router()
const {deleteBlog,createBlog,getAllBlogs,getMyBlogs,getSingleBlog,UpdateBlog}=require('../controllers/blog')
const authenticationMiddleware=require('../middleware/auth')


router.route('/').get(getAllBlogs)
router.route('/').post( createBlog)//authenticationMiddleware,
router.route('/myBlogs').get( getMyBlogs)
// router.route('/myBlogs').get(authenticationMiddleware, getMyBlogs)
router.route('/:id').get(getSingleBlog)
router.route('/:id').patch(UpdateBlog).delete(deleteBlog)
// router.route('/:id').patch(authenticationMiddleware, UpdateBlog).delete(authenticationMiddleware, deleteBlog)


module.exports=router