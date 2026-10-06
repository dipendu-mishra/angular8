interface LandVehicle 
{
    no_of_wheels: number;
   // speed:number;  // speed:number=0 cant initialize
    getAccelerate(n:number): void; 
    getBrake(n:number): void; 
}
class TwoWheeler implements LandVehicle
{
   vType:string="Two Wheeler";
   vName:string;
   no_of_wheels=2; 
   speed=0;  
   constructor(vname:string)
   {
    this.vName=vname;    
    
   }
   getAccelerate(n:number): void
   {  
       // setting maximum speed 160    
       if(this.speed<150)
            this.speed=this.speed+n*10;
       else if(this.speed>150 && this.speed<160)
            this.speed=160;
        else
            console.log("Reached maximum limit");
   }
   getBrake(n:number): void
   {
       if(this.speed>10)
       this.speed=this.speed-n*10;
       else
       this.speed=0;
   }  
   displaySpeed(): void
   {
       console.log("Running with speed:"+this.speed)
   }
}
var bike1 =new TwoWheeler("Hero Passion");
bike1.getAccelerate(5);
bike1.getAccelerate(7);
bike1.getBrake(2);
bike1.displaySpeed();
