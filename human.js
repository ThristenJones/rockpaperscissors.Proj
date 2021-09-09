let playerFile = require('./player');
const prompt = require ('prompt-sync')()

class Human extends Player{
    constructor(){
        super();
        this.name = prompt("what is your name?")
    }

    selectGesure(){
<<<<<<< HEAD
        let selectedGesture = +prompt("Enter 0 for rock, 1 for paper, 2 for scissors, 3 for lizzard, 4 for spock")
      this.chosenGesture = this.gestures[selectedGesture]  
=======
     let selectedGestures = +prompt("Enter o for rock, 1 for paper, 2 for scissors, 3 for lizzard, 4 for spock")
     players.gestures[selectedGesture]   
>>>>>>> ea5a33962568e9c1813f87b36e179866a5a7e8e5
    }
}