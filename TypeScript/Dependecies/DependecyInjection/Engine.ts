export class Engine
{
   
   fuelType:string;
   private static instance: Engine;
   private constructor(fuelType:string)
   {
      this.fuelType=fuelType;
   }
   public  static getInstance(fuelType:string): Engine
    {
      if (!Engine.instance)
        if(fuelType=="Petrol")          
             Engine.instance = new Engine("Petrol Engine");          
         else if(fuelType=="Deisal")
             Engine.instance = new Engine("Petrol Engine");    
      return Engine.instance;
    }

   
}
