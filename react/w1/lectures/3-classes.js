// class syntax
class ClassName {
  constructor(param1, param2 = "hi") {
    this.property1 = param1;
    this.property2 = param2;
    // make as many properties as you want
  }

  // add methods here
  method1() {
    // how can you print the properties of the object here?
    console.log("method1");
  }
}

let objFromClass = new ClassName("test");

// monopoly
let player1 = {
  name: "Michael",
  money: "100000",
  houses: [],
  roll() {
    console.log(`rolling dice`);
  },
};

let player2 = {
  name: "Kristen",
  money: "100000",
  houses: [],
  roll() {
    console.log(`rolling dice`);
  },
};

let player3 = {
  name: "Katherine",
  money: "100000",
  houses: [],
  roll() {
    console.log(`rolling dice`);
  },
};

let player4 = {
  name: "Serena",
  money: "100000",
  houses: [],
  roll() {
    console.log(`rolling dice`);
  },
};

class Player {
  constructor(name, money, houses) {
    this.name = name;
    this.money = money;
    this.houses = houses;
  }

  roll() {
    console.log(`Rolling dice`);
  }

  balance() {
    console.log(`${this.name} has ${this.money} amount of money left.`);
  }
}

let p1 = new Player("Michael", 100000, []);
let p2 = new Player("Katherine", 100000, []);
let p3 = new Player("Serena", 100000, []);
let p4 = new Player("Kristen", 100000, []);

// OOP: APIE
// Abstraction
// Encapsulation
// Inheritance
// Polymorphism

// inheritance
class Vehicle {
  constructor(type = "Car") {
    this.type = type;
    this.motorTypeCapacity = "2.4L";
  }

  getType() {
    console.log("car");
  }
}

class Motorcycle extends Vehicle {
  constructor(type = "motorcycle", numWheels = 2) {
    super(type);
    this.numWheels = numWheels;
  }

  getType() {
    console.log("Motorcycle");
  }
}

let vehicle2 = new Vehicle();
// vehicle2.getType();
let bike = new Motorcycle();
// bike.getType();
