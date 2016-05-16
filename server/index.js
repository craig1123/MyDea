var express = require('express');
var session = require('express-session');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');

//Controllers
var userCtrl = require('./controllers/userCtrl');
var ideaCtrl = require('./controllers/ideaCtrl');

//Services
var local = require('./services/local');

//Policies for local-Auth
var isAuthed = function (req, res, next) {
  if (!req.isAuthenticated()) return res.status(401).send();
  return next();
}

var app = express();

//facebook
var FacebookStrategy = require('passport-facebook').Strategy;
var keys = require('./keys');

//socket.io
var http = require('http').Server(app);
var io = require('socket.io')(http);



app.use(bodyParser.json());
app.use(express.static(__dirname + './../public'));
app.use(session({secret: keys.SESSION_SECRET}))
app.use(passport.initialize())
app.use(passport.session())

//socket.io
io.on('connection', function (socket) {
  socket.on('userconnected', function (userId) {

  })
  socket.on('partner', function (msg) {
    //put it in the database
    //Fire other socket events
    //this is a REST endpoint
    //socket.emit, the user who sent the message will receive one back
    //io.emit sends the msg to everyone

    socket.emit("response", msg + "whatever")
  })
})

//requiring facebook auth
require('./services/facebook')(passport);

//facebook routes
app.get('/login/facebook', passport.authenticate('facebook', {scope: 'email'}));
app.get('/login/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/profile',
  failureRedirect: '/login'
}), function(req, res) {
  console.log(req.session);
});
app.get('/me', function (req, res) {
  res.send(req.user);
})

//endpoints

//ideas
app.post('/api/ideas', ideaCtrl.create);
app.get('/api/ideas', ideaCtrl.read);
app.get('/api/ideas/:id', ideaCtrl.readById);
app.put('/api/ideas/:id', ideaCtrl.update);
app.delete('/api/ideas/:id', ideaCtrl.delete);

//local-Auth
app.post('/users', userCtrl.register);
app.get('/users', userCtrl.read);
app.delete('/users:id', userCtrl.delete);
app.get('/me', isAuthed, userCtrl.me);
app.put('/users/:_id', isAuthed, userCtrl.update);

app.post('/login', passport.authenticate('local', {
  successRedirect: '/me'
}));
app.get('/logout', function(req, res, next) {
  req.logout();
  return res.status(200).send('logged out');
});
// //authorization
// app.get('/me', function(req, res) {
//     res.render('local', { message: req.flash('loginMessage') });
// });
// app.post('/login', passport.authenticate('local-signup', {
//     successRedirect : '/me', // redirect to the secure profile section
//     failureRedirect : '/login', // redirect back to the signup page if there is an error
//     failureFlash : true // allow flash messages
// }));
// // route middleware to ensure user is logged in
// function isLoggedIn(req, res, next) {
//     if (req.isAuthenticated())
//         return next();
//
//     res.redirect('/');
// }


//connection to mongoose
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost:27017/mIdea', function (err) {
  if (err) throw err;
});
mongoose.connection.once("open", function() {
  console.log("Connected to MongoDB");
});


var port = 4000;
app.listen(port, function () {
  console.log("It's game time on " + port + "!");
})
