class Person{
    name:string
 
    public eat():void{
        console.log(this.name+" eats when hungry.")
    }
}
 
class Stud extends Person{
    // variables
    rollnumber:number;
 
    // constructors
    constructor(rollnumber:number, name1:string){
        super(); // calling Parent's constructor
        this.rollnumber = rollnumber
        this.name = name1
    }
 
    // functions
    displayInformation():void{
        console.log("Name : "+this.name+", Roll Number : "+this.rollnumber)
        this.eat()
    }
 
    // overriding super class method  Decreseing visibility not allowed . Private not allowed
    public eat():void{
        console.log(this.name+" eats during break.")
        
    }
}
 

