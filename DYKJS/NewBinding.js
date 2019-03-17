/**Constructors */
/**First, let's re-define what a "constructor" is.
 * in JS, constructors are *just functions* that
 * happen to be called with the new operator in
 * front of them. They're just regular functions
 * that are, in essence, hijacked by the use of
 * new in their unvocation.
 */

 function foo(a) {
     this.a =a;
 }

 var bar = new foo(2);
 console.log(bar.a);