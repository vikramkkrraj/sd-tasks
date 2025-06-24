import { ShippingStrategy } from './ShippingStrategy';

export class Shipping {
  constructor(private strategy: ShippingStrategy) {}

  calculate(): number {
    return this.strategy.calculate();
  }
}
