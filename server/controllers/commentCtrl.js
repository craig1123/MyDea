var Idea = require('../schemas/Comment.js');

module.exports = {
  create: function (req, res) {
    var idea = new Idea(req.body);
    idea.user = req.user._id;
    idea.save(function (err, i) {
      return err ? res.status(500).send(err) : res.send(i)
    })
  },
  read: function (req, res) {
    Idea.find(req.query).populate({path:'user', select:"name facebook"}).exec(function (err, i) {
      res.send(i);
    })
  },
  readByQuery: function (req, res) {
    console.log(req.query);
    Idea.find({$or: [{title:{$regex:req.query.search}}, {description:{$regex: req.query.search}}, {what:{$regex:req.query.search}}]}).populate({path:'user', select:"name facebook"}).limit(4).exec(function (err, i) {
      res.send(i);
    })
  },
  update: function (req, res) {
    if (!req.params.id) {
      return res.status(400).send('id query needed');
    } console.log(req.body);
    Idea.findByIdAndUpdate(req.params.id, {$push:{"rating":req.body.rating}}, function (err, i) {
        res.send(i);
    });
  },
  delete: function (req, res) {
    if(!req.params.id){
        return res.status(400).send('id query needed');
    }
    Idea.findByIdAndRemove({_id: req.params.id}, function (err, i) {
      res.send(i);
    });
  }
}
