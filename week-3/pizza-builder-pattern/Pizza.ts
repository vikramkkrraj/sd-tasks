export type Size = 'small' | 'medium' | 'large';

export class Pizza {
  constructor(
    public size: Size,
    public cheese: boolean,
    public pepperoni: boolean,
    public mushrooms: boolean
  ) {}

  public describe(): string {
    return `Pizza Details: Size: ${this.size} Cheese: ${this.cheese} Pepperoni: ${this.pepperoni} Mushrooms: ${this.mushrooms}`;
  }
}