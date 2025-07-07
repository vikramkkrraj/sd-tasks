import { Book } from './Book';

const original = new Book("1984", "George Orwell", ["Excellent read!"]);
const cloned = original.clone();
cloned.reviews.push("Changed my life!");

console.log("Original Book Reviews:", original.reviews);
console.log("Cloned Book Reviews:", cloned.reviews);