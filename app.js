const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('hello world')
})

module.exports = app;

// app.listen(3000)