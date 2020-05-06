const express = require('express')
const cors = require('cors')
const router = express.Router()
const app = express()
const phones = require('./phones.json')

app.use(cors())
app.use('/', router)

router.get('/phones', (req, res) => {
  res.json(phones)
})

router.get('/', (req, res) => {
  res.send('<a href="/phones">phones API</a>')
})

module.exports = app
