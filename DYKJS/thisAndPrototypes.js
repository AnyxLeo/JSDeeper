var anotherObject = { a: 2};

var myObject = Object.create( anotherObject );

console.log(anotherObject.a);
console.log(myObject.a);

console.log(anotherObject.hasOwnProperty('a'));
console.log(myObject.hasOwnProperty('a'));

myObject.a ++; // Oops, implicit shadowing!

console.log(anotherObject.a);
console.log(myObject.a);

console.log(anotherObject.hasOwnProperty('a'));
console.log(myObject.hasOwnProperty('a'));

// for(var k in myObject ){
//     console.log('found: ' + k);
// }

// console.log('a' in myObject);