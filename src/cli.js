#!/usr/bin/env node
// imports

const inquirer       = require("inquirer");
const chalk          = require("chalk");
const figlet         = require("figlet");

const db            = require('./db')
const tourdumonde   = require('./engine/gamemodes/around_the_world.js')
const troiscentun   = require('./engine/gamemodes/three_hundred_one.js')
const cricket       = require('./engine/gamemodes/cricket.js')
const player        = require('./engine/player.js')

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Main function
// TODO: refactoring of player and shot loop to be their own functions()
// TODO: handle errors in the user input

const run = async () => {
    // variables
    let i = 1
    let players = []
    let bool_rules = false
    let gametype
    
    
    //show script introduction
    await hello()
    await db()
    // Initializing the game
    init_questions = await init()

    while (i <= parseInt(init_questions.NUMBER_OF_PLAYERS)) {
        player_name = await individual_player(i)
        pn = new player(player_name.NAME)
        players.push(pn)
        i += 1
    }

    if (init_questions.GAMETYPE === "le tour du monde") {
        gametype = new tourdumonde()

        // Game description if needed
        bool_rules = await rules()
        if (bool_rules.BOOL_RULES) { console.log(gametype.get_rules()) }

        around_the_world(players, gametype)
    }
    else if (init_questions.GAMETYPE === "le 301") {
        gametype = new troiscentun()

        // Game description if needed
        bool_rules = await rules()
        if (bool_rules.BOOL_RULES) { console.log(gametype.get_rules()) }

        three_hundred_one(players, gametype)
    }
    else if (init_questions.GAMETYPE === "le cricket") {
        gametype = new cricket()
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Initialization

const hello = async () => {
    console.log(
        chalk.blue(
            figlet.textSync("Flechette CLI", {
                font: "Larry 3D",
                horizontalLayout: "default",
                verticalLayout: "default"
            })
        )
    );
}

const init = () => {
    const question =
        [
            {
                name: "GAMETYPE",
                type: "list",
                message: "What gametype will you play today ?",
                choices: ["le tour du monde", "le 301", "le cricket"]
            },
            {
                name: "NUMBER_OF_PLAYERS",
                type: "input",
                message: "How many players are there ?",
                validate: async (number) => {
                    if (number < 2 || isNaN(number)) {
                        console.log("\n\n There needs to be at least 2 people to play, sorry you lonely lonely man :( \n")
                        return false
                    }
                    return true;
                }
            }
        ]

    return inquirer.prompt(question);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Shared functions

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Shared questions

const individual_player = (number) => {
    const question =
    {
        name: "NAME",
        type: "input",
        message: `What's player ${number} name ?`,
        validate: async(input) => {
            if(!input) {
                console.log("\n\n The input must not be empty. \n")
                return false
            }
            return true
        }
    }

    return inquirer.prompt(question)
}

const rules = () => {
    const question =
    {
        name: "BOOL_RULES",
        type: "confirm",
        message: "Do you want to see the rules for this gametype ?",
    }

    return inquirer.prompt(question)
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Around the world code

const around_the_world = async (players, gametype) => {
    // Variables
    let player_i = 0
    let shot_i = 0
    let is_won = false
    let shot_score

    // Initialize
    players = shuffle(gametype.setup(players))

    // boucle tant que la partie n'est pas finie
    while (!is_won) {
        // Faire le compteur pour chaque joueur
        while (player_i < players.length && !is_won) {
            console.log(`\n It's ${players[player_i].get_name()}'s turn ! \n You need to make a ${players[player_i].get_score()+1} to go further ! \n`)
            // Faire le compteur pour chaque tire de chaque joueur
            while (shot_i < 3 && !is_won) {
                // faire l'inquirer prompt, Verifier le score a chaque iteration pour verifier que la partie n'est pas finie.
                shot_score = await around_the_world_question(players[player_i], shot_i)
                players[player_i] = gametype.play(players[player_i], shot_score)
                is_won = gametype.goal_is_reach(players[player_i], gametype)
                shot_i += 1
            }
            player_i += 1
            shot_i = 0
        }
        player_i = 0
    }

    // demander s'ils veulent refaire une partie avec ce mode de jeu ou pas
    // if (is_won) {}
}

const around_the_world_question = (player, shot_number) => {
    const question =
    {
        name: "SHOT",
        type: "input",
        message: `What's ${player.get_name()} result for his shot number ${shot_number + 1} ?`,
        validate: async (number) => {
            if (number < 1 || number > 20 || isNaN(number) || !number) {
                console.log("\n\n The input must be a number between 1-20. \n")
                return false
            }
            return true;
        }
    }

    return inquirer.prompt(question)
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Three hundred one code

// TODO: handle errors in the user input
const three_hundred_one = async (players, gametype) => {
    // Variables
    let player_i = 0
    let shot_i = 0
    let is_won = false
    let shot_score

    // Initialize
    players = shuffle(gametype.setup(players))

    // boucle tant que la partie n'est pas finie
    while (!is_won) {
        // Faire le compteur pour chaque joueur
        while (player_i < players.length && !is_won) {
            console.log(`\n It's ${players[player_i].get_name()}'s turn ! \n`)
            // Faire le compteur pour chaque tire de chaque joueur
            while (shot_i < 3 && !is_won) {
                // faire l'inquirer prompt, Verifier le score a chaque iteration pour verifier que la partie n'est pas finie.
                shot_score = await three_hundred_one_question(players[player_i], shot_i)
                players[player_i] = gametype.play(players[player_i], shot_score)
                is_won = gametype.goal_is_reach(players[player_i], gametype)
                shot_i += 1
            }
            player_i += 1
            shot_i = 0
        }
        player_i = 0
    }

    // demander s'ils veulent refaire une partie avec ce mode de jeu ou pas
    // if (is_won) {}
}

const three_hundred_one_question = (player, shot_number) => {
    let question =
        [
            {
                name: "SHOT",
                type: "input",
                message: `What's ${player.get_name()} result for his shot number ${shot_number + 1} ?`,
                validate: async (number) => {
                    if (number < 1 && number > 20 || isNaN(number) || !number) {
                        // TODO: if (25)
                        console.log("\n\n The input must be between 1-20 or 25 if you've hit bullseye, and nothing else. \n")
                        return false
                    }
                    return true;
                }
            },
            {
                name: "MULTIPLE",
                type: "list",
                message: "What was the multiple ?",
                choices: [1, 2, 3]
            }
        ]

    return inquirer.prompt(question)
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// RUN

run();
