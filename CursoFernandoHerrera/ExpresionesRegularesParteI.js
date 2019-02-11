// var reg1 = RegExp("a");
var reg2 = /a/;

var texto = "Hola mundo cruel!";

var arr = texto.match(reg2); // return an array if it found the value or NULL otherwise
console.log(arr);

arr = texto.match(/a/);
console.log(arr);

arr = texto.match(/^a/);// ^ :Find character at the begining
console.log(arr);

arr = texto.match(/^H/);
console.log(arr);

arr = texto.match(/a$/);// $ :Find character at the end
console.log(arr);

arr = texto.match(/!$/);
console.log(arr);

arr = texto.match(/.../);// . :Take one character per dot
console.log(arr);

var arr = texto.match(/^.o/);// Take the fisrt character whichever it is, and expect an "o"
console.log(arr);

texto = "Hola mundo cruel, 12345"

arr = texto.match(/[0-9]/); // Find a number between 0 and 9
console.log(arr);

arr = texto.match(/[0789]/); // Find only this numbers
console.log(arr);

arr = texto.match(/[0489]/); 
console.log(arr);

texto = "Hola mundo cruel!"

arr = texto.match(/[a-z]/); // Case sensitive look for a range of letters
console.log(arr);

arr = texto.match(/[a-zA-Z]/); 
console.log(arr);

arr = texto.match(/^H[a-z]/); /**The first letter must be "H" after that doesn't
                                *metter which letter is comming 
                                */
console.log(arr);
arr = texto.match(/^H[aeiou]/); /**The first letter must be "H" after that doesn't
                                *metter which vowles 
                                */
console.log(arr);

arr = texto.match(/[aeiou].$/); //Whichever vowel and whichever character in the end
console.log(arr);

texto = "Hola mundo!"

arr = texto.match(/[aeiou].$/); //Whichever vowel and whichever character in the end
console.log(arr);

arr = texto.match(/ /); //You can look for blancks and tabs but there is a better way.
console.log(arr);
arr = texto.match(/     /);
console.log(arr);

arr = texto.match(/\s/); //This is the better way to looking for spaces
console.log(arr);

//============ Abbreviation of regular expressions =================================
texto = "Hola mundo!"
arr = texto.match(/\w/); //[a-aA-Z0-9]
console.log(arr);

texto = "Hola 9 mundo!"
arr = texto.match(/\d/); //[0-9]
console.log(arr);

/**Controllers */
texto = "Hola Mundo!"

arr = texto.match(/m/i); //Case not sensitive
console.log(arr);

arr = texto.match(/[aeiou]/g); //All occurences
console.log(arr);

texto = "HolA MUndo!"
arr = texto.match(/[aeiou]/gi); //All occurences not case sensitive
console.log(arr);

texto = "HolA MUndo! \n Qué tal?"
arr = texto.match(/[aeiou]/ig); //Multi line text
console.log(texto);
console.log(arr);

arr = texto.match(/[aeiou]|e/mig); // | :Or 
console.log(texto);
console.log(arr);

//=======================  Repetition operators ============================
texto = "Holaa Mundoo!"

arr = texto.match(/o/g); //Show an array whit all the "o" that appear
console.log(arr);

arr = texto.match(/o+/g); //The + bring the appearence of the "o" at lest once or many together
console.log(arr);

arr = texto.match(/o?/g); //Show an array with all the characteres as empty string except the "o"
console.log(arr);

arr = texto.match(/o*/g); //Show an array with all the characteres as empty string except the "o" or multi "o"
console.log(arr);

arr = texto.match(/o{2}/); //Define the number of times that a character must appear.
console.log(arr);

texto = "Holaa Mundoo, Hoola de nuevoo"
arr = texto.match(/o{2,}/g); //Show all the ocurrences of "oo"
console.log(arr);

texto = "Holaa Mundoo, Hoola de nuevoo"
arr = texto.match(/o{2,}/g); //Show all the ocurrences of "oo" o{2(search for 2"o"),}(all the times)
console.log(arr);
 
texto = "Holaa Mundoo, Hoola de nuevoo"
arr = texto.match(/o{2,3}/g); //Show all the ocurrences of "oo" o{2(search for 2"o"),3}(three times)
console.log(arr);
