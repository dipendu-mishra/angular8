interface ITrackProps {
    name: string;
    artist: string;
  }
  
  class Track {  
    private props: ITrackProps;
  
    get name (): string {
      return this.props.name;
    }
  
    set name (name: string) {
        this.props.name = name;
    }
  
    get artist (): string {
      return this.props.artist;
    }
  
    set artist (artist: string) {
        this.props.artist = artist;
    }
  
    constructor (props: ITrackProps) {
      this.props = props;
    } 
    
    public play (): void 
    {	
        console.log(`Playing ${this.name} by ${this.artist}`);
    }
    public static playAll(movieall: Track[]):void
  {
     for( let m of movieall)
     {
      console.log(`Playing ${this.name} by ${this.artist}`);
     }
  }
  }
  var movie1:ITrackProps= { name:"Bahuballi",artist:"Prabhas"};
  var theater1:Track=new Track(movie1);
  theater1.play();
 // var theaterAll:Track []=[{ name:"Bahuballi",artist:"Prabhas"},{ name:"Don",artist:"Amitabh"},{ name:"Robot",artist:"Rajanikant"}];
 //  Track.playAll(theaterAll);
  
  