var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.eat = function () {
        console.log(this.name + " eats when hungry.");
    };
    return Person;
}());
var Stud = /** @class */ (function (_super) {
    __extends(Stud, _super);
    // constructors
    function Stud(rollnumber, name1) {
        var _this = _super.call(this) || this;
        _this.rollnumber = rollnumber;
        _this.name = name1;
        return _this;
    }
    // functions
    Stud.prototype.displayInformation = function () {
        console.log("Name : " + this.name + ", Roll Number : " + this.rollnumber);
        this.eat();
    };
    // overriding super class method
    Stud.prototype.eat = function () {
        console.log(this.name + " eats during break.");
    };
    return Stud;
}(Person));
var student1 = new Stud(2, "Rohit");
student1.displayInformation();
