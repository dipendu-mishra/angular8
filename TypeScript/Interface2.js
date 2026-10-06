var Theater = /** @class */ (function () {
    function Theater(props, loc) {
        this.props = props;
        this.location = loc;
    }
    Theater.prototype.play = function () {
        console.log("Playing " + this.props.name + " by " + this.props.artist + " at " + this.location);
    };
    return Theater;
}());
var movie1 = { name: "Bahuballi", artist: "Prabhas" };
var t1;
t1 = new Theater(movie1, 'Bangalore');
t1.play();
