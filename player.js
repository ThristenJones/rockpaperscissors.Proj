let gameArray = require('./game');

class Player {
 constructor(name, array, results){
this.name = name
}

rockFunction(){
let rock = rock > scissors; 
rock += rock > lizzard 
return rock; 
}

paperFunction(){
    let paper = paper > rock; 
    paper += paper > spock; 
    return paper; 
}

scissorsFunction(){ 
    let scissors = scissors > paper; 
    scissors += scissors > lizzard; 
    return lizzard;  
}

lizzardFunction(){
    let lizzard = lizzard > spock; 
    lizzard += lizzard > paper; 
    return lizzard; 
}

spockFunction(){ 
let spock = spock > scissiors; 
spock += spock > rock; 
return spock; 
}
}

function winnerFunction(){
    let score = 0; 
    while(score < 3); {
    if(playerOne > playerTwo){
    console.log(playerOne.name + "Wins this round")
    score += 1; 
    }
    else if(playerTwo > playerOne){
    console.log(playerTwo.name + "Wins this round")
    score += 1; 
    }
    else{
    console.log("No Winner, please try again")  
    winnerFunction()
    } 
}
} 

printWinner(){
    if(playerOne === 3){
    console.log("Player One Wins!!")
    }
    else if(playerTwo === 3){
    console.log("Player Twon Wins!!")
    }
}


module.exports.player 


