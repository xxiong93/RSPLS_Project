"use strict";
class Game{
    constructor(){
        this.playerOne = null;
        this.playerTwo = null;
        //game setup to create human or ai
        
        //this.gesture = ["rock", "paper", "scissors", "lizard", "spock"];
    }
    playGame(){
        //display human v human or human v AI option
        let choice = prompt("Would you like to play against another person or the program? Enter 'human' or 'machine'");
        let playerGesture;
        if(choice === 'human'){
            //run human v human 
            this.playerOne = new Human("Steve Rogers");
            this.playerTwo = new Human("Sam Wilson");
            playerGesture = playerOne.chooseGesture(this.gesture);
            playerGesture = playerTwo.chooseGesture(this.gesture);


        }
        else if(choice === 'machine'){
            //run machine v machine
            this.playerOne = new Human("Tony Stark");
            this.playerTwo = new Machine("Ultron");
            playerGesture = playerOne.chooseGesture(this.gesture);
            playerGesture = Machine.randomGesture(this.gesture);
        }

        
        //must run the game at least 3 times
            //keep track of points after each "game"
            //update point total and then re-run function
        //end game after 3 games
    
        
        gestureWinCondition(gestureOne, gestureTwo)
            if(gestureOne === 'rock' && gestureTwo === 'scissors' || gestureOne === 'rock' && gestureTwo === 'lizard'){
                console.log("You win!");
            }
            else if(gestureOne === 'scissors' && gestureTwo === 'paper' || gestureOne === 'scissors' && gestureTwo === 'lizard'){
                console.log("You win!");
            }
            else if(gestureOne === 'paper' && gestureTwo === 'rock' || gestureOne === 'paper' && gestureTwo === 'spock'){
                console.log("You win!");
            }
            else if(gestureOne === 'lizard' && gestureTwo === 'spock' || gestureOne === 'lizard' && gestureTwo === 'paper'){
                console.log("You win!");
            }
            else if(gestureOne === 'spock' && gestureTwo === 'rock' || gestureOne === 'spock' && gestureTwo === 'scissors'){
                console.log("You win!");
            }
            else{
                console.log("You lose. Better luck next time!");
            }
        
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
 
        let choice = prompt("What gesture do you choose? 1 = rock, 2 = paper, 3 = scissors, 4 = lizard, and 5 = spock");//could set gestures to numerical values for easier use
        //this is to access gesture from Player
            return choice;
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


class Machine extends Player{
    constructor(name){
        super(name);
    }
    
}


game.playGame();



    



