var something = {
    cool: function() {
        this.greeting = "Hello World";
        this.count = this.count? this.conut +1 : 1;
    }
};

something.cool();
console.log(something.greeting);
console.log(something.count);

var Another = {
    
    cool: function() {
        this.greeting = "Hello Cruel World",
        something.cool.call(this);
    },
    
};

Another.cool();
console.log(Another.greeting);
console.log(Another.count);
