var texto = "Aeropuerto";

var arr = texto.match(/[aeiou]{2,2}/ig); // return diptongos
console.log(arr);

var arr = texto.match(/\w{2,2}/ig); // return groups of 2
console.log(arr);

texto = "La respuesta de la suma es. 45 + 60 = 105";

var arr = texto.match(/\d{1,}/ig); // parte numerica /[0-9]+/ig , /\d+/ig
console.log(arr);
console.log(texto);

var arr = texto.match(/\d{1,}|respuesta/ig); // parte numerica o la palabra respuesta
console.log(arr);
console.log(texto);
