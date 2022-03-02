const express = require('express')
const person = require('./person')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  console.log(person)
  res.send('Hello World!')
})

app.get('/new', (req, res) => {
  res.send('Hello to New World!')
})

app.get('/newnew', (req, res) => {
  res.send('Hello to New World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

