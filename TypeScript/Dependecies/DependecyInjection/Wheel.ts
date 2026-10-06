
import { Tyre} from './Tyre';


export class Wheel  
{   
   tyre:Tyre ;    // Dependent on Tyres
   constructor();
   constructor(type:string) 

   constructor(type?:string)   
   {
       if(type!=undefined && type=="Tubeless") 
           this.tyre=new Tyre("Tubeless New Tyres");
       if(type!=undefined && type=="Tubed")
           this.tyre=new Tyre("Tubed New Tyres");
       if(type==undefined)
           this.tyre=new Tyre("Tubed Old Tyres");
   }
}