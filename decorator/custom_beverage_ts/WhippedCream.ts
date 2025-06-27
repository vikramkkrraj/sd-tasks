import { Beverage } from './Beverage';

export class WhippedCream extends Beverage {
  constructor(private beverage: Beverage) {
    super();
  }

  getDescription(): string {
    return this.beverage.getDescription() + " + WhippedCream";
  }

  getCost(): number {
    return this.beverage.getCost() + 15;
  }
}
