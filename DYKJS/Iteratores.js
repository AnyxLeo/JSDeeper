var myArray = [1, 2, 3];

for (var i = 0; i < myArray.length; i++) {
	console.log( myArray[i] );
}

for (var v of myArray) {
	console.log( v );
}

var it = myArray[Symbol.iterator]();

console.log(it.next()); // { value:1, done:false }
console.log(it.next()); // { value:2, done:false }
console.log(it.next()); // { value:3, done:false }
console.log(it.next()); // { done:true }

var myObject = {
	a: 2,
	b: 3
};

Object.defineProperty( myObject, Symbol.iterator, {
	enumerable: false,
	writable: false,
	configurable: true,
	value: function() {
		var o = this;
		var idx = 0;
		var ks = Object.keys( o );
		return {
			next: function() {
				return {
					value: o[ks[idx++]],
					done: (idx > ks.length)
				};
			}
		};
	}
} );

// iterate `myObject` manually
var ito = myObject[Symbol.iterator]();
ito.next(); // { value:2, done:false }
ito.next(); // { value:3, done:false }
ito.next(); // { value:undefined, done:true }

// iterate `myObject` with `for..of`
for (var v of myObject) {
	console.log( v );
}
// 2
// 3