const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('hello world is running ')
})

module.exports = app;