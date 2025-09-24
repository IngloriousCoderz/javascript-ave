// // CommonJS
// const $ = require("jquery");
// module.exports = { $ };

// // ES6 Modules
// // default export
// import $ from "jquery";
// export default $;
// // named exports
// import { $, _ as lodash } from "jquery";
// export const $ = {};
// export const _ = {};

// $.get(
//   url,
//   (response) => {
//     console.log(response);
//   },
//   (error) => {
//     console.error(error);
//   }
// );

// console.log("Done.");

// // problem: callback hell (hadouken code)

// $.get(
//   url1,
//   (response1) => {
//     $.get(
//       url2,
//       (response2) => {
//         console.log(response1, response2);
//       },
//       (error2) => {
//         console.error(error2);
//       }
//     );
//   },
//   (error1) => {
//     console.error(error1);
//   }
// );

// // solving the callback hell

// const handleResponse2 = (response2) => {
//   console.log(response2);
// };

// const handleError2 = (error2) => {
//   console.error(error2);
// };

// const handleResponse1 = (response1) => {
//   $.get(url2, response2, handleError2);
// };

// const handleError1 = (error1) => {
//   console.error(error1);
// };

// $.get(url1, handleResponse1, handleError1);

// // problem: parallel requests

// const responses = [null, null];
// $.get(url1, (response1) => {
//   responses[0] = response1;
// });
// $.get(url2, (response2) => {
//   responses[1] = response2;
// });
// // this is NOT a solution
// setTimeout(() => {
//   console.log(responses);
// }, 1000);

// // solution to all of it: promises

// const promise = $.get(url1); // promise is pending
// promise.then((response1) => console.log(response1)); // promise was resolved/fulfilled
// promise.catch((error1) => console.error(error1)); // promise was rejected
// promise.finally(() => {}); // promise was settled

// // promise chaining

// $.get(url1)
//   .then((response1) => console.log(response1))
//   .catch((error1) => console.error(error1))
//   .finally(() => {});

// $.get(url1)
//   .then((response1) => {
//     $.get(url2)
//       .then((response2) => {
//         console.log(response2);
//       })
//       .catch((error2) => {
//         console.error(error2);
//       });
//   })
//   .catch((error1) => {
//     console.error(error1);
//   });

// $.get(url1)
//   .then((response1) => $.get(url2))
//   .then((response2) => console.log(response2))
//   .catch((error) => console.error(error))
//   .finally(() => {});

// Promise.all([$.get(url1), $.get(url2)])
//   .then(([response1, response2]) => console.log(response1, response2))
//   .catch((error) => console.error(error));

// Promise.allSettled([$.get(url1), $.get(url2)]).then(([result1, result2]) => {
//   if (result1.error || result2.error) {
//     console.error("Error!");
//     return;
//   }

//   console.log(result1, result2);
// });

// Promise.race([$.get(url1), $.get(url2)]).then((firstResult) => {
//   console.log(firstResult);
// });

const promise1 = fetch("https://www.swapi.tech/api/people/1/")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.error(error));

// fetch(url1, {
//   method: "POST",
//   body: JSON.stringify({}),
//   headers: {
//     "Content-Type": "application/json",
//   },
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// promisify

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Timeout!");
  }, 3000);
});

// promise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((message) => {
//     console.log(message);
//   });

Promise.race([promise1, promise2])
  .then((response) => console.log(response))
  .catch((timeoutError) => console.error(timeoutError));
