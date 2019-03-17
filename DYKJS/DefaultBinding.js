// function foo(){
//     "use strict"
//     console.log(this.a);
// }

// var a = 2;

// foo();

function foo() {
    console.log( this.a);
}

var a = 2;

(function(){
    "use strict";
    foo();
})();
