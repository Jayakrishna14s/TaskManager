import express from "express";
import task from "../models/task.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const tasks = await task.find();
  res.json(tasks);
});

router.post("/", async (req, res) => {
  const newTask = new task({ title: req.body.title });
  await newTask.save();
  res.status(201).json({ message: "Task Added Successfully" });
});

router.delete("/:id", async (req, res) => {
  await task.findOneAndDelete(req.params.id);
  res.json({ message: "Deleted Successfully" });
});

export default router;
