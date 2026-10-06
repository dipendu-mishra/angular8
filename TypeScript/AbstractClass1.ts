abstract class Staff 
{
    empid:number;
    ename: string; 
    salary:number;       
    constructor(empid:number ,ename: string)
    {
        this.empid=empid; this.ename = ename;
    }
    display(): void
    {
        console.log(this.empid+" "+this.ename);
    }
    abstract calSalary(): void;
}

class Emp extends Staff
{ 
    total_work_days:number;
    eType:string="Employee";   
    constructor(empid:number ,ename: string,wd:number ) 
    { 
        super(empid,ename); // must call super()
        this.total_work_days = wd;
    }
    calSalary():void
    {
      this.salary=20000+ this.total_work_days*1000;     
    }
    display():void
    {
       console.log("--------------------------");
       super.display();console.log("Emp Type:"+this.eType+" Salary:"+this.salary) 
       console.log("--------------------------");
    }    
}
var  emp1:Staff;
//emp1=new Staff(1001,"Sumit") Object Creation not allowed
emp1=new Emp(1001,"Sumit",30);
emp1.calSalary();
emp1.display();