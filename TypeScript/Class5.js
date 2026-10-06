var Employee2 = /** @class */ (function () {
    function Employee2() {
    }
    Employee2.prototype.setEmployeeDet = function (val1, val2) {
        console.log("---------------------------------------");
        console.log("Types:val1=" + typeof val1 + " val2:" + val2);
        if (typeof val1 == 'number')
            this.id = val1;
        else if (typeof val1 == 'string')
            this.ename = val1;
        else if (typeof val1 == 'boolean')
            this.perm_emp = val1;
        if (typeof val2 != 'undefined') // or if(val2!=undefined)  
            this.email = val2;
    };
    Employee2.prototype.getEmployeeDet = function () {
        console.log("ID:" + this.id + " Name:" + this.ename + " PType:" + this.perm_emp + "  EMail:" + this.email);
    };
    return Employee2;
}());
var e = new Employee2();
e.getEmployeeDet();
e = new Employee2();
e.setEmployeeDet(1001);
e.getEmployeeDet();
e = new Employee2();
e.setEmployeeDet("Priya");
e.getEmployeeDet();
e = new Employee2();
e.setEmployeeDet(true);
e.getEmployeeDet();
e = new Employee2();
e.setEmployeeDet("Priya", "priya@gmail.com");
e.getEmployeeDet();
