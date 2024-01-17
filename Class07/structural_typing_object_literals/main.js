/*
#!

interface deal1{
    food: string;
}

interface deal2{
    food: string,
    drink: string
}

let waiter1: deal1 = {
    food: "briyani"
}

let waiter2: deal2 = {
    food: "pizza",
    drink: "dew"
}

// waiter1 = waiter2

// waiter2 = waiter1

*/
export {};
/*
function logName(something: { name: string }) {
    console.log(something.name);
}

var person = { name: 'matt', job: 'being awesome' };
var animal = { name: 'cow', diet: 'vegan, but has milk of own species' };
var random = { note: `I don't have a name property` };

logName(person); // okay
logName(animal); // okay
logName(random); // Error: property `name` is missing
*/
/*
interface Ball {
    diameter: number;
}

interface Sphere {
    diameter: number;
}
  
  let ball: Ball = { diameter: 10 };
  let sphere: Sphere = { diameter: 20 };
  
  sphere = ball;
  ball = sphere;

interface Tube {
    diameter: number;
    length: number;
  }
  
  let tube: Tube = { diameter: 12, length: 3 };
  
//   tube = ball;//Error
  ball = tube;
*/
/*
type Author = {
    firstName: string;
    lastName: string;
};

type Book = {
    author: Author;
    name: string;
};

const myBook : Book = {
    author: {
        firstName: "Zia",
        lastName: "Khan"
    },
    name: "My Best Book"
}

console.log(myBook.author.firstName)
*/
