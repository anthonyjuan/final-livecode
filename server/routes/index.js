let routes = require('express').Router()
let user = require('../controllers/userControls')
let article = require('../controllers/articleControls')
let help = require('../helpers/jwtAuth')

routes.get('/', (req, res) => {
  res.send('tod')
})


//login
routes.post('/login', user.login)

// create
routes.post('/api/users', user.signUp)
routes.post('/api/articles' ,help.verify,article.postArticle)

// get
routes.get('/api/users', user.getAllUser)
routes.get('/api/articles', article.getAllArticle)
routes.get('/api/articles/:id', article.getOneArticle)


module.exports = routes;