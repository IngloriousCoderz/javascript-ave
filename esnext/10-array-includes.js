const numbers = [1, 2, 3, 4, 5];

console.log(numbers.includes(2));

const objects = [{}, {}, {}];

console.log(objects.includes({}));
console.log(objects.includes(objects[1]));

const httpStatus = 200;

if (httpStatus === 200 || httpStatus === 201 || httpStatus === 204) {
  console.log("Ok!");
} else if (httpStatus === 301 || httpStatus === 302 || httpStatus === 304) {
  console.log("Modified/redirected");
}

switch (httpStatus) {
  case 200:
  case 201:
  case 204:
    console.log("Ok!");
    break;

  case 301:
  case 302:
  case 304:
    console.log("Modified/redirected");
    break;
}

const SUCCESS_CODES = [200, 201, 204];
const MODIFIED_CODES = [301, 302, 304];

if (SUCCESS_CODES.includes(httpStatus)) {
  console.log("Ok!");
} else if (MODIFIED_CODES.includes(httpStatus)) {
  console.log("Modified/redirected");
}

const happy = true;
const youKnowIt = true;
const action = happy && youKnowIt ? "clap your hands" : "cry";
console.log(action);

const otherAction = happy ? (youKnowIt ? "clap your hands" : "smile") : "cry";
