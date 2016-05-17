var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var commentSchema = new Schema({
  content: {type: String}
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  date: {type: Date, default: new Date()}
})

module.exports = mongoose.model('Comment', commentSchema)
