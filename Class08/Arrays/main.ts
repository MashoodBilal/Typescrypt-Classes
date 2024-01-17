
// Define Array
// Type 1 (homogenious data)
let food:string[] = ["pizza", "burger", "tikka"];
// Type 2 (homogenious data) Recommended diclearation type
let prize:Array<number> = [1000,700,500];
// Type 3 (uniun) (hetrogenious data)
let a: (string | number)[] = ["b", "c", "d", 1, 2, 3]
// Type 4 (hetrogenious data)
let ar:Array<number|string>  = ["ba", "ca", "da", 11, 21, 31]
// Type 5 (couple)
let name:[string,string] = ["Mashood", "Bilal"]
// Type 6 (couple)(restricted array)
let Name:[string,"Bilal"] = ["Mashood", "Bilal"]
// Type 7 (sequence)
let myage:[string,number] = ["Mashood", 24]
// Type 8 (empty array) (dinamic array)
let emptyarray:number[] = []
emptyarray.push(1)
emptyarray.push(2)