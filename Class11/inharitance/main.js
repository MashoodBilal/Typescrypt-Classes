"use strict";
// Inharitance
//  Parrent child relation of classes
// Parrent class
class Person {
    constructor(name, age, adress) {
        this.name = name;
        this.age = age;
        this.adress = adress;
    }
}
// let person1 = new Person("john", 18, "Karachi")
// console.log(person1.name);
// child class
class Student extends Person {
    constructor(rollno, name, age, adress) {
        super(name, age, adress);
        this.rollno = rollno;
    }
}
// let student1 = new Student(1005, "Mashood Bilal", 28, "Karachi")
// console.log(student1);
// Further child class
class Topstudent extends Student {
    constructor(scholarship, rollno, name, age, adress) {
        super(rollno, name, age, adress);
        this.scholarship = scholarship;
    }
}
let topstudent1 = new Topstudent(true, 1005, "Mashood Bilal", 28, "Karachi");
console.log(topstudent1);
