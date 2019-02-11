var a = new String("Fernando Herrera");
console.log(a);
console.log(a[0]);

console.log(a.toUpperCase());
console.log(a.toLocaleLowerCase());

var i = a.indexOf("e");
console.log("La letra esta en", i);

i = a.lastIndexOf("n");
console.log("La letra esta en", i);

var nombre = a.substr(0, a.indexOf(" "));
console.log(nombre);

var split = a.split(" ");
console.log(split);
console.log(split.length);

//=========================================
document.write("Hola Mundo!");
document.write(a.italics());
document.write(a.blink());
