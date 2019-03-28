var foo = {
    something: function() {
        console.log('Tell me something good..');
    }
};

var bar = Object.create(foo);
bar.something();