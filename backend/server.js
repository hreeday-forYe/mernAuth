import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
// To load the the environment variable from our .env files to our backend env
dotenv.config();

const port = process.env.PORT || 5000

// connection with our database
connectDB();

// @defining the object for our express();
const app = express();

/*
@This allows you to access the JSON data in your route handlers.
It is typically used when you want to handle JSON data sent from the client
*/
app.use(express.json());

/*
@This middleware function is used to parse URL-encoded data in the request body. URL-encoded data is commonly used in HTML forms. which can be accessed through the req.body;
*/
app.use(express.urlencoded({extended:true}));

// cookie parse
app.use(cookieParser());

//@defining the routes for our app
/* any kind of req on the baseURl api/users will be handled in userRoutes */
app.use("/api/users", userRoutes);






//@For testing our the routing 
app.get('/test', (req, res)=>{
  res.send("Server is on test")
})

// @This is error middleware
app.use(notFound);
app.use(errorHandler);

// @Starts the server and listens for HTTP requests 
app.listen(port, ()=>{
  console.log(`Server started on port ${port}`)
})