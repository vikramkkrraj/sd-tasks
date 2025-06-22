
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello, my name is \${this.name} and I am \${this.age} years old.\`;
  }

  static isAdult(age: number): boolean {
    return age >= 18;
  }
}

// Example usage
const person1 = new Person("Alice", 25);
console.log(person1.greet());               // Output: Hello, my name is Alice and I am 25 years old.
console.log(Person.isAdult(person1.age));   // Output: true

const person2 = new Person("Bob", 15);
console.log(person2.greet());               // Output: Hello, my name is Bob and I am 15 years old.
console.log(Person.isAdult(person2.age));   // Output: false
