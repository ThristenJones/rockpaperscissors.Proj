let gameFile = require('./game')

class Player{
    constructor(){
        this.name = "";
        this.wins = 0;
        this.gestures = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
        this.chosenGesture = ""
    }

    selectGesture(){
        //make sure to include a selectGesture method!
    }
}

module.exports.player = Player