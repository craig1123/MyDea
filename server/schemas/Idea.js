var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ideaSchema = new Schema({
  title: {type: String, required: true, index: true},
  description: {type: String, required: true},
  what: {type: String, required: true},
  how: {type: String, required: true},
  why: {type: String, required: true},
  rating: [{type: Number}]
  // img: {data: Buffer, contentType: String}
})

module.exports = mongoose.model('Idea', ideaSchema)
