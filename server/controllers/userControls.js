let User = require('../models/user'),
    jwt = require('jsonwebtoken'),
    pwh = require('password-hash')

require('dotenv').config()

module.exports = {
  login: function(req, res) {
    User.findOne(
      {username: req.body.username},
      function(err,user) {
        if(err || user == null) {
          res.send({success:false, msg:'User not found'})
        } else {
          if(pwh.verify(req.body.password,user.password)) {
            let newToken = jwt.sign({username: user.username, id: user._id},process.env.SECRET_KEY)
            res.send({success:true , msg:'Login success', token:newToken, id:user._id})
          } else {
            res.send({success:false, msg:'wrong password'})
          }
        }
      }
    )
  },
  signUp: function(req, res) {
    let newUser = new User({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: pwh.generate(req.body.password)
    })

    newUser.save(function(err,user) {
      if(!err) {
        res.send({success:true, msg:'Create user success!', data:user})
      } else {
        res.send({success:false, msg:err})
      }
    })
  },
  getAllUser: function(req, res) {
    User.find(function(err,users) {
      if(!err) {
        res.send({success:true, msg:'get users success!', data:users})
      } else {
        res.send({success:false, msg:err})
      }
    })
  }
};
