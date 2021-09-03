const assert = (value) => {
  if (!value) {
    throw new Error("Invalid value");
  }
};

console.log("Testing 1 === 1");
assert(1 === 1);
