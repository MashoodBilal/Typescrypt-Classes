let teacher = {
    name: "Zeeshan",
    experience: "10"
}

console.log(teacher.name);
console.log(teacher["experience"]);

interface Iteacher {
    name : string
    salary : number
}

let teacher1:Iteacher

teacher1 = {
    name : "ali",
    salary : 10000
}

console.log(teacher1.name);
console.log(teacher1["salary"]);

// Type Declaration
let student : {
    name: string,
    age: number
}

student = {
    name: "Hira",
    age: 30
}

console.log(student["name"]);
console.log(student.age);

        














