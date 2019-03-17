function foo(a, b){
    console.log("a:" + a + "b:" + b );
}

// our DMZ empty object
var ø = Object.create( null );

//spreading out array as parameters
foo.apply(ø, [2,3])

var bar = foo.bind(ø, 2)
bar(3);