/* eslint-disable */

// build your `Project` model here
const db = require("../../data/dbConfig");

async function getProjects() {
  const projectRows = await db("projects");
  const arr = [];

  projectRows.forEach((rows) => {
    if (rows.project_completed === 0) {
      arr.push({ ...rows, project_completed: false });
    } else {
      arr.push({ ...rows, project_completed: true });
    }
  });
  return arr;
}

async function create(project) {
  const [id] = await db("projects").insert(project);
  const [row] = await db("projects").where("project_id", id);
  if (row.project_completed === 0) {
    return { ...row, project_completed: false };
  } else {
    return { ...row, project_completed: true };
  }
}

module.exports = { getProjects, create };
