
var x:any;
var x1:number;
x=23;
x="abc"


class Employee { 
    private empno:number;            //field 
    private ename:string;
    private salary:number; 
     
    public static no_of_employees:number=0;  // Not initilizing automatically ,   
            
    constructor(empno : number ,ename ?:string,salary ?:number) 
    {
        this.empno=empno;this.ename=ename;this.salary=salary;
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
    disp():void            //function    
    { 
        
        console.log(". Name:"+this.ename+" Empno:"+this.empno+" Salary:"+this.salary)     
    } 
    static showNOE()
    {
        console.log("Total EMployees:"+Employee.no_of_employees)      ;
    }
 }
//Employee.showNOE();


 var obj11 = new Employee()
 obj11.disp(); Employee.showNOE();
 obj11=new Employee(1001);
 obj11.disp(); Employee.showNOE();
 obj11=new Employee(1002,"Tom");
 obj11.disp(); Employee.showNOE();
 obj11=new Employee(1003,"Jack",40000);
 obj11.disp(); Employee.showNOE();
 