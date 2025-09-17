const singleQuotes = 'Hello "world", how are you?';
const doubleQuotes = "Hello 'world', how are you?";

const concatenation = singleQuotes + doubleQuotes;

const templateLiteral = `I can use 'single' and "double" quotes
They are multiline too!
We can interpolate ${"variables".toUpperCase()}!!!`;
console.log(templateLiteral);

// const html = '\n<p class="paragraph">\n\s\shello world!\n</p>'

const html = `
<p class="paragraph">
  hello world!
</p>`;
console.log(html);

const userId = 1;
const url = "/api/users/" + userId + "/profile";
const betterUrl = `/api/users/${userId}/profile`;
console.log(url, betterUrl);

const firstCharacter = url[0];
const lastCharacter = url[url.length - 1];
console.log(firstCharacter, lastCharacter);

url[2] = "x";
console.log(url); // strings are immutable

console.log(url.slice(0, 2) + "x" + url.slice(3));
console.log(`${url.slice(0, 2)}x${url.slice(3)}`);

const prefix = url.slice(0, 2);
const suffix = url.slice(3);

console.log(prefix + "x" + suffix);
console.log(`${prefix}x${suffix}`);
