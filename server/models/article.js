let mongoose = require('mongoose')
let Schema = mongoose.Schema

let articleSchema = new Schema({
  title: String,
  content: String,
  author: {type: Schema.Types.ObjectId, ref: 'User'},
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now}
})

let Article = mongoose.model('Article', articleSchema)

module.exports = Article;