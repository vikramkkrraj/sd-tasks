export class Book {
  constructor(
    public title: string,
    public author: string,
    public reviews: string[]
  ) {}

  public clone(): Book {
    // Deep copy of reviews
    const copiedReviews = [...this.reviews];
    return new Book(this.title, this.author, copiedReviews);
  }

  public describe(): string {
    return `Title: ${this.title}, Author: ${this.author}, Reviews: ${this.reviews.join('; ')}`;
  }
}