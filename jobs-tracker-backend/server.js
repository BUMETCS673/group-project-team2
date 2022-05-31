const express = require("express");
const cors = require("cors");

const app = express();
const { auth } = require('express-oauth2-jwt-bearer');
var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// database
const db = require("./app/models");
const checkJwt = auth({
  audience: 'https://cs673-api-auth0.com',
  issuerBaseURL: `http://localhost:3000/`,
});
db.sequelize.sync();
// force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Database with { force: true }');
//   initial();
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Group 2 application." });
});

// routes
require('./app/routes/auth.routes')(app,checkJwt);
require('./app/routes/user.routes')(app,checkJwt);
require('./app/routes/job.routes')(app,checkJwt);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});