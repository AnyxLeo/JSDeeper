function Jugador(name) {
    this.name = name;
    this.pv = 100;
    this.sp = 100;

    this.curar = function (jugadorObjetivo) {
        if (this.sp >= 40) {
            this.sp -= 40;
            jugadorObjetivo.lp += 20;
        } else {
            console.info(this.name + " no tiene suficiente sp");
        }

        this.estado(jugadorObjetivo);
    }

    this.tirarFlecha = function (jugadorObjetivo) {
        if(jugadorObjetivo.pv > 40){
            jugadorObjetivo.pv -=40;
        }else{
            jugadorObjetivo.pv = 0;
            console.error(jugadorObjetivo.name + " murio!!");
        }
        this.estado(jugadorObjetivo);
    };

    this.estado = function (jugadorObjetivo) {
        console.info(this);
        console.info(jugadorObjetivo);
    }
};

var gandalf = new Jugador("Gandalf");
var legolas = new Jugador("Legolas");

gandalf.curar(legolas); 