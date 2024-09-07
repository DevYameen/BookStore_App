import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

dotenv.config();

// Set up CORS
const allowedOrigins = [
  "https://book-store-app-mohammad-yameens-projects.vercel.app", // Your Vercel app URL
  "http://localhost:5173" // For local development (if needed)
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true, // If you're dealing with cookies or authentication
}));

app.use(express.json());

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Connect to MongoDB
try {
  mongoose.connect(URI);
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("Error:", error);
}

// Define routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
