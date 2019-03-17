function makeAdder(x){
    function add(y){
        return x + y;
    }
    return add;
}

var plusOne = makeAdder(1);
var plusTen = makeAdder(10);

console.log(plusOne(13));
console.log(plusOne(21));
console.log(plusOne(45));

console.log(plusTen(45));
console.log(plusTen(4));
console.log(plusTen(5));
