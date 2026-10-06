"use strict";
exports.__esModule = true;
exports.Wheel = void 0;
var Tyre_1 = require("./Tyre");
var Wheel = /** @class */ (function () {
    function Wheel(type) {
        if (type != undefined && type == "Tubeless")
            this.tyre = new Tyre_1.Tyre("Tubeless New Tyres");
        if (type != undefined && type == "Tubed")
            this.tyre = new Tyre_1.Tyre("Tubed New Tyres");
        if (type == undefined)
            this.tyre = new Tyre_1.Tyre("Tubed Old Tyres");
    }
    return Wheel;
}());
exports.Wheel = Wheel;
