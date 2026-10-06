var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Staff = /** @class */ (function () {
    function Staff(empid, ename) {
        this.empid = empid;
        this.ename = ename;
    }
    Staff.prototype.display = function () {
        console.log(this.empid + " " + this.ename);
    };
    return Staff;
}());
var Emp = /** @class */ (function (_super) {
    __extends(Emp, _super);
    function Emp(empid, ename, wd) {
        var _this = _super.call(this, empid, ename) || this;
        _this.eType = "Employee";
        _this.total_work_days = wd;
        return _this;
    }
    Emp.prototype.calSalary = function () {
        this.salary = 20000 + this.total_work_days * 1000;
    };
    Emp.prototype.display = function () {
        console.log("--------------------------");
        _super.prototype.display.call(this);
        console.log("Emp Type:" + this.eType + " Salary:" + this.salary);
        console.log("--------------------------");
    };
    return Emp;
}(Staff));
var emp1;
emp1 = new Staff(1001, "Sumit");
emp1 = new Emp(1001, "Sumit", 30);
emp1.calSalary();
emp1.display();
