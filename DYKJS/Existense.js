var myObject = { a: 2 };

// *in* operator consults in the object and the prototype chain looking for the value
console.log(("a" in myObject));
console.log(("b" in myObject));

// *hasOwnProperty* only looking for the value in the objet
console.log(myObject.hasOwnProperty("a"));
console.log(myObject.hasOwnProperty("b"));