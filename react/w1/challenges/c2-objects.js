// Code Challenge
// Described below are 4 items. Turn each of them into an object. The first one has been completed for you as an example. Each object has at least one property and a method. A method call is already written for you as a test for each object. For the fifth item, you will create your own object.

// A rabbit with the property "color" set to the value of "white". A checkWatch() method will result in a console.log that says "A white rabbit checks his watch and exclaims 'I'm late!'" -- the color "white" in this message should be referenced dynamically from the property.
// A spaceship with the property "name". Name the spaceship whatever you wish. A launch() method will result in a JavaScript alert that says, "You have launched the spaceship (your spaceship name here, referencing the name property)!";
// A shopping cart with a property "contents" initialized to an empty array. A method addItem(item) will add an item to the contents array.
// A lever with the property "stamp" set to the string "ACME". Write a pull() method for it and console.log: "An anvil stamped (reference the stamp property here dynamically) drops on your head."
// Create your own object and give it at least one property and at least one method. Then call one of the methods you created. Use your imagination! Bonus challenge: Give one of the methods at least one parameter, and use the argument passed into that parameter within the method body.

// Bonus Challenge:
// Add to the shopping cart item a removeItem(item) method that takes a string as its argument, then checks for if a string matching that argument exists in the contents array. If so, it should remove it and console.log a success message and the new value of the contents array. If not, it should console.log an error message saying that the item is not in the cart. Test the method by calling it like this: cart.removeItem("laptop");

// 1 - white rabbit
const rabbit = {
  color: "white",
  checkWatch() {
    console.log(
      `A ${this.color} rabbit checks his watch and exclaims, 'I\'m late!'`
    );
  },
};
rabbit.checkWatch();

// 2 - spaceship
const spaceship = {
  // your code here - uncomment the spaceship.launch() line below when done
};
// spaceship.launch();

// 3 - shopping cart
const cart = {
  // your code here - uncomment the two lines below this object when done
};
//cart.addItem("laptop");
//console.log("The cart contains:", cart.contents);

// 4 - lever
// your code here - uncomment the line below when done
//lever.pull();

// 5 - Your object here
