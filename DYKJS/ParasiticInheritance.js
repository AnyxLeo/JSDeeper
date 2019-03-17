// Traditiona JS Class 'vehicle'
function Vehicle (){
    this.engies = 1;
}

Vehicle.prototype.ignition = function () {
    console.log("Turning on my engie.");
};

Vehicle.prototype.drive = function () {
    this.ignition();
    console.log("Steearing and moving forward!");
};

// Parasitic Class 'Car'
function Car() {
    // first, 'car' is a 'Vehicle'
    var car = new Vehicle();

    // now, let's modify our 'car' to specialize it
    car.wheels = 4;

    // save a privileged reference to 'Vehicle:: drive()'
    var VehDrive = car.drive;
     
    // override 'Vehicle:: drive()'
    car.drive = function () {
        VehDrive.call( this );
        console.log("Rollin on all " + this.wheels + " wheels!")
    }

    return car;
}

var myCar = new Car();

myCar.drive();