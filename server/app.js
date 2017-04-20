let express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    index = require('./routes/index'),
    app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())


app.use('/',index)

mongoose.connect('mongodb://localhost/CMS')
mongoose.connection.on('connected', () => {
  console.log('mongoose is connected');
})
app.listen(3000, () => {
  console.log('Express is running');
})