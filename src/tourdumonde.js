const game = require('./game.js')
const player = require('./player.js')

class tourdumonde extends game {
    constructor() {
        super("Le tour du monde",
        "Les joueurs lancent à tour de role trois flechettes chacun, envisant des secteurs spécifiques en commencant par 1, et en passant au suivant une fois que vous l'avez touché. Chaque partie du secteur compte (y compris les doubles et les triples). Chaque joueur doit frapper son secteur dans l'ordre croissant. Vous ne pouvez donc pas passer au secteur suivant tant que vous n'avez pas atteint celui que vous visez actuellement. La première personne à \"faire le tour du monde\" (atteindre tous les numéros, de 1 à 20) est la gagnante. Les multiplicateurs ne sont bien évidemment pas pris en compte",
        20)
    }

    setup (players) {
        players.forEach(player => {
            player.score = 1
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
        let diff = 20
        let player_score = player.get_score()

        if (score == (player_score +1) && score != 20) {
            player.set_score(score)
            diff -= player.get_score()
            console.log(`Well done ${player.get_name()} ! Your score is now ${player.get_score()}, ${diff} to go !`)
            return player
        }
        else if (score == (player_score +1) && score == 20) {
            player.set_score(score)
            console.log(`Well done ${player.get_name()} ! Your score is now ${player.get_score()}.`)
            return player
        }
        else {
            console.log(`Dang ${player.get_name()} ! You missed ! Better luck next time ! Your score is still ${player.get_score()}.`)
            return player 
        }
    }
}

module.exports = tourdumonde