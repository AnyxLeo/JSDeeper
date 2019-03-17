var myObject = { 
    // define a getter for 'a'
    get a (){
        return 2;
    }
};

Object.defineProperty(
    myObject,
    "b",
    {
        get: function(){ return this.a * 2 },
        enumerable: true
    }
);

console.log( myObject.a );
console.log( myObject.b );

var myObject1 = {
    // define a getter for 'a'
    get a() {
        return 2;
    }
};

myObject1.a = 3;
console.log(myObject1.a);

var myObject2 = {
    // define a getter for 'a'
    get a(){
        return this._a_;
    },

    // define a setter for 'a'
    set a(val){
        this._a_ = val * 2;
    }
}

myObject2.a = 2;
console.log(myObject2.a);
