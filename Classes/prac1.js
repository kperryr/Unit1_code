class Vehicle{
    constructor( type,make,year,model,mileage = 0){
        this.type = type;
        this.make = make;
        this.year = year;
        this.model = model;
        this.mileage = mileage;
    }

    drive(miles){
        this.mileage += miles;
    }

    getDetails(){
        return `The car's type is ${this.type}.\nThe car's make is ${this.make}.\nThe car's model is a ${this.year} ${this.model} with ${this.mileage} miles.`;
    }
}
let car = new Vehicle("Car", "Toyota", "Corolla", 2020);
let truck = new Vehicle("Truck", "Ford", "F-150", 2018, 15000);
let motorcycle = new Vehicle("Motorcycle", "Honda", "CB500",
2021);

// Test methods
car.drive(120);
truck.drive(250);
motorcycle.drive(75);
console.log(car.getDetails());
console.log(truck.getDetails());
console.log(motorcycle.getDetails());
