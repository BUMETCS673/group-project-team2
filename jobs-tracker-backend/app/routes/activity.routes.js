const { authJwt } = require("../middleware");
module.exports = app => {
  const activities = require("../controllers/activities.controller.js");

  var router = require("express").Router();

  // Create a new Job
  router.post("/jobs/:jobId/activity/",[authJwt.verifyToken], activities.create);

  // Retrieve all Jobs
  router.get("/jobs/:jobId/activity/",[authJwt.verifyToken], activities.findAll);

  // Retrieve a single Job with id
  router.get("/jobs/:jobId/:id",[authJwt.verifyToken], activities.findOne);

  // Update a Job with id
  router.put("/jobs/:jobId/activity/:id",[authJwt.verifyToken], activities.update);

  // Delete a Job with id
  router.delete("/jobs/:jobId/activity/:id",[authJwt.verifyToken], activities.delete);

  // Delete all Jobs
  router.delete("/jobs/:jobId/activitiy/:id",[authJwt.verifyToken], activities.deleteAll);

  app.use('/api/activities',[authJwt.verifyToken], router);
};
