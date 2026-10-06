
class EngStudent {
  
    rollnumber:number; 
    name:String;
    constructor(rollnumber:number, name1:string){
        
        this.rollnumber = rollnumber
        this.name = name1
    }   
    displayInformation():void
    {
        console.log("Name : Eng."+this.name+", Roll Number : "+this.rollnumber)
        
    }      
    
}
class MedStudent {
  
    rollnumber:number; 
    name:String;
    constructor(rollnumber:number, name1:string){
        
        this.rollnumber = rollnumber
        this.name = name1
    }   
    displayInformation():void
    {
        console.log("Name : Dr."+this.name+", Roll Number : "+this.rollnumber)
        
    }  
    
}
export { EngStudent as EStud,MedStudent as MStud}
export default EngStudent;
