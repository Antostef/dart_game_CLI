const express       = require('express')
const router        = express.Router()
const folder        = "players/"
const player_model  = require('../../models/Player')

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

router.get('/', async (req, res) => {
    let players = await player_model.find()
    res.format({
        html: () => {
            res.render(`${folder}player.html`)
        },
        json: () => {
            res.send(players)
        }
    })
    
})

////////////////////////////////////////////
// Patches 

router.patch(`/:id`, function (req, res) {
    res.send('Hello World!')
})

///////////////////////////////////////
// Posts

router.post('/', async (req, res) => {

    

    let name            = req.body.name
    let email           = req.body.email
    let latest_player   = await player_model.find()
                                            .limit(1)
                                            .sort({['id']: -1})

    let latest_id = !!latest_player[0].id ? latest_player[0].id + 1 : 1

    let new_player = await new player_model({id:latest_id,
                                            name,
                                            email})
    
    new_player.save()

    res.format({
        html: () => {
            res.redirect(`/players/${new_player.id}`)
        },
        json: () => {
            res.status(201)
            .send(new_player)
        }
    })
})


module.exports = router