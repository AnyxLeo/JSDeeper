/** MODERN MODULES */
/**Modules require two key characteristics:
 * 1) an outer wrapping function being invoked, to create 
 * the enclosing scope
 * 2) the return value of the wrapping function
 * must include reference to at least one inner function
 * that then has closure over the private inner scope
 * of the wrapper.
 */
var  MyModules = (function Manager() {
    var modules = {};

    function define(name, deps, impl) {
        for(var i=0; i<deps.length; i++){
            deps[i] = modules[deps[i]];
        }
        modules[name] = impl.apply(impl, deps);
    }

    function get(name){
        return modules[name];
    }

    return {
        define: define,
        get: get,
    };
}());

MyModules.define('bar', [], function(){
    function hello(who){
        return 'Let me introduce: ' + who;
    }

    return {
        hello: hello,
    };
});

MyModules.define('foo', ['bar'], function(bar){
    var hungry = 'hippo';

    function awesome(){
        console.log(bar.hello( hungry ).toUpperCase() );
    }

    return {
        awesome: awesome,
    }
});

var bar = MyModules.get('bar');
var foo = MyModules.get('foo');

console.log(
    bar.hello('hippo')
);

foo.awesome();

/**Closure is when a function can remember and access
 * its lexical scope even when it's invoke outside its
 * lexical scope.
 */
