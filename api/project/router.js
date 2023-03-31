//eslint-disable

// build your `/api/projects` router here

const express = require("express");
const Project = require("./model");

const router = express.Router();

router.get("/", (req, res, next) => {
  Project.getProjects()
    .then((project) => {
      console.log(project, "something");
      res.status(200).json(project);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  Project.create(req.body)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch(next);
});

// router.use((err, req, res) => {
//   res.status(500).json({
//     customMessage: "We ran into an error!",
//     message: err.message,
//     stack: err.stack,
//   });
// });

module.exports = router;
