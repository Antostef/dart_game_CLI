const express   = require('express')
const router    = require('express').Router()


/////////////////////////////////////////////
// Deletes

router.delete(`/${id}`, function (req, res) {
    res.send('Hello World!')
})

//////////////////////////////////////////
// Gets

router.get(`/${id}/edit`, function (req, res) {
    res.send('Hello World!')
})

router.get(`/${id}`, function (req, res) {
    res.send('Hello World!')
})

router.get('/new', function (req, res) {
    res.send('Hello World!')
})

router.get('/', function (req, res) {
    res.send('Hello World! sur /players')
})

////////////////////////////////////////////
// Patchs

router.patch(`/${id}`, function (req, res) {
    res.send('Hello World!')
})

///////////////////////////////////////
// Posts

router.post('/', function (req, res) {
    res.send('Hello World!')
})


module.exports = router