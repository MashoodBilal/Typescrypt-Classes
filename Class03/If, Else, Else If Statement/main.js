"use strict";
/*
let correctEmail = "abc@bc.com";
let correctPassword = "ironman";


let email = "abc@bc.com";
let password:string = "ironman";
*/
/*
let result = email === correctEmail && password === correctPassword;
console.log(result);
*/
/*
if(email === correctEmail){
    console.log("You are Logged in.")
} else {
    console.log("Invalid email")
}
*/
/*
if(email === correctEmail && password === correctPassword){
    console.log("You are Logged in.")
} else {
    console.log("Invalid email or password")
}
*/
// To get into Behriya Classes
/*
let gateCheck = "pass";
let feesPaid = "pass";
let securityCheck = "pass";

if(gateCheck = "pass"){
    if(feesPaid = "pass"){
        if (securityCheck = "pass"){
            console.log("Welcome to the class")
        } else{ console.log(" Get Lost!!")}
    } else{ console.log(" Get Lost!!")}
}  else{ console.log(" Get Lost!!")}
*/
// Gradeing System
let gradePercent = 48;
/*
if (gradePercent >= 90){
    console.log(" Your grade is A")
}else if (gradePercent >= 80) {
    console.log(" Your grade is B")
}else if (gradePercent >= 70) {
    console.log(" Your grade is C")
}else if(gradePercent >= 60){
    console.log(" Your grade is D")
}else if (gradePercent >= 50){
    console.log(" Your grade is E")
}else{
    console.log("You have failed this exam. Try harder next time")
}
*/
// Turnry operator
let result = gradePercent >= 90 ? " Your grade is A" : gradePercent >= 80 ? " Your grade is B" : gradePercent >= 70 ? " Your grade is C" : gradePercent >= 60 ? " Your grade is D" : "You have failed this exam. Try harder next time";
console.log(result);
