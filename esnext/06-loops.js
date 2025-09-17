const numbers = [1, 2, 3, 4, 5];
const person = { firstName: "Matteo Antony", lastName: "Mistretta", age: 42 };

{
  // index-based, old style
  for (let i = 0; i < numbers.length; i++) {
    const item = numbers[i];
    console.log(item, i);
  }

  // for-in, on objects, old style
  for (const key in person) {
    if (person.hasOwnProperty(key)) {
      const value = person[key];
      console.log(value, key);
    }
  }

  // for-in on arrays, WRONG
  for (const index in numbers) {
    const value = numbers[index];
    console.log(value, index);
  }

  // for-of, only on arrays
  for (const item of numbers) {
    const index = numbers.indexOf(item);
    console.log(item, index);
  }
}

// iterating on an object - new style

{
  const keys = Object.keys(person);
  for (const key of keys) {
    console.log(key, person[key]);
  }

  const values = Object.values(person);
  for (const value of values) {
    console.log(value);
  }

  const entries = Object.entries(person);
  for (const [key, value] of entries) {
    console.log(key, value);
  }
}

// ARRAY METHODS
