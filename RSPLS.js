"use strict";

class Animal{

    constructor(species, name){
        this.species = species;
        this.name = name;


    }

    animalType(name){
        let creatures = ["dog", "weasel", "bear"];
        let creatureName;
        for(let i = Math.floor(Math.random()*5); i < creatures.length; i++){
            if(i === 0 || i  === 1 ){
                return creatureName = name;
            }
            else{
                return false;
            }
        }
    }
}
let feline = new Animal("pantherTigris", "tiger");
let canine = new Animal("dogCanines", "wolf");
console.log(feline);
//Everything above this line is test code
class Player{
    constructor(name,gesture){
        this.name = name;
        this.score = 0;
        this.gesture = gesture;
    }
    gesture = ["rock", "paper", "scissors", "lizard", "spock"];
}

class Human extends Player{
    constructor(name){
        super(name);
    }
    chooseGesture(gesture);
    //add in a prompt to choose gesture that will be used
    //validate entry as an available gesture
    //
}

class Machine extends Player{
    constructor(name){
        super(name);
    }
    randomGesture(gesture);
}

let player1 = new Human("Steve Irwin");
let player2 = new Human("Jeff Corwin");
let aiPlayer = new Machine("Robot");

function playerShoot(){


}

function randomGesture(gesture){
    gesture = ["rock", "paper", "scissors", "lizard", "spock"];

    for(let i = Math.floor(Math.random()* 5);i < gestures.length; i++){
        console.log(gestures[i]);
        return;
    }
    
}

function chooseGesture(gesture){
    gesture = ["rock", "paper", "scissors", "lizard", "spock"];
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

function playGame(){
    //display human v human or human v AI option
    //must run the game at least 3 times
        //keep track of points after each "game"
        //update point total and then re-run function
    //end game after 3 games


}

