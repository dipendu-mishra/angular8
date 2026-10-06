import { Car} from './Car';

// Car is dependent on Engine Type ( Capacity and fuelType ) 
// Car is dependent on Wheels with Tyre Types

var c1:Car=new Car(4,"Tubed");
console.log(c1.showCarDeatils());
