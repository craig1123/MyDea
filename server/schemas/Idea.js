var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ideaSchema = new Schema({
  title: {type: String, required: true, index: true},
  description: {type: String, required: true},
  what: {type: String, required: true},
  how: {type: String, required: true},
  why: {type: String, required: true},
  rating: [{type: Number, min: 18, max: 65}],
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  comments: [{
    content: {type: String},
    user: {type:Schema.Types.ObjectId, ref: "User"},
    date: {type: Date, default: new Date()}
  }],
  date: {type: Date, default: Date.now},
  viewable: {type: Boolean, default: true},
  trash: {type: Boolean, default: false}
})

module.exports = mongoose.model('Idea', ideaSchema)
