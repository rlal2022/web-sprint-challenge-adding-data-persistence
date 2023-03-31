/* eslint-disable */

// build your `Resource` model here

const db = require("../../data/dbConfig");

async function getResources() {
  return await db("resources");
}

async function create(resource) {
  const [id] = await db("resources").insert(resource);
  const [newResource] = await db("resources").where("resource_id", id);
  return newResource;
}

module.exports = { getResources, create };
