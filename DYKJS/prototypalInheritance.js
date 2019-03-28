function Foo(name){
    this.name = name;
}

Foo.prototype.myName = function (){
    return this.name;
}

function Bar(name, label){
    Foo.call(this, name);
    this.label = label;
}

/**Here, we make a new 'Bar.prototype'
 *  linked to Foo.prototype
 */
Bar.prototype =Object.create(Foo.prototype);

/** Beaware! Now 'Bar.prototype.constructor' is gone,
 * and might need to be manually "Fixed" if you're 
 * in the habit of relaying on such properties!
 */

 Bar.prototype.myLabel = function() {
     return this.label;
 }

 var a = new Bar("a", "obj a");
 console.log(a.myName());
 console.log(a.myLabel());


 /** Pre ES6
  * Throws away default existing 'Bar.prototype'
  */
Bar.prototype = Object.create( Foo.prototype );

/**ES6 +
 * modifies existing 'Bar.prototype'
 */
Object.setPrototypeOf(Bar.prototype, Foo.prototype);

