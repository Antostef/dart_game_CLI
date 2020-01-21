class player {
    name = ""
    score = null
    constructor (n) {
        this.name = n
    }

    get_name () {
        return this.name    
    }

    set_score (score) {
        this.score = score
    }

    get_score () {
        return this.score
    }
}

module.exports = player