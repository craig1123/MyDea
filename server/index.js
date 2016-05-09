var express = require('express');
var session = require('express-session');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');

var app = express();
var FacebookStrategy = require('passport-facebook').Strategy;
var keys = require('./keys');

app.use(bodyParser.json());
app.use(express.static(__dirname + './../public'));


require('./auth/facebook')(passport);

app.use(session({secret: 'I like turtles'}))
app.use(passport.initialize())
app.use(passport.session())


//facebook routes
app.get('/login/facebook', passport.authenticate('facebook'));
app.get('/login/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/me',
  failureRedirect: '/login'
}), function(req, res) {
  console.log(req.session);
});

app.get('/me', function (req, res) {
  res.send(req.user);
})

//connection to mongoose
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost:27017/ecommerce', function (err) {
  if (err) throw err;
});
mongoose.connection.once("open", function() {
  console.log("Connected to MongoDB");
});


var port = 3000;
app.listen(port, function () {
  console.log("port " + port + " hears you");
})
