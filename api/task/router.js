// build your `/api/tasks` router here

const express = require("express");
const Task = require("./model");

const router = express.Router();

router.get("/", (req, res, next) => {
  Task.getTasks()
    .then((tasks) => {
      tasks.forEach((row) => {
        if (row.task_completed === 0) {
          row.task_completed = false;
        } else {
          row.task_completed = true;
        }
      });
      res.status(200).json(tasks);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  Task.create(req.body)
    .then((task) => {
      task.forEach((row) => {
        if (row.task_completed === 0) {
          row.task_completed = false;
        } else {
          row.task_completed = true;
        }
      });
      res.status(200).json(task);
    })
    .catch(next);
});

router.use((err, req, res) => {
  res.status(500).json({
    customMessage: "We ran into an error!",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
