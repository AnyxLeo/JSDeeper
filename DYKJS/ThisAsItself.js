function identify() {
    return this.name.toUpperCase();
}

function speak() {
    var greeting = 'Hello I am ' + identify.call(this);
    console.log(greeting);
}

var me = {
    name: 'Kyle',
};

var you = {
    name: 'Reader',
};

identify.call(me);
identify.call(you);

speak.call(me);
speak.call(you);

// function foo(num){
//     console.log( 'foo: ' + num);
//     this.count++;
// }

// foo.count = 0;

// var i;

// for( i = 0; i < 10; i++){
//     if(i > 5){
//         foo(i);
//     }
// }

// console.log(foo.count);

// function foo(num) {
//     console.log('foo: ' + num);
//     data.count++;
// }

// var data = {
//     count: 0,
// }

// var i;

// for (i = 0; i < 10; i++) {
//     if (i > 5) {
//         foo(i);
//     }
// }

// console.log(data.count);

// function foo(num) {
//     console.log('foo: ' + num);
//     foo.count++;
// }

// foo.count = 0;

// var i;

// for (i = 0; i < 10; i++) {
//     if (i > 5) {
//         foo(i);
//     }
// }

// console.log(foo.count);

function foo(num){
    console.log( 'foo: ' + num);
    this.count++;
}

foo.count = 0;

var i;

for( i = 0; i < 10; i++){
    if(i > 5){
        foo.call(foo, i);
    }
}


console.log(foo.count);










