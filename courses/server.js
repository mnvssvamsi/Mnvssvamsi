const express = require('express')
const mongoose = require("mongoose");
// const courses= require("./routes/api/courses")
const app = express()
const connectDB = require("./config/db")
connectDB()

app.use("/api/",require('./routes/api/courses'))
app.get('/', ( req, res ) => {
    res.send("API is running ")
    })
    const PORT = process.env.PORT || 6000;
    app.listen(PORT, ()=>{
        console.log(` my server started on ${PORT}`)
    })
     