"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
var FullTimeEmployee = /** @class */ (function () {
    function FullTimeEmployee(empno, name, sal, leaves) {
        this.empno = empno;
        this.name = name;
        this.sal = sal;
        this.leaves = leaves;
    }
    FullTimeEmployee.prototype.displayInformation = function () {
        console.log("Name : " + this.name + ", Roll Number : " + this.empno + " Salary : " + this.sal + " Leaves:" + this.leaves);
    };
    return FullTimeEmployee;
}());
var PartTimeEmployee = /** @class */ (function () {
    function PartTimeEmployee(empno, name, sal) {
        this.empno = empno;
        this.name = name;
        this.sal = sal;
    }
    PartTimeEmployee.prototype.displayInformation = function () {
        console.log("Name : " + this.name + ", Roll Number : " + this.empno + " Salary : " + this.sal);
    };
    return PartTimeEmployee;
}());
//export { FullTimeEmployee as FEmp}
//export { PartTimeEmployee as PEmp}
//export { FullTimeEmployee as Emp,PartTimeEmployee as PEmp}
__exportStar(require("./Employee"), exports);
