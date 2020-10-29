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
function animalCall(species, name){
    

}
//Everything above this line is test code
class Player{
    constructor(name, gesture){
        this.name = name;
        this.score = 0;
        this.gesture = gesture;
    }
    
}

class Human extends Player{
    constructor(name){
        super(name);
    }
    //add in a prompt to choose gesture that will be used
    //validate entry as an available gesture
    //
}

class Machine extends Player{
    constructor(name){
        super(name);
    }
}

let player1 = new Human("Bob");

let gestures = ["rock", "paper", "scissors", "lizard", "spock"];