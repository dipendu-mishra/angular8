import { Wheel } from "../DependentObjects3/Wheel";

class MarutiCar
{
     engine:MarutiEngine;
     wheels:SuzukiWheel;
     constructor(engine:MarutiEngine,wheels:SuzukiWheel)
     {
         this.engine=engine;
         this.wheels=wheels;
     }
     showCarDetails():void
     {
      console.log("Engine:"+this.engine.fuelType);
      console.log("Tyre Type:"+this.wheels.wheelTyre.tyreType)
     }
}
class MarutiEngine
{  fuelType:string;
   constructor(fuelType:string)   
   {
       this.fuelType=fuelType;      
   }
}
class SuzukiWheel
{
   wheelTyre:MRFTyre; 
   constructor(tyre:MRFTyre)
   {
       this.wheelTyre=tyre;
   }
}
class MRFTyre
{
   tyreType:string; 
   constructor(tyreType:string)
   {
       this.tyreType="MRF:"+ tyreType;
   } 
}

var mty:MRFTyre=new MRFTyre("Tubeless");
var wh:SuzukiWheel=new SuzukiWheel(mty);  // Wheel is dependent on Tyre Object
var en:MarutiEngine=new MarutiEngine("Petrol");
var newCar:MarutiCar=new MarutiCar(en,wh); // Car is dependent on Engine and Wheel Objects
newCar.showCarDetails();
// Drawback: Developer have o follow the sequence of creating objects 
// accordingly to the  dependentss. This become extremely diffcult for developer 
// if one object have 100 dependents and those have their dependents . 
// Another issue is that even Car objects removed or no longer required in program 
// , still dependent objects exists into memory to use, unless developer is not making them
// unreferenced. 


