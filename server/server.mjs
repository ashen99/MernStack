import express from "express";
import cors from "cors";
// import "./loadEnvironment.mjs";
import routes from "./routes/records.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use("/api", routes);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
