let playerFile = require('./player');
const prompt = require ('prompt-sync')()

class Human extends Player{
    constructor(){
        super();
        this.name = prompt("what is your name?")
    }

    selectGesure(){
        let selectedGesture = +prompt("Enter 0 for rock, 1 for paper, 2 for scissors, 3 for lizzard, 4 for spock")
      this.chosenGesture = this.gestures[selectedGesture]  
    }
}

    module.exports.human = human