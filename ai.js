let playerFile = require('./player');
const Player = require("./Player");


class Ai extends Player{
    constructor(){
        super();
        this.name = "Computer";
    }

    selectGesture(){
        let rand = Math.floor(Math.random()* this.gestures.length);
        this.chosenGesture = this.gestures[rand];
    }
}

