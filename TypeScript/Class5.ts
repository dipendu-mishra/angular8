class Employee2{
    id:number;
    ename:string;
    perm_emp:boolean;
    email:string;
    // Function Overloading
     setEmployeeDet(id: number): void;                     //Overload 1
     setEmployeeDet(ename:string ): void;                  //Overload 2
     setEmployeeDet(perm_emp:boolean ): void;                  //Overload 2
     setEmployeeDet(ename:string , email:string): void;    //Overload 3
     
     setEmployeeDet ( val1:number|string|boolean , val2?: string): void
     { 
         console.log("---------------------------------------");
         console.log("Types:val1="+typeof val1 + " val2:"+val2 );
       
        if( typeof val1 == 'number') 
            this.id=val1;
        else if( typeof val1 == 'string') 
            this.ename=val1;
        else if( typeof val1 == 'boolean') 
            this.perm_emp=val1;

        if(typeof val2!='undefined') // or if(val2!=undefined)  
             this.email=val2;
     }
     getEmployeeDet():void
     {
       console.log("ID:"+this.id+" Name:"+this.ename+" PType:"+this.perm_emp+"  EMail:"+this.email)
     }
    }
    var e=new Employee2();
    e.getEmployeeDet();

    e=new Employee2();
    e.setEmployeeDet(1001)
    e.getEmployeeDet();

    e=new Employee2();
    e.setEmployeeDet("Priya")
    e.getEmployeeDet();

    e=new Employee2();
    e.setEmployeeDet(true)
    e.getEmployeeDet();

    e=new Employee2();
    e.setEmployeeDet("Priya","priya@gmail.com")
    e.getEmployeeDet();
    
    
    
    