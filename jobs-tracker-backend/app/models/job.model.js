module.exports = (sequelize, Sequelize) => {
  const Job = sequelize.define("job", {
    jobTitle: {
      type: Sequelize.STRING
    },
    companyName: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    userId: {
      type: Sequelize.INTEGER
    },
    status: {
      type: Sequelize.STRING
    },
    link: {
      type: Sequelize.STRING
    },
    createdAt: {
      type: Sequelize.DATE
    },
    updatedAt: {
      type: Sequelize.DATE
    }
  });
  return Job;
};
