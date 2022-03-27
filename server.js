import express from "express";
import "dotenv/config";
import connectDB from "./config/db.js";

//create app
const app = express();
connectDB();

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
