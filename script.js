var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, jobTitle, age) {
        this.name = name;
        this.jobTitle = jobTitle;
        this.age = age;
    }
    Person.prototype.printInfo = function () {
        return "Hello there, My name is ".concat(this.name, " and I am ").concat(this.age, " years old, and I am a ").concat(this.jobTitle);
    };
    return Person;
}());
// let designer = new Person("Jane Lennox", "lead designer", 28);
// document.write(designer.printInfo());
// console.log(designer.printInfo());
// Create a class based on the Person class and add some other properties like salary, 
// jobLocation and a function that will call the function that is inside the Person class 
// and add “and I get (salary) every month, and I work in (jobLocation)”
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, jobTitle, age, salary, jobLocation) {
        var _this = _super.call(this, name, jobTitle, age) || this;
        _this.salary = salary;
        _this.jobLocation = jobLocation;
        return _this;
    }
    Manager.prototype.printInfo = function () {
        return "".concat(_super.prototype.printInfo.call(this), " and I get ").concat(this.salary, " every month, and I work in ").concat(this.jobLocation, ".");
    };
    return Manager;
}(Person));
var manager = new Manager("Harry White", "manager", 32, 3200, "Thaliastrasse 9");
document.write(manager.printInfo());
console.log(manager.printInfo());
