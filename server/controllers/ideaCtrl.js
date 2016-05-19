var Idea = require('../schemas/Idea.js');

module.exports = {
  create: function (req, res) {
    var idea = new Idea(req.body);
    idea.user = req.user._id;
    idea.save(function (err, i) {
      return err ? res.status(500).send(err) : res.send(i)
    })
  },
  read: function (req, res) {
    Idea.find(req.query).populate({
      path:'user',
      select:"name facebook",
    }).populate({
      path:'comments.user',
      select: 'name facebook'
    }).exec(function (err, i) {
      res.send(i);
    })
  },
  readByQuery: function (req, res) {
    Idea.find({$or: [{title:{$regex:req.query.search}}, {description:{$regex: req.query.search}}, {what:{$regex:req.query.search}}]})
    .populate({path:'user', select:"name facebook"}).limit(4).exec(function (err, i) {
      res.send(i);
    })
  },
  update: function (req, res) {
    if (!req.params.id) {
      return res.status(400).send('id query needed');
    }
    if (!req.body.title) {
      console.log("just updating rating");
      Idea.findByIdAndUpdate(req.params.id, {$push:{"rating":req.body.rating}}, function (err, i) {
          res.send(i);
      });
    } else {
      console.log("Updating whole idea");
        Idea.findByIdAndUpdate(req.params.id, req.body, function (err, i) {
          res.send(i)
        })
    }
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
