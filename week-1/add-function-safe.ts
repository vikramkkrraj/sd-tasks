
function add(a: number | string, b: number | string): number {
  const numA = typeof a === "string" ? parseFloat(a) : a;
  const numB = typeof b === "string" ? parseFloat(b) : b;

  if (isNaN(numA) || isNaN(numB)) {
    throw new Error("Invalid number input.");
  }

  return numA + numB;
}

let result = add(10, "5");  // Works: Output will be 15
console.log(result);  

let another = add("10", "20");  // Works: Output will be 30
console.log(another);  

let invalid = add(10, "abc");  // Throws error: Invalid number input.
console.log(invalid);
