const jwt = require("jsonwebtoken");
const { User } = require("../App/util/database");

class AuthController {
  loggedUser(req, res) {
    if (!req.user) {
      res.json({
        username: "nobody",
      });
    }
    res.json(req.user);
  }

  signin(req, res) {
    const token = jwt.sign({ user: req.user }, "SECRET_KEY");
    res.json({ token: token, user: req.user });
  }

  isLoggedIn(jwt_payload, done) {
    User.findOne({ where: { id: jwt_payload.user.id }, attributes: ['id', 'username', 'email'] })
      .then((user) => {
        return done(null, user);
      })
      .catch((err) => {
        return done(err, false, {
          message: "Token not matched.",
        });
      });
  }

  async isRegistered(username, password, done) {
    let user = await User.findOne({
      where: { uername: username, password: password },
    });
    if (!user) {
      return done(null, false);
    } else if (user.password !== password) {
      return done(null, false);
    }
    return done(null, user);
  }
}

module.exports = new AuthController();
