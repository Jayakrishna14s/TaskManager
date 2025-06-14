import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import taskRouter from "./routes/taskRouter.js";
import mongoose from "mongoose";
dotenv.config();

const app = express();
app.use(cors());

const appRoutes = () => {
  app.use("/api/tasks/", taskRouter);
};

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to mongodb"))
  .catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.listen(8080, () => {
  console.log("http://localhost:8080");
  appRoutes();
});
