/** Tehe best thing to do is remind yourself, 
 * "construct does not mean constructed by"
 */
function Foo(){ }

Foo.prototype = { }

var a1 = new Foo();
console.log(a1.constructor === Foo);
console.log(a1.constructor === Object);