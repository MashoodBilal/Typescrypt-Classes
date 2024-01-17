
interface IPerson{
    name:string;
}
class Person implements IPerson{
    name!:string;
    age!:number;
    adress!:string;
    
}
let person = new Person()  
// need to add types if keyword implements is used.
// does not need to add type if keyword extends is used. 