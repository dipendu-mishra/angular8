var Employee1 = /** @class */ (function () {
    function Employee1() {
    }
    Employee1.prototype.setEmployeeDet = function (empid, ename, email) {
        if (typeof empid != 'undefined')
            this.id = empid;
        if (typeof ename != 'undefined')
            this.ename = ename;
        if (typeof email != 'undefined')
            this.email = email;
    };
    Employee1.prototype.getEmployeeDet = function () {
        console.log(this.id + " " + this.ename + " " + this.email);
    };
    return Employee1;
}());
var e = new Employee1();
e.getEmployeeDet();
e.setEmployeeDet(1001);
e.getEmployeeDet();
e.setEmployeeDet(1001, "Priya");
e.getEmployeeDet();
e.setEmployeeDet(1001, "Priya", "priya@gmail.com");
e.getEmployeeDet();
