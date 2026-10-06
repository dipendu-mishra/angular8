export class FullTimeEmployee {
  
    empno:number; 
    name:String;
    sal:number;
    leaves:number;
    constructor(empno:number, name:string, sal:number,leaves:number)
    {
        this.empno=empno;  this.name = name; this.sal=sal;this.leaves=leaves;
    }   
    displayInformation():void
    {
    console.log("Name : "+this.name+", Roll Number : "+this.empno+" Salary : "+this.sal+" Leaves:"+this.leaves);    
    }      
}
export class PartTimeEmployee {
  
    empno:number; 
    name:String;
    sal:number;
    constructor(empno:number, name:string, sal:number)
    {
        this.empno=empno;  this.name = name; this.sal=sal;
    }   
    displayInformation():void
    {
    console.log("Name : "+this.name+", Roll Number : "+this.empno+" Salary : "+this.sal);    
    }      
}
//export { FullTimeEmployee as FEmp}
//export { PartTimeEmployee as PEmp}
//export { FullTimeEmployee as Emp,PartTimeEmployee as PEmp}
export * as Emp from './Employee'; 