var arguments = 10;

function miFunction(a,b, c, d,){
    if(arguments.length !== 4){
        console.error("La funcion necesita 4 parametros");
        return;
    }
    // console.log( arguments );
    console.log( a+ b+ c+ d );
}

miFunction(10, 20, 30, 40, 50 , 60 , 70);
