// function foo(a){
//     console.log(a + b);
//     b = a;
// } 

// foo(2);
const zero = (a) => a? a(0) : 0;
const one = (a) => a? a(1) : 1;
const two = (a) => a? a(2) : 2;
const three = (a) => a? a(3) : 3;
const four = (a) => a? a(4) : 4;
const five = (a) => a? a(5) : 5;
const six = (a) => a? a(6) : 6;
const seven = (a) => a? a(7) : 7;
const eight = (a) => a? a(8) : 8;
const nine = (a) => a? a(9) : 9;
const ten = (a) => a? a(10) : 10;

function plus(x) {
    function add(y) {
        return y + x;
    }
    return add;
};

function minus(x) {
    function subtract(y) {
        return y - x;
    }
    return subtract;
};

function times(x) {
    function multiplication(y) {
        return y * x;
    }
    return multiplication;
};


console.log(one(plus(two())));
console.log(five(times(three())));
console.log(ten(minus(zero())));

