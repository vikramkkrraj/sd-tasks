
class Book {
  title: string;
  author: string;
  price: number;

  constructor(title: string, author: string, price: number) {
    this.title = title;
    this.author = author;
    this.price = price;
  }

  display(): void {
    console.log(`Title: ${this.title}, Author: ${this.author}, Price: ₹${this.price}`);
  }
}

// Create an instance
const book1 = new Book("The Alchemist", "Paulo Coelho", 499);

// Log all properties
book1.display();  // Output: Title: The Alchemist, Author: Paulo Coelho, Price: ₹499
