const express = require('express');
const dotenv = require('dotenv');
const dbConnect = require("./config/dbConnect");
const cors = require("cors");
const userRoutes = require("./routes/user.router")
const postRoutes = require("./routes/post.router")

//dotenv
dotenv.config();

//connecting to database
dbConnect();

const app = express();


//using cors to connect frontend and backend
app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());


//api base routes

app.use("/user", userRoutes);

app.use("/course", postRoutes);

//listening server

app.listen(process.env.PORT || 8080, () => {
    console.log(`Server Started On Port ${process.env.PORT || 8080}`)
});