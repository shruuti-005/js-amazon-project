// OOPs concepts
// Note: In other langs, a property can be 
// public - can be access anywhere, 
// private - access in only same class
// protected - can be accessed inside class & its child class
// OOps in Js is less Popular cuz it is missing some features like Protected properties 

export class Car {
    #brand; // private property
    #model;
    speed = 0;
    isTrunkOpen = false;

    constructor(carDetails) {
        this.#brand = carDetails.brand;
        this.#model = carDetails.model;
        this.speed = carDetails.speed;
    }

    displayInfo() {
        const trunkStatus = this.isTrunkOpen ? 'open' : 'closed';
        // console.log(`${this.#brand} ${this.#model}, Speed: ${this.speed} km/h, Trunk: ${trunkStatus}`);
    }

    go() {
        if(!this.isTrunkOpen){
            this.speed += 5;
        }
        if(this.speed > 200) {
            this.speed = 200;
        }
    }

    brake() {
        this.speed -= 5;
        if(this.speed < 0) {
            this.speed = 0;
        }
    }

    openTrunk() {
        if(this.speed === 0){
            this.isTrunkOpen = true;
        }
    }

    closeTrunk() {
        this.isTrunkOpen = false;
    }
}

const car1 = new Car({
    brand: 'Toyota',
    model: 'Corolla',
    speed: 85,
});
const car2 = new Car({
    brand: 'Tesla',
    model: 'Model 3',
    speed: 30
});

car1.go();
car1.brake();
car1.displayInfo();

car2.go();
car2.displayInfo();


class RaceCar extends Car {
    acceleration;
    constructor(carDetails){
        super(carDetails);
        this.acceleration = carDetails.acceleration;
    }

    go(){ //Overriding = Redefining a method in the child class with same name and different logic.
        this.speed += this.acceleration;
        if(this.speed > 300){
            this.speed = 300;
        }
    }

    openTrunk(){
        // console.log('Race cars do not have a trunk');
    }

    closeTrunk(){
        // console.log('Race cars do not have trunk');
    }
}

const raceCar1 = new RaceCar({
    brand: 'McLaren',
    model: 'F1',
    speed: 0,
    acceleration: 20
});

raceCar1.go();
raceCar1.go();
raceCar1.go();
raceCar1.displayInfo();
raceCar1.openTrunk();
raceCar1.displayInfo();
raceCar1.brake();
raceCar1.displayInfo();

// Concept: 	       In The Code
// Class:   	    Car, RaceCar
// Object:  	    car1, car2, raceCar1
// Constructor: 	constructor(carDetails)
// Inheritance: 	RaceCar extends Car
// Method Override - go(), openTrunk() in RaceCar
// Encapsulation: 	Class contains data + methods

