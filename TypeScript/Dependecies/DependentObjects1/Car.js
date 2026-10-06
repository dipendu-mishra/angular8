"use strict";
exports.__esModule = true;
var MarutiCar = /** @class */ (function () {
    function MarutiCar(engine, wheels) {
        this.engine = engine;
        this.wheels = wheels;
    }
    MarutiCar.prototype.showCarDetails = function () {
        console.log("Engine:" + this.engine.fuelType);
        console.log("Tyre Type:" + this.wheels.wheelTyre.tyreType);
    };
    return MarutiCar;
}());
var MarutiEngine = /** @class */ (function () {
    function MarutiEngine(fuelType) {
        this.fuelType = fuelType;
    }
    return MarutiEngine;
}());
var SuzukiWheel = /** @class */ (function () {
    function SuzukiWheel(tyre) {
        this.wheelTyre = tyre;
    }
    return SuzukiWheel;
}());
var MRFTyre = /** @class */ (function () {
    function MRFTyre(tyreType) {
        this.tyreType = "MRF:" + tyreType;
    }
    return MRFTyre;
}());
var mty = new MRFTyre("Tubeless");
var wh = new SuzukiWheel(mty); // Wheel is dependent on tyre
var en = new MarutiEngine("Petrol");
var newCar = new MarutiCar(en, wh); // Car is dependent on Engine and Wheel
newCar.showCarDetails();
// Drawback: Developer have o follow the sequence of creating objects 
// accordingly to the  dependentss. Its realy a diffcult to remember and maintain 
// if one object have 100 dependenstand those have their dependents . Even Car objects 
// removed or no longer required , still dependent objects exists inmory to use. 
