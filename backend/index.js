import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"

import router from "./routes/user.route.js";
import messageRouter from "./routes/message.route.js";
import { app, server } from "./SocketIO/server.js";

import cookieParser from "cookie-parser";

// const app = express();


dotenv.config();
app.use(express.json())
app.use(cors())
app.use(cookieParser());


const URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3001;

try {
  mongoose.connect(URI).then(console.log("Database connected"));
} catch (error) {
  console.log(error);
}


app.use("/api/user", router )
app.use("/api/message", messageRouter)

app.get("/", (req, res) => {
  res.send("Hello World!");
});

server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
