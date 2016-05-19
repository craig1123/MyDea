var Idea = require('../schemas/Comment.js');

module.exports = {
  create: function (req, res) {
    var comment = new Idea(req.body);
    console.log(req.body);
    comment.user = req.user._id;
    comment.save(function (err, i) {
      return err ? res.status(500).send(err) : res.send(i)
    })
  },
  read: function (req, res) {
    Comment.find(req.query).populate({path:'user', select:"name facebook"}).exec(function (err, i) {
      res.send(i);
    })
  },
  update: function (req, res) {
    if (!req.params.id) {
      return res.status(400).send('id query needed');
    } console.log(req.body);
    Comment.findByIdAndUpdate(req.params.id, {$push:{"content":req.body.rating}}, function (err, i) {
        res.send(i);
    });
  },
  delete: function (req, res) {
    if(!req.params.id){
        return res.status(400).send('id query needed');
    }
    Comment.findByIdAndRemove({_id: req.params.id}, function (err, i) {
      res.send(i);
    });
  }
}
