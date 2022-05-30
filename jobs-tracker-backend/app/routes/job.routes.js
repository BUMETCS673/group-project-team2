const { authJwt } = require("../middleware");
module.exports = app => {
  const jobs = require("../controllers/jobs.controller.js");

  var router = require("express").Router();

  // Create a new Job
  router.post("/",[authJwt.verifyToken], jobs.create);

  // Retrieve all Jobs
  router.get("/",[authJwt.verifyToken], jobs.findAll);

  // Retrieve all published Jobs
  router.get("/published",[authJwt.verifyToken], jobs.findAllPublished);

  // Retrieve a single Job with id
  router.get("/:id",[authJwt.verifyToken], jobs.findOne);

  // Update a Job with id
  router.put("/:id",[authJwt.verifyToken], jobs.update);

  // Delete a Job with id
  router.delete("/:id",[authJwt.verifyToken], jobs.delete);

  // Delete all Jobs
  router.delete("/",[authJwt.verifyToken], jobs.deleteAll);

  app.use('/api/jobs',[authJwt.verifyToken], router);
};
