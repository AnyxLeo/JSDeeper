var carro = {
    color: "Blanco",
    marca: "Mazda",
    imprimir: function () {
        var salida = this.marca + " - " + this.color;
        return salida;
    }
}

var carro2 = {
    color: "Rojo",
    marca: "Toyota"
}

console.log(carro.imprimir());

var logCarrro = function (arg1, arg2) {
    console.log("Carro: ", this.imprimir());
    console.log("Argumentos: ", arg1, arg2);
    console.log("===========================");
}

// logCarrro();

var logModeloCarro = logCarrro.bind(carro);

logModeloCarro();
logModeloCarro("abc", "xyz");

logModeloCarro.call(carro, "123", "456")
logModeloCarro.apply(carro, ["asd", "qwe"])

// Funciones prestadas
console.log(carro.imprimir.call(carro2));


