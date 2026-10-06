"use strict";
exports.__esModule = true;
exports.MStud = exports.EStud = void 0;
var EngStudent = /** @class */ (function () {
    function EngStudent(rollnumber, name1) {
        this.rollnumber = rollnumber;
        this.name = name1;
    }
    EngStudent.prototype.displayInformation = function () {
        console.log("Name : Eng." + this.name + ", Roll Number : " + this.rollnumber);
    };
    return EngStudent;
}());
exports.EStud = EngStudent;
var MedStudent = /** @class */ (function () {
    function MedStudent(rollnumber, name1) {
        this.rollnumber = rollnumber;
        this.name = name1;
    }
    MedStudent.prototype.displayInformation = function () {
        console.log("Name : Dr." + this.name + ", Roll Number : " + this.rollnumber);
    };
    return MedStudent;
}());
exports.MStud = MedStudent;
exports["default"] = EngStudent;
