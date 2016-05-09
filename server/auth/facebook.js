var FacebookStrategy = require('passport-facebook').Strategy;
var keys = require('./../keys');

module.exports = function (passport) {
  //returns a string of the data
  passport.serializeUser(function(user, done) {
    done(null, user);
  });
  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });
  //get from https://developers.facebook.com
  passport.use(new FacebookStrategy({
    clientID: keys.facebookID,
    clientSecret: keys.facebookSecret,
    callbackURL: 'http://localhost:3000/login/facebook/callback'
  }, function(token, refreshToken, userProfile, done) {
    return done(null, userProfile);
  }));

  var requireAuth = function(req, res, next) {
    console.log("is authed?", req.user);
    if (req.isAuthenticated()) {
      return next();
    }
    return res.redirect('/login');
  }


}
