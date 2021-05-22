// object destructuring

let obj = {
  fname: "Juan",
  age: 21,
  stack: "MERN",
};

// let fname = obj.fname;
// let age = obj.age;
// let stack = obj.stack;

// let { fname } = obj;
// let { age } = obj;
// let { stack } = obj;

// let { fname, age, stack } = obj;
// console.log(fname, age, stack);

// destructuring params of functions

function func(objParam) {
  console.log(objParam);
}

// func(obj);

function func2({ fname, age, stack }) {
  console.log("property 1: " + fname);
  console.log("property 2: " + age);
  console.log("property 3: " + stack);
}

// func2(obj);
