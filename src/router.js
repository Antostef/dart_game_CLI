const express       = require('express')
const app           = express()
const router        = express.Router()
const gameRouter    = require('./routers/game/game.js')
const playerRouter  = require('./routers/game/player.js')




router.use('/games', gameRouter)
router.use('/players', playerRouter)

router.get('/', function(req, res) {
    res.redirect(303, 'games')
});

router.get('/*', function (req, res) {
    res.status(404)
    res.end()
    res.render('index.html')
})

module.exports = router