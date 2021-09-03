const assert = require("./assert");

const sqr = (number) => {
  return number * number;
}

console.log("Test sqr()");
assert(sqr(4) === 16);
