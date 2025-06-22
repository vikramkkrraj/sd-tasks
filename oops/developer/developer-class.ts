
class Person {
  walk(): void {
    console.log("Walking...");
  }
}

interface Coder {
  code(): void;
}

class Developer extends Person implements Coder {
  code(): void {
    console.log("Coding...");
  }
}

// Example usage
const dev = new Developer();
dev.walk(); // Output: Walking...
dev.code(); // Output: Coding...
