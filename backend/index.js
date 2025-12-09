import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path"; // Import path

import userRoute from "./routes/user.route.js";
import messageRoute from "./routes/message.route.js";
import { app, server } from "./SocketIO/server.js"; // Assuming this handles your Express app and HTTP server

dotenv.config();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

const PORT = process.env.PORT || 4001;
const URI = process.env.MONGODB_URI;

// Database Connection
try {
  mongoose.connect(URI);
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("MongoDB connection error:", error);
}

// Routes for the API
app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);

// --- DEPLOYMENT CATCH-ALL (Fix for PathError) ---
if (process.env.NODE_ENV === "production") {
    // Determine the root directory of the project
    const dirPath = path.resolve(); 
    const frontendPath = path.join(dirPath, "frontend", "dist");

    // 1. Serve static assets (CSS, JS, images) from the frontend build directory
    app.use(express.static(frontendPath));

    // 2. Catch-all route for the Single Page Application (SPA)
    // Use the RegEx /^(?!.*api).*$/ to explicitly match all non-API routes 
    // and send the main index.html file. This bypasses the path-to-regexp conflict.
    app.get(/^(?!.*api).*$/, (req, res) => {
      res.sendFile(path.join(frontendPath, "index.html"));
    });
}

// Start the server
server.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`);
});