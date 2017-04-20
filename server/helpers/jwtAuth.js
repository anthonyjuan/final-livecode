let jwt = require('jsonwebtoken'),
    user = require('../models/user'),
    article = require('../models/article')

require('dotenv').config()

module.exports = {
  verify: function(req, res , next) {
    jwt.verify(req.headers.token, process.env.SECRET_KEY, function(err , decoded) {
      if(decoded) {
        user.findOne({username: decoded.username}, function(err, result) {
          if(err || result == null) {
            res.send('failed to connect')
          } else {
            next()
          }
        })
      } else {
        res.send(err)
      }
    })
  },
  verifyAction: function(req, res, next) {
    jwt.verify(req.headers.token, process.env.SECRET_KEY, function(err , decoded) {
      if(decoded) {
        article.findOne({_id: req.params.id}, function(err, result) {
          if(err || result == null) {
            res.send('failed')
          } else {
            if(decoded.id == result.author) {
                next()
            } else {
                res.send('you have no right!')
            }
          }
        })
      } else {
        res.send(err)
      }
    })
  }
};