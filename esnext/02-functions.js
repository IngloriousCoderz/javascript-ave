// 1. function declaration

{
  // function hoisting
  console.log(sum(2, 3));

  function sum(a, b) {
    return a + b;
  }
}

// 2. function expression - obsolete

{
  // no function hoisting

  const sum = function (a, b) {
    // anonymous function
    return a + b;
  };

  console.log(sum(2, 3));
}

// 3. arrow function - new

{
  // no function hoisting

  const sum = (a, b) => {
    // anonymous function
    return a + b;
  };

  console.log(sum(2, 3));
}

function contextPreservation() {
  // Advantage 1: context preservation

  const html =
    "<html><head></head><body><button>Click me!</button></body></html>";
  const button = document.querySelector("button");
  console.log(this); // window

  // 1. this === event.target
  button.onclick = function (event) {
    console.log(this, event.target); // button, button
  };

  // 2. auxiliary variable
  const self = this;
  button.onclick = function (event) {
    console.log(self, event.target); // window, button
  };

  // 3. function binding
  button.onclick = function (event) {
    console.log(this, event.target); // window, button
  }.bind(window);

  // 4. arrow function - automatic binding
  button.onclick = (event) => {
    console.log(this, event.target); // window, button
  };

  // 5. arrow function - concise version
  button.onclick = (event) => console.log(this, event.target); // window, button

  button.addEventHandler("click", (event) => console.log(this, event.target)); // new event handler
}

{
  // conciseness

  const sum = (a, b) => a + b;

  console.log(sum(2, 3));
}

// 1. Always use function declarations
// 2. For event handlers, you may use arrow functions

{
  function sum(a, b) {
    if (typeof a === undefined) {
      a = 0;
    }
    if (typeof b === undefined) {
      b = 0;
    }
    return a + b;
  }
}

{
  function sum(a = 0, b = 0) {
    return a + b;
  }
}
