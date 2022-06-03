module.exports = (app) => {
  const jobs = require("../controllers/jobs.controller.js");

  var router = require("express").Router();

  // Create a new Job
  router.post("/jobs/", jobs.create);

  // Retrieve all Jobs
  router.get("/jobs", jobs.findAll);

  // Retrieve a single Job with id
  router.get("/jobs/:id", jobs.findOne);

  // Update a Job with id
  router.put("/jobs/:id", jobs.update);

  // Delete a Job with id
  router.delete("/jobs/:id", jobs.delete);

  // Delete all Jobs
  router.delete("/jobs/", jobs.deleteAll);

  app.use('/jobs', router);
};
