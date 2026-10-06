var TwoWheeler = /** @class */ (function () {
    function TwoWheeler(vname) {
        this.vType = "Two Wheeler";
        this.no_of_wheels = 2;
        this.speed = 0;
        this.vName = vname;
    }
    TwoWheeler.prototype.getAccelerate = function (n) {
        // setting maximum speed 160    
        if (this.speed < 150)
            this.speed = this.speed + n * 10;
        else if (this.speed > 150 && this.speed < 160)
            this.speed = 160;
        else
            console.log("Reached maximum limit");
    };
    TwoWheeler.prototype.getBrake = function (n) {
        if (this.speed > 10)
            this.speed = this.speed - n * 10;
        else
            this.speed = 0;
    };
    TwoWheeler.prototype.displaySpeed = function () {
        console.log("Running with speed:" + this.speed);
    };
    return TwoWheeler;
}());
var bike1 = new TwoWheeler("Hero Passion");
bike1.getAccelerate(5);
bike1.getAccelerate(7);
bike1.getBrake(2);
bike1.displaySpeed();
