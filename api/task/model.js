/* eslint-disable */

// build your `Task` model here

const db = require("../../data/dbConfig.js");

async function getTasks() {
  const rows = await db("tasks as t")
    .leftJoin("projects as p", "t.project_id", "p.project_id")
    .select(
      "t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "p.project_name",
      "p.project_description"
    );

  const arr = [];
  rows.forEach((row) => {
    if (row.task_completed === 0) {
      result.push({ ...row, taskcompleted: false });
    } else {
      result.push({ ...row, task_completed: true });
    }
  });
  return arr;
}

async function create(task) {
  const [id] = await db("tasks").create(task);
  const [newTask] = await db("tasks").where("task_id", id);
  if (newTask.task_completed === 0) {
    return { ...rows, taskcompleted: false };
  } else {
    return { ...rows, task_completed: true };
  }
}

module.exports = { getTasks, create };
