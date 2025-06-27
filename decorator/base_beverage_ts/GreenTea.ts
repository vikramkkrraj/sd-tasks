import { Beverage } from './Beverage';

export class GreenTea extends Beverage {
  getDescription(): string {
    return "Green Tea";
  }

  getCost(): number {
    return 40;
  }
}
