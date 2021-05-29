let obj = {
  num: 10,
  func: function () {
    console.log("func", this.num);
  },
  obj2: {
    num2: 11,
    func2: function () {
      console.log("func2 ", this.num, this.num2);
    },
  },
  func3: function () {
    console.log("func3 ", this.num);
    setTimeout(function () {
      console.log("setTimeout ", this.num);
    }, 500);
  },
  func4: function () {
    console.log("func4 ", this.num);
    setTimeout(() => {
      console.log("setTimeout ", this.num);
    }, 500);
  },
  func5: function () {
    console.log("func5 ", this.num);
    setTimeout(
      function () {
        console.log("setTimeout ", this.num);
      }.bind(this),
      500
    );
  },
};

// dot notation
// console.log(obj.num);

obj.func();
obj.obj2.func2();

// after binding
const func2Bind = obj.obj2.func2.bind(obj);
func2Bind();

// the react problem
// obj.func3();
// obj.func4();
// obj.func5();

// import React from "react";

// const ComponentName = (props) => {
//   userClicked = () => {
//     console.log("user clicked");
//   };
//   return (
//     <React.Fragment>
//       <button onClick={userClicked}>Click here</button>
//     </React.Fragment>
//   );
// };

// export default ComponentName;

import React, { Component } from "react";

class Binding extends Component {
  constructor(props) {
    state = {
      prop1: "hi",
    };
    this.bind(this.userClicked);
  }
  userClicked = () => {
    console.log("user clicked");
  };
  render() {
    return (
      <div>
        <button onClick={userClicked}>Click here</button>
      </div>
    );
  }
}

export default Binding;
