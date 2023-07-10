# Blogging Haven

This is the repository for the Blogging Haven API, built using Node.js, Express.js, and Mongoose. The app provides functionalities for user authentication, creating, reading, updating, and deleting blog posts.

## Installation

To get started with the Blogging Haven API, follow the instructions below:

1. Clone the repository: `git clone https://github.com/tosibinaronmuro/Blog-Api.git`
2. Navigate to the project directory: `cd Blog-Api`
3. Install the dependencies: `npm install`
4. Start the server: `npm start`

Make sure to have Node.js and npm installed on your machine before proceeding.

## API Documentation

### User

- **Register**: `POST /api/v1/auth/register`
  - Schema: `{ name: string*, email: string(unique), password: string }`
  - Response: Returns the name and authentication token of the registered user.

- **Login**: `POST /api/v1/auth/login`
  - Schema: `{ email: string(unique), password: string }`
  - Response: Returns the name and authentication token of the logged-in user.

- **Logout**: `POST /api/v1/auth/logout`
  - Response: Returns a success message.

- **Forgot Password**: `POST /api/v1/auth/forgot-password`
  - Schema: `{ email: string* }`
  - Response: Sends an email with an embedded link for password verification.

- **Reset Password**: `POST /api/v1/auth/reset-password`
  - Schema: `{ password: string* }`
  - Response: Returns a success message and an email with a notification of successful password reset.

### Blogs

- **Get All Blogs**: `GET /api/v1/blogs`
  - Schema: `{ }`
  - Response: Returns all blogs and the total number of blogs. Supports searching and filtering by tag and/or title. Pagination limit is set to 10. Sorted by createdAt. Route does not require authorization.

- **Get My Blogs**: `GET /api/v1/blogs/myBlogs`
  - Schema: `{ }`
  - Response: Returns all blogs created by the user and the total number of blogs. Supports searching and filtering by tag and/or title. Pagination limit is set to 10. Sorted by createdAt. Route requires authorization.

- **Create Blog**: `POST /api/v1/blogs`
  - Schema: `{ title: string*, content: string*, image: string, createdBy***: {mongoose.Types.ObjectId}, tag: {enum: ["general", "health", "tech", "sports", "gaming", "movie"]}}`
  - Response: Creates a blog and returns the blog. Route requires authorization.

- **Get Single Blog**: `GET /api/v1/blogs/{id}`
  - Schema: `{ }`
  - Response: Returns the blog with the specified ID. Route does not require authorization.

- **Update Blog**: `PATCH /api/v1/blogs/{id}`
  - Schema: `{ title: string*, content: string*, image: string, createdBy***: {mongoose.Types.ObjectId}, tag: {enum: ["general", "health", "tech", "sports", "gaming", "movie"]}}`
  - Response: Updates a blog and returns the updated blog. Route requires authorization.

- **Delete Blog**: `DELETE /api/v1/blogs/{id}`
  - Schema: `{ }`
  - Response: Deletes the specified blog. Route requires authorization.

Note: * indicates a required field, and *** indicates created by Mongoose.

## Links

- baseURL: [API location](https://blogging-haven-api.onrender.com)
- GitHub Repository: [Blog App GitHub](https://github.com/tosibinaronmuro/Blog-Api)

## Contact

For any further inquiries or information, please contact the project owner at [email@example.com](mailto:tosironj@gmail.com).
