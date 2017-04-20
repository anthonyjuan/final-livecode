let User = require('../models/user'),
    jwt = require('jsonwebtoken'),
    pwh = require('password-hash')

module.exports = {
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
  }
};
