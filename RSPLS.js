"use strict";

class Game{
    constructor(){
        this.playerOne = null;
        this.playerTwo = null;

        
        this.gesture = [new Gesture('rock','scissors', 'lizard'), new Gesture('paper', 'rock', 'spock'), new Gesture('scissors', 'paper', 'lizard'), new Gesture('lizard','spock','paper'), new Gesture('spock','scissors','rock')];
        
    }
    playGame(){

        //let playerOneOption;
        //let playerTwoOption;
        this.gameSetup();
        while(this.playerOne.score < 2 && this.playerTwo.score < 2){
                    
            let playerOneOption = this.playerOne.chooseGesture(this.gesture);
            let playerTwoOption = this.playerTwo.chooseGesture(this.gesture);
            let win = this.gestureWinCondition(playerOneOption, playerTwoOption);
        }
        if(this.playerOne.score > this.playerTwo.score){
            console.log("Player One wins!");
        }
        else{
            console.log("Player Two wins!");
        }
    }

    gameSetup(){
        let choice = prompt("Would you like to play against another person or the program? Enter 'human' or 'machine'");
        
        if(choice === 'human'){
        this.playerOne = new Human("Steve Rogers");
        this.playerTwo = new Human("Bucky Barnes");
        }
        else if(choice === 'machine'){
        this.playerOne = new Human("Tony Stark");
        this.playerTwo = new Machine("Ultron");
        }
        else{
            this.gameSetup();
        }
    }
    gestureWinCondition(playerOneGesture, playerTwoGesture){ 

        if(playerOneGesture.beats.includes(playerTwoGesture.name)){
            this.playerOne.score++;

        }
        else if(playerOneGesture.name === playerTwoGesture.name){

        }
        else{
            this.playerTwo.score++;
        }
    }

userValidation(valid){


}
}
class Player{
    constructor(name){
        this.name = name;
        this.score = 0;
        this.selectedGesture;
        
    }

}

class Human extends Player{
    constructor(name){
        super(name);
        
    }
    chooseGesture(gesture){
 
        let ask = prompt("What gesture do you choose? 1 = rock, 2 = paper, 3 = scissors, 4 = lizard, and 5 = spock");
        
        switch (ask) {
            case '1': 
            this.selectedGesture = gesture[0];
                return this.selectedGesture;
            case '2':
            this.selectedGesture = gesture[1];
                return this.selectedGesture;
            case '3':
            this.selectedGesture = gesture[2];
                return this.selectedGesture;
            case '4':
            this.selectedGesture = gesture[3];
                return this.selectedGesture;
            case '5':
            this.selectedGesture = gesture[4];
                return this.selectedGesture;
            default: 
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
    constructor(name,beatsOne,beatsTwo){
        this.name = name;
        this.beats = [beatsOne,beatsTwo];

    }


}
let game = new Game();
game.playGame();



    



