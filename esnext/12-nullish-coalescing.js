// truthy/falsy values

console.log(Boolean(1));
console.log(!!1); // truthy
console.log(!!0); // falsy
console.log(!!"true");
console.log(!!"false");
console.log(!!"");
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

// nullish values

const favoriteFood = "";

console.log(favoriteFood || "cheeseburger");
console.log(favoriteFood != null ? favoriteFood : "cheeseburger");
console.log(favoriteFood ?? "cheesburger");

const numberOfKids = 0;

console.log(numberOfKids || "I don't know");
console.log(numberOfKids != null ? numberOfKids : "I don't know");
console.log(numberOfKids ?? "I don't know");
