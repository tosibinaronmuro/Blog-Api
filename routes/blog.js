const express=require("express")
const router=express.Router()
const {deleteBlog,createBlog,getAllBlogs,getMyBlogs,getSingleBlog,UpdateBlog}=require('../controllers/blog')

router.route('/').get(getAllBlogs).post(createBlog)
router.route('/myBlogs').get(getMyBlogs)
router.route('/:id').get(getSingleBlog).patch(UpdateBlog).delete(deleteBlog)


module.exports=router