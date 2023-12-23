import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config()
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Mongo Success")
}).catch((err) => {
    console.log(err)
})

const app = express()

app.get('/', (req, res) => {
    res.send('Hello, MERN!');
  });

app.listen(3000,()=>{
    console.log('server running on port 3000')
})