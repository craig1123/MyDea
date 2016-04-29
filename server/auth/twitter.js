// var TwitterStrategy = require('passport-twitter').Strategy;
//
// passport.serializeUser(function(user, done) {
//   done(null, user);
// });
//
// passport.deserializeUser(function(obj, done) {
//   done(null, obj);
// });
//
// passport.use(new TwitterStrategy({
//   consumerKey: 'qgT3gYCqZCTbyL5EVzcOMVL8R',
//   consumerSecret: 'Qkp6wOagy4pnC87kjBlwEAbFQstLrlFADvpitZ4tYNdc9UjE7G',
//   callbackURL: 'http://127.0.0.1:2015/auth/twitter/callback'
// }, function(token, tokenSecret, profile, done) {
//   console.log('some kind of test', token);
//   return done(null, profile);
// }));
//
// var app = express();
// app.use(session({secret: 'abcs123'}));
// app.use(passport.initialize());
// app.use(passport.session());
//
// var requireAuth = function(req, res, next) {
//   console.log("is authed?", req.user);
//   if (req.isAuthenticated()) {
//     return next();
//   }
//   return res.redirect('/login');
// }
//
// app.get('/test', requireAuth, function(req, res) {
//   return res.status(200).end();
// })
//
// app.get('/auth/twitter', passport.authenticate('twitter'));
// app.get('/auth/twitter/callback', passport.authenticate('twitter', {
//   successRedirect: '/home',
//   failureRedirect: '/auth/twitter'
// }), function(req, res) {
//   console.log(req.session);
// });
