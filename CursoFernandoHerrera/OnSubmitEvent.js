
function validar() {
    var nombre = document.getElementById("txtNombre").value;
    var apellido = document.getElementById("txtApellido").value;
    if (nombre.length < 1 ){
        return false;
    }       
            
    if(apellido.length < 1){
        return false;
    }      
    
    return false;
}

/**
function validar() {
    var nombre = document.getElementById("txtNombre").value;
    var apellido = document.getElementById("txtApellido").value;
    if (nombre.length < 1 ){
        return false;
    }       
            
    if(apellido.length < 1){
        return false;
    }      
    
    return false;
}

 */