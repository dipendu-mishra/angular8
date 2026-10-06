class Employee1 
{
    id1:any=undefined;
id:number=undefined;
email:string;
ename:string;
// Function Overloading
 setEmployeeDet(id: number): void;                     //Overload 1
 setEmployeeDet(id: number , ename:string ): void;                  //Overload 2
 setEmployeeDet(id:number , ename:string , email:string): void;    //Overload 3
 
 setEmployeeDet ( empid:number , ename?: string, email?:string): void
 { 
    if( typeof empid != 'undefined') 
        this.id=empid;
    if( typeof ename != 'undefined') 
        this.ename=ename;
    if( typeof email != 'undefined') 
        this.email=email;
 }
 getEmployeeDet():void
 {
   console.log(this.id+" "+this.ename+" "+this.email)
 }
}
var e=new Employee1();
e.getEmployeeDet();
e.setEmployeeDet(1001)
e.getEmployeeDet();
e.setEmployeeDet(1001,"Priya")
e.getEmployeeDet();
e.setEmployeeDet(1001,"Priya","priya@gmail.com")
e.getEmployeeDet();



