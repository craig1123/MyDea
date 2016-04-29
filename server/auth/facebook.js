// // var express = require('express');
// // var session = require('express-session');
// // var passport = require('passport');
//
//
// // var app = express();
//
// module.exports = function(facebook) {
// 
// passport.serializeUser(function(user, done) {
//   done(null, user);
// });
//
// passport.deserializeUser(function(obj, done) {
//   done(null, obj);
// });
//
// passport.use(new FacebookStrategy({
//   clientID: keys.facebookID,
//   clientSecret: keys.facebookSecret,
//   callbackURL: 'http://localhost:3000/auth/facebook/callback'
// }, function(token, refreshToken, userProfile, done) {
//   return done(null, userProfile);
// }));
//
//
//
// var requireAuth = function(req, res, next) {
//   console.log("is authed?", req.user);
//   if (req.isAuthenticated()) {
//     return next();
//   }
//   return res.redirect('/login');
// }
//
// // app.get('/auth/facebook', passport.authenticate('facebook'));
// //callback for facebook
//
//
// };
