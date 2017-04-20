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

  }
};