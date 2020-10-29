"use strict";
class Game{
    constructor(){
        this.playerOne = new Player();
        this.playerTwo = new Player();
        this.playerAi = new Machine();

        this.gesture = ["rock", "paper", "scissors", "lizard", "spock"];;
    }
    playGame(){
        //display human v human or human v AI option
        let ask = prompt("Would you like to play against another person or the program? Enter 'human' or 'machine'");
        if(ask === 'human'){
            //run human v human 
    
        }
        else if(ask === 'machine'){
            //run machine v machine
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
        
    }
    
}

class Human extends Player{
    constructor(name){
        super(name);
    }
    //chooseGesture(gesture);
    //add in a prompt to choose gesture that will be used
    //validate entry as an available gesture
    //
}

class Machine extends Player{
    constructor(name){
        super(name);
    }
    //randomGesture(gesture);
}

let player1 = new Human("Steve Irwin");
let player2 = new Human("Jeff Corwin");
let aiPlayer = new Machine("Robot");


function randomGesture(gesture){

    for(let i = Math.floor(Math.random()* 5);i < gesture.length; i++){
        console.log(gesture[i]);
        return;
    }
    
}

function chooseGesture(gesture){
 
    let ask = prompt("What gesture do you choose? 'rock', 'paper', 'scissors', 'lizard', or 'spock'");
    let choice = "";
    if(ask === 'rock' || ask === 'paper' || ask === 'scissors' || ask === 'lizard' || ask === 'spock'){
        choice = ask;
        return choice;
    }
    else{
        chooseGesture(choice);
        return; //validate gesture choice and prompt again
    }
    
}
chooseGesture();
function gestureWinCondition(gestureOne, gestureTwo){
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
