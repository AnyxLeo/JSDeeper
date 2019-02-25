document.onmousedown = args => {
    if(args.button ===2 ){
       alert("Click bloqueado");
       return;
    }
   
    console.log("Click permitido");
   };
   
   document.onmouseup = () => {
       const texto = window.getSelection().toString();
       console.log(texto);
   }

   /**<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>JSDeeper</title>
        <script src="app.js"></script>
    </head>
    <body oncontextmenu="return false;">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Ut enim ad minim veniam, quis nostrud exercitation ullamco 
             laboris nisi ut aliquip ex ea commodo consequat. 
             Duis aute irure dolor in reprehenderit in voluptate velit esse 
             cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
             cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    </body>
</html> */