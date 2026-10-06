export class Engine
{
   capacity:string;
   fuelType:string;
   constructor();    
   constructor(capacity:string , fueslType:string);
   constructor(capacity?:string , fuelType?:string)
   {
       if(capacity==undefined && fuelType==undefined)
          this.capacity="1000 CC "; this.fuelType="Petrol"; 
       if(capacity!=undefined && fuelType!=undefined)
          this.capacity=capacity; this.fuelType=fuelType;
   }
   
}
