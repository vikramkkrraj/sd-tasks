import { Beverage } from './Beverage';

export class Espresso extends Beverage {
  getDescription(): string {
    return "Espresso";
  }

  getCost(): number {
    return 80;
  }
}
