// Get and Set Properties
class Student
 {
    private roll: number ;
    private name: string;
    constructor(roll:number , name:string)
    {
      this.roll=roll; this.name=name;
    }
    // Name Properties with get and set both ( Read and Write)
    get Name(): string 
    {
        return this.name;
    }
    set Name(val:string) 
    {
        this.name = val;
    }
    // Roll Properties with get only(Only can  Read )
    get Roll(): number
    {
        return this.roll;
    }
}
var s:Student=new Student(2001,'Rahul');
// s.Roll=4567; Set Properties is not defined 
s.Name='Rohit'; 
//s.Name('Rohit'); //  Set Name properties assigend
console.log(s.Name+"  "+s.Roll);  // Get for Name and Roll poperties both defined
 