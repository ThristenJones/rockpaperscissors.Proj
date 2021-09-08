let playerFile = require('./player');

const prompt = require('prompt-sync')();

class Human extends Player {
    constuctor(name, array, results)
    super(name)
}


choiceFuncttion()
let userInput = prompt("choose 'rock',  'paper',  'scissors', 'lizard', or 'spock?'");
switch (usersInput) {
    case 'rock':
        rockFunction()
        break;
        case 'paper':
            paperFunction()
            break;
            case 'scissors':
        sicissorsFunction()
        break;
        case 'lizzard':
        lizzardFunction()
        break;
        case 'spock':
        spockFunction()
        break;
    default:
        break;

        usersInput = usersInput.toLowerCase(); 
}


module.exports.human 