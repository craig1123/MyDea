var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ideaSchema = new Schema({
  title: {type: String, required: true, index: true},
  description: {type: String, required: true},
  what: {type: String, required: true},
  how: {type: String, required: true},
  why: {type: String, required: true},
  rating: [{type: Number}],
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  comments: [{
    content: {type: String},
    user: {type:Schema.Types.ObjectId, ref: "User"},
    date: {type: Date, default: new Date()}
  }],
  date: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Idea', ideaSchema)
