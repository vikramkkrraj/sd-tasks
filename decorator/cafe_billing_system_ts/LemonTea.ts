import { Beverage } from './Beverage';

export class LemonTea extends Beverage {
  getDescription(): string {
    return "LemonTea";
  }

  getCost(): number {
    return 40;
  }
}
