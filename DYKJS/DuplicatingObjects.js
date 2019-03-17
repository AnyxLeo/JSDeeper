function anotherFunction() { /** */}
var anotherObject = { c: true };
var anotherArray = [];

var myObject = {
    a: 2,
    b: anotherObject,
    c: anotherArray,
    d: anotherFunction,
};

anotherArray.push(anotherObject, myObject);
console.log(anotherArray);

var newObj = JSON.parse( JSON.stringify(anotherObject));
console.log(newObj);
 newObj.b = 'a string';
 console.log(newObj);
 console.log(anotherObject);

 var newObj1 = Object.assign( {}, myObject);

 console.log( newObj1.a );
 console.log( newObj1.b === anotherObject );
 console.log( newObj1.c === anotherArray );
 console.log( newObj1.d === anotherFunction ); 
 