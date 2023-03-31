// build your `/api/tasks` router here

const express = require("express");
const Task = require("./model");

const router = express.Router();

/*

[ ] `[POST] /api/tasks`
  - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
  - Example of response body: `{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1}`

- [ ] `[GET] /api/tasks`
  - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
  - Each task must include `project_name` and `project_description`
  - Example of response body: `[{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_name:"bar","project_description":null}]`
  */

router.get("/task", (req, res, next) => {
  Task.getTasks()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch(next);
});

router.post("/task", (req, res, next) => {
  Task.create(req.body)
    .then((task) => {
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
