import { Beverage } from './Beverage';

export class Coffee extends Beverage {
  getDescription(): string {
    return "Coffee";
  }

  getCost(): number {
    return 50;
  }
}
