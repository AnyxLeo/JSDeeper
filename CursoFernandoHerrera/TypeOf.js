function identifica(param) {
    console.log(typeof param);
    console.log(param instanceof Persona);
    // if (typeof param == "function") {
    //     param();
    // } else {
    //     console.log(param);
    // }

}

function Persona() {
    this.nombre = "Fernando";
    this.edad = 30;
}

var fer = new Persona();
// identifica(function () { console.log("Soy una funcion anonima"); });
identifica(fer);