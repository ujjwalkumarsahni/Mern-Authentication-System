import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import cookieParser from 'cookie-parser'

// importing data base
import ConnectDB from './config/mongoDB.js'
const app = express()
const port = process.env.PORT || 4000;

// connect database
ConnectDB();

app.use(express.json())
app.use(cors({credentials: true}))
app.use(cookieParser())

app.get('/', (req,res) =>{
    res.send("Api working fine");
})

app.listen(port, ()=>{
    console.log("Server runing on port" , port)
});