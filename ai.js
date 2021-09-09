const Player = require("./Player");


<<<<<<< HEAD
class Ai extends Player {
    constuctor(name){
    super(name)
}
}


=======
class AI extends Player{
    constructor(){
        super();
        this.name = "Computer";
    }
>>>>>>> 07cd316554ab3f38bc51b6f35423fcccc2fdaa21

    selectGesture(){
        let rand = Math.floor(Math.random()* this.gestures.length);
        this.chosenGestures = this.gestures[rand];
    }
}
