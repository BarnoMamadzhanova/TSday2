

// class Person{
//     name : string;
//     jobTitle : string; 
//     age: number;

//     constructor(name: string, jobTitle: string, age: number) {
//         this.name = name;
//         this.jobTitle = jobTitle;
//         this.age = age
//     }

//     printInfo(): string{
//         return `Hello there, My name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}`;
//     }
// }

// let designer = new Person("Jane Lennox", "lead designer", 28);
// document.write(designer.printInfo());
// console.log(designer.printInfo());

// Create a class based on the Person class and add some other properties like salary, 
// jobLocation and a function that will call the function that is inside the Person class 
// and add “and I get (salary) every month, and I work in (jobLocation)”


// class Manager extends Person {
//     salary: number;
//     jobLocation: string;

//     constructor(name: string, jobTitle: string, age: number, salary: number, jobLocation: string){
//         super(name, jobTitle, age);
//         this.salary = salary;
//         this.jobLocation = jobLocation;
//     }

//     printInfo() {
//         return `${super.printInfo()} and I get ${this.salary} every month, and I work in ${this.jobLocation}.`
//     }
// }

// let manager = new Manager("Harry White", "manager", 32, 3200, "Thaliastrasse 9");
// document.write(manager.printInfo());
// console.log(manager.printInfo());


// Advanced

// Create an App that has to offer four different of types of vehicles and list the vehicle models based on the selected panel.
//  Once the user clicks on some vehicle show its details and possibility to view the price

// Create a Parent Class called Vehicles
// Define properties and methods for the super Class
// Consider the inheritance concept
// Define 2 other Child classes and name them Motorbikes and Trucks
// Based on the personal vehicle performance model, kilometers left, number of seats, fuel type and year of production calculate 
// the price once the user clicks on the button "show price" *use your dummy custom formula)

interface ICars{
    name: string;
    model: string;
    year: number;
    fuel: string;
    initialPrice: number;
    mileage: number;
    image?: string;
    seats?: number;
    weight?: number;
    calcPrice: Function;
}

let carsArray : ICars[] = [];

class Cars {
    name: string;
    model: string;
    year: number;
    fuel: string;
    initialPrice: number;
    mileage: number;
    image: string;

    constructor(name: string, model: string, year: number, fuel: string, initialPrice: number, mileage: number, image: string){
        this.name = name;
        this.model = model;
        this.year = year;
        this.fuel = fuel;
        this.initialPrice = initialPrice;
        this.mileage = mileage;
        this.image = image;
        carsArray.push(this);
    }

    calcPrice(): number {
        return this.initialPrice
    }

}

class SUV extends Cars{
    seats: number;
    constructor(name: string, model: string, year: number, fuel: string, initialPrice: number, mileage: number, image: string, seats: number){
        super(name, model, year, fuel, initialPrice, mileage, image)
        this.seats = seats;
    }

    calcPrice() {
        return Math.round(super.calcPrice() - ((this.mileage*15)/100) + ((this.seats*5)/100))
    }
}

class Sport extends Cars{
    seats: number;
    constructor(name: string, model: string, year: number, fuel: string, initialPrice: number, mileage: number, image: string, seats: number){
        super(name, model, year, fuel, initialPrice, mileage, image)
        this.seats = seats;
    }

    calcPrice() {
        return Math.round(super.calcPrice() - ((this.mileage*20)/100) - ((this.seats*5)/100))
    }
}

class Motorbikes extends Cars{
    seats: number;
    constructor(name: string, model: string, year: number, fuel: string, initialPrice: number, mileage: number, image: string, seats: number){
        super(name, model, year, fuel, initialPrice, mileage, image)
        this.seats = seats;
    }

    calcPrice() {
        return Math.round(super.calcPrice() - ((this.mileage*10)/100) - ((this.seats*5)/100))
    }

}

class Trucks extends Cars{
    seats: number;
    weight: number; 

    constructor(name: string, model: string, year: number, fuel: string, initialPrice: number, mileage: number, image: string, seats: number, weight: number){
        super(name, model, year, fuel, initialPrice, mileage, image)
        this.seats = seats;
        this.weight = weight
    }

    calcPrice() {
        return Math.round(super.calcPrice() - ((this.mileage*10)/100) + ((this.seats*5)/100) + + ((this.weight*10)/100))
    }
}

let car1 = new SUV("Chevrolet", "Trax AWD LS", 2022, "Petrol", 21400, 15000, "https://inv.assets.ansira.net/RTT/Chevrolet/2022/5611453/default/ext_G5J_deg01.jpg", 4);
let car2 = new Sport("Chevrolet-Sport", "Corvette", 2019, "Petrol", 62000, 12000, "https://hips.hearstapps.com/hmg-prod/images/2020-chevrolet-corvette-lead2-1571234772.jpg", 2);
let car3 = new Motorbikes("Honda", "X-ADV", 2021, "Petrol AI-95", 16200, 10000, "https://www.honda.at/content/dam/central/motorcycles/adventure/x-adv_2021/Overview/Versatile/X-ADV-ADVENTURE-PACK.jpg/_jcr_content/renditions/fb.jpg", 1);
let car4 = new Trucks("Mercedes-Benz", "Actros 6x4", 2020, "Diesel", 160000, 25000, "https://i.pinimg.com/originals/e9/96/fa/e996fab651efcf82c38902eaa7611de1.jpg", 2, 20000);
// console.log(carsArray);


carsArray.forEach((car)=> {
    let print = document.getElementById('print') as HTMLElement;
    print.innerHTML += `
    <div>
        <div class="card card-fix">
            <img src="${car.image}" class="card-img-top img" alt="${car.name}">
            <div class="card-body">
                <h4 class="card-title">${car.name} ${car.model}</h4>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Year: ${car.year}</li>
                    <li class="list-group-item">Fuel: ${car.fuel}</li>
                    <li class="list-group-item">Mileage: ${car.mileage}</li>
                    <li class="list-group-item">Number of seats: ${car.seats}</li>
                    <li class="list-group-item">Weight: ${car.weight}</li>
                </ul>
                <a class="btn btn-dark" data-bs-toggle="collapse" href="#${car.name}" role="button" aria-expanded="false" aria-controls="collapseExample"">Check the price</a>
                <div class="collapse my-2" id="${car.name}">
                    <div class="card card-body">
                       ${car.calcPrice()}$
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
})
