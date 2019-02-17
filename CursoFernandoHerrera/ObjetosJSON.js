
var objetoJS = {
    nombre: "Fernando",
    edad: 30,
    imprimir: function(){
        console.log(this.nombre + " " + this.edad);
    }
}

console.log("Objeto literal: ", objetoJS);

var objetoJSONString = JSON.stringify(objetoJS);

console.log("Objeto JSON: ", objetoJSONString );

var objetoDesdeJSON = JSON.parse(objetoJSONString);

console.log( "Objeto desde JOSN", objetoDesdeJSON );
console.log( objetoDesdeJSON.nombre );
console.log( objetoDesdeJSON.edad );
