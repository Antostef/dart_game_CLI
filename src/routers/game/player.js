const express   = require('express')
const router    = require('express').Router()

router.get('/{id}/edit', function (req, res) {
    res.send('Hello World!')
})

router.delete('/{id}', function (req, res) {
    res.send('Hello World!')
})

router.patch('/{id}', function (req, res) {
    res.send('Hello World!')
})

router.get('/{id}', function (req, res) {
    res.send('Hello World!')
})

router.get('/new', function (req, res) {
    res.send('Hello World!')
})

router.post('/', function (req, res) {
    res.send('Hello World!')
})

router.get('/', function (req, res) {
    res.send('Hello World! sur /player')
})

module.exports = router