// Get and Set Properties
var Student = /** @class */ (function () {
    function Student(roll, name) {
        this.roll = roll;
        this.name = name;
    }
    Object.defineProperty(Student.prototype, "Name", {
        // Name Properties with get and set both ( Read and Write)
        get: function () {
            return this.name;
        },
        set: function (val) {
            this.name = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "Roll", {
        // Roll Properties with get only(Only can  Read )
        get: function () {
            return this.roll;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var s = new Student(2001, 'Rahul');
// s.Roll=4567; Set Properties is not defined 
s.Name = 'Rohit'; //  Set Name properties assigend
console.log(s.Name + "  " + s.Roll); // Get for Name and Roll poperties both defined
