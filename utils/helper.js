const crypto = require("crypto");
  exports.createRandomBytes=()=>
    new Promise((resolve,reject)=>{
      crypto.randomBytes(30,(err,buff)=>{
        if(err) reject(err);

        const token=buff.toString('hex')
        resolve(token)
      })
    })
  
const documentation=( req,res)=>{
 res.send(
    ` <!DOCTYPE html>
    <html lang="en" >
    <head>
    <meta charset="UTF-8">
    <title>Blogging haven's API</title>
    
    
    </head>
    <body>
    <!-- partial:index.partial.html -->
    <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
    <div style="margin:10px auto;width:70%;padding:10px 0">
      <div style="border-bottom:1px solid #eee">
        <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Blogging Haven</a>
      </div>
      <p style="font-size:1.1em"> </p>
      <p> Welcome to Blogging haven's API</p>
      <p>Documentation</p><br>
      Link<br>
     <a href='https://blogging-haven-api.onrender.com'> https://blogging-haven-api.onrender.com</a><br>
      
      github<br>
      <a href='https://github.com/tosibinaronmuro/Blog-Api'>https://github.com/tosibinaronmuro/Blog-Api</a><br>
      
      <p>
      ---------User------------<br>
      
      Register: <b>Post</b>- {URL}/api/v1/auth/register<br>
      Schema:{name:string*, email:string(unique)*, password:string*} <br>
      Response: name and token <br><br>
      
      Login: <b>Post</b>- {URL}/api/v1/auth/login<br>
      Schema:{email:string(unique)*, password:string*} <br>
      Response: name and token <br><br>
      
      Logout: <b>Post</b>- {URL}/api/v1/auth/logout<br>
      Response: msg<br><br>
      
      forgotPassword: <b>Post</b>- {URL}/api/v1/auth/forgot-password<br>
      Schema:{email:string*}<br>
      Response: email with embedded link for verification<br><br>
      
      resetPassword: <b>Post</b>- {URL}/api/v1/auth/reset-password<br>
      Schema:{password:string*} <br>
      Response: msg, email with successful message<br><br>
      
      
      ----------Blogs-----------<br>
      GetAllBlogs: <b>Get</b>- {URL}/api/v1/blogs<br>
      Schema:{ } <br>
      Response: returns all Blogs and total number of Blogs<br>
      search and filter by tag and/or title<br>
      eg  {URL}/api/v1/blogs?title=titanic&tag=movie<br>
      pagination limit-10<br>
      eg {URL}/api/v1/blogs?page=2 (returns number 11-20)<br>
      sorted by createdAt<br>
      route does not require authorization<br><br>
      
      GetMyBlogs: <b>Get</b>- {URL}/api/v1/blogs/myBlogs<br>
      Schema:{ } <br>
      Response: returns all Blogs created by the user  and total number of Blogs<br>
      search and filter by tag and/or title<br>
      eg  {URL}/api/v1/blogs?title=titanic&tag=movie<br>
      pagination limit-10<br>
      eg {URL}/api/v1/blogs?page=2 (returns number 11-20)<br>
      sorted by createdAt<br>
      route requires authorization<br><br>
      
      CreateBlog: <b>Post</b> - {URL}/api/v1/blogs<br>
      Schema:{ title:string*, content:string*,image:string,createdBy***:{mongoose.Types.ObjectId} tag:{enum :["general","health","tech","sports","gaming","movie"]}} <br>
      Response: creates a Blog and returns the Blog <br>
      route requires authorization<br><br>
      
      getSingleBlog: <b>Get</b>- {URL}/api/v1/blogs/{id}<br>
      Schema:{ } <br>
      Response: returns the Blog with id<br>
      route does not require authorization<br><br>
      
      UpdateBlog: <b>Patch</b>- {URL}/api/v1/blogs/{id}<br>
      Schema:{ title:string*, content:string*,image:string,createdBy***:{mongoose.Types.ObjectId} tag:{enum :["general","health","tech","sports","gaming","movie"]}} <br>
      Response: updates a Blog and returns the Blog <br>
      route requires authorization <br><br>
      
      DeleteBlog: <b>Delete</b>- {URL}/api/v1/blogs/{id}<br>
      Schema:{ } <br>
      Response: deletes the Blog <br>
      route requires authorization<br><br>
      
      Note:* means required, ***means created by mongoose<br>
       </p>
       
      <p style="font-size:0.9em;">Have Fun!<br />Blogging Haven</p>
      <hr style="border:none;border-top:1px solid #eee" />
      <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
        <p>Blogging Haven Inc</p>
        <p>1600 Amphitheatre Parkway</p>
        <p>California</p>
      </div>
    </div>
    </div>
    <!-- partial -->
    
    </body>
    </html>`)
  
 }
 module.exports={documentation}