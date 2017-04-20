let routes = require('express').Router()
let user = require('../controllers/userControls')
let article = require('../controllers/articleControls')

routes.get('/', (req, res) => {
  res.send('tod')
})


//login
routes.post('/login', user.login)

// create
routes.post('/api/users', user.signUp)
routes.post

// get
routes.get('/api/users', user.getAllUser)


module.exports = routes;