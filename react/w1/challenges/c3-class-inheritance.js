// Challenge 1
// Go to line 31, where the woodDragon object is instantiated using the child class of Dragon. Below it, write the code that will call the roar() and fly() methods on the woodDragon object.
// Challenge 2
// Add a new method to the Dragon class that console.logs a behavior of the dragon. This behavior can be anything you wish - use your imagination. Use at least one object property (such as color, element, or type) in the method. Below where you called the roar() and fly() methods on the woodDragon object, also call this new method that you just created.
// Challenge 3
// Write a line of code that will instantiate a new werewolf object with the variable name werewolf1, using the Werewolf class. Pass in the type of "werewolf" and a color of your choice. Then write a line of code that will call the howl() method on this new object.
// Challenge 4
// Create an entirely new class as a child class of the Monster class. It should have the type and color properties of the Monster class, but also add one more property of its own that the Monster class does not have. Also give it a method of its own, just as the Dragon class has the fly() method and the Werewolf class has the howl() method. Create a new object using this class. Then call the method you created on that object.

class Monster {
  constructor(type, color) {
    this.type = type;
    this.color = color;
    this.isScary = true;
  }
  roar() {
    console.log(`The ${this.color} ${this.type} lets out a tremendous roar!`);
  }
}

class Dragon extends Monster {
  constructor(type, color, element) {
    super(type, color);
    this.element = element;
  }
  fly() {
    console.log(
      `The ${this.color} ${this.element} ${this.type} flaps its wings and begins to fly.`
    );
  }
}

class Werewolf extends Monster {
  constructor(type, color) {
    super(type, color);
  }
  howl() {
    console.log(`The ${this.type} howls loudly.`);
  }
}

const woodDragon = new Dragon("dragon", "brown", "wood");
