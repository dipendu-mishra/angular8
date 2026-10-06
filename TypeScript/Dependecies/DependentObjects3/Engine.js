"use strict";
exports.__esModule = true;
exports.Engine = void 0;
var Engine = /** @class */ (function () {
    function Engine(capacity, fuelType) {
        if (capacity == undefined && fuelType == undefined)
            this.capacity = "1000 CC ";
        this.fuelType = "Petrol";
        if (capacity != undefined && fuelType != undefined)
            this.capacity = capacity;
        this.fuelType = fuelType;
    }
    return Engine;
}());
exports.Engine = Engine;
