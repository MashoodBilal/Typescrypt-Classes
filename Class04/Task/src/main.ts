function isNumberOddOrEven(num:number){
    let a = num%2
    if (a === 0){
        return "Even";
    } else{
        return "Odd";
    }
}

let result:string = isNumberOddOrEven (25)
console.log(`Your number is ${result}`)