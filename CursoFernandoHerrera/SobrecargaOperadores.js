function crearProducto(nombre = "sin nombre", precio = 0){
    console.log("Producto: " + nombre + " Precio: "+ precio);
}

/**Image you must create a product that have price like 100 */
function crearProducto100(nombre){
crearProducto(nombre, 100);
}

/**Create defined product with price changing*/
function createProductoCamisa(precio){
    crearProducto("Camisa", precio);
}

crearProducto("Lapiz");
crearProducto100("Corrector");
createProductoCamisa(75);
