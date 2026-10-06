import {Person as Per} from './Person'     // Per as Alias

export class Student extends Per{
  
    rollnumber:number; 
    
    constructor(rollnumber:number, name1:string){
        super();
        this.rollnumber = rollnumber
        this.name = name1
    }   
    displayInformation():void{
        console.log("Name : "+this.name+", Roll Number : "+this.rollnumber)
        this.eat()
    }    
    public eat():void{
        console.log(this.name+" eats during break.")
       
    }
}

