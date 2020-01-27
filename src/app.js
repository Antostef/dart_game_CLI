const express = require('express')
const app = express()

const db = {
    game: [
        {  
            id: number | string,  
            mode: 'around-the-world' | '301' | 'cricket',  
            name: string,  currentPlayerId: null | string | number,  
            status: 'draft' | 'started' | 'ended',  
            createdAt: datetime,
        }
    ],

    player: [
        {
            id: number | string,  
            name: string,  
            email: string, // Format email à valider  
            gameWin: number,  
            gameLost: number,  
            createdAt: datetime,
        }
    ],

    gameplayer: [
        {  id?: number | string, // Optionnel  
            playerId: number | string, // Le player doit exister  
            gameId: number | string, // La game doit exister  
            remainingShots: number | null, // Nombre de coup restant sur le tour de jeu  
            score: number,  rank: null | number, // La position de l'utilisateur à la fin de la partie  
            order: number | null, // NULL par défaut, mais un ordre aléatoire estassigné au démarrage de partie, commence à 0  
            createdAt: datetime,
        }
    ],

    gameshot: [
        {
            id: number | string, 
            gameId: number | string, 
            playerId: number | string, 
            multiplicator: number, // 1, 2, 3  
            sector: number, // BullEye = 25, en dehors = 0  
            createdAt: datetime,
        }        
    ]
}

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})