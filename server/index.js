var express = require('express');
var session = require('express-session');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');

var ideaCtrl = require('./controllers/ideaCtrl');
var app = express();

//facebook
var FacebookStrategy = require('passport-facebook').Strategy;
var keys = require('./keys');

//socket.io
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.use(bodyParser.json());
app.use(express.static(__dirname + './../public'));


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

//endpoints

//ideas
app.post('/api/ideas', ideaCtrl.create);
app.get('/api/ideas', ideaCtrl.read);
app.get('/api/ideas/:id', ideaCtrl.readById);
app.put('/api/ideas/:id', ideaCtrl.update);
app.delete('/api/ideas/:id', ideaCtrl.delete);

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
  console.log("It's game time on " + port + "!");
})
