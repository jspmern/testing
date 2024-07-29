//1.
export let sum = (a, b) => {
  return a + b;
};

//2. function with edge case
export function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Inputs must be numbers");
  }
  return a + b;
}
