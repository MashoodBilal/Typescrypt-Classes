// A function is a block of code
/*
function sum(num1:number,num2:number){
    console.log(num1 + num2);
}
sum(12,12)
sum(24,12)
sum(24,24)
*/
/*
function sum(num1:number,num2:number){
    return num1 + num2;
}

function display(result:any){
    console.log(result);

}
let r1 = sum(12,12)
let r2 =sum(24,12)
let r3 =sum(24,24)

console.log(r1);
console.log(r2);
console.log(r3);

display(r1)
display(r2)
display(r3)
*/

/*
// Anonimus function
let sum = function (num1:number,num2:number){
    return num1 + num2;
}
console.log(sum(20,30))
*/
/*
// Short function OR Arrow function
// let sum = ()=>{}
let sum:(num1: number, num2: number) =>number = (num1:number,num2:number)=>{
    return num1 + num2;
}
console.log(sum(20,100))
*/
/*
// Shorter arrow function
// only for one line
let sum = (num1:number,num2:number):number => num1 + num2;
*/

function greet(fn:(message:string)=>void){
    fn("Mashood Bilal")
}
function hello(message:string){
    console.log("Message ==> ", message)
}

greet(hello)


// offshell 
// syntax (c?:number)

// Rest function
// lets add array of names (further names) in function

/*
function buildName(firstName: string, ...restOfName: string[]) {//Named function with Rest parameters
	return firstName + " " + restOfName.join(" ");
}

var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");




//anonymous function type with Rest parameters
var buildNameFun: (fname: string, ...rest: string[])=>string =
function (firstName: string, ...restOfName: string[]) {
	return firstName + " " + restOfName.join(" ");
}

//Note: Rest, optional and default parameters can only
// be at the end of the parameter list
*/											
						






