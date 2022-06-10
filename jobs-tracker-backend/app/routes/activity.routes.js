module.exports = (app) => {
  const activities = require("../controllers/activities.controller.js");

  var router = require("express").Router();

  // Create a new Job
  router.post("/:jobId/activity/", activities.create);

  // Retrieve all Jobs
  router.get("/:jobId/activity/", activities.findAll);

  // Retrieve a single Job with id
  router.get("/:jobId/:id", activities.findOne);

  // Update a Job with id
  router.put("/:jobId/activity/:id", activities.update);

  // Delete a Job with id
  router.delete("/:jobId/activity/:id", activities.delete);

  // Delete all Jobs
  router.delete("/:jobId/activitiy/:id", activities.deleteAll);

  app.use('/jobs', router);
};
