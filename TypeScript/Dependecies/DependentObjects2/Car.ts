class NewCar
{
     engine:NewEngine;
     wheels:NewWheel;
     ss:ServiceStation;
     constructor()
     {
         this.engine=new NewEngine();
         this.wheels=new NewWheel();
         this.ss=new ServiceStation();
     }
     showCarDetails():void
     {
      console.log("Engine:"+this.engine.fuelType);
      console.log("Tyre Type:"+this.wheels.wheelTyre.tyreType)
     }
}
class ServiceStation{

}
class NewEngine
{  fuelType:string;
   constructor()   
   {
       this.fuelType="Petrol";      
   }
}
class NewWheel
{
   wheelTyre:NewTyre; 
   constructor()
   {
       this.wheelTyre=new NewTyre();
   }
}
class NewTyre
{
   tyreType:string="Tubed Tyres";   
}
var car1:NewCar=new NewCar();
car1.showCarDetails();

// But you cannot create car with diesal, tyre with tubeles. For that you have 
// to modify the class definitions of Engine , Wheel , Tyre Constructors accordingly.
// Issue: So code is not flexible to make car objects with different types.
