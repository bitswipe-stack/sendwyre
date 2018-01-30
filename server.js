const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.engine('html', require('ejs').renderFile)

app.set(express.static(path.join(__dirname, '/views')))
app.set('view engine', 'html')
app.use('/assets', express.static(path.join(__dirname, '/assets')))
app.use('/cdn-cgi', express.static(path.join(__dirname, '/cdn-cgi')))
app.use('/css', express.static(path.join(__dirname, '/css')))
app.use('/js', express.static(path.join(__dirname, '/js')))
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (request, response) => {
  response.render('index')
})

app.get('/about', (request, response) => {
  response.render('about')
})

app.get('/api', (request, response) => {
  response.render('api')
})

app.get('/areas', (request, response) => {
  response.render('areas')
})

app.get('/business', (request, response) => {
  response.render('business')
})

app.get('/dashboard', (request, response) => {
  response.render('dashboard')
})

app.get('/exchange-rates', (request, response) => {
  response.render('exchange-rates')
})

app.get('/individual', (request, response) => {
  response.render('individual')
})

app.get('/privacy-policy', (request, response) => {
  response.render('privacy-policy')
})

app.get('/security', (request, response) => {
  response.render('security')
})

app.get('/user-agreement', (request, response) => {
  response.render('user-agreement')
})

const server = app.listen(process.env.PORT || 5000, () => {
  console.info('Server running at http://0.0.0.0:' + server.address().port)
})
