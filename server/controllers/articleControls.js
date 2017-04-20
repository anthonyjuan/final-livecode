let Article = require('../models/article')

module.exports = {
  postArticle: function(req, res) {
    let newArticle = new Article({
      title: req.body.title,
      content: req.body.content,
      author: req.body.author
    })

    newArticle.save(function(err, article) {
      if(!err) {
        res.send({success:true, msg:'Create article success!', data:article})
      } else {
        res.send({success:false, msg:err})
      }
    })
  },
  getAllArticle: function(req, res) {
    Article.find()
           .populate('author')
           .exec(function(err, articles) {
             if(!err) {
               res.send({success:true, data:articles})
             } else {
               res.send({success:false, msg:err})
             }
           })
  },
  getOneArticle: function(req, res) {
    Article.findOne({_id: req.params.id}, function(err, article) {
      if(!err) {
        res.send({success:true, data:article})
      } else {
        res.send({success:false, data:err})
      }
    })
  },
  editArticle: function(req, res) {
    Article.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      content: req.body.content
    }, function(err) {
      if(!err) {
        res.send({success:true, msg:'update success'})
      } else {
        res.send({success: false, msg:err})
      }
    })
  },
  deleteArticle: function(req, res) {
    Article.findByIdAndRemove(req.params.id,
      function(err) {
        if(!err) {
          res.send({success:true, msg:'delete success'})
        } else {
          res.send({success: false, msg:err})
        }
      })
  }

};