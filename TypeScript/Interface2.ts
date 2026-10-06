interface Movie {
    name: string;
    artist: string;
  }  
  interface Address
  {
    lane:string;
    pin:number;
  }
  class Employee444
  {
    empid:number;
    addr:Address;
  }
  class Theater {  
    private props: Movie;  
    private location:string;
    constructor (props: Movie,loc:string)
     {
      this.props = props;this.location=loc;

    } 
  
    public play (): void 
    {	
        console.log("Playing "+this.props.name+ " by "+this.props.artist+ " at "+this.location);
    }
  }
  var movie1:Movie= { name:"Bahuballi",artist:"Prabhas"};
  var t1:Theater;
  t1=new Theater(movie1,'Bangalore');
  t1.play();