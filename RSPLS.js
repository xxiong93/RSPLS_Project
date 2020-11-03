"use strict";

class Game{
    constructor(){
        this.playerOne = null;
        this.playerTwo = null;
        //game setup to create human or ai
        
        this.gesture = [new Gesture('rock','scissors', 'lizard'), new Gesture('paper', 'rock', 'spock'), new Gesture('scissors', 'paper', 'lizard'), new Gesture('lizard','spock','paper'), new Gesture('spock','scissors','rock')];
        
    }
    playGame(){
        //display human v human or human v AI option
        let playerOneOption;
        let playerTwoOption;
         
        //add loop here
            playerOneOption = this.playerOne.chooseGesture(this.gesture);
            playerTwoOption = this.playerTwo.chooseGesture(this.gesture);
            let win = this.playerOne.gestureWinCondition(playerOneOption, playerTwoOption);
       
        //must run the game at least 3 times
            //keep track of points after each "game"
            //update point total and then re-run function
        //end game after 3 games      
    }

    gameSetup(){
        let choice = prompt("Would you like to play against another person or the program? Enter 'human' or 'machine'");
        if(choice === 'human'){
        this.playerOne = new Human("Steve Rogers");//put in a gameSetup method
        this.playerTwo = new Human("Sam Wilson");//put in a gameSetup method
        }
        else if(choice === 'machine'){
        this.playerOne = new Human("Tony Stark");//put in a gameSetup method
        this.playerTwo = new Machine("Ultron");//put in a gameSetup method
        }
    }
    gestureWinCondition(playerOneGesture, playerTwoGesture){ 

        if(playerOneGesture.beats.contains(playerTwoGesture.name)){
            this.playerOne.score++;

        }
        else if(playerOneGesture.name === playerTwoGesture.name){

        }
        else{
            this.playerTwo.score++;
        }
    }
}
class Player{
    constructor(name){
        this.name = name;
        this.score = 0;
        this.selectedGesture;
        
        
    }
    
    compareGestures(playerOne, playerTwo){
        let check = gestureWinCondition(playerOne, playerTwo);
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
 
        let ask = prompt("What gesture do you choose? 1 = rock, 2 = paper, 3 = scissors, 4 = lizard, and 5 = spock");
        
        switch (ask) {
            case '1': //do this for 1-5
            this.selectedGesture = gesture[0];
                break;
            case '2':
            this.selectedGesure = gesture[1];
                break;
            case '3':
            this.selectedGesure = gesture[2];
                break;
            case '4':
            this.selectedGesure = gesture[3];
                break;
            case '5':
            this.selectedGesure = gesture[4];
                break;
            default: //if no cases are hit, do chooseGesture again
                return this.chooseGesture(gesture);
        }

        
    }

}
    

class Machine extends Player{
    constructor(name){
        super(name);
    }
    chooseGesture(gesture){
 
        let gestureFound;
        let i = Math.floor(Math.random()* gesture.length);
            gestureFound = gesture[i];
            return gestureFound;
    }   
}



class Gesture {
    contsructor(name,beatsOne,beatsTwo){
        this.name = name;
        this.beats = [beatsOne,beatsTwo];

    }


}
let game = new Game();
game.playGame();



    



