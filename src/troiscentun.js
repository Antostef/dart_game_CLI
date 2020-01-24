const game = require('./game')

class troiscentun extends game {
    constructor() {
        super(
            "Le 301",
            "Chaque joueur commence avec un score initial de 301. Chacun leur tour,les joueur vont lancer trois fléchettes afin de baisser leur score. A chaque fléchette, on soustrait le score obtenu par la fléchettes du joueur à son score. Les multiplicateurs sont pris en compte dans le décompte du score. Le premier joueur qui arrive exactement à zéro a gagné. Si un joueur réalise plus de points qu'il n'en reste à soustraire, son tour n'est pas pris en compte. Attention, il faut absolument atteindre zéro en terminant par un double (On ne peut donc pas finir son tour avec un score égal à 1)",
            0
        )
    }

    setup (players) {
        players.forEach(player => {
            player.score = 301
        });

        return players
    }

    goal_is_reach (player, gametype) {
        if (player.score == gametype.get_goal()) {
            console.log(`The game has ended and the winner is ${player.get_name()} ! Congratulation you won internet points.`)
            return true
        }
        else {
            return false
        }
    }

    play (player, score) {
        // Variables
        let player_score    = player.get_score()
        let shot            = parseInt(score.SHOT)
        let multiple        = parseInt(score.MULTIPLE)
        let new_score 

        new_score = player_score - (shot*multiple)
        if (new_score > 1) {
            player.set_score(new_score)
            console.log(`Well done ${player.get_name()} ! Your score is now ${player.get_score()}.`)
            return player
        }
        else if (new_score == 0 && multiple == 2) {
            player.set_score(new_score)
            console.log(`Well done ${player.get_name()} ! Your score is now ${player.get_score()}.`)
            return player
        }
        else {
            console.log(`Dang ${player.get_name()} ! You have to win with a perfect zero with a multiplicator of 2 to win ! So it can't be 1 either. Your score is still ${player.get_score()}.`)
            return player
        }
    }
}

module.exports = troiscentun