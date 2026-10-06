
import { Engine} from './Engine';
import { Wheel} from './Wheel';

export class Car
{
    engine :Engine;
    wheels: Wheel[];  
    constructor(noWheels:number);
    constructor(noWheels:number,typeOfTyres:string);

    constructor(noWheels:number,typeOfTyres?:string)
    {
        this.engine=new Engine();
        this.wheels=new Array(noWheels);
        
        if(typeOfTyres=="Tubeless")
           for(let i=0;i<noWheels;i++)
              this.wheels[i]=new Wheel("Tubeless");  
        if(typeOfTyres=="Tubed")
           for(let i=0;i<noWheels;i++)
              this.wheels[i]=new Wheel("Tubed");
        if(typeOfTyres==undefined) 
           for(let i=0;i<noWheels;i++) 
              this.wheels[i]=new Wheel("Old Tubed Tyres");        
    }       
    showCarDeatils():void
    {
    console.log("Eng. Cap \t Eng Type ");
    console.log(this.engine.capacity+"\t"+this.engine.fuelType)
    console.log("No. of wheels \t Type of Tyres ");
    console.log(this.wheels.length+"\t\t"+this.wheels[0].tyre.tType)
    }
}



