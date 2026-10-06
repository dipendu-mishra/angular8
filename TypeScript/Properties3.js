class Track {
    constructor(props) {
        this.props = props;
    }
    get name() {
        return this.props.name;
    }
    set name(name) {
        this.props.name = name;
    }
    get artist() {
        return this.props.artist;
    }
    set artist(artist) {
        this.props.artist = artist;
    }
    play() {
        console.log(`Playing ${this.name} by ${this.artist}`);
    }
    static playAll(movieall, []) {
        for (let m of movieall) {
            console.log(`Playing ${this.name} by ${this.artist}`);
        }
    }
}
var movie1 = { name: "Bahuballi", artist: "Prabhas" };
var theater1 = new Track(movie1);
theater1.play();
var movie2 = [{ name: "Bahuballi", artist: "Prabhas" }, { name: "Don", artist: "Amitabh" }, { name: "Robot", artist: "Rajanikant" }];
Track.playAll(movie2);
