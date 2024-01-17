// Inharitance
//  Parrent child relation of classes
// Parrent class
class Person{
    name!: string; /* ! means must contain value. ? meas might contain value */
    age:number;
    adress: string | undefined;
    constructor(name:string,age:number,adress:string){
        this.name = name;
        this.age = age;
        this.adress = adress;
    }
}

// let person1 = new Person("john", 18, "Karachi")
// console.log(person1.name);

// child class
class Student extends Person{
    rollno:number;
    constructor(rollno:number,name:string,age:number,adress:string){
        super(name,age,adress)
        this.rollno = rollno;
    }
}

// let student1 = new Student(1005, "Mashood Bilal", 28, "Karachi")
// console.log(student1);

// Further child class
class Topstudent extends Student{
    scholarship:boolean;
    constructor(scholarship:boolean,rollno:number,name:string,age:number,adress:string){
        super(rollno,name,age,adress)
        this.scholarship = scholarship;
    }
}

let topstudent1 = new Topstudent(true,1005, "Mashood Bilal", 28, "Karachi")
console.log(topstudent1);