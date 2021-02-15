// Episode1 
// This will print 'Miss Scarlet'- because you are accessing the object-key. 


// Episode2 
//This will not work because you can't change the const variable.

// Episode3 
// 1, = Mrs. Peacock
// 2, = Professor Plum
// 'let' allows you to change the variable. That is why there is not errors
// The first one calls calls the function. The second variable does not. 

// Episode4
// 1, 'Miss Scarlet' 'Professor Plum' 'Colonel Mustard'
//-- Again this is because let can be changed and in the variable is calling the function. 

// 2, 'Mrs. Peacock' - This is because it doesn't call the variable "suspects". 


// Episode5 
// 1, 'Revolver' This will work because you are not trying to change the variable. You are changing a object key. This you can do in a const because it is a block-variable. 

//Episode6
// 1, 'Mrs White' I think this is because the 'let' can be change and the two murderers that are in the function are global variables. 

// Episode7 
//1, 'Mr. Green' I don't really know how this one works. It is like the 'let' over 'Colonel Mustard' is not allowing 'Miss Scarlet' to run. If the let was taken away the answer would be 'Miss Scarlet'. Really not sure how this one works

// Episode8 
//1, This would be 'Candle Stick'. Mainly because we change the object-variables at the start of the function. From there just follow the code. 

//Episode9
//1, The if statement is irrelevant but I really don't know why. So, the answer is 'Professor Plum'



const scenario = {
  murderers: "Harrison",
  room: "Bedroom",
  weapon: "pet Jaguar" 
}

const changeScenario = function() {
  scenario.room = "Study";

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = "Simon"
    }
  }
  plotTwist('Study')
} 

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);