"use strict";

class Game{
    constructor(){
        this.playerOne = null;
        this.playerTwo = null;
        //game setup to create human or ai
        
        this.gesture = ["rock", "paper", "scissors", "lizard", "spock"];
        this.winner = null;
    }
    playGame(){
        //display human v human or human v AI option
        let playerOneGesture;
        let playerTwoGesture;
        let choice = prompt("Would you like to play against another person or the program? Enter 'human' or 'machine'");
        if(choice === 'human'){
            //run human v human 
            this.newPlayerOne = new Human("Steve Rogers");
            this.newPlayerTwo = new Human("Sam Wilson");

            playerOneGesture = this.newPlayerOne.chooseGesture(this.gesture);
            playerTwoGesture = this.newPlayerTwo.chooseGesture(this.gesture);
            checkGestures(playerOneGesture, playerTwoGesture);


        }
        else if(choice === 'machine'){
            //run machine v machine
            this.newPlayerOne = new Human("Tony Stark");
            this.newPlayerTwo = new Machine("Ultron");
            
            playerOneGesture = this.newPlayerOne.chooseGesture(this.gesture);
            playerTwoGesture = this.newPlayerTwo.randomGesture(this.gesture);
        }

        
        //must run the game at least 3 times
            //keep track of points after each "game"
            //update point total and then re-run function
        //end game after 3 games
    
        
        
        
        
    
    }
}
class Player{
    constructor(name){
        this.name = name;
        this.score = 0;
        this.selectedGesture;
        
        
    }
    checkGestures(gestureOne, gestureTwo){
        let check = gestureWinCondition(gestureOne, gestureTwo);
        return check;

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
    chooseGesture(gesture){
 
        let ask = prompt("What gesture do you choose? 0 = rock, 1 = paper, 2 = scissors, 3 = lizard, and 4 = spock");//could set gestures to numerical values for easier use
        
        for(let i = 0; i < gesture.length; i++){
            this.selectedGesture = gesture[ask];
            return this.selectedGesture;
        }
    }
    gestureWinCondition(gestureOne, gestureTwo){ 
        if(gestureOne === 'rock' && gestureTwo === 'scissors' || gestureOne === 'rock' && gestureTwo === 'lizard'){
            
            return true;
        }
        else if(gestureOne === 'scissors' && gestureTwo === 'paper' || gestureOne === 'scissors' && gestureTwo === 'lizard'){
            
            return true;
        }
        else if(gestureOne === 'paper' && gestureTwo === 'rock' || gestureOne === 'paper' && gestureTwo === 'spock'){
            
            return true;
        }
        else if(gestureOne === 'lizard' && gestureTwo === 'spock' || gestureOne === 'lizard' && gestureTwo === 'paper'){
            
            return true;
        }
        else if(gestureOne === 'spock' && gestureTwo === 'rock' || gestureOne === 'spock' && gestureTwo === 'scissors'){
            
            return true;
        }
        else{
            
            return false;
        }
    }
    
}
class Machine extends Player{
    constructor(name){
        super(name);
    }
    chooseGesture(gesture){
 
        let ask = prompt("What gesture do you choose? 0 = rock, 1 = paper, 2 = scissors, 3 = lizard, and 4 = spock");//could set gestures to numerical values for easier use
        
        for(let i = 0; i < gesture.length; i++){
            this.selectedGesture = gesture[ask];
            return this.selectedGesture;
        }
    }
    gestureWinCondition(gestureOne, gestureTwo){ 
        if(gestureOne === 'rock' && gestureTwo === 'scissors' || gestureOne === 'rock' && gestureTwo === 'lizard'){
            
            return true;
        }
        else if(gestureOne === 'scissors' && gestureTwo === 'paper' || gestureOne === 'scissors' && gestureTwo === 'lizard'){
            
            return true;
        }
        else if(gestureOne === 'paper' && gestureTwo === 'rock' || gestureOne === 'paper' && gestureTwo === 'spock'){
            
            return true;
        }
        else if(gestureOne === 'lizard' && gestureTwo === 'spock' || gestureOne === 'lizard' && gestureTwo === 'paper'){
            
            return true;
        }
        else if(gestureOne === 'spock' && gestureTwo === 'rock' || gestureOne === 'spock' && gestureTwo === 'scissors'){
            
            return true;
        }
        else{
            
            return false;
        }
    }
}

let game = new Game();
game.playGame();

// let testPlayer = new Human("rick");
// let testPlayerOne = new Human("james");
// // testPlayer.chooseGesture('rock');
// // testPlayerOne.chooseGesture('scissors');
// testPlayer.checkGestures('rock', 'scissors');

    



