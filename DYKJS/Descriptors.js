var myObject = { a: 2 };

var descriptors = Object.getOwnPropertyDescriptor( myObject, "a");

console.log(descriptors);

var myObject2 = {};

Object.defineProperty( myObject2, "a",
{
    value: 2,
	writable: true,
	configurable: true,
	enumerable: true
});

console.log( myObject2.a );