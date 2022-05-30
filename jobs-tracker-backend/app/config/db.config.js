module.exports = {
  HOST: "172.24.112.1",
  USER: "group2",
  PASSWORD: "group2",
  DB: "followup",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
