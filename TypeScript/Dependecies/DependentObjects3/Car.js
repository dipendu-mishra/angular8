var Car = /** @class */ (function () {
    function Car(engine, wheels) {
        this.engine = engine;
        this.wheels = wheels;
    }
    Car.prototype.showCarDetails = function () {
        console.log("Engine:" + this.engine.fuelType);
        console.log("Tyre Type:" + this.wheels.wheelTyre.tyreType);
    };
    return Car;
}());
var Engine = /** @class */ (function () {
    function Engine(fuelType) {
        if (fuelType == "Petrol")
            this.fuelType = "Petrol";
        if (fuelType == "Diesal")
            this.fuelType = "Petrol";
    }
    return Engine;
}());
var Wheel = /** @class */ (function () {
    function Wheel(tyre) {
        this.wheelTyre = tyre;
    }
    return Wheel;
}());
var Tyre = /** @class */ (function () {
    function Tyre(tyreType) {
        this.tyreType = tyreType;
    }
    return Tyre;
}());
var t1 = new Tyre("Tubeless");
var w1 = new Wheel(t1);
var e1 = new Engine("Petrol");
var c1 = new Car(e1, w1);
c1.showCarDetails();
