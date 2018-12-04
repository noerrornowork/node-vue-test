const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const router = require('./router')

const app = express()

app.engine('html', require('express-art-template'))
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', path.join(__dirname, '../index.html'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(router)

app.listen(3030, () => {
  console.log('Your application is running at port 3030...')
})