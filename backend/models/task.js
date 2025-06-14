import mongoose from "mongoose";

const task = mongoose.Schema({
  title: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});

export default mongoose.model("task", task);
