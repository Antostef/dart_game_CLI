const express       = require('express')
const app           = express()
const router        = require('express').Router()
const gameRouter    = require('./routers/game/game.js')
const playerRouter  = require('./routers/game/player.js')


router.use('/games', gameRouter)
router.use('/players', playerRouter)

router.get('/*', function (req, res) {
    res.send('Hello World!')
})

module.exports = router