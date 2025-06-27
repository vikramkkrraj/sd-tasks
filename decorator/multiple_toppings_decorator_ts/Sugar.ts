import { Beverage } from './Beverage';

export class Sugar extends Beverage {
  constructor(private beverage: Beverage) {
    super();
  }

  getDescription(): string {
    return this.beverage.getDescription() + " + Sugar";
  }

  getCost(): number {
    return this.beverage.getCost() + 10;
  }
}
