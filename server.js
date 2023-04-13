// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')


// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))
app.use(express.static('public'))



// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to Plans!!!')
  })


// bakers 
const plansController = require('./controllers/plans_controller.js')
app.use('/plans', plansController)

//404 Page
app.get('*', (req, res) => {
  res.send('404')
})





mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => { console.log('connected to mongo: ', process.env.MONGO_URI) })
.catch((error) => { console.log(error) });


// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT)})