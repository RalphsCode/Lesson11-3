console.log('JS is running');

// Same keys and values

// function createInstructor(firstName, lastName){
//   return {
//     firstName: firstName,
//     lastName: lastName
//   }
// }

/* Write an ES2015 Version */

const instructors = [];
const createInstructor = (firstName, lastName) => {
      return {
      firstName,
      lastName
    }
}

//----------------------------------------------------
// Computed Property Names

var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"

// /* Write an ES2015 Version */
const newInstructor = {
  firstName: "Ralph",
  [favoriteNumber]: 'That is my favorite'
}

//-----------------------------------------------------
// Object Methods

// var instructor = {
//   firstName: "Colt",
//   sayHi: function(){
//     return "Hi!";
//   },
//   sayBye: function(){
//     return this.firstName + " says bye!";
//   }
// }

/* Write an ES2015 Version */
const instructor2 = {
  firstName: "Colt",
  sayHi(){return 'Hi!';},
  sayBye(){return this.firstName + " says bye!";}
}

//------------------------------------------------------
// createAnimal Function

function createAnimal(species, sound, noise) {
  return {
    species,
    [sound]() {return `${species} says ${noise}`}
  }
}