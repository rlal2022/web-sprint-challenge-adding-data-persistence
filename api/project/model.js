/* eslint-disable */

// build your `Project` model here
const db = require("../../data/dbConfig");

async function getProjects() {
  const projectRows = await db("projects");
  const arr = [];

  projectRows.forEach((rows) => {
    if (rows.project_completed === 0) {
      result.push({ ...rows, project_completed: false });
    } else {
      result.push({ ...rows, project_completed: true });
    }
  });
  return arr;
}

async function create(project) {
  const [id] = await db("projects").insert(project);
  const [projectRows] = await db("projects").where("project_id", id);
  if (projectRows.project_completed === 0) {
    return { ...rows, project_completed: false };
  } else {
    return { ...rows, project_completed: true };
  }
}

module.exports = { getProjects, create };
