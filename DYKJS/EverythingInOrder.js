// function foo() {
//     console.log( this.a );
// }

// var obj1 = {
//     a: 2,
//     foo: foo,
// };

// var obj2 = {
//     a: 3,
//     foo: foo,
// };

// obj1.foo();
// obj2.foo();

// obj1.foo.call( obj2 );
// obj2.foo.call( obj1 );

/**So, *explicit binding* takes precedence over *implicit binding*,
 * which means you should ask first if *explicit binding* applies
 * before checking for *implicit binding*
 */

//  function foo(something) {
//      this.a = something;
//  }

//  var obj1 = {
//     foo: foo
//  };

//  var obj2 = {};

//  obj1.foo( 2 );
//  console.log( obj1.a );

//  obj1.foo.call(obj2, 3);

//  var bar = new obj1.foo(4);
//  console.log(obj1.a);
//  console.log(bar.a);

/**Tes the precedence for new binding and explicit binding 
 * New Binding has more precedence than explicit binding.
*/

// function foo(something) {
//     this.a = something;
// }

// var obj1 = {};

// var bar = foo.bind(obj1);
// bar(2);
// console.log(obj1.a);

// var baz = new bar(3);
// console.log(obj1.a)
// console.log(baz.a)

// ======> =======> ====> =====>
function foo(p1, p2) {
    this.val = p1 + p2;
}

/**Using 'null' here because we don't care about
 * the 'this' hard-binding in this scenario, and
 * it will be overriden by the 'new' call anyway!
 */
var bar = foo.bind(null, "p1")

var baz = new bar("p2");

console.log(baz.val);

