

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
        return `Hello there, My name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}.`;
    }
}

let designer = new Person("Jane Lennox", "lead designer", 28);
document.write(designer.printInfo());
console.log(designer.printInfo());
