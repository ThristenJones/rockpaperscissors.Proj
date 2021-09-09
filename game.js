class Game{

    constructor(){
        this.player1 = new Human();
        this.player2 = null
    }

    // playerOne = new Human();
    begingGame(){
    }
    
    // make determination playerTwo = New Human or new AI
    choosePlayers(){
        let choice = prompt("Enter 1 to play with a friend or 2 to play against a computer ")
        switch(choice){
            case '1':
                this.player2 = new Human
        break;
             case '2':
                 this.player2 = new Ai
        break;
            default: 
        break;
        }
    }
    
    //playerTwo.selectGesture()
    playerTwo(){
        if(this.player = new Human){
            human.selectGesture();
        }

        else (this.player = new Ai)
            Ai.selectGesture();
        
    }
    
    //Rules
    rules(){
        console.log("Rock crushes Scissors. Scissors cuts Paper. Paper covers Rock. Rock crushes Lizard.  Lizard poisons Spock. Spock smashes Scissors. Scissors decapitates Lizard. Lizard eats Paper Paper disproves. Spock Spock vaporizes Rock")
    }
    
    //Select the game type
    
    //Battle- loop selectGesture, decide winner requirement met player1 or player2 get 2 win total
    
    //print winner
    
    //play again
    
    
    //rungame
}

module.exports.game = game