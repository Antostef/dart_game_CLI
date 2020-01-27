const express   = require('express')
const router    = require('express').Router()
const app       = express()

app.get('/{id}/edit', function (req, res) {
    res.send('Hello World!')
})

app.delete('/{id}', function (req, res) {
    res.send('Hello World!')
})

app.patch('/{id}', function (req, res) {
    res.send('Hello World!')
})

app.get('/{id}', function (req, res) {
    res.send('Hello World!')
})

app.get('/new', function (req, res) {
    res.send('Hello World!')
})

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.post('/', function (req, res) {
    res.send('Hello World!')
})

module.exports = router