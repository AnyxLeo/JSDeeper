var fecha = new Date(2018, 9, 20);

console.log(fecha);

//adding 5 day
fecha.setDate(32);
fecha.setHours(13);
fecha.setFullYear(2019);
console.log(fecha);

Date.prototype.sumarDias = function (dias){
    this.setDate(this.getDate() + dias);
    return this;
}

Date.prototype.sumarAnios = function (anios){
    this.setFullYear(this.getFullYear() + anios);
    return this;
}

console.log(fecha);
console.log(fecha.sumarDias(-5));
console.log(fecha.sumarAnios(1));
