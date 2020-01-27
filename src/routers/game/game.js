const express   = require('express')
const router    = require('express').Router()

router.delete('/{id}/shots/previous', function (req, res) {
    res.send('Hello World!')
})

router.post('/{id}/shots', function (req, res) {
    res.send('Hello World!')
})

router.delete('/{id}/players', function (req, res) {
    res.send('Hello World!')
})

router.post('/{id}/players', function (req, res) {
    res.send('Hello World!')
})

router.get('/{id}/players', function (req, res) {
    res.send('Hello World!')
})

router.get('/{id}/edit', function (req, res) {
    res.send('Hello World!')
})

router.patch('/{id}', function (req, res) {
    res.send('Hello World!')
})

router.delete('/{id}', function (req, res) {
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
    res.send('Hello World! sur /games')
})

module.exports = router