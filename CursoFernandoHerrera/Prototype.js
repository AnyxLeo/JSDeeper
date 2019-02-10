function Persona () {
    this.nombre = "Fernando";
    this.apellido = "Herrera";
    this.edad = 30;
    this.pais = "México";
};

Persona.prototype.imprimirInfo = function(){
    console.info(this.nombre + " " + this.apellido + " " + "(" + this.edad + ")" );
}

var fer = new Persona();

console.log(fer);
console.log(fer.pais);