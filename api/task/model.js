/* eslint-disable */

// build your `Task` model here

const db = require("../../data/dbConfig.js");

async function getTasks() {
  const rows = await db("tasks as t").leftJoin(
    "projects as p",
    "p.project_id",
    "t.project_id"
  );

  return rows;
}

async function create(task) {
  return db("tasks")
    .insert(task)
    .then((id) => {
      return db("tasks").where("task_id", id);
    });
}

module.exports = { getTasks, create };
