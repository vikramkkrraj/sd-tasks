
function isEvenOrOdd(num: number): string {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// Example usage
console.log(isEvenOrOdd(4));  // Output: "Even"
console.log(isEvenOrOdd(7));  // Output: "Odd"
