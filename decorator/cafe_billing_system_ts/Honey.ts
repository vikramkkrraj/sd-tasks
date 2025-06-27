import { Beverage } from './Beverage';

export class Honey extends Beverage {
  constructor(private beverage: Beverage) {
    super();
  }

  getDescription(): string {
    return this.beverage.getDescription() + " + Honey";
  }

  getCost(): number {
    return this.beverage.getCost() + 20;
  }
}
