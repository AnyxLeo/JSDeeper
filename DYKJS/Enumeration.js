var myObject = { };

Object.defineProperty(
    myObject,
    "a",
    { enumerable: true, value: 2 }
);

Object.defineProperty(
    myObject,
    "b",
    { enumerable: false, value: 3 }
);

console.log(myObject.b);
console.log(("b" in myObject));
console.log(myObject.hasOwnProperty("b"));

for ( var k in myObject ) {
    console.log(k, myObject[k]);
}

console.log("------------------------");

var myObject2 = { };
Object.defineProperty(
    myObject2,
    "a",
    { enumerable: true, value: 2 }
);

Object.defineProperty(
    myObject2,
    "b",
    { enumerable: false, value: 3 }
);

console.log(myObject2.propertyIsEnumerable( "a" ));
console.log(myObject2.propertyIsEnumerable( "b" ));

console.log(Object.keys(myObject2));
console.log(Object.getOwnPropertyNames
    (myObject2));