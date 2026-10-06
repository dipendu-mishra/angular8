var x;
var x1;
x = 23;
x = "abc";
var Employee = /** @class */ (function () {
    function Employee(empno, ename, salary) {
        this.empno = empno;
        this.ename = ename;
        this.salary = salary;
        Employee.no_of_employees++;
        console.log("Objects created");
    }
    /* constructor(empno?: number , ename?:string , salary:number=0) // Optional and Default Arguments
    {
        this.empno=empno;this.ename=ename;this.salary=salary;
        Employee.no_of_employees++;
        console.log("Objects created");
    }
    
    constructor(empno?: number , ename:string="Empty" , salary?:number) // Wrong way
    {
        this.empno=empno;this.ename=ename;this.salary=salary;
        Employee.no_of_employees++;
        console.log("Objects created");
    } */
    /* disp():void            //function
     {
        console.log("Name:"+this.ename+" Empno:"+this.empno+" Salary:"+this.salary)
     }  */
    // Funtion Overloading   
    Employee.prototype.disp = function () {
        console.log(". Name:" + this.ename + " Empno:" + this.empno + " Salary:" + this.salary);
    };
    Employee.showNOE = function () {
        console.log("Total EMployees:" + Employee.no_of_employees);
    };
    Employee.no_of_employees = 0; // Not initilizing automatically ,   
    return Employee;
}());
//Employee.showNOE();
var obj11 = new Employee();
obj11.disp();
Employee.showNOE();
obj11 = new Employee(1001);
obj11.disp();
Employee.showNOE();
obj11 = new Employee(1002, "Tom");
obj11.disp();
Employee.showNOE();
obj11 = new Employee(1003, "Jack", 40000);
obj11.disp();
Employee.showNOE();
