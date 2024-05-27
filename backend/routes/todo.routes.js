import express from "express";
import {
  getTask,
  getTasks,
  newTask,
  updateTask,
  deleteTask,
} from "../controllers/todo.controller.js";

const router = express.Router();

router.get("/tasks", getTasks);
router.get("/tasks/:_id", getTask);
router.post("/tasks", newTask);
router.put("/tasks/:_id", updateTask);
router.delete("/tasks/:_id", deleteTask);

export default router;
