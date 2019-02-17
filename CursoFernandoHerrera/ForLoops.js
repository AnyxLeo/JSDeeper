
for( var i = 0; i <= 10; i++) {
    console.log(i);
}

console.log("============================================");

for( var i = 0; i <= 10; i+=2) {
    console.log(i);
}

console.log("============================================");

for( var i = 0; i <= 10; i+=3) {
    console.log(i);
}

console.log("============================================");

for( var i = 0; i <= 10; i++) {
    if(i===5){
        break;
    }
    console.log(i);
}

console.log("============================================");

for( var i = 0; i <= 10; i++) {
    if(i===5){
        continue;;
    }
    console.log(i);
}

console.log("============================================");

var Persona = function(){
    this.nombre = "Juan";
    this.apellido = "Pineda";
    this.edad = 18
};

var juan = new Persona();

Persona.prototype.direccion = "San José";

for ( prop in juan ){
    console.log( juan.hasOwnProperty(prop));
    console.log(prop, ":", juan[prop]);
}

// Reflexion
for ( prop in juan ){
    if(! juan.hasOwnProperty(prop))
        continue;

    console.log(prop, ":", juan[prop]);
}

for( num in [1,2,3,4,5,6,7,8,9,10] ){
    // imprime el index
    console.log(num);
}

[1,2,3,4,5,true,6,7,8,false,9,10,"nombre"].forEach(function (val){
    console.log(val);
});
