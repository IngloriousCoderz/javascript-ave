const person = {
  firstName: "Matteo Antony",
  "last-name": "Mistretta",
  legs_number: 2,
};

// R - read/retrieve

// square bracket notation
console.log(person["firstName"]);

// dot notation
console.log(person.firstName);

// special characters: I'm forced to use SBN
console.log(person["last-name"]);

// property name is not known: I'm forced to use SBN
const propertyName = "firstName";
console.log(person[propertyName]);

console.log(person.legs_number);

// C - create

person.age = 42;
console.log(person);

// U - update

person.age = 43;
console.log(person);

// D - delete

person.age = undefined;
console.log(person, person.age);

delete person.age;
console.log(person, person.age);

// delete person['last-name']

// do not use the 'delete' keyword on arrays!

const numbers = [1, 2, 3, 4, 5];
delete numbers[2];
console.log(numbers, numbers.length);

// destructuring

{
  const { firstName: firstName, "last-name": lastName } = person;
  console.log(firstName, lastName);
}

{
  // when key name is equal to variable name, you can omit one
  const { firstName, "last-name": lastName } = person;
  console.log(firstName, lastName);
}

// object spread operator (rest)

{
  const { firstName, ...rest } = person;
  console.log(firstName, rest);
}

// immutable C

{
  const newPerson = { ...person, age: 42 };
  console.log(person, newPerson);
}

// immutable U

{
  const addedPerson = { ...person, age: 42 };
  const updatedPerson = { ...addedPerson, age: 43 };
  console.log(person, updatedPerson);
}

// immutable D

{
  const { firstName, ...deletedPerson } = person;
  console.log(person, deletedPerson);
}

// mixins

// mutable way: obj1 has mutated

{
  const obj1 = { a: 1, b: 2 };
  const obj2 = { c: 3, d: 4, b: 5 };

  // dest, ...sources
  const merged = Object.assign(obj1, obj2);
  console.log(obj1, obj2, merged);
}

// immutable way

{
  const obj1 = { a: 1, b: 2 };
  const obj2 = { c: 3, d: 4, b: 5 };

  // dest, ...sources
  const merged = Object.assign({}, obj1, obj2);
  console.log(obj1, obj2, merged);
}

{
  const obj1 = { a: 1, b: 2 };
  const obj2 = { c: 3, d: 4, b: 5 };

  const merged = { ...obj1, ...obj2 };
  console.log(obj1, obj2, merged);
}

// functions: rest parameters

{
  console.log(sum(2, 3));

  function sum(a, b) {
    return a + b;
  }
}

{
  console.log(sum([1, 2, 3, 4, 5]));

  function sum(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    return total;
  }
}

{
  console.log(sum(1, 2, 3, 4, 5));

  function sum(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    return total;
  }
}

// objects with behavior

{
  // 1. function expression - obsolete
  const dog = {
    name: "Arya",
    age: 10,
    bark: function () {
      console.log("Woof!", this.name);
    },
  };

  dog.bark();
}

{
  // 2. arrow function
  const dog = {
    name: "Arya",
    age: 10,
    bark: () => {
      console.log("Woof!", this.name); // 'this' is the global object!
    },
  };

  dog.bark();
}

{
  // 3. method
  const dog = {
    name: "Arya",
    age: 10,
    bark() {
      console.log("Woof!", this.name);
    },
  };

  dog.bark();
}
