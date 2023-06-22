require("dotenv").config();
const express = require("express");
const app = express();
require("express-async-errors");
const cookieParser = require("cookie-parser");

app.use(cookieParser(process.env.JWT_SECRET));
const AuthRouter = require("./routes/auth");
const BlogRouter = require("./routes/blog");
const notFoundHandler = require("./middleware/not-found");
const errorHandler = require("./middleware/errors-handler");
const connectDB = require("./connect/connectdb");

app.use(express.json());
// routes
app.use("/api/v1/auth", AuthRouter);
app.use("/api/v1/blog", BlogRouter);
app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
  <html lang="en" >
  <head>
  <meta charset="UTF-8">
  <title>CodePen - OTP Email Template</title>
  <!-- HTML !-->
   
   
  <style>
  
button {
  --b: 3px;   /* border thickness */
  --s: .45em; /* size of the corner */
  --color: #373B44;
  
  padding: calc(.5em + var(--s)) calc(.9em + var(--s));
  color: var(--color);
  --_p: var(--s);
  background:
    conic-gradient(from 90deg at var(--b) var(--b),#0000 90deg,var(--color) 0)
    var(--_p) var(--_p)/calc(100% - var(--b) - 2*var(--_p)) calc(100% - var(--b) - 2*var(--_p));
  transition: .3s linear, color 0s, background-color 0s;
  outline: var(--b) solid #0000;
  outline-offset: .6em;
  font-size: 16px;

  border: 0;

  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

button:hover,
button:focus-visible{
  --_p: 0px;
  outline-color: var(--color);
  outline-offset: .05em;
}

button:active {
  background: var(--color);
  color: #fff;
}
  </style>
  
  </head>
  <body>
  <!-- partial:index.partial.html -->
  <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
  <div style="margin:10px auto;width:70%;padding:10px 0">
    <div style="border-bottom:1px solid #eee">
      <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Blogging Haven</a>
    </div>
    <p style="font-size:1.1em">Hi,</p>
    <p>Thank you for choosing Blogging Haven. Use the following URL to complete your Password Recovery Procedure.</p>
    <button href=' '>Reset Password</button>
    <p style="font-size:0.9em;">Regards,<br />Blogging Haven</p>
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
  </html>`);
});
// middlewares

app.use(notFoundHandler);
app.use(errorHandler);



const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`app is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
