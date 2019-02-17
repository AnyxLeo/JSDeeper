var nota = 90;

if(nota >= 60) {
    console.log("Aprovado");
} else {
    console.log("Repobrado");
}

if(nota >= 90) {
    console.log("A");
} else if (nota >= 80) {
    console.log("B");
}else if (nota >= 70) {
    console.log("C");
}else if (nota >= 60) {
    console.log("D");
} else {
    if(not >50 ){
        console.log("F");
    }else {
        console.log("-F");
    }    
}

var a = 20;
var b = 10;

var c = (a > b) ? function(){
    console.log("A es mayor que B");
}() : function(){
    console.log("B es mayor que A");
}();

var c = (a > b) ? a : b;

console.log(c);

var d = undefined;
var e = 10;

var f = d || e;

console.log(f);

function getNombre(nombre){
    var nom = nombre || "<Sin nombre>";
    console.log(nom);
}

getNombre();

console.log("Termino el codigo.");
