function Foo(){ }
var a = new Foo();
console.log(a);
console.log(a.constructor);
console.log(a.constructor.name);

function Foo1(){ }
var a1 = new Foo1();

Foo1.prototype.constructor = function Gotcha(){}
console.log(a1);
console.log(a1.constructor);
console.log(a1.constructor.name);

//OLOO-style
var Foo2 = {};

var a2 = Object.create( Foo2 );

console.log(a2); // Object {}

Object.defineProperty( Foo2, "constructor", {
	enumerable: false,
	value: function Gotcha(){}
});

console.log(a2); // Gotcha {}