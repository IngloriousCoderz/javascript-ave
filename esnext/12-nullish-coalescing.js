// falsy values

console.log(Boolean(1));
console.log(!!1); // truthy
console.log(!!0); // falsy
console.log(!!"true");
console.log(!!"false");
console.log(!!"");
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

const favoriteFood = "";

console.log(favoriteFood || "cheeseburger");
console.log(favoriteFood != null ? favoriteFood : "cheeseburger");
console.log(favoriteFood ?? "cheesburger");
