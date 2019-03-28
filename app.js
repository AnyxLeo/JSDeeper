// class C{
//     constructor(){
//         this.num = Math.random();
//     }
//     rand () {
//         console.log("Random: "+ this.num );
//     }
// }

// var c1 = new C();
// console.log(c1.rand());

// C.prototype.rand = function() {
//     console.log("Random; " + Math.round(this.num * 1000 ));
// }

// var c2 = new C();

// console.log(c1.rand());
// console.log(c2.rand());

// class C {
// 	constructor() {
// 		// make sure to modify the shared state,
// 		// not set a shadowed property on the
// 		// instances!
// 		C.prototype.count++;

// 		// here, `this.count` works as expected
// 		// via delegation
// 		console.log( "Hello: " + this.count );
// 	}
// }

// // add a property for shared state directly to
// // prototype object
// C.prototype.count = 0;

// var c1 = new C();
// // Hello: 1

// var c2 = new C();
// // Hello: 2

// c1.count === 2; // true
// c1.count === c2.count; // true

class C {
	constructor(id) {
		// oops, gotcha, we're shadowing `id()` method
		// with a property value on the instance
		this.id = id;
	}
	id() {
		console.log( "Id: " + this.id );
	}
}

var c1 = new C( "c1" );
c1.id(); // TypeError -- `c1.id` is now the string "c1"