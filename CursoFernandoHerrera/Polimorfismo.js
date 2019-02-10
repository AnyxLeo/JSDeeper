/**
 * Polimorfismo: no es más que una función que puede recivir diferentes tipos de datos.
 */

function determinaDato(dato){
    if(typeof dato === "undefined"){
        console.log("Dato es undefinido no se que hacer");
    }

    if(typeof dato === "number"){
       console.log("Dato es number puedo hacer operaciones");
   }

   if(typeof dato === "string"){
       console.log("Dato es string puedo concatener strings");
   }

   if(typeof dato === "object"){
       console.log("Dato es un objeto pero puede ser cualquier cosa");

       if(dato instanceof Number){
           console.log("Dato es un objeto numerico");
       }
   }
}

var b = new Number(3);
console.log(b);

determinaDato(b);