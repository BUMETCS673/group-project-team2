const db = require("../models");
const Activity = db.activities;
const Op = db.Sequelize.Op;

// Create and Save a new Activity
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Activity
  const job = {
    jobTitle: req.body.jobTitle,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };

  // Save Activity in the database
  Activity.create(job)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Activity."
      });
    });
};

// Retrieve all Activitys from the database.
exports.findAll = (req, res) => {
  const jobId = req.query.jobId;
  Activity.findAll({ where: { jobId: jobId } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving activities."
      });
    });
};

// Find a single Activity with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Activity.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Activity with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Activity with id=" + id
      });
    });
};

// Update a Activity by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Activity.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Activity was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Activity with id=${id}. Maybe Activity was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Activity with id=" + id
      });
    });
};

// Delete a Activity with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Activity.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Activity was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Activity with id=${id}. Maybe Activity was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Activity with id=" + id
      });
    });
};

// Delete all Activitys from the database.
exports.deleteAll = (req, res) => {
  Activity.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Activitys were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all activities."
      });
    });
};