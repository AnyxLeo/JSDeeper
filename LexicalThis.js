// function foo(){
//     return ( a ) => {
//         // 'this' here is lexically adopted from 'foo()'
//         console.log( this.a );
//     }
// }

// var obj1 = { a: 2 };
// var obj2 = { a: 3 };

// var bar = foo.call( obj1 );
// bar.call( obj2 );

/**The most common use-case will likely be in the
 * use of callbacks, such as event handlers or timers.
 */

 function foo() {
     setTimeout(()=> {
         // 'this' here is lexically adopted from 'foo()'
         console.log(this.a);
     }, 100);
 }

 var obj = { a: 2 };
 foo.call( obj );