"use strict"
var myObject3 = {};

Object.defineProperty( myObject3, "a",
{
    value: 2,
	writable: false,
	configurable: true,
	enumerable: true
});

myObject3.a = 3;
console.log( myObject3.a );

