const { authJwt } = require("../middleware");
module.exports = (app,checkJwt) => {
  const activities = require("../controllers/activities.controller.js");

  var router = require("express").Router();

  // Create a new Job
  router.post("/jobs/:jobId/activity/",checkJwt, activities.create);

  // Retrieve all Jobs
  router.get("/jobs/:jobId/activity/",checkJwt, activities.findAll);

  // Retrieve a single Job with id
  router.get("/jobs/:jobId/:id",checkJwt, activities.findOne);

  // Update a Job with id
  router.put("/jobs/:jobId/activity/:id",checkJwt, activities.update);

  // Delete a Job with id
  router.delete("/jobs/:jobId/activity/:id",checkJwt, activities.delete);

  // Delete all Jobs
  router.delete("/jobs/:jobId/activitiy/:id",checkJwt, activities.deleteAll);

  app.use('/api/activities',checkJwt, router);
};
