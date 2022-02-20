import express from "express"
import 'dotenv/config'
import cors from "cors"
import cookieParser from "cookie-parser"
import mongoose from "mongoose";
import authRouter from "./router/AuthRoute.js";
import ErrorMiddleware from "./middlewares/ErrorMiddleware.js";

const PORT = process.env.PORT || 6000
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  credentials: true,
  origin: process.env.CLIENT_URL
}))
app.use('/api/auth', authRouter)
app.use(ErrorMiddleware)

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    await app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`))
  }
  catch (e) {
    console.log(e)
  }
}
start()