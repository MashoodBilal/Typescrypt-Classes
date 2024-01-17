// Impaculation

// private
class C{
    private length = 0
}

let c1 = new C();
c1.length = 5; // Error
console.log(c1.length);


//  using setter and getter
class A{
    private _length = 0

    get length(){
        return this._length;
    }
    set length(value){
        this._length = value;
    }
}
// console.log(a1.length);

let a1 = new A();
console.log(a1.length);
a1.length = 3
console.log(a1.length)