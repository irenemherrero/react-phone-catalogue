require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = express.Router()
const app = express()
const phones = require('./phones.json')

app.use(cors())
app.use('/', router)
app.use('/images', express.static('images'))

/**
 * Get a phones list
 **/
router.get('/phones', (req, res) => {
  //adds response delay (configurable) for simulation purpose
  setTimeout(() => res.json(phones), process.env.PHONES_RESPONSE_DELAY || 0)
})

/**
 * Get API root
 **/
router.get('/', (req, res) => {
  res.send('<a href="/phones">phones API</a>')
})

module.exports = app
