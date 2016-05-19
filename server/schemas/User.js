var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {
      first: {type: String},
      last: {type: String}
    },
    email: { type: String, index: true, trim: true, unique: true},
    password: { type: String},
    admin: {type: Boolean, default: false},
    ideas: {type: Schema.Types.ObjectId, ref: 'Idea'},
    // img: {}
  facebook: {
    id: String,
    token: String,
    email: String,
    name: String,
    pic: String
  }
});

userSchema.pre('save', function(next) {
	var user = this;
	if (!user.isModified('password'))	return next();
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(user.password, salt);
  user.password = hash;
  return next(null, user);
});

userSchema.methods.verifyPassword = function(reqBodyPassword) {
  var user = this;
  return bcrypt.compareSync(reqBodyPassword, user.password);
};

module.exports = mongoose.model('User', userSchema);
