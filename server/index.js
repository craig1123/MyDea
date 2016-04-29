var express = require('express');
var session = require('express-session');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');

var app = express();
var FacebookStrategy = require('passport-facebook').Strategy;
var keys = require('./keys');
// var facebook = require('./auth/facebook');

passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});
passport.use(new FacebookStrategy({
  clientID: keys.facebookID,
  clientSecret: keys.facebookSecret,
  callbackURL: 'http://localhost:3000/auth/facebook/callback'
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
app.use(session({secret: 'I like turtles'}))
app.use(passport.initialize())
app.use(passport.session())

app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/',
  failureRedirect: '/re'
}), function(req, res) {
  console.log(req.session);
});
app.get('/me', function (req, res) {
  res.send(req.user);
})

var port = 3000;
app.listen(port, function () {
  console.log("port " + port + " hears you");
})
