// function foo() {
//     console.log( this.a );
// }

// var obj = {
//     a:2
// };

// var bar = function() {
//     foo.call(obj);
// };

// bar();

// setTimeout(bar, 100);

// /** 'bar' hard binds 'foo''s to obj
//  * so that it cannot be overriden
//  */
// bar.call(window);
// // console.log(window);

//===================================================

// function foo(something) {
//     console.log(this.a, something);
//     return this.a + something;
// }

// var obj ={
//     a: 2,
// };

// var bar = function () {
//     return foo.apply(obj, arguments)
// };

// var b = bar(3);
// console.log(b);

//=========================================
// function foo(something) {
//     console.log(this.a, something);
//     return this.a + something;
// }

// // sample 'bind' helper
// function bind(fn, obj) {
//     return function() {
//         return fn.apply(obj, arguments);
//     };
// }

// var obj = {
//     a: 2,
// };

// var bar = bind(foo, obj);

// var b = bar(3);
// console.log(b);

//==========================================
/**Function.prototype.bind */
function foo(something) {
    console.log(this.a, something);
    return this.a + something;
}


var obj = {
    a: 2,
};

var bar = foo.bind(obj);

var b = bar(3);
console.log(b);




















