
function sumOfEvenNumbers(numbers: number[]): number {
  let sum = 0;
  for (const num of numbers) {
    if (num % 2 === 0) {
      sum += num;
    }
  }
  return sum;
}

// Example usage
console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6]));  // Output: 12
console.log(sumOfEvenNumbers([1, 3, 5]));           // Output: 0
