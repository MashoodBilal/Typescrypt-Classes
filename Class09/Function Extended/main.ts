// console.log("First");

// for(let i = 0; i < 10000000000; i++){}

// console.log("Second");

// call back function
// when a function is called withen a function
/*
let parrent = (cb:Function) => { // or cb: () => void
    console.log("parrent");
    cb();
}

let callback = () => {
    console.log("callback");
}

parrent(callback); // callback is passed to cb in line 10
*/
/*
// async func example

console.log("First");
setTimeout(() => {console.log("Second")},3000)
console.log("Third");
*/
/*
let orderPizza = (){
    setTimeout(()=>{console.log("Your Pizza is ready");
    },5000);
    // return "pizza";
}

let pizza = orderPizza();
console.log(pizza); // undefined
*/
/*
let orderPizza = (){
    setTimeout(()=>{
        return "Your Pizza is ready";
    },5000);
    // return "pizza";
}

let pizza = orderPizza();
console.log(pizza); // undefined
*/


// usage of timeout in real world example
//     Type 1


/*
let orderPizza = (ringBellcb:() => void, errorHandlecb:() => void){
   console.log("Pizza Order Placed");
   
    let isBurnt = Math.random() < 0.5;
    setTimeout(()=>{ 
        if (isBurnt) {errorHandlecb()} else {ringBellcb()}
    },5000);
    // return "pizza";
}

let ringBell = () => {
    console.log("Your Pizza is ready"); 
}

let errorHandle = () => {
    console.log("Somthing gone wrong");
    
}

let pizza = orderPizza(ringBell,errorHandle);
// console.log(pizza); // undefined
*/

// Promise

let orderPizza = () =>{
   return new Promise((resolve, reject) => {
    let isBurned = false //Math.random() < 0.5;
    setTimeout(() => {
        if (isBurned) {reject()
           } else { resolve(".")}
    }, 2000)
   })
}
/*
let order = orderPizza()
.then(() => {
    console.log("Your Pizza is Ready")
})
.catch(() => {
    console.log("Somthing gone wrong");
}) 
console.log(order);
*/

// Await
// let getOrder = async () => {
// try{
    
//         const result = await orderPizza()
//         console.log(result);
        
//     }

// catch(e){
//     console.log("something wenr Wrong");
    
// }
// }
// getOrder();

let getOrder = async () => {
         
    const result = await orderPizza()
        console.log(result);
}
getOrder();
    
