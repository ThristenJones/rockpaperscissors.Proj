class Player{
    constructor(){
        this.name = "";
        this.wins = 0;
        this.gestures = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
        this.chosenGestures = ""
    }

    selectGesture(){
        //make sure to include a selectGesture method!
    }
}

module.exports = Player;