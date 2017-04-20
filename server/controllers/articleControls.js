let Article = require('../models/article')

module.exports = {
  postArticle: function(req, res) {
    let newArticle = {
      title: req.body.title,
      content: req.body.content,
      author: req.body.author
    }

    newArticle.save()
  }
};