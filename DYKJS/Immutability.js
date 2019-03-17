/**Object constants */
var myObject = {};

Object.defineProperty( myObject, "FAVORITE_NUMBER", {
        value: 42,
        writable: false,
        configurable: false
});

/**Prevent Extensions */
var myObject1 = { a: 2 };
Object.preventExtensions( myObject1 );
myObject1.b = 3;

console.log(myObject1.b);

/**Object.Seal:
 * call Object.preventExtensions(..)
 * and all the existing properties
 * as configurable: false
 */

 /** Object.Freeze(..)
  * call Object.seal(..)
  * and changue the data accesors of the properties as
  * writeable:false
  */
