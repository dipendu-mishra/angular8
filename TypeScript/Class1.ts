class NewCar { 
  engine:string;          //field as Public 
  x:any;
  constructor(engine:string="empty")  //constructor 
    { 
       this.engine =engine;  
       console.log("Constructor invoked"); 
       
        
    } 
      
   disp():void            //function    as Public
    { 
       console.log("Engine is  :   "+this.engine)        
    } 
 }
 
var obj1 = new NewCar("Maruti Zen")
var obj3 = new NewCar();
obj1.disp()
var obj2 = new NewCar("Swift")
obj2.disp()


