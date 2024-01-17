/*
class Person {
    name:string = "Alex"; // must define innitially
    age:number = 22;      // check line 20. use esclamation mark  
    constructor(name:string, age:number) {
        this.name = name;
        this.age = age
        console.log(this)
    }
}

let alex = new Person("Alex", 23)
let hamza = new Person("Hamza", 27)

console.log(alex)
console.log(hamza)
*/
/*
class Person {
    name! :string
}
*/
/*
class GoodGreeter {
    readonly name: string = "Hello"; // cannot be changed
  }
//  OR
class GoodGreeters {
    readonly name:string;
    constructor(){
        this.name = "Hello";
    }
}
*/
/*
// Functions in class
class Greeters {
    readonly name:string;
    constructor(){
        this.name = "Mashood";
    }
    greet(){
        console.log(`Hello ${this.name}`)
    }

}
let person = new Greeters()
person.greet()
*/

// inharitance
//example
/*class student{
    name:string = "Mashood";
    roll_No:number = 20;
    constructor(name:string,roll_No:number){
        this.name = name;
        this.roll_No = roll_No;
    }
}
class Teacher {
    name:string
    salary:number
    constructor(name:string,salary:number){
        this.name = name;
        this.salary = salary;
    }
}
*/
//actual
class Person{
    name:string;
    constructor(name:string){this.name = name}
}

class Student extends Person {
    roll_No:number = 20;
    constructor(name:string, roll_No:number){
        super(name)
        this.roll_No = roll_No;
        
    }
}
class Teacher extends Person {
    salary:number
    constructor(name:string, salary:number){
        super(name)
        this.salary = salary;
    }
}

let std1 = new Student("Mashood", 4211)
console.log(std1);
let tea1 = new Teacher("Bilal", 45000)
console.log(tea1);

