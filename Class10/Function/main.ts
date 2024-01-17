/*
// Overload function doesn't have a body. 
function add(parameter1: string, parameter2: string): string;//option 1
function add(parameter1: number, parameter2: number): number;//option 2
function add(parameter1: boolean, parameter2: boolean): boolean;//option 3
// it has only three overloads
function add(parameter1: any, parameter2: any): any {
    return parameter1 + parameter2;
}

//Calling 'add' with any other parameter types would cause an error except for the three options
console.log(add(1, 2)); // will run option 2
console.log(add("Hello", "World")); // will run option 1
console.log(add(true, false)); // will run option 3
*/