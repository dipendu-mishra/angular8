var Employee = /** @class */ (function () {
    function Employee(empno, ename, salary) {
        if (empno != undefined)
            this.empno = empno;
        if (ename != undefined)
            this.ename = ename;
        if (salary != undefined)
            this.salary = salary;
        console.log("Objects created");
    }
    Employee.prototype.disp = function () {
        console.log("Empno:" + this.empno + " Name:" + this.ename + " Salary:" + this.salary);
    };
    return Employee;
}());
var obj1;
//obj1== new Employee()
// obj1.disp(); 
obj1 = new Employee(1001);
obj1.disp();
obj1 = new Employee(1002, "Tom");
obj1.disp();
obj1 = new Employee(1003, "Jack", 40000);
obj1.disp();
