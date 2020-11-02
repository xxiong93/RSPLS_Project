"use strict";

class Game{
    constructor(){
        this.playerOne = null;
        this.playerTwo = null;
        //game setup to create human or ai
        
        this.gesture = ["rock", "paper", "scissors", "lizard", "spock"];
    }
    playGame(){
        //display human v human or human v AI option
        let playerGesture;
        let choice = prompt("Would you like to play against another person or the program? Enter 'human' or 'machine'");
        if(choice === 'human'){
            //run human v human 
            let newPlayerOne = new Human("Steve Rogers");
            let newPlayerTwo = new Human("Sam Wilson");

            playerGesture = newPlayerOne.chooseGesture(this.gesture);
            playerGesture = newPlayerTwo.chooseGesture(this.gesture);


        }
        else if(choice === 'machine'){
            //run machine v machine
            let playerOne = new Human("Tony Stark");
            let playerTwo = new Machine("Ultron");
            playerGesture = newPlayerOne.chooseGesture(this.gesture);
            playerGesture = newPlayerOne.randomGesture(this.gesture);
        }

        
        //must run the game at least 3 times
            //keep track of points after each "game"
            //update point total and then re-run function
        //end game after 3 games
    
        
        gestureWinCondition(gestureOne, gestureTwo) 
            if(gestureOne === 'rock' && gestureTwo === 'scissors' || gestureOne === 'rock' && gestureTwo === 'lizard'){
                console.log("You win!");
                return true;
            }
            else if(gestureOne === 'scissors' && gestureTwo === 'paper' || gestureOne === 'scissors' && gestureTwo === 'lizard'){
                console.log("You win!");
                return true;
            }
            else if(gestureOne === 'paper' && gestureTwo === 'rock' || gestureOne === 'paper' && gestureTwo === 'spock'){
                console.log("You win!");
                return true;
            }
            else if(gestureOne === 'lizard' && gestureTwo === 'spock' || gestureOne === 'lizard' && gestureTwo === 'paper'){
                console.log("You win!");
                return true;
            }
            else if(gestureOne === 'spock' && gestureTwo === 'rock' || gestureOne === 'spock' && gestureTwo === 'scissors'){
                console.log("You win!");
                return true;
            }
            else{
                console.log("You lose. Better luck next time!");
                return false;
            }
        
        
    
    }
}
class Player{
    constructor(name){
        this.name = name;
        this.score = 0;
        this.gesture = ["rock", "paper", "scissors", "lizard", "spock"];
        
        
    }
    chooseGesture(gesture){
 
        let ask = prompt("What gesture do you choose? 0 = rock, 1 = paper, 2 = scissors, 3 = lizard, and 4 = spock");//could set gestures to numerical values for easier use
        let choice;//this is to access gesture from Player
        for(let i = 0; i < gesture.length; i++){
            choice = gesture[ask];
            return choice;
        }
    }
    randomGesture(gesture){
        
        let gestureFound;
        for(let i = Math.floor(Math.random()* 5);i < gesture.length; i++){
            gestureFound = gesture[i];
            return gestureFound;
        }
                
    }
}



class Human extends Player{
    constructor(name){
        super(name);
        
    }
    
}
class Machine extends Player{
    constructor(name){
        super(name);
    }
    
}

let game = new Game();
game.playGame();



    



