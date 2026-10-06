class Employee { 
    private empno:number;            //field 
    private ename:string;
    private salary:number;  
       
    constructor();
    constructor(empno:number);
    constructor(empno:number,ename:string);
    constructor(empno:number,ename:string,email:number);

    constructor(empno: number=1000 , ename?:string , salary?:number) 
    {
        if(empno!=undefined)
            this.empno=empno;
        if(ename!=undefined)
        this.ename=ename;
        if(salary!=undefined)
        this.salary=salary;       
        console.log("Objects created");        
    }
    disp():void            //function    
    {        
          console.log("Empno:"+this.empno+" Name:"+this.ename+" Salary:"+this.salary) 
    } 
    
 }
 var obj1;
 obj1== new Employee()
 obj1.disp(); 
 obj1=new Employee(1001);
 obj1.disp(); 
 obj1=new Employee(1002,"Tom");
 obj1.disp(); 
 obj1=new Employee(1003,"Jack",40000);
 obj1.disp(); 
 