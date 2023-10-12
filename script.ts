

class Person{
    name : string;
    jobTitle : string; 
    age: number;

    constructor(name: string, jobTitle: string, age: number) {
        this.name = name;
        this.jobTitle = jobTitle;
        this.age = age
    }

    printInfo(): string{
        return `Hello there, My name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}`;
    }
}

// let designer = new Person("Jane Lennox", "lead designer", 28);
// document.write(designer.printInfo());
// console.log(designer.printInfo());

// Create a class based on the Person class and add some other properties like salary, 
// jobLocation and a function that will call the function that is inside the Person class 
// and add “and I get (salary) every month, and I work in (jobLocation)”


class Manager extends Person {
    salary: number;
    jobLocation: string;

    constructor(name: string, jobTitle: string, age: number, salary: number, jobLocation: string){
        super(name, jobTitle, age);
        this.salary = salary;
        this.jobLocation = jobLocation;
    }

    printInfo() {
        return `${super.printInfo()} and I get ${this.salary} every month, and I work in ${this.jobLocation}.`
    }
}

let manager = new Manager("Harry White", "manager", 32, 3200, "Thaliastrasse 9");
document.write(manager.printInfo());
console.log(manager.printInfo());
