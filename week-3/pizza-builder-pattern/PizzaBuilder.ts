import { Pizza, Size } from './Pizza';

export class PizzaBuilder {
  private size: Size = 'medium';
  private cheese: boolean = false;
  private pepperoni: boolean = false;
  private mushrooms: boolean = false;

  public setSize(size: Size): PizzaBuilder {
    this.size = size;
    return this;
  }

  public addCheese(): PizzaBuilder {
    this.cheese = true;
    return this;
  }

  public addPepperoni(): PizzaBuilder {
    this.pepperoni = true;
    return this;
  }

  public addMushrooms(): PizzaBuilder {
    this.mushrooms = true;
    return this;
  }

  public build(): Pizza {
    return new Pizza(this.size, this.cheese, this.pepperoni, this.mushrooms);
  }
}