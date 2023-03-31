//eslint-disable

// build your `/api/resources` router here

const express = require("express");
const Resource = require("./model");

const router = express.Router();

/*

 [ ] `[POST] /api/resources`
  - Example of response body: `{"resource_id":1,"resource_name":"foo","resource_description":null}`


- [ ] `[GET] /api/resources`
  - Example of response body: `[{"resource_id":1,"resource_name":"foo","resource_description":null}]`

  */

router.get("/", (req, res, next) => {
  Resource.getResources()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  Resource.create(req.body)
    .then((element) => {
      res.status(201).json(element);
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
