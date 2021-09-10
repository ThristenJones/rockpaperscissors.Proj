const Human = require('./human')
const AI = require ('./ai')


class Game{

    constructor(){
        this.player1 = new Human();
        this.player2 = null
    }

    // playerOne = new Human();
   

    // make determination playerTwo = New Human or new AI
    choosePlayers(){
        let choice = prompt("Enter 1 to play with a friend or 2 to play against the computer ")
        switch(choice){
            case '1':
                this.player2 = new Human();
        break;
             case '2':
                 this.player2 = new Ai();
        break;
            default: 
        break;
        }
    }
    
    //playerTwo.selectGesture()
    battle(){
    
    while(player1.wins < 3 && player2.wins < 3){
        
        this.player1.selectGesture();
        this.player2.selectGesture();

    

    if(this.player1.chosenGestures === "rock" && this.player2.chosenGestures === "scissors" ){
        console.log(`${player1.name} won this round`)
        this.player1.wins += 1
    }
        

    else if(this.player1.chosenGestures === "scissors" && this.player2.chosenGestures === "paper" ){
        console.log(`${player1.name} won this round`)
        this.player1.wins += 1
    }
    

    else if(this.player1.chosenGestures === "paper" && this.player2.chosenGestures === "rock"){
        console.log(`${player1.name} won this round`)
        this.player1.wins += 1
        }
       

    else if(this.player1.chosenGestures === "rock" && this.player2.chosenGestures === "lizard"){
        console.log(`${player1.name} won this round`)
        this.player1.wins += 1
        }

    else if(this.player1.chosenGestures === "lizard" && this.player2.chosenGestures === "spock"){
        console.log(`${player1.name} won this round`)
        this.player1.wins += 1
        }

    else if(this.player1.chosenGestures === "spock" && this.player2.chosenGestures === "scissors"){
        console.log(`${player1.name} won this round`)
        this.player1.wins += 1
        }

    else if(this.player1.chosenGestures === "scissors" && this.player2.chosenGestures === "lizard"){
        console.log(`${player1.name} won this round`)
        this.player1.wins += 1
        }

    else if(this.player1.chosenGestures === "lizzard" && this.player2.chosenGestures === "paper"){
        console.log(`${player1.name} won this round`)
        this.player1.wins += 1
        }

    else if(this.player1.chosenGestures === "paper" && this.player2.chosenGestures === "spock"){
        console.log(`${player1.name} won this round`)
        this.player1.wins += 1
        }

    else if(this.player1.chosenGestures === "spock" && this.player2.chosenGestures === "rock"){
        console.log(`${player1.name} won this round`)
        this.player1.wins += 1
        }

    else if(this.player1.chosenGestures === this.player2.chosenGestures){
        console.log("Tie game")
    }
        else{console.log(`${player2.name} won this round`)
    this.player2.wins += 1}
    }
    console.log("We have a winner");
}

    
    //Rules
    rules(){
        console.log("Rock crushes Scissors. Scissors cuts Paper. Paper covers Rock. Rock crushes Lizard.  Lizard poisons Spock. Spock smashes Scissors. Scissors decapitates Lizard. Lizard eats Paper Paper disproves. Spock Spock vaporizes Rock")
    }
    
    //Select the game type
    
    //Battle- loop selectGesture, decide winner requirement met player1 or player2 get 2 win total
    BattleLoop(){
        while(this.player1.wins < 3 && this.player2.wins < 3){
        
        this.player1.selectGesture();
        this.player2.selectGesture();
        }
    }
    //print winner
    printWinner(){
        if(this.player1.wins === 3){
            console.log(`${player1.name} wins the game!`)
        }

        else (this.player2.wins === 3)
            console.log(`${player2.name} wins the game!`)
        
    }
    
    //play again
    playAgain(){
        let usersChoice = prompt("Press 1 to restart or 2 to end game")
        let usersChoice = usersChoice.toLowerCase()
        if(usersChoice === "yes" || answer === "y" ){
        this.battle()
        }
        
    }
    
    
    //rungame
    runGame(){
        this.choosePlayers()
        this.battle()
        this.rules()
        this.printWinner()
        this.playAgain()
    }
}


module.exports = Game