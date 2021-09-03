const boolean = (value) => {
  if (!value) {
    throw new Error("False");
  }
};

console.log("Testing true");
boolean(0);
