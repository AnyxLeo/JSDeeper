/**If you pass nuul or undefined to a this binding parameter
 * to call, apply or bind, those values are effectively ignored,
 * and instead the *default binding* rule applies to the invocation.
 */

// function foo() {
//     console.log( this.a );
// }

// var a = 2;

// foo.call(null);

/**Spreading arrays */
function foo(a,b) {
	console.log( "a:" + a + ", b:" + b );
}

// spreading out array as parameters
foo.apply( null, [2, 3] ); // a:2, b:3

// currying with `bind(..)`
var bar = foo.bind( null, 2 );
bar( 3 ); // a:2, b:3