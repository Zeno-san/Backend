const express = require('express');
const mongoose=require('mongoose');
const bookrouter = require("./routes/book-routes");
const userrouter = require("./routes/user-routes");
const app=express();

//Middleware
app.use(express.json());
app.use("/books",bookrouter);
app.use("/users",userrouter);


mongoose.connect("mongodb+srv://admin:admin123@cluster0.f3btq.mongodb.net/library?retryWrites=true&w=majority"
).then(() => console.log("Connected to Database"))
.then(() => {
    app.listen(5000)
}).catch((err) =>console.log(err));