// function declartion superpower: hoisting
// hi();
function hi() {
  console.log("function declaration");
}

const hiArrow = () => {
  console.log("arrow function");
};
// hiArrow();

// arrow function with explicit return
function hi2(name) {
  return { message: name };
}
console.log(hi2("Juan"));

const add = (num1, num2) => {
  return num1 + num2;
};
// console.log(add(1, 2));

// arrow function without explicit return
function hi3(name) {
  return "hello";
}

// const hi3Arrow = () => {
//   return "hello with arrow function"
// };

const hi3Arrow = () => "hello with arrow function";

// console.log(hi3());
// console.log(hi3Arrow());

// arrow function without return and without parenthesis for parameters

function hi4(name) {
  return "hello";
}

// const hi4Arrow = name => "hello";

function returnObj(prop, value) {
  return { [prop]: value };
}
console.log(returnObj("name", "Juan"));
