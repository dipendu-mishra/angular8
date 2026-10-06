"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.eat = function () {
        console.log(this.name + " eats when hungry.");
    };
    return Person;
}());
exports.Person = Person;
