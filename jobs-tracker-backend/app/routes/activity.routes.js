const { authJwt } = require("../middleware");
module.exports = (app) => {
  const activities = require("../controllers/activities.controller.js");

  var router = require("express").Router();

  // Create a new Job
  router.post("/jobs/:jobId/activity/", activities.create);

  // Retrieve all Jobs
  router.get("/jobs/:jobId/activity/", activities.findAll);

  // Retrieve a single Job with id
  router.get("/jobs/:jobId/:id", activities.findOne);

  // Update a Job with id
  router.put("/jobs/:jobId/activity/:id", activities.update);

  // Delete a Job with id
  router.delete("/jobs/:jobId/activity/:id", activities.delete);

  // Delete all Jobs
  router.delete("/jobs/:jobId/activitiy/:id", activities.deleteAll);

  app.use('/api/activities', router);
};
