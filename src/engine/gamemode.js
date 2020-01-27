// Constructor for the game
class gamemode {
    name = ""
    rules = ""
    goal = null

    constructor(n, d, g) {
        this.name = n
        this.rules = d
        this.goal = g
    }

    get_name () {
        return this.name
    }

    get_rules() {
        return this.rules
    }

    get_goal() {
        return this.goal
    }
}

module.exports = gamemode