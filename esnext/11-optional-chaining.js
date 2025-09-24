let person = {
  name: "Matteo Antony",
  legs: ["left", "right"],
  speak() {
    return "Hello world!";
  },
};

person = undefined;

console.log(typeof person !== "undefined" ? person.name : undefined);
console.log(person?.name);

person = {};
console.log(person.legs);
console.log(person.legs?.[0]);
console.log(person.speak?.());
