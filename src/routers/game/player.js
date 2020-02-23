const express   = require('express')
const router    = express.Router()


/////////////////////////////////////////////
// Deletes

router.delete(`/:id`, function (req, res) {
    res.send('Hello World!')
})

//////////////////////////////////////////
// Gets

router.get(`/:id/edit`, function (req, res) {
    res.send('Hello World!')
})

router.get(`/:id`, function (req, res) {
    res.send('Hello World!')
})

router.get('/new', function (req, res) {
    res.send('Hello World!')
})

router.get('/', function (req, res) {
    res.render('player.html')
})

////////////////////////////////////////////
// Patches 

router.patch(`/:id`, function (req, res) {
    res.send('Hello World!')
})

///////////////////////////////////////
// Posts

router.post('/', function (req, res) {
    res.send('Hello World!')
})


module.exports = router