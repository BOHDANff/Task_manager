import express from "express"
import 'dotenv/config'
import cors from "cors"
import cookieParser from "cookie-parser"
import mongoose from "mongoose";
import authRouter from "./router/AuthRoute.js";

const PORT = process.env.PORT || 6000
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use('/auth', authRouter)
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