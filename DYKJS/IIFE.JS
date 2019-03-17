var foo = function() {
    console.log('foo');
};

var x = function bar() {
    console.log('bar');
};

console.log(foo);
console.log(x);

(function IIFE(){
    console.log('hi!');
})();

var y = (function IIFE(){
    return 45;
})();

console.log(y);