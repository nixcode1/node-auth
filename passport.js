const { Strategy, ExtractJwt } = require("passport-jwt");
const User = require("./models/User");

module.exports = (passport) => {
  const options = {};
  options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  options.secretOrKey = "playerMBBSshit";
  passport.use(
    new Strategy(options, (payload, done) => {
      User.findOne({ _id: payload.id }, (err, user) => {
        if (err) {
          return done(err, false);
        }
        if (user) {
          return done(null, {
            email: user.email,
            _id: user._id,
          });
        }
        return done(null, false);
      });
    })
  );
};
