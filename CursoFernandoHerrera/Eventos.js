function evento(args){
    console.log("Me disparé");
    console.log(args);
}

document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        var objx = document.getElementById("objDemo");
        console.log(objx);
    objx.addEventListener("keypress", evento);

    var obj = document.getElementById("objBoton");
        console.log(obj);
    obj.addEventListener("click", evento);
    obj.click();
    }
  }

  /**<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>JSDeeper</title>
        <script src="app.js"></script>
    </head>
    <body>
            <button id="objBoton">Soy un boton</button>
            <div ondblclick="evento()">
    
            </div>
        <input type="text" id="objDemo"/>
    </body>
</html> */