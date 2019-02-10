var arr = [5,4,3,2,1];
console.log(arr);

console.log(arr[0], arr[4], arr[5]);

arr.reverse();

console.log(arr);

arr = arr.map( function(elem) {
    return elem *= elem;
});

console.log(arr);

arr= arr.map(Math.sqrt);
console.log(arr);

arr = arr.join("|");
console.log(arr);

arr= arr.split("|");
console.log(arr);
