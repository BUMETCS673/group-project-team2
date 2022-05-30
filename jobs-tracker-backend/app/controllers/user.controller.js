const db = require("../models");
const User = db.jobs;

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

// Find a single Job with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Job with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Job with id=" + id
      });
    });
};