// var a;

// console.log("Hello world!");

// var a; // variable declaration
// a = 1; // variable assignment

// var a = 1; // variable declaration + assignment

// // variable hoisting

// // block scoping
// {
//   a = 1;
// }

// function func() {
//   var a = 1;
//   b = 2; // auto-definition as global in non-strict mode
// }

// let a = 2;

// {
//   let a = 2;
// }

// function func() {
//   b = 2; // gives an error in strict mode
// }

// const c = 3;
// c = 4; // gives an error

// const d;

let num = 1;
console.log(typeof num);
let obj = {};
console.log(typeof obj);
let arr = [];
console.log(typeof arr, Array.isArray(arr));
let nil = null;
console.log(typeof nil, nil == null);
let undef = undefined;
console.log(typeof undef);

console.log(null == null);
console.log(undefined == undefined);
console.log(null == undefined);
console.log(null === undefined); // strict equal operator
console.log(1 == "1");
console.log(1 === "1");

let notANumber = NaN; // camel case
console.log(typeof notANumber, Number.isNaN(notANumber));
let infinity = Infinity;
console.log(typeof infinity, Number.isFinite(infinity));

let shouldBeNaN = 1 / 0;
console.log(shouldBeNaN); // returns Infinite, mathematically wrong!

const PI = 3.14;
const PRIMARY_COLOR = "#b543df"; // upper snake case

const WORKING_DAYS_IN_A_WEEK = 5;

for (let i = 0; i < WORKING_DAYS_IN_A_WEEK; i++) {
  // magic number
  console.log(i);
}

const a = 1;
const age = 2025 - 1982;
