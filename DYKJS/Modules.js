/**MODULES */
/**This moule generate an instance each time that it is called */
function CoolModule(){
    var something = "cool";
    var another = [1,2,3];

    function doSomething(){
        console.log(something);
    }

    function doAnother(){
        console.log(another.join(' ! '));
    }

    return {
        doSomething: doSomething,
        doAnother: doAnother,
    };
}

var foo = CoolModule();
foo.doSomething();
foo.doAnother();

/**This module only is generated once */
var fooo = (
    function CoolModule(){
        var something = "cool";
        var another = [1,2,3];
    
        function doSomething(){
            console.log(something);
        }
    
        function doAnother(){
            console.log(another.join(' ! '));
        }
    
        return {
            doSomething: doSomething,
            doAnother: doAnother,
        };
    }());

    fooo.doSomething();
    fooo.doAnother();

 /**Modules are just functions, so they can recive parameters */

function CoolModuleOne(id){
    function identify(){
        console.log(id);
    }
    return {
        identify: identify
    };
}

var foo1 = CoolModuleOne('foo1');
var foo2 = CoolModuleOne('foo2');

foo1.identify();
foo2.identify();

/**Another slight but powerful variation on the 
 * module pattern is to name the object  you are
 * returning as your public API
 */

var foo3 = (function CoolModule(id) {
    function change() {
        //modifying the public API
        publicAPI.identify = identify2;
    }

    function identify1() {
        console.log(id);
    }

    function identify2() {
        console.log( id.toUpperCase() );
    }

    var publicAPI = {
        change: change,
        identify: identify1
    }
    return publicAPI;
})('Foo Module');

foo3.identify();
foo3.change();
foo3.identify();
























