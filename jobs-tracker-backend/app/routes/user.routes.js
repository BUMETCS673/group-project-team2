const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function(app,checkJwt) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/test", controller.allAccess);

  app.get("/user",checkJwt, controller.findOne);
};
