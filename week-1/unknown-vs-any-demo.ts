
let unknownValue: unknown = "Hello, TypeScript!";
let anyValue: any = "Hello, TypeScript!";

// 1. Calling .toUpperCase()
console.log(anyValue.toUpperCase()); // ✅ Allowed, but unsafe
// console.log(unknownValue.toUpperCase()); // ❌ Error: Object is of type 'unknown'

// ✅ Correct way to use unknown
if (typeof unknownValue === "string") {
  console.log(unknownValue.toUpperCase()); // ✅ Safe
}

// 2. Arithmetic with unknown
let myValue: unknown = 100;
// console.log(myValue + 1); // ❌ Error: Object is of type 'unknown'

// ✅ Correct way
if (typeof myValue === "number") {
  console.log(myValue + 1); // ✅ Safe
}
