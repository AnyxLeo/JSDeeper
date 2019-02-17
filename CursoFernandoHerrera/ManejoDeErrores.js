try {
    
    throw () => {
        console.log("function del throw...");
    };

    console.log("Esta parte nunca se ejecuta");
}
catch (e) {
    e();
    console.log("Parte del catch");
}
finally {
    console.log("Finalmente");
}
console.log("===================================================");
try {
    
    throw {
        nombreError: "Error tipo 1",
        accion: "Salir corriendo a echarle agua al servidor",
        coderror: 1
    };

    console.log("Esta parte nunca se ejecuta");
}
catch (e) {
    console.log(e);
    console.log(e.nombreError);
    console.log(e.accion);
    console.log(e.coderror);
}
finally {
    console.log("Finalmente");
}

console.log("===================================================");

try {
    
    throw new Error('Error tipo 1');

    console.log("Esta parte nunca se ejecuta");
}
catch (e) {
    console.log(e.message);
}
finally {
    console.log("Finalmente");
}

console.log("===================================================");

try {
    var a = 102;

    if(a === 100){
        throw 'que mal';
    }
    else {
        throw 'oh! oh!';
    }
    console.log("El valor de a: ", a);
}
catch (e) {
    if(e === "que mal"){
        console.log("Error de tipo 1");
    }
    if(e === "oh! oh!"){
        console.log("Error de tipo 2");
    }
}
finally {
    console.log("Finalmente");
} 