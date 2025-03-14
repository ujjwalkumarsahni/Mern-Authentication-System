import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import cookieParser from 'cookie-parser'
import ConnectDB from './config/mongoDB.js'
import authRouter from './routes/authRoutes.js'
import userRouter from './routes/userRoutes.js'


const app = express()
const port = process.env.PORT || 4000;
const allowedOrigins = ['https://mern-auth-nh3a.onrender.com']

// connect database
ConnectDB();

app.use(express.json())
// app.use(cors({origin: allowedOrigins,credentials: true}))
app.use(cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true
  }));
  
app.use(cookieParser())


// api endpoint
app.get('/', (req,res) => res.send("Api working fine"))
app.use('/api/auth',authRouter)
app.use('/api/user',userRouter)

app.listen(port, ()=>{
    console.log("Server runing on port" , port)
});