/* eslint-disable */

// build your server here and require it from index.js

const express = require("express");
const projectsRouter = require("./project/router");
const resourceRouter = require("./resource/router");
const taskRouter = require("./task/router");
const server = express();

server.use(express.json());

server.use("/api", projectsRouter);
server.use("/api", resourceRouter);
server.use("/api", taskRouter);

server.use("*", (req, res, next) => {
  res.json({ api: "API is running!" });
});

// server.use((err, req, res, next) => {
//   res.status(500).json({ message: err.message, stack: err.stack });
// });

module.exports = server;
