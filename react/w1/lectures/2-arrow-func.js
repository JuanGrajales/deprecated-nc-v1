// function declartion superpower: hoisting
function hi() {
  console.log("function declaration");
}
// hi();

const hiArrow = () => {
  console.log("arrow function");
};
// hiArrow();

// arrow function with explicit return
function hi2(name) {
  return { message: name };
}

const hi2Arrow = () => {
  return { message: name };
};

// arrow function without explicit return
function hi3(name) {
  return "hello";
}

const hi3Arrow = (name) => "hello";

// arrow function without return and without parenthesis for parameters

function hi4(name) {
  return "hello";
}

// const hi4Arrow = name => "hello";
