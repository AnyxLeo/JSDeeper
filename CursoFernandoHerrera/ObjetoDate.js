var hoy = new Date();
var fmili = new Date(1);
// var fFija = new Date(anio, mes, dia, hora, min, seg, miliseg);
var fFija = new Date(2019,  10, 26, 13, 33, 55, 900);

console.log(hoy);
console.log(fmili);
console.log(fFija);

console.log(hoy.getFullYear() + 1 );
console.log(hoy.getDate() );
console.log(hoy.getHours() );
console.log(hoy.getSeconds() );
console.log(hoy.getMilliseconds() );
console.log(hoy.getTime() );

var inicio = new Date();

for(var i = 0; i <= 15000; i++){
    console.log("Algo ...");
}

var fin = new Date();

// console.log(inicio);
// console.log(fin);

var duracion = fin.getTime() - inicio.getTime();
console.log("Tardo " + duracion + " milisegundos");
console.log("Tardo " + duracion/1000 + " segundos");
