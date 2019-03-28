function Foo(){

} 

console.log(Foo.prototype.constructor === Foo);
console.log(Foo.prototype);
 var a = new Foo(); // constructor call
console.log(Object.getPrototypeOf( a ) === Foo.prototype);
console.log(a.constructor === Foo);
