const users = require("../controllers/user.controller");

module.exports = function(app) {

  var router = require("express").Router();
  // Create a new Job
  router.post("/users", users.create);

  // Retrieve all Jobs
  router.get("/users", users.findAll);

  // Retrieve a single Job with id
  router.get("/users/:id", users.findOne);

  // Update a Job with id
  router.put("/users/:id", users.update);

  // Delete a Job with id
  router.delete("/users/:id", users.delete);

  // Delete all Jobs
  router.delete("/users", users.deleteAll);

  app.use('/users', router);
};
