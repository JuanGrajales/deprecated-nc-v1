// object review

let obj = {
  prop1: ["value 1"],
};

console.log(obj);
// do you add a property to the object?
obj.email = "value 2";
console.log(obj);

{
  /* <input type="text" />; */
}
// you can also add a property using a variable
let userInput = "santana";
obj[userInput] = "value 3";
console.log(obj);

let account = {
  username: "",
  email: "",
};

let arr2 = [
  ["chairs", 20],
  ["tables", 10],
];

let objFromArr = {};

arr2.forEach((inventory) => {
  objFromArr[inventory[0]] = inventory[1];
});

console.log(objFromArr);
