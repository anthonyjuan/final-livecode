let routes = require('express').Router()
let user = require('../controllers/userControls')

routes.get('/', (req, res) => {
  res.send('tod')
})

// create users
routes.post('/users', user.signUp)

module.exports = routes;