var arr = [
    true,
    {
        nombre: "Fernando",
        apellido: "Herrera"
    },
    function () {
        console.log("Estoy viviendo dentro de un objeto");
    },
    function (persona) {
        console.log(persona.nombre + " " + persona.apellido);
    },
    [
        "Ana",
        "Citlaly",
        "Nohemi",
        "Rebeca",
        "Sofía",
        [
            "Eddie",
            "Joaquín",
            "Leonardo",
            function(){
                console.log(this);
            }
        ]
    ]
];

console.log(arr);
console.log(arr[0]);
console.log(arr[1].nombre + " " + arr[1].apellido);
// console.log(arr[2]());
arr[2]();
arr[3](arr[1]);

console.log(arr[4][5][2]);

var arreglo2 = arr[4][5];
console.log(arreglo2);

arreglo2[2] = "Eleonor";
console.log(arreglo2);

console.log(arr);

console.log();
arreglo2[3]();