let mongoose = require('mongoose')
let Schema = mongoose.Schema

let userSchema = new Schema({
  name: String,
  username: {type:String, unique:true , required:true},
  password: String,
  email: String
})

let User = mongoose.model('User', userSchema)

module.exports = User;