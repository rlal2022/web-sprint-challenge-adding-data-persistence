/* eslint-disable */

// build your `Task` model here

const db = require("../../data/dbConfig.js");

async function getTasks() {
  const rows = await db("tasks as t")
    .leftJoin("projects as p", "p.project_id", "t.project_id")
    .select(
      "t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "p.project_name",
      "p.project_description"
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
