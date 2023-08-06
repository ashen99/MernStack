// import express from "express";
const { Router } = require("express");
const router = Router();

const {
  getTasks,
  saveTasks,
  updateTasks,
} = require("../controllers/TaskConttoller");

router.get("/get", getTasks);
router.post("/save", saveTasks);
router.put("/update/:id", updateTasks);

module.exports = router;
