(function () {
    var a = 10;
    console.log(a);

    function cambiarA(){
        a  = 20;
    }

    cambiarA();
    console.log(a);

})();

function ejecutarFunction (fn) {
    
    if (fn() === 1){
        return true;
    }else{
        return false;
    }
}

console.log ( ejecutarFunction( function () { 
    console.log("Soy una function anonima with an arrow");
    return 0;
}));