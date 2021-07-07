const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const passwordGenerator = require('./password_generator')
// const bodyParser = require('body-parser')

const app = express()
const port = 3000


//Template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const password = passwordGenerator(req.body)
  res.render('index', { password: password, options: options })
})

app.listen(port, () => {
  console.log(`Express is listen on localhost:${port}`)
})