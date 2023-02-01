const jwt = require("jsonwebtoken");

module.exports = function auth(req, res, next) {
  const token = req.header("x-auth-token"); // define the token from the request
  console.log(token);

  if (!token) return res.status("401").send("access denide no token provied"); // check if token has sent
  try {
    req.user = jwt.verify(token, "final-project"); // check if the token is valid
    next(); // continue to the next middelwere
  } catch (error) {
    res.status(400).send("invalid token");
  }
};
