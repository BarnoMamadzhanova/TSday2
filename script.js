var Person = /** @class */ (function () {
    function Person(name, jobTitle, age) {
        this.name = name;
        this.jobTitle = jobTitle;
        this.age = age;
    }
    Person.prototype.printInfo = function () {
        return "Hello there, My name is ".concat(this.name, " and I am ").concat(this.age, " years old, and I am a ").concat(this.jobTitle, ".");
    };
    return Person;
}());
var designer = new Person("Jane Lennox", "lead designer", 28);
document.write(designer.printInfo());
console.log(designer.printInfo());
