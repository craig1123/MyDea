var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ideaSchema = new Schema({
  title: {type: String, required: true, index: true},
  description: {type: String, required: true},
  // rating: {type: Number, required: true, ref: "Rating"}
})

module.exports = mongoose.model('Idea', ideaSchema)
