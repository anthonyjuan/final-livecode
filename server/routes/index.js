let routes = require('express').Router()
let user = require('../controllers/userControls')

routes.get('/', (req, res) => {
  res.send('tod')
})


//login
routes.post('/login', user.login)

// create users
routes.post('/api/users', user.signUp)

// get users
routes.get('/api/users', user.getAllUser)


module.exports = routes;