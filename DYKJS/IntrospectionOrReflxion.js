function Foo(){ }
 var a = new Foo();

 console.log(a instanceof Foo);
 console.log(Foo.prototype.isPrototypeOf(a));
 console.log(Object.getPrototypeOf(a) === Foo.prototype);

console.log( a.__proto__ === Foo.prototype);
