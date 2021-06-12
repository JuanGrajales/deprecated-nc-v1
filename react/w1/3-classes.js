// class syntax
class ClassName {
  // PascalCase
  constructor(param1, param2 = "hi") {
    this.greeting = param1;
    this.property2 = param2;

    // make as many properties as you want
  }

  // add methods here
  method1() {
    // how can you print the properties of the object here?
    console.log("try 1", this.greeting);
  }
}

let objFromClass1 = new ClassName("hello", "second param");
let objFromClass2 = new ClassName("hi", "second param");
let objFromClass3 = new ClassName("test", "second param");

// console.log(objFromClass1);
// objFromClass1.method1();
// objFromClass2.method1();

// monopoly
let player1 = {
  name: "Michael",
  money: "100000",
  houses: [],
  roll() {
    console.log(`rolling dice`);
  },
  method1() {
    console.log("another one");
  },
};

let player2 = {
  name: "Kristen",
  money: "100000",
  houses: [],
  roll() {
    console.log(`rolling dice`);
  },
  method1() {
    console.log("another one");
  },
};

let player3 = {
  name: "Katherine",
  money: "100000",
  houses: [],
  roll() {
    console.log(`rolling dice`);
  },
  method1() {
    console.log("another one");
  },
};

let player4 = {
  name: "Serena",
  money: "100000",
  houses: [],
  roll() {
    console.log(`rolling dice`);
  },
  method1() {
    console.log("another one");
  },
};

class Player {
  constructor(name, money, houses, battleCry = "wazaaaaaaa") {
    this.name = name;
    this.money = money;
    this.houses = houses;
    this.battleCry = battleCry;
  }

  roll() {
    console.log(`Rolling dice`);
  }

  balance() {
    console.log(`${this.name} has ${this.money} amount of money left.`);
  }

  method1() {
    console.log("another one");
  }
}

let p1 = new Player("Michael", 100000, []);
let p2 = new Player("Katherine", 100000, []);
let p3 = new Player("Serena", 100000, []);
let p4 = new Player("Kristen", 100000, []);

// console.log(p1);
// What is Object Oriented Programming?
// four pillars of OOP
// OOP: APIE
// Abstraction
// Encapsulation
// Inheritance
// Polymorphism

// inheritance
class Vehicle {
  constructor(type = "Car", motorCapacity, prop1, prop2) {
    this.type = type;
    this.motorCapacity = motorCapacity;
    this.prop1 = prop1;
    this.prop2 = prop2;
  }

  getType() {
    console.log("car");
  }
}

class Motorcycle extends Vehicle {
  constructor(type = "motorcycle", numWheels = 2) {
    super(type, "3.6", undefined, "value2");
    this.numWheels = numWheels;
  }

  getType() {
    console.log("Motorcycle");
  }
}

let vehicle2 = new Vehicle();
// vehicle2.getType();
let bike = new Motorcycle();

console.log(bike);
bike.getType();
