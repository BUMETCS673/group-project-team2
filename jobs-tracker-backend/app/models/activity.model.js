module.exports = (sequelize, Sequelize) => {
    const Activity = sequelize.define("activity", {
      category: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      start_date: {
        type: Sequelize.DATE
      },
      end_date: {
        type: Sequelize.DATE
      },
      activityId: {
        type: Sequelize.INTEGER
      },
      jobId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        type: Sequelize.DATETIME
      },
      updatedAt: {
        type: Sequelize.DATETIME
      }
    });
    return Activity;
  };