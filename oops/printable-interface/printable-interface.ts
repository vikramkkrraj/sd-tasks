interface Printable {
  print(): void;
}

class TextDocument implements Printable {
  print(): void {
    console.log("Printing Document...");
  }
}

class Photo implements Printable {
  print(): void {
    console.log("Printing Photo...");
  }
}

// Create instances
const doc = new TextDocument();
const pic = new Photo();

// Store in an array of type Printable[]
const printItems: Printable[] = [doc, pic];

// Call print() on each
for (const item of printItems) {
  item.print();
}
