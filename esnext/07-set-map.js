const numbers = [1, 2, 2, 3, 4, 3, 5];
const noDuplicated = [...new Set(numbers)]; // idiom
console.log(noDuplicated, numbers);

const person = new Map();
person.set("firstName", "Matteo Antony");
person.set(2, "legs");
console.log(person, Object.fromEntries(person));
