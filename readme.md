documentation
Link
https://blogging-haven-api.onrender.com

github
https://github.com/tosibinaronmuro/Blog-Api


---------User------------

Register: Post- /api/v1/auth/register
Schema:{name:string*, email:string(unique)*, password:string*} 
Response: name and token 

Login: Post- /api/v1/auth/login
Schema:{email:string(unique)*, password:string*} 
Response: name and token 

Logout: Post- /api/v1/auth/logout
Response: msg

forgotPassword: Post- /api/v1/auth/forgot-password
Schema:{email:string*}
Response: email with embedded link for verification

resetPassword: Post- /api/v1/auth/reset-password
Schema:{password:string*} 
Response: msg, email with successful message


----------Blogs-----------
GetAllBlogs: Get- /api/v1/blogs
Schema:{ } 
Response: returns all Blogs and total number of Blogs
search and filter by tag and/or title
eg  /api/v1/blogs?title=titanic&tag=movie
pagination limit-10
eg /api/v1/blogs?page=2 (returns number 11-20)
sorted by createdAt
route does not require authorization

GetMyBlogs: Get- /api/v1/blogs/myBlogs
Schema:{ } 
Response: returns all Blogs created by the user  and total number of Blogs
search and filter by tag and/or title
eg  /api/v1/blogs?title=titanic&tag=movie
pagination limit-10
eg /api/v1/blogs?page=2 (returns number 11-20)
sorted by createdAt
route requires authorization

CreateBlog: Post- /api/v1/blogs
Schema:{ title:string*, content:string*,image:string,createdBy***:{mongoose.Types.ObjectId} tag:{enum :["general","health","tech","sports","gaming","movie"]}} 
Response: creates a Blog and returns the Blog 
route requires authorization

getSingleBlog: Get- /api/v1/blogs/{id}
Schema:{ } 
Response: returns the Blog with id
route does not require authorization

UpdateBlog: Patch- /api/v1/blogs/{id}
Schema:{ title:string*, content:string*,image:string,createdBy***:{mongoose.Types.ObjectId} tag:{enum :["general","health","tech","sports","gaming","movie"]}} 
Response: updates a Blog and returns the Blog 
route requires authorization

DeleteBlog: Delete- /api/v1/blogs/{id}
Schema:{ } 
Response: deletes the Blog 
route requires authorization

Note:* means required, ***means created by mongoose
