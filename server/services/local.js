var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');
var cookieParser = require('cookie-parser');

var User = require('../schemas/User.js');

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback : true // allows us to pass back the entire request to the callback
}, function(req, email, password, done) {
  User.findOne({ email: email })
  .exec(function(err, user) {
    if(err) {
      done(err);
    }
    if(!user) return done(null, false, req.flash('loginMessage', 'No user found.'));
    if (!user.verifyPassword(password))
      return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
    if(user.verifyPassword(password)) return done(null, user);
    return done(null, false);
  });
}));

passport.serializeUser(function(user, done) {
  done(null, user._id);
});
passport.deserializeUser(function(_id, done) {
  User.findById(_id, function(err, user) {
    done(err, user);
  });
});

module.exports = passport;
